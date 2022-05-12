import React from 'react';
import './pages.css'
import {Helmet} from "react-helmet";

function Nutrition()
{
    return (
        <div className="pages">
            <Helmet>
                <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
            </Helmet>

            <section id="search" className="search">
                <div className="container">
                    <div className="search_wrap search_wrap_1">
                        <div className="search_box">
                            <input type="text" className="input" placeholder="음식, 브랜드 또는 레스토랑 검색"/>
                                <div className="btn btn_common">
                                    <i className="fas fa-search"></i>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Nutrition;