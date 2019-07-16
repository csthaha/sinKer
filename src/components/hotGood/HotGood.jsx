import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get } from '../../api/axios'
import * as api from '../../api/api'

import './HotGood.styl'
class HotGood extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="hotGood-head">
                    <Link className="back"></Link>
                    <h1 className="hotGood-name"></h1>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // console.log('---', this.props.match.params.id)    
        get(api.default.floorDetailUrl + this.props.match.params.id)
            .then(res => {
                console.log('详细信息：',res)
            })
    }
}

export default HotGood