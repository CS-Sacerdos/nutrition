import React from 'react'
import {Link} from "react-router-dom";

function SecondNav()
{
    return (
        //Second Navigation
        <nav class="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div class="container">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/">메인</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/nutrition">영양 성분</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/community">커뮤니티</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to="/informationUse">이용안내</Link></a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="components.html" class="btn btn-primary btn-sm">Components</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default SecondNav