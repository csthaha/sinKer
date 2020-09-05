import React, { Component } from 'react';

import { Button, message, Modal, Drawer, Input } from 'antd'

import Avatar from './uploadImage/UploadImage'
import store from '../../store/login/store'

import '../../base.styl'
import './User.styl'
class User extends Component {
    constructor(props) {
        super(props)
        console.log(store, store.getState(), '+++++', props)
    }
    state = {
        visible: false,
        imgUrl: '',
        drawerVisibal: false,
        name: '',
        passwordVisible: false,
        inputval: '',
        nameOrPassword: ''
    }
    render() {
        return (
            <div className="User">
                <div className="head">
                    个人中心
                </div>
                <div className="user-content">
                    <div className="message" onClick={this.uploadImage.bind(this)}>
                        {/* <img className="avatar" src={this.state.imgUrl} alt="" /> */}
                        <Avatar />
                        <div className="message-name">
                            <div className="name">昵称：{this.state.name}</div>
                            <div className="arrow" onClick={this.modifyName.bind(this)}></div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature-same modifyPass" onClick={this.modifyPass.bind(this)}>修改密码</div>
                        <div className="feature-same address" onClick={this.addressManagement.bind(this)}>地址管理</div>
                        <div className="feature-same order" onClick={this.goToCart.bind(this)}>全部订单</div>
                        <div className="feature-same service" onClick={this.service.bind(this)}>延长保险服务</div>
                        <div className="feature-same coupons" onClick={this.showCoupons.bind(this)}>我的优惠券</div>
                    </div>
                    <div className="btn">
                        <Button type="danger" >退出登录</Button>
                    </div>
                    <Modal
                        title="产品服务"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancle}
                    >
                        确认需要延长服务吗
                    </Modal>
                    <Modal
                        title={"修改" + this.state.nameOrPassword}
                        visible={this.state.passwordVisible}
                        onOk={this.modifySuc.bind(this)}
                        onCancel={this.handleCancle}
                    >
                        <Input type={this.state.nameOrPassword == '昵称' ? 'text' : 'password'} onChange={this.handleChange.bind(this)} placeholder={"请输入新" + this.state.nameOrPassword}></Input>
                    </Modal>
                    <Drawer
                        title="优惠券"
                        placement="bottom"
                        onClose={this.handleCancle}
                        visible={this.state.drawerVisibal}
                    >
                        <h3>满减五十优惠券一张</h3>
                        <h3>3元优惠券</h3>
                    </Drawer>
                </div>
            </div>
        )
    }
    goToCart() {
        this.props.history.push('cart')
    }
    uploadImage() {
        console.log('上传头像');
        // this.props.history.push('/uploadImage')
    }
    addressManagement() {
        this.props.history.push('/address')
    }
    modifyPass() {
        this.setState({
            passwordVisible: true,
            nameOrPassword: '密码'
        })
    }
    handleChange(e) {
        this.setState({
            inputval: e.target.value
        })

    }
    modifySuc() {
        message.success('修改成功')
        this.setState({
            passwordVisible: false,
            name: this.state.inputval
        })
    }
    modifyName() {
        this.setState({
            passwordVisible: true,
            nameOrPassword: '昵称',
        })
    }
    service() {
        this.setState({
            visible: true,
        })
    }
    showCoupons() {
        this.setState({
            drawerVisibal: true,
        })
    }
    handleOk = e => {
        message.success('以延长服务')
        this.setState({
            visible: false
        })
    }
    handleCancle = e => {
        this.setState({
            visible: false,
            drawerVisibal: false,
            passwordVisible: false
        })
    }
    componentDidMount() {
        let accountList = store.getState()
        let avatar = accountList.acountList[accountList.acountList.length - 1].avatarUrl
        let name = accountList.acountList[accountList.acountList.length - 1].name
        this.setState({
            imgUrl: avatar,
            name: name
        })
    }
}

export default User