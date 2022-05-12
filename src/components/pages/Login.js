import React, { useState } from 'react';
import axios from 'axios';
import './pages.css'

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        axios.post('/user_inform/onLogin', null, {
            params: {
                'user_id': inputId,
                'user_pw': inputPw
            }
        })
            .then(res => {
                console.log(res)
                console.log('res.data.userId :: ', res.data.userId)
                console.log('res.data.msg :: ', res.data.msg)
                if(res.data.userId === undefined){
                    // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                    console.log('======================',res.data.msg)
                    alert('입력하신 id 가 일치하지 않습니다.')
                    window.location.reload()
                } else if(res.data.userId === null){
                    // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                    console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                    alert('입력하신 비밀번호 가 일치하지 않습니다.')
                    window.location.reload()
                } else if(res.data.userId === inputId) {
                    // id, pw 모두 일치 userId = userId1, msg = undefined
                    console.log('======================','로그인 성공')
                    sessionStorage.setItem('user_id', inputId)
                    document.location.href = '/'
                }
                // 작업 완료 되면 페이지 이동(새로고침)

            })
            .catch()
    }


    return(
        <div className = "pages">

            <div className='inform-wrap'>
                <div className="inform-form-wrap">
                    <h2 className='inform-togglebtn'>Login</h2>
                    <form id="login" action="" className="inform-input-group">
                        <input type='text' className='inform-input-field' name='input_id' placeholder='유저 아이디 또는 이메일 입력' value={inputId}
                               onChange={handleInputId}/>
                        <input type='password' className='inform-input-field' name='input_pw' placeholder='비밀번호 입력' value={inputPw} onChange={handleInputPw} />
                        <button type='button' className='inform-submit' onClick={onClickLogin}>Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;
