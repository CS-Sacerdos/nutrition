/*
import React, {useEffect} from 'react';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './community.css';
import axios from "axios";

function Write()
{
    const [writeContent, setWriteContent] = useState({
        subject: '',
        content: ''
    })

    const getValue = e => {
        const { name, value } = e.target;
        setWriteContent({
            ...writeContent,
            [name]: value
        })
        console.log(name, value);
    };

    const submitWrite = () =>{
        axios.post('/user_inform/write', null, {
            params: {
                subject: writeContent.subject,
                content: writeContent.content
            }

        }).then( () => {
            alert('작성 완료');
        })
    };
/*
    const [viewContent, setViewContent] =useState([]);
    useEffect(() => {
        axios.get('/getWrite').then((response) => {
            setViewContent(response.data);
        })
    }, [viewContent])
    <h1>Movie Review</h1>
            <div className='board-container'>
                {viewContent.map(element =>
                    <div>
                        <h2>{element.subject}</h2>
                        <div>
                            {element.content}
                        </div>
                    </div>
                    )}
            </div>

    return (
        <div className="pages">

            <div className='form-wrapper'>
                <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='subject'/>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setWriteContent({
                            ...writeContent,
                            content: data
                        })
                        console.log(writeContent);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <button className="submit-button mt-4"
            onClick={submitWrite}
            >입력</button>
        </div>
    );
}

export default Write;
*/