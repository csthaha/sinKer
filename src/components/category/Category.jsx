import React, { Component } from 'react';

import { get } from '../../api/axios'

import '../../base.styl'
import './Category.styl'

// import Scroll from '../../common/scroll/scroll'
// import BScroll from 'better-scroll'

import * as categoryGoods from '../../content/categoryList'

class Category extends Component {
  constructor(props) {
    super(props);
    this.saveRef = ref => {
      this.refDom = ref
    }
  }
  state = {
    menuNameList: [],
    allGoods: [],
    leftIndex: 0,
    height: 0
  }
  renderMenu() {
    const { menuNameList } = this.state;
    return menuNameList.map((item, index) => {
      return <div className="menu" style={{ backgroundColor: (index === this.state.leftIndex) ? 'gray' : '' }} key={index} onClick={this.menuClick.bind(this, index)}>{item}</div>
    })
  }
  menuClick(index) {
    const { clientWidth } = this.refDom;;
    this.setState({
      leftIndex: index
    })
  }

  renderAllGoods() {
    const { allGoods } = this.state;
    return allGoods.map((item, index) => {
      return <div key={index}>
        <div className="title">{item.goods.title}</div>
        {this.renderDetail(item.goods)}
      </div>
    })
  }
  renderDetail(good) {
    let detailData = good.data;
    return detailData.map((item, index) => {
      return < div className="content" key={index}>
        <div className="img">
          <img src={item.imgUrl} alt="" />
        </div>
        <div className="desc">
          <div className="name">{item.name}</div>
          <div className="detail">{item.desc}</div>
          <div className="price">{item.price}</div>
        </div>
      </div >
    })
  }

  scroll(e) {
    console.log(e.y);


  }
  render() {
    return (
      <div className="Category">
        <div className="head">
          商品分类
        </div>
        <div className="main">
          <div className="left" ref="left">
            <div className="leftMenu">
              {/* <div className="menu"> */}
              {this.renderMenu()}
              {/* </div> */}
            </div>
          </div>
          {/* <Scroll style={{height: '70%'}} onScroll = {this.scroll.bind(this)}> */}
          <div className="right" ref={this.saveRef}>
            {
              this.renderAllGoods()
            }
          </div>
          {/* </Scroll> */}
        </div>
      </div>
    );
  }
  bindHandleScroll = (event) => {
    // 滚动的高度
    // const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
    //   || window.pageYOffset
    //   || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // // 判断用户当前是否进行了横向滚动，如果用户发生了横向滚动，则设置元素为static
    // const scrollLeft = (event.srcElement ? event.srcElement.documentElement.scrollLeft : false)
    //   || window.pageXOffset
    //   || (event.srcElement ? event.srcElement.body.scrollLeft : 0);

    // if (scrollLeft > 0) {
    //   this.setState({
    //     positionType: 'static'
    //   })
    // } else {
    //   this.setState({
    //     positionType: 'fixed'
    //   })
    // }

    console.log(event, event.srcElement.documentElement.scrollTop);
    this.setState({
      height: event.srcElement.documentElement.scrollTop
    })
  }
  //在componentWillUnmount，进行scroll事件的注销
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindHandleScroll);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.bindHandleScroll)
    console.log(categoryGoods.default.data);
    let allGoods = categoryGoods.default.data;
    let categotyName = categoryGoods.default.categoryName;
    // let dataLine = categoryGoods.default.data[0].dataLine.data;
    // let SweepingRobot = categoryGoods.default.data[1].SweepingRobot.data;
    // let TNTDisplay = categoryGoods.default.data[2].TNTDisplay.data;
    // console.log(categotyName, dataLine, SweepingRobot, TNTDisplay);
    this.setState({
      menuNameList: categotyName,
      allGoods: allGoods
    })
  }
}

export default Category;
