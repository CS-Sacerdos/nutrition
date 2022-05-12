import React, { useEffect, useState } from 'react';
import './Post.css';

const PostView = ({ posts }) => {


    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {
                    posts ? (
                        <>
                            <div className="post-view-row">
                                <label>게시글 번호</label>
                                <label>{ posts.bbs_id }</label>
                            </div>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{ posts.subject }</label>
                            </div>
                            <div className="post-view-row">
                                <label>작성일</label>
                                <label>{ posts.create_date }</label>
                            </div>
                            <div className="post-view-row">
                                <label>조회수</label>
                                <label></label>
                            </div>
                            <div className="post-view-row">
                                <label>내용</label>
                                <div>
                                    {
                                        posts.content
                                    }
                                </div>
                            </div>
                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
            </div>
        </>
    )
}

export default PostView;