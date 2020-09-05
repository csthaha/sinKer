import React, { Component } from 'react';
import { Input, DatePicker, Button, Cascader, message } from 'antd'
import { Link, Route } from 'react-router-dom'

import store from '../../store/login/store'
// import './addAdress.styl'

class AddAdress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            phone: '',
            time: '',
            cascader: '',
            detailAddress: '',
            options: [
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            children: [
                                {
                                    value: 'xihu',
                                    label: 'West Lake',
                                },
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                        {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                                {
                                    value: 'zhonghuamen',
                                    label: 'Zhong Hua Men',
                                },
                            ],
                        }
                    ]
                }
            ]
        }
    }
    getCascader(value) {
        console.log(value);
        this.setState({
            cascader: value
        })
    }
    getDate(date, dateString) {
        console.log(date, dateString);
        this.setState({
            time: dateString
        })
    }
    getUser(e) {
        console.log(e.target.value);
        this.setState({
            user: e.target.value
        })
    }
    getPhone(e) {
        console.log(e.target.value);
        this.setState({
            phone: e.target.value
        })
    }
    getDetailAddress(e) {
        console.log(e.target.value);
        this.setState({
            detailAddress: e.target.value
        })
    }
    addNewAddress() {
        const action = {
            type: 'NEWADDRESS',
            user: this.state.user,
            phone: this.state.phone,
            where: this.state.cascader,
            getTime: this.state.time,
            detailAddress: this.state.detailAddress
        }
        store.dispatch(action)
        message.success('新地址添加成功！')
    }
    render() {
        return (
            <div
                className="addAdressPage"
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: '#fff',
                    zIndex: '998',
                    width: '100%',
                    height: '100%'
                }}
            >
                <div
                    className="address-head"
                    style={{
                        padding: '10px',
                        display: 'flex',
                        backgroundColor: 'red',
                        alignItems: 'center'
                    }}
                >
                    <Link to="/user">
                        <div
                            className="arrow"
                            style={{
                                width: '20px',
                                height: '20px',
                                borderTop: '2px solid #eee',
                                borderLeft: '2px solid #eee',
                                transform: 'rotate(-45deg)'
                            }}
                        ></div>
                    </Link>
                    <h3
                        className="title"
                        style={{
                            flex: '1',
                            textAlign: 'center',
                            color: '#eee',
                            fontWeight: 'bold'
                        }}
                    >添加收货地址</h3>
                </div>

                <div
                    className="user"
                    style={{
                        display: 'flex',
                        height: '50px',
                        width: '100%',
                        borderBottom: '1px solid #000'
                    }}
                >
                    <span style={{
                        width: '100px',
                        height: '100px',
                        lineHeight: '50px',
                        marginLeft: '10px'
                    }}>收货人</span>
                    <Input onChange={this.getUser.bind(this)} style={{ borderStyle: 'none' }} className="user-input"></Input>
                </div>
                <div
                    className="user"
                    style={{
                        display: 'flex',
                        height: '50px',
                        width: '100%',
                        borderBottom: '1px solid #000'
                    }}
                >
                    <span style={{
                        width: '100px',
                        height: '100px',
                        lineHeight: '50px',
                        marginLeft: '10px'
                    }}>手机号</span>
                    <Input onChange={this.getPhone.bind(this)} style={{ border: '0', outline: 'none', borderColor: 'rgba(0, 0, 0, 0)' }} className="user-input"></Input>
                </div>
                <div
                    className="user"
                    style={{
                        display: 'flex',
                        height: '50px',
                        width: '100%',
                        borderBottom: '1px solid #000'
                    }}
                >
                    <span style={{
                        width: '100px',
                        height: '100px',
                        lineHeight: '50px',
                        marginLeft: '10px'
                    }}>收获时间</span>
                    {/* <Input className="user-input"></Input> */}
                    <DatePicker onChange={this.getDate.bind(this)} style={{width: '100%'}}/>

                </div>
                <div
                    className="user"
                    style={{
                        display: 'flex',
                        height: '50px',
                        width: '100%',
                        borderBottom: '1px solid #000'
                    }}
                >
                    <span style={{
                        width: '100px',
                        height: '100px',
                        lineHeight: '50px',
                        marginLeft: '10px'
                    }}>收货地址</span>
                    {/* <Input className="user-input"></Input> */}
                    <Cascader onChange={this.getCascader.bind(this)} size="large" style={{width: '100%', lineHeight: '50px'}} options={this.state.options} placeholder="Please select" />
                </div>
                <div
                    className="user"
                    style={{
                        display: 'flex',
                        height: '50px',
                        width: '100%',
                        borderBottom: '1px solid #000'
                    }}
                >
                    <span style={{
                        width: '100px',
                        height: '100px',
                        lineHeight: '50px',
                        marginLeft: '10px'
                    }}>详细地址</span>
                    <Input onChange={this.getDetailAddress.bind(this)} style={{ border: 'none', outline: 'none' }} placeholder="请输入详细地址" className="user-input"></Input>
                </div>
                <Button 
                    type="primary" 
                    style={{ 
                        width: '200px', 
                        backgroundColor: 'green',
                        left: '50%',
                        top: '100px',
                        position: 'relative',
                        transform: 'translate(-50%, -50%)'
                    }}
                    className=""
                    onClick={this.addNewAddress.bind(this)}
                >保存</Button>
            </div>
        );
    }
}

export default AddAdress;