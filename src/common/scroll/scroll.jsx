import React, { Component } from 'react';

import BScroll from 'better-scroll'
import './scroll.styl'
class Scroll extends Component {
    state = {}
    componentDidUpdate() {
        if (this.bscroll && this.props.refresh) {
            this.bscroll.refresh();
        }
    }
    componentDidMount() {
        if (!this.bscroll) {
            this.bscroll = new BScroll(this.refs.scrollView, {
                probeType: 3,
                click: () => { },
                startX: 0,
                scrollX: true
            })
            this.bscroll.on('scroll', (e) => {
                this.props.onScroll(e)
                // 实例通过滚动方法监听到父级
            })   
            console.log(this.bscroll)
        }
    }
    componentWillUnmount() {
        this.bscroll = null;
    }
    render() {
        return (
            <div className="scroll-view" ref="scrollView">
                {this.props.children}
            </div>
        )
    }
}

export default Scroll