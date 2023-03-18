import React, { useRef, useState, useEffect } from 'react';

function VideoChat() {
  const [connected, setConnected] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    // 获取 video 播放器
    const localVideo = localVideoRef.current;
    const remoteVideo = remoteVideoRef.current;

    // 设置 WebRTC 配置
    const configuration = {
      // 该地址由 Google 提供，也可自行搭建
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };

    // 创建 Peer Connection 实例
    peerConnection.current = new RTCPeerConnection(configuration);

    // 获得本地媒体流并将其传递给视频播放器
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(localStream => {
        localVideo.srcObject = localStream;

        // 添加媒体流到本地 PeerConnection
        localStream.getTracks().forEach(track => {
          peerConnection.current.addTrack(track, localStream);
        });
      })
      .catch(error => console.log(error));

    // 处理远程媒体流
    peerConnection.current.ontrack = event => {
      remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.current.onicecandidate = event => {
      if (event.candidate) {
        socket.current.emit('ice-candidate', event.candidate);
      }
    };

    // 通过 Socket.IO 交换媒体流
    socket.current = io.connect('http://localhost');
    socket.current.on('connect', () => setConnected(true));

    socket.current.on('offer', async offer => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(new RTCSessionDescription(answer));
      socket.current.emit('answer', answer);
    });

    socket.current.on('candidate', async candidate => {
      await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  // 处理连接远端媒体流
  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // 发送 offer 并向远程PeerConnection提供现有连接
    if (value) {
      peerConnection.current.createOffer()
        .then(offer => {
          return peerConnection.current.setLocalDescription(new RTCSessionDescription(offer));
        })
        .then(() => {
          socket.current.emit('offer', peerConnection.current.localDescription);
        });
    } else {
      socket.current.emit('hangup');
    }
  };

  return (
    <div>
      <h2>本地视频</h2>
      <video ref={localVideoRef} autoPlay playsInline />
      <br />
      <h2>远端视频</h2>
      <video ref={remoteVideoRef} autoPlay playsInline />
      <br />
      <label>
        <input type="checkbox" onChange={handleInputChange} />
        连接到其他用户
      </label>
      {connected ? '已连接' : '未连接'}
    </div>
  );
}

export default VideoChat;
