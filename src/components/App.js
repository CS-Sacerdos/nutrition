import './App.css';
import './css/pigga.css'
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";

import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Main from "./pages/Main";
import Nutrition from "./pages/Nutrition";
import Community from "./pages/community";
import InformationUse from "./pages/InformationUse";
import Footer from "./Footer";
import Login from "./pages/Login";
import Userinform from "./pages/Userinform";
import Register from "./pages/Register";
import Write from "./pages/Write";
import FB_Write from "./pages/FB_Write";


function App() {
    // 로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('user_id') === null){
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
            console.log('isLogin ?? :: ', isLogin)
        } else {
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
            // 로그인 상태 변경
            setIsLogin(true)
            console.log('isLogin ?? :: ', isLogin)
        }
    })


    let PostView;
    return (
    <div className="pages">
        {
            isLogin ? <FirstNav isLogin={isLogin}/> :
                <FirstNav/>
        }
        <SecondNav/>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/nutrition" element={<Nutrition />}/>
            <Route path="/community" element={<Community />}/>
            <Route path="/informationUse" element={<InformationUse />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/userinform" element={<Userinform/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/fb_write" element={<FB_Write/>}/>
            <Route path='/postView/:bbs_id' element={<PostView/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
