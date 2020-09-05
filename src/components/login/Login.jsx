import React, { Component } from 'react'

import { message, Button } from 'antd'

import store from '../../store/login/store'

import './Login.styl'
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(store, store.getState(), '+++++', props)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.SignUp = this.SignUp.bind(this)
        this.state = {
            currentState: false,
            inputval: '', // 账号
            inputpassword: '', //密码
            btnName: 'Login'
        }
    }
    storeChange() {
        this.setState(store.getState())
    }
    render() {
        let loginOrRegister = this.state.currentState;
        let button = null;
        if (loginOrRegister) {
            button = <button className="btn-submit" type="submit" onClick={this.register.bind(this)}>Register</button>
        } else {
            button = <button className="btn-submit" type="submit" onClick={this.login.bind(this)}>LOGIN</button>
        }
        return (
            <div className={["mainbody middle", true === this.state.currentState ? "middle-flip" : null].join(' ')} >
                <form action="" className="form-box front" onSubmit={this.prevent}>
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <div>
                        <input type="text" className="input-normal" value={this.state.inputval} onChange={this.handleChange.bind(this)} placeholder="PhoneNumber" />
                        <input type="password" className="input-normal" value={this.state.inputpassword} placeholder="Password" onChange={this.handlePassword.bind(this)} />
                        {/* <button className="btn-submit" type="submit" onClick={this.login.bind(this)}>LOGIN</button> */}
                    </div>
                    <div className="text">
                        <p>If you don't have account, please</p>
                        <p>Click here to <a id="signup" onClick={this.SignUp}>Sign Up</a></p>
                    </div>
                </form>
                {/* <button className="btn-submit" type="submit" onClick={this.login.bind(this)}>{this.state.btnName}</button> */}
                {button}
                <form action="" className="form-box back">
                    <h1 style={{ textAlign: "center" }}>Register</h1>
                    <div>
                        <input type="text" className="input-normal" value={this.state.inputval} onChange={this.handleChange.bind(this)} placeholder="PhoneNumber" />
                        <input type="password" className="input-normal" value={this.state.inputpassword} placeholder="Password" onChange={this.handlePassword.bind(this)} />
                        {/* <button className="btn-submit" type="submit">Register</button> */}
                    </div>
                    <div className="text">
                        <p>Have a account ? You can</p>
                        <p>Click here to <a id="login" onClick={this.SignUp}>Log in</a></p>
                    </div>
                </form>
                {/* <button className="btn-submit" type="submit">Register</button> */}
                {button}
            </div >
        );
    }

    SignUp() {
        console.log(this.state.currentState, store.getState());
        this.setState({
            currentState: !this.state.currentState
        })

    }

    // input框的值
    handleChange(e) {
        this.setState({ inputval: e.target.value });
        console.log(this.state.inputval);

    }
    //密码
    handlePassword(e) {
        this.setState({
            inputpassword: e.target.value
        })
    }
    prevent() {
        return false
    }

    //登录情况
    login() {
        console.log(this.state.inputval, this.state.inputpassword);
        console.log(this.props.history);
        console.log('---', store.getState());
        let account = store.getState().acountList;
        console.log(account);
        let accountPhoneNumber = account.map(item => item.phoneNumber);
        let accountPassword = account.map(item => item.password);
        console.log(accountPhoneNumber, accountPassword);
        let phoneNumberIndex = accountPhoneNumber.indexOf(this.state.inputval);
        console.log(phoneNumberIndex);

        if (phoneNumberIndex > -1 && this.state.inputpassword === accountPassword[phoneNumberIndex]) {
            message.success('登录成功！')
            this.props.history.push('/index')
        } else if (phoneNumberIndex > -1 && this.state.inputpassword != accountPassword[phoneNumberIndex]) {
            message.warning('您输入的密码不正确！')
        } else if (phoneNumberIndex === -1) {
            message.warning('此账号不存在，请注册')
        }
        this.setState({
            inputval: '',
            inputpassword: ''
        })
    }
    //用户注册
    register() {
        //手机号验证正则
        let reg = /^1[3|4|5|7|8][0-9]{9}$/;
        let phone = this.state.inputval;
        let password = this.state.inputpassword;
        let accountHas = store.getState().acountList;
        //获取到已经注册过的账号
        let accountPhoneNumberHas = accountHas.map(item => item.phoneNumber);
        const action = {
            type: 'addAcount',
            phoneNumber: phone,
            password: password
        }
        
        if (password.length < 6) {
            message.warning('密码不安全，需要设置六位以上的密码')
        }

        if (!reg.test(phone)) {
            message.warning('请输入正确的手机号!')
        }
        if (accountPhoneNumberHas.indexOf(phone) > -1) {
            message.warning('此账号已经注册，请注册其它账号')
        }else if (reg.test(phone) && password.length >= 6) {
            store.dispatch(action)
            message.success('成功注册了一个新的账号!')
        }
        // 清空输入框
        this.setState({
            inputval: '',
            inputpassword: ''
        })
    }

}

export default Login;
