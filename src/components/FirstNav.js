import React from 'react'
import {Link} from "react-router-dom";

function FirstNav(props)
{
    const isLogin = props.isLogin
    return (
        //First Navigation
        <nav class="navbar nav-first navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand">
                    <Link to="/"><h2/*제목*/>식품 영양정보</h2></Link>
                </a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        {
                            isLogin ? <a /*로그인 이후*/className="nav-link text-primary"><Link to="/userinform">유저 정보</Link></a>  :
                                <a /*로그인 이전*/className="nav-link text-primary"><Link to="/login">로그인</Link></a>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default FirstNav