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

### Day 2: 实现一个横向滚动商品列表， 跨域未解决
- 使用 map 去循环渲染列表
        ```<div className="hotGoods-good"><div className="ul">{this.renderGoods()}</div></div>```  盒子里面调用 renderGoods 方法
        ``` renderGoods() {const { goodsList = [] } = this.statereturn goodsList.map((item, index) => {return (<div className="good" key={index} onClick={this.handleToGoodDetail(`${item.id}`)}><div className="good-msg"> <div className="img-good"><img src={item.imgUrl} alt="" /></div><div className="text-good"><h4 className="good-name">{item.name}</h4><p className="good-desc">{item.desc}</p><p className="good-price">{item.price}</p> </div></div></div>)})}```   
        实现横向滚动 overflow-y hidden  overflow-x auto，当内容超出所设定的高度，则横向滚动。

- 最失败的一点
        网上百度了各种 react 解决跨域的问题，且花了一天的时间去尝试各种网上的方法，仍然是没有解决跨域 的问题，比如:
        1. 在package.json 中添加 "proxy" : "请求的接口"，然后直接调用
        2. 安装 http-proxy-middlewear 然后新建 setupProxy.js 文件 来设置代理 然后去请求
        3. 在 webpack.config.js 中 添加
                ``` devServer: {  host: 'localhost', port: 3000, proxy: {   '/api/': {     target: '',     changeOrigin: true   } } },``` 仍然是无法解决

### Day 3: 调用easy-mock 获取数据，路由跳转传参
- 将锤子官网里 首页的图片以及 商品的名字描述写在了easy-mock中，[热销商品](https://www.easy-mock.com/mock/5ca457efc4e9a575b66b625c/example/goodsList'), [其它](https://www.easy-mock.com/mock/5ca457efc4e9a575b66b625c/example/sinker), 查询某个物品的详情接口：https://shopapi.smartisan.com/product/skus?ids=。 获取到数据后，使用昨天的方法渲染页面，改变些样式。

- 跳转传参
        给我们需要点击跳转的元素添加一个点击事件：onClick={this.handleToGoodDetail(`${item.id}`,index)} 注意，map 渲染的列表，我们不能直接输出，会循环好多个输出。然后我们在handleToGoodDetail 方法中， 返回 `this.props.history.push({ pathname: url })`，再给我们需要的组件中设置路由 <Route path={`/:id`} component={HotGood}></Route> 注意这里的 :id 似乎是固定的参数，就是我们所 push 进去的，然后我们在需要的组件中 使用`this.props.match.params` 来接收，我们可以在 componentDidMount 里打印查看。
        注意： 这种设计的路径 只会在我们内容的下面，我们需要给 跳转的页面设计样式：
        ```position: fixed; top: 0 left: 0 right: 0 bottom: 0 background-color: #212121 z-index: 100``` 如此就可以啦

- 切个人页面
        切图仔并不是很快乐

### Day 4: 使用 better-scroll 中的坑
> 首先说下为什么要使用 better-scroll 插件吧，其实为了提高用户的体验高是一方面，还有一方面就是，react，这个项目 跳转到商品详情页 ```<Route path={`${match.url}/:id`} component={HotGood}></Route>``` 注意，react 都是单页面的，所以这里就会在home页面，而我们想要显示good页面，就得从样式下手了。

- 将商品页面层级设高：```.hotGood 
                                position: fixed
                                top: 0
                                left: 0
                                right: 0
                                bottom: 0
                                background-color: #fff
                                z-index: 100
                                width 100%
                                height 100% ```
- 获取当前页面的路径： 可以在生命周期 ```componentDidMount(){ console.log(this.props.match) }```中查看。

- 完成了 商品详情页面的设计。这里 遇到了better-scroll 的坑：
        就是滚动不了：原因可能如下：
        1. 我们需要滚动的页面的 层级关系
                意思就是 <Scroll> </Scroll> 中只能包含一个总的 div，有多个的话可能失效
        2. scroll 需要设置相关的 样式，即我们封装 scroll 时，需要设置scroll样式
        3. 需要滚动内容的高度，得大于所设置得高度
                我们在封装 scroll 时，可以 console.log(this.scroll) 打印： heightScroll >  wrapperHeight
        4. 滚动得内容需要添加样式。
        详细描述请参考大佬博客，[better-scroll失效原因](https://blog.csdn.net/qiqi_77_/article/details/79361413)

### Day 5: 版本，型号功能得选择，点击弹出，再次点击隐藏
- 设置蒙层
        在我们需要设置蒙层得同级，添加一个div 将他的样式设为：
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 98;
        这里得样式，根据自身情况定义。
- 利用 this.state.show ? style={{ display:'none'}} : '' 来控制 页面得显示与隐藏