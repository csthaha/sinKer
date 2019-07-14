## React 写一个移动端的锤子官网
> 学习 react 也有过一段时间了，说实话，字一天不练手生，代码一天不自己写，不仅手生，脑袋也空！
我这里就简单一下自己在做的过程中所遇到过的问题，以及踩过的坑 和我的解决方法吧！

### Day 1： 创建一个项目，搭建好路由，封装 axios 请求
- create-react-app sinker  
        创建一个 react 的项目，这里的 sinker 是您想要创建项目的名字 我这里sinker 就是 锤子了
- npm install axios
        安装 axios 以便我们后边请求数据，然后进行封装，这里我就模仿蜗牛老师的封装方式了
- 搭建自己的 tabbar，npm install react-router-dom
        众所周知，自定义tabbar 是需要路由的，要不然怎么进行页面跳转呢? 安装好之后，我们引入
        ```import { BrowserRouter as Router,Route, Link, Redirect, NavLink, Switch} from 'react-router-dom'```, 我这里是是使用 NavLink 来实现页面的跳转的，然后使用 switch 来确切的匹配到某个路径。这里还有一点要 记录的就是 ，我们点击 tabbar 实现跳转，肯定是想要的让它高亮的，这里我们不需要另外动态给它添加类名，只需要在样式增加一个类名为 .active 的样式就可以了。最后只剩下 tabbar 的样式了，详情请看我的 app.css 了。
- 使用stylus 来进行样式的编写
        npm install stylus stylus-loader 安装好这里依赖，这样就可以了吗？你会发现怎么效果出不来啊？这里最坑了，记得猛哥讲过得将项目都提交一遍的啊, git commit -m "" , 然后我们找到
        config/ webpack.config.js 的文件，如果您跟我的一样的话，那就请来到455 行，添加这样一些代码吧 ```{ test: /\.styl$/,use: ["style-loader", "css-loader", "stylus-loader"]},```。 这样我们就可以愉快的使用 stylus 进行样式的编写啦！
-  使用 swiper 来实现轮播图。
        npm install swiper 安装好之后 我们需要引入呀：
        ``` import Swiper from 'swiper/dist/js/swiper.js'```
        ```import 'swiper/dist/css/swiper.min.css'```,这样才不会打包失败的，这里特别要记录一个坑，就是我们这个引入都是这样写的，为什么还要给我报这个错呢，就是一直到不到，请记住，这可能不是我们的问题，这是可能需要我们重启一下 vscode 。
