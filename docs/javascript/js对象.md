<!--
 * @Author: ThomasHang 11939838031@qq.com
 * @Date: 2023-02-09 23:02:38
 * @LastEditors: ThomasHang 11939838031@qq.com
 * @LastEditTime: 2023-02-09 23:21:33
 * @FilePath: /trent-blog/docs/javascript/js对象.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 对象基础

对象 是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里的属性和方法）

# 括号表示法

```javascript
const person = {
  name: 'chutianhang',
  son: {
    name: 'tt',
  },
};
console.log(person['name']); //chutianhang
console.log(person['son']["name"]); //tt

```
对象原型

