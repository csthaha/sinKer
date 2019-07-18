import React, { Component } from 'react';

import './choose.styl'
class Choose extends Component {
    state = {}
    render() {
        return (
            <div style={{transition: '2s ease'}}>
                <div className="mc"></div>
                <div className="a" style={{ marginTop: '100px' }}>
                    <div className="b">
                        <div className="aa">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg" alt="" />
                        </div>
                        <div className="ab">
                            <h4>各色DNa</h4>
                            <p>蓝色</p>
                            <div className="price">499</div>
                        </div>
                    </div>
                    <div className="c">
                        <div className="cc">
                            <div className="ccc">颜色选择</div>
                            <div className="ccc-ab">
                                <div className="ccc-color">白色</div>
                                <div className="ccc-color">黑色色</div>
                            </div>
                        </div>
                        <div className="cd">
                            <div className="cdd">数量选择</div>
                            <div className="cde">
                                <div className="cdec reduce">-</div>
                                <div className="cdec num">1</div>
                                <div className="cdec add">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Choose