import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as l}from"./app-YH5L7WbK.js";const n={};function h(t,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h3 id="promise-是什么" tabindex="-1"><a class="header-anchor" href="#promise-是什么"><span>Promise 是什么？</span></a></h3><p>Promise 是 JavaScript 中一种用于处理异步操作的对象。它代表了一个异步操作的最终完成或失败，并且可以返回其结果值或错误原因。</p><h3 id="解决了什么问题" tabindex="-1"><a class="header-anchor" href="#解决了什么问题"><span>解决了什么问题？</span></a></h3><p>Promise 主要解决了传统回调函数（callback）所带来的问题，尤其是在处理多个异步操作时出现的回调地狱（callback hell）情况。传统的回调函数嵌套结构使得代码难以阅读、理解和维护，而 Promise 则通过提供一种更加优雅的方式来处理异步操作，使得代码结构更加清晰、易于理解和维护。</p><h3 id="promise-的三种状态是什么-它们分别是什么意思" tabindex="-1"><a class="header-anchor" href="#promise-的三种状态是什么-它们分别是什么意思"><span>Promise 的三种状态是什么？它们分别是什么意思？</span></a></h3><p>Pending（进行中）：初始状态，表示操作尚未完成，也没有失败。 Fulfilled（已完成）：表示操作成功完成。 Rejected（已拒绝）：表示操作失败。</p><h3 id="你能列举一些-promise-的方法吗-它们各自的作用是什么" tabindex="-1"><a class="header-anchor" href="#你能列举一些-promise-的方法吗-它们各自的作用是什么"><span>你能列举一些 Promise 的方法吗？它们各自的作用是什么？</span></a></h3><p>Promise.resolve(value): 创建一个已解决的 Promise 对象，并返回指定的值。如果该值是一个 Promise，则直接返回这个 Promise。</p><p>Promise.reject(reason): 创建一个已拒绝的 Promise 对象，并返回一个给定的 reason（拒绝原因）。</p><p>Promise.prototype.then(onFulfilled, onRejected): 添加解决（fulfilled）和拒绝（rejected）状态的回调函数到 Promise 对象，并返回一个新的 Promise 对象。onFulfilled 是当 Promise 解决时执行的函数，onRejected 是当 Promise 拒绝时执行的函数。</p><p>Promise.prototype.catch(onRejected): 添加一个拒绝状态的回调函数到 Promise 对象，用于捕获 Promise 中的错误。</p><p>Promise.prototype.finally(onFinally): 添加一个在 Promise 对象无论状态如何都会执行的回调函数，无论是解决还是拒绝，都会执行 onFinally 函数。</p><p>Promise.all(iterable): 将多个 Promise 实例包装成一个新的 Promise 实例。当所有的 Promise 实例都解决（fulfilled）时，返回的 Promise 实例也会解决，且返回的结果是一个包含所有 Promise 结果的数组；当任何一个 Promise 实例拒绝（rejected）时，返回的 Promise 实例也会拒绝，且返回的是第一个拒绝的 Promise 的结果。</p><p>Promise.race(iterable): 将多个 Promise 实例包装成一个新的 Promise 实例。当其中任何一个 Promise 实例解决（fulfilled）或拒绝（rejected）时，返回的 Promise 实例也会解决或拒绝，且返回结果与首个完成的 Promise 实例的结果相同。</p><p>Promise.allSettled(iterable) (ES2020): 将多个 Promise 实例包装成一个新的 Promise 实例。该方法会等待所有的 Promise 实例都已解决（无论成功还是失败）后再返回。返回的结果是一个数组，每个元素表示对应的 Promise 实例的结果</p><h3 id="promise-的链式调用-它是如何实现的" tabindex="-1"><a class="header-anchor" href="#promise-的链式调用-它是如何实现的"><span>Promise 的链式调用？它是如何实现的？</span></a></h3><p>Promise 的链式调用是通过在 then() 方法中返回新的 Promise 实例来实现的，每个 then() 方法都会返回一个新的 Promise 对象，从而实现对异步操作的串联。</p><p>在链式调用中，每个 then() 方法都会返回一个新的 Promise 对象，这个 Promise 对象的状态取决于 then() 方法中的回调函数的执行结果：如果回调函数中返回一个值（非 Promise），则新的 Promise 对象将会进入解决状态，并以该值作为解决值；如果回调函数中抛出异常或返回一个拒绝的 Promise，则新的 Promise 对象将会进入拒绝状态，并以抛出的异常或拒绝的 Promise 的结果作为拒绝原因；如果回调函数中返回一个解决的 Promise，则新的 Promise 对象将会与该 Promise 对象状态保持一致。这种链式调用的机制使得我们可以通过串联多个 then() 方法来依次处理异步操作的结果，而不必嵌套多层回调函数，从而避免了传统回调函数中的回调地狱问题。</p><h3 id="promise-的错误处理" tabindex="-1"><a class="header-anchor" href="#promise-的错误处理"><span>Promise 的错误处理</span></a></h3><ol><li><p>如何捕获 Promise 中的错误吗？ 可以通过 catch() 方法或在 then() 方法的第二个参数中传入回调函数来捕获 Promise 中的错误。另外，也可以在链式调用的末尾通过 catch() 方法来捕获整个链中任何一个 Promise 实例的错误。</p></li><li><p>有哪些方法可以处理 Promise 的错误？ 使用 catch() 方法：catch() 方法用于捕获 Promise 中的错误，并进行相应的处理。 在 then() 方法中传入第二个参数作为错误处理函数：可以在 then() 方法的第二个参数中传入一个回调函数，用于处理 Promise 中的错误。 在链式调用的末尾使用 catch() 方法：在链式调用的末尾通过 catch() 方法来捕获整个链中任何一个 Promise 实例的错误。</p></li><li><p>Promise 的错误会传播到哪里？ Promise 的错误会沿着 Promise 链向上传播，直到被捕获和处理。如果 Promise 链中的某个 Promise 实例发生了拒绝（rejected），且没有被任何 catch() 方法或在 then() 方法中传入的错误处理函数捕获和处理，那么错误将会向上传播，直到被最近的 catch() 方法捕获，或者直到达到全局的未捕获错误处理函数（如浏览器中的 window.onerror）。</p></li></ol><h3 id="promise-和其他异步编程模式的比较" tabindex="-1"><a class="header-anchor" href="#promise-和其他异步编程模式的比较"><span>Promise 和其他异步编程模式的比较：</span></a></h3><ol><li>Promise 与回调函数相比有哪些优势？ Promise 可以更清晰地表达异步操作的状态和结果，使代码结构更加清晰和易读。 Promise 可以避免回调地狱（callback hell）的问题，通过链式调用来处理多个异步操作，代码结构更加扁平化。 Promise 提供了统一的错误处理机制，可以更方便地捕获和处理异步操作中的错误。</li><li>Promise 与 async/await 相比有什么不同？ async/await 是基于 Promise 的语法糖，使得异步操作的编写更加像同步代码，更加直观和易读。 async/await 可以更方便地处理 Promise 的链式调用，避免了使用 then() 方法和 catch() 方法的复杂性。 async/await 可以更方便地使用 try-catch 语句来捕获和处理异步操作中的错误，使得错误处理更加简洁和易用。</li></ol><h3 id="进阶问题" tabindex="-1"><a class="header-anchor" href="#进阶问题"><span>进阶问题：</span></a></h3><ol><li><p>你了解 Promise 的实现原理吗？可以简要描述一下吗？ Promise 的实现原理涉及到状态管理、回调函数的注册和调用、错误处理等方面。简单来说，Promise 内部维护了一个状态（pending、fulfilled、rejected）以及相应的结果值或错误原因。当 Promise 被创建时，它处于 pending 状态，可以通过 resolve() 方法将其状态转变为 fulfilled，或者通过 reject() 方法将其状态转变为 rejected。Promise 通过链式调用的方式来处理异步操作，每个 then() 方法都会返回一个新的 Promise 对象，从而实现对异步操作的串联。在执行过程中，Promise 会依次执行注册的回调函数，并根据回调函数的执行结果来更新 Promise 的状态和结果值。另外，Promise 还提供了错误处理机制，可以通过 catch() 方法来捕获 Promise 中的错误。至于具体的实现细节，则可以参考各种 Promise 的 polyfill 或实现库。</p></li><li><p>你知道 Promise 的终止（Cancellation）机制吗？如何实现 Promise 的取消？ 在标准的 Promise 规范中，并没有提供原生的 Promise 取消机制。因为一旦创建了 Promise，它就会立即执行，无法取消。但可以通过一些特殊的实现来实现 Promise 的取消。一种常见的做法是，通过控制 Promise 中的异步操作，在外部维护一个变量来标识是否需要取消 Promise 的执行，当取消时，可以通过一些手段来终止异步操作的执行，并将 Promise 的状态设置为取消状态，然后根据需要调用相应的回调函数或执行后续的处理。另外，还可以借助于一些第三方库或实现来实现 Promise 的取消机制，例如使用 AbortController 来取消 fetch 请求等。</p></li></ol><h3 id="你在项目中是如何使用-promise-的-能分享一些具体的场景吗" tabindex="-1"><a class="header-anchor" href="#你在项目中是如何使用-promise-的-能分享一些具体的场景吗"><span>你在项目中是如何使用 Promise 的？能分享一些具体的场景吗？</span></a></h3><h3 id="手写一个-promise" tabindex="-1"><a class="header-anchor" href="#手写一个-promise"><span>手写一个 promise</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MyPromise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  constructor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //初始状态为 pending</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pending&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//默认pending fulfilled rejected</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 用于保存成功时的值</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> undefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 用于保存失败时的原因</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">reason</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> undefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 用于保存成功回调函数列表</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">onResolvedCallbacks</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [];</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 用于保存失败回调函数列表</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">onRejectedCallbacks</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">     const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> resolve</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pending&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;fulfilled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">onResolvedCallbacks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">callback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> callback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  reject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">reason</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pending&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">state</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;rejected&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">reason</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> reason</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">onRejectedCallbacks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">callback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> callback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  all</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const k=s(n,[["render",h],["__file","promise.html.vue"]]),d=JSON.parse('{"path":"/code/website/javascript/promise.html","title":"如何理解promise","lang":"zh-CN","frontmatter":{"title":"如何理解promise","tag":"js"},"headers":[{"level":3,"title":"Promise 是什么？","slug":"promise-是什么","link":"#promise-是什么","children":[]},{"level":3,"title":"解决了什么问题？","slug":"解决了什么问题","link":"#解决了什么问题","children":[]},{"level":3,"title":"Promise 的三种状态是什么？它们分别是什么意思？","slug":"promise-的三种状态是什么-它们分别是什么意思","link":"#promise-的三种状态是什么-它们分别是什么意思","children":[]},{"level":3,"title":"你能列举一些 Promise 的方法吗？它们各自的作用是什么？","slug":"你能列举一些-promise-的方法吗-它们各自的作用是什么","link":"#你能列举一些-promise-的方法吗-它们各自的作用是什么","children":[]},{"level":3,"title":"Promise 的链式调用？它是如何实现的？","slug":"promise-的链式调用-它是如何实现的","link":"#promise-的链式调用-它是如何实现的","children":[]},{"level":3,"title":"Promise 的错误处理","slug":"promise-的错误处理","link":"#promise-的错误处理","children":[]},{"level":3,"title":"Promise 和其他异步编程模式的比较：","slug":"promise-和其他异步编程模式的比较","link":"#promise-和其他异步编程模式的比较","children":[]},{"level":3,"title":"进阶问题：","slug":"进阶问题","link":"#进阶问题","children":[]},{"level":3,"title":"你在项目中是如何使用 Promise 的？能分享一些具体的场景吗？","slug":"你在项目中是如何使用-promise-的-能分享一些具体的场景吗","link":"#你在项目中是如何使用-promise-的-能分享一些具体的场景吗","children":[]},{"level":3,"title":"手写一个 promise","slug":"手写一个-promise","link":"#手写一个-promise","children":[]}],"git":{"createdTime":1691055743000,"updatedTime":1727509168000,"contributors":[{"name":"储天航","email":"18136106648@163.com","commits":1}]},"readingTime":{"minutes":7.25,"words":2176},"filePathRelative":"code/website/javascript/promise.md","localizedDate":"2023年8月3日","excerpt":"<h3>Promise 是什么？</h3>\\n<p>Promise 是 JavaScript 中一种用于处理异步操作的对象。它代表了一个异步操作的最终完成或失败，并且可以返回其结果值或错误原因。</p>\\n<h3>解决了什么问题？</h3>\\n<p>Promise 主要解决了传统回调函数（callback）所带来的问题，尤其是在处理多个异步操作时出现的回调地狱（callback hell）情况。传统的回调函数嵌套结构使得代码难以阅读、理解和维护，而 Promise 则通过提供一种更加优雅的方式来处理异步操作，使得代码结构更加清晰、易于理解和维护。</p>\\n<h3>Promise 的三种状态是什么？它们分别是什么意思？</h3>"}');export{k as comp,d as data};