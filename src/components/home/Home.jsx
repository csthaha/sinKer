import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'


import * as api from '../../api/api'
import { get } from '../../api/axios'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
// import 'swiper/dist/css/swiper.min.css'
import '../../base.styl'
import './Home.styl'


class User extends Component {
    state = {}
    
    render() {
        
        return (
            
            <div>
                <div className="Home">
                    <div className="head">
                        <div className="menu"></div>
                        <div className="logo"></div>
                        <Link className="search" to={{ pathname: '/search', search: 'type=finded' }}></Link>
                    </div>
                    <div className="swiper-container" style={{ marginTop: '50px' }}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" >
                                <div className="img">
                                    <img src="https://resource.smartisan.com/resource/h/h51008420.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide" >
                                    <div className="img">
                                        <img src="https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper-slide" >
                                    <div className="img">
                                        <img src="https://resource.smartisan.com/resource/a/app1008420.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
   async componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
        console.log(api.default.floorsUrl)
    //    await axios.get('/?json=true')
    //         .then(res => {
    //             console.log(res)
    //         })
         let data = await get('https://resource.smartisan.com/marketing/mobile/index_fac3d2920911d9e19ea7b4af2814ca9f.json')
    }
}

export default User