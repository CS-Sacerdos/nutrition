import {Helmet} from "react-helmet";


function Footer()
{
    return(
        <div className="Footer">
            <div className="py-4 border border-lighter border-bottom-0 border-left-0 border-right-0 bg-dark">
                <div className="container">
                    <div className="row justify-content-between align-items-center text-center">
                        <div className="col-md-9 text-md-right">
                            <a className="px-3"><small className="font-weight-bold">공지사항</small></a>
                            <a className="px-3"><small className="font-weight-bold">자주하는 질문</small></a>
                            <a className="px-3"><small className="font-weight-bold">문의하기</small></a>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
                <div className="container">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col">
                            <p className="mb-0 small">&copy;
                                     <a href="https://www.devcrud.com" target="_blank">DevCrud</a> All rights reserved
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <h6 className="small mb-0">
                                <a href="javascript:void(0)" className="px-2"><i className="ti-facebook"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-twitter"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-instagram"></i></a>
                                <a href="javascript:void(0)" className="px-2"><i className="ti-google"></i></a>
                            </h6>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
