import React, { Component } from 'react';

import * as SearchAllGoods from '../../content/searchList.json'
import HotGood from '../hotGood/HotGood'
import { Link, Route } from 'react-router-dom'

import './Search.styl'
import { Button } from 'antd';
class Search extends Component {
    constructor() {
        super();
        this.handleChnage = this.handleChnage.bind(this);
        this.searchGoods = this.searchGoods.bind(this);
    }
    state = {
        inputValue: '', // 输入框的值
        searchList: '',
        haveTargetProduct: '',
        resultList: ''
    }

    // 防抖
    // debounce(fun, time) {
    //     let timeout;
    //     return function () {
    //         let context = this;
    //         let args = arguments;
    //         if (timeout) clearTimeout(timeout);
    //         timeout = setTimeout(() => {
    //             fun.apply(context, args)
    //         }, time);
    //     }
    // }
    //设置input框中的值
    handleChnage(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    //获取搜索关键字进行 搜索商品
    searchGoods(value = '') {
        this.setState({ resultList: '' })
        let word;
        //关键字
        if (value) word = value
        else word = this.state.inputValue
        let goodsArr = this.state.searchList;
        let res = goodsArr.filter(item => {
            return item.goods.title == word
        })
        if (res.length) {
            this.setState({
                resultList: res[0].goods.data,
                haveTargetProduct: 1
            })
        } else {
            this.setState({
                haveTargetProduct: 0
            })
        }
        //清楚input框
        this.setState({
            inputValue: ''
        })
    }
    renderResultList() {
        const { match } = this.props
        let res = this.state.resultList;
        console.log(res, '===');
        return res && res.map((item, index) => {
            return <div className="product" key={index} onClick={this.handleToDetail(`${match.url}/${item.id}`, index)}>
                <div className="img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className="message">
                    <div className="message-name">{item.name}</div>
                    <div className="message-desc">{item.desc}</div>
                    <div className="message-price">{item.price}</div>
                </div>

            </div>
        })
    }
    handleToDetail(url) {
        console.log(url, '---')
        let id = url.split('/')[2];
        if(id.length < 3) return
        return () => {
            this.props.history.push({
                pathname: url
            })
        }
    }
    //按回车键搜索
    onkeydown(e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) this.searchGoods();
    }
    //点击人们关键字搜索
    iconSearch(e) {
        console.log(e.target.innerHTML)
        let searchGoal = e.target.innerHTML;
        this.searchGoods(searchGoal)
    }
    render() {
        const { match } = this.props

        return (


            <div className="s" >
                <div className="search-head" >
                    <div className="searchIcon">
                        <input className="searchInput" onKeyDown={(e) => this.onkeydown(e)} value={this.state.inputValue} onChange={this.handleChnage} placeholder="请输入要搜索的内容" />
                    </div>
                    <div className="searchBtn">
                        <Button type="primary" className="btn" onClick={this.searchGoods}>搜索</Button>
                    </div>
                </div>
                <div className="hot-search" >
                    <p className="hot-text">热门搜索</p>
                    <div className="hot-div" onClick={this.iconSearch.bind(this)}>
                        <div className="hot-span hot-span-odd">坚果Pro3</div>
                        <div className="hot-span">数据线</div>
                        <div className="hot-span hot-span-odd">移动电源</div>
                        <div className="hot-span">手机</div>
                        <div className="hot-span hot-span-odd">TNT显示屏</div>
                    </div>
                    <div className="notFind" style={{ display: this.state.haveTargetProduct === 0 ? '' : 'none' }}>
                        抱歉，该款商品还没有上架
                    </div>
                    <div className="search-content" style={{ display: this.state.haveTargetProduct === 1 ? '' : 'none' }}>
                        {this.renderResultList()}
                    </div>
                </div>
                <Route path={`${match.url}/:id`} component={HotGood}></Route>

            </div>

        )
    }
    componentDidMount() {
        console.log(SearchAllGoods.default.data);
        this.setState({
            searchList: SearchAllGoods.default.data
        })
    }
}

export default Search