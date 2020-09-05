import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './Menu.styl'
import { useState } from 'react'
class Menu extends Component {
    constructor() {
        super();
    }
    state = {
    }

    render() {
        // console.log(1);
        // const [count, setCount] = useState(0);

        return (
            <div className="homeMenu" >
                {/* <span>{count}</span> */}
                <div className="menu-head">
                    <Link to="/index">返回</Link>
                </div>
            </div>
        )
    }
}

// function Menu() {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         console.log('第一次点击');
//         console.log('第二次点击');
//         console.log('第三次点击');
//     }
//     return (
//         <div>
//             <span>{count}</span>
//             <Button onClick={handleClick}>点击</Button>
//         </div>
//     )
// }

export default Menu