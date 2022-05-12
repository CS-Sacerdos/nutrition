import './pages.css'
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

function Main() {
    return (

        <div className="pages">
            <Helmet>
                <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
            </Helmet>
            <header className="header">
                <div className="overlay">
                    <h1 className="title">식품 영양정보를 한번에-</h1>
                    <a className="btn btn-primary mt-3"><Link style={{ color: "white"}} to="/register">무료로 시작하기</Link></a>

                    <a className="mt-3">이미 계정이 있습니까? <Link style={{ color: "white"}} to="/login">로그인</Link></a>
                </div>
            </header>


            <section id="search" className="search">
                <div className="container">
                    <center>음식의 칼로리, 영양정보, 제공량에 대해 자세히 알아보세요</center>
                    <div className="search_wrap search_wrap_3">
                        <div className="search_box">
                            <input type="text" className="input" placeholder="검색..."/>
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

export default Main;