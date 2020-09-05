import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

import store from '../../store/login/store'

import './address.styl'
import { message } from 'antd';

class Address extends Component {
    constructor(props) {
        super(props);
        console.log(store, store.getState(), '+++++', props)

    }
    state = {
        addressArr: []

    }
    renderAddress() {
        const { addressArr = [] } = this.state;
        return addressArr.map((item, index) => {
            return (
                <div className="address-message" key={index}>
                    <div className="address-user">
                        <div className="user-name">收货人：{item.user}</div>
                        <div className="user-phone">手机号：{item.phone}</div>
                    </div>
                    <div className="address-dz">地址：{item.where}-{item.detailAddress}</div>
                    <div className="address-time">
                        <span>收货时间：{item.getTime}</span>
                        <span className="del" onClick={this.delAddress.bind(this, index)}>删除</span>
                    </div>

                </div>
            )
        })
    }
    delAddress(index) {
        console.log('删除地址', index);
        const action = {
            type: 'DELADDRESS',
            id: index
        }

        store.dispatch(action)
        message.success('删除成功！')
        this.props.history.push('user')

    }
    render() {
        return (
            <div className="addressPage" >
                <div className="address-head">
                    <Link to="/user">
                        <div className="arrow"></div>
                    </Link>
                    <h3 className="title">地址管理</h3>
                </div>
                {this.renderAddress()}
                <div className="addDress" onClick={this.addAdress.bind(this)}>+ 添加地址</div>
            </div>
        )
    }
    addAdress() {
        this.props.history.push('addadress')
    }
    componentDidMount() {
        let addressMessage = store.getState().acountList[0].address
        this.setState({
            addressArr: addressMessage
        })
        console.log(addressMessage, this.state.addressArr)
    }
}

export default Address