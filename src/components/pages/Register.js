import React, { useState, useEffect } from 'react';
import axios from "axios";

function Register() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputNm, setInputNm] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputNm = (e) => {
        setInputNm(e.target.value)
    }

    const onClickRegister = () =>{
        console.log('click register')
        axios.post('/user_inform/onRegister', null, {
            params: {
                'user_id': inputId,
                'user_pw': inputPw,
                'user_name': inputNm
            }
        }).then(res => console.log(res) )
            .catch()
    }

    return(
        <div className="pages">
            <div className='inform-wrap'>
                <div className="inform-form-wrap">
                    <h2 className='inform-togglebtn'>Register</h2>
                    <form id="login" action="" className="inform-input-group">
                        <input type='text' className='inform-input-field' name='input_id' placeholder='유저 아이디 또는 이메일 입력' value={inputId}
                               onChange={handleInputId}/>
                        <input type='password' className='inform-input-field' name='input_pw' placeholder='비밀번호 입력' value={inputPw} onChange={handleInputPw} />
                        <input type='text' className='inform-input-field' name='input_name' placeholder='이름 입력' value={inputNm} onChange={handleInputNm} />
                        <button type='button' className='inform-submit' onClick={onClickRegister}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register