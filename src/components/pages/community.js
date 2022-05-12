import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Posts from "./Posts";
import Pagination from "./Pagination";
import './pages.css';
import './community.css';

function Community()
{


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);


    useEffect( () => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get('/getFreeBoard');
            setPosts(response.data);

            setLoading(false);
        }
        fetchData();
    },[]);

    posts.reverse();

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    return (
        <div className="pages">

            <section className="notice">
                <div className="page-title">
                    <div className="container">
                        <h3>자유 게시판</h3>
                    </div>
                </div>

                <div id="board-search">
                    <div className="container">
                        <div className="search-window">
                            <form action="">
                                <div className="search-wrap">
                                    <label htmlFor="search" className="blind">자유게시판 내용 검색</label>
                                    <input id="search" type="search" name="" placeholder="검색어를 입력해주세요." value=""/>
                                    <button type="submit" className="btn btn-dark">검색</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="board-list">
                    <div className="container">
                        <table className="board-table">
                            <thead>
                            <tr>
                                <th scope="col" className="th-title">제목</th>
                                <th scope="col" className="th-num">작성자</th>
                                <th scope="col" className="th-date">등록일</th>
                            </tr>
                            </thead>
                            <tbody>
                            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
                            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" className="btn btn-dark mt-4"><Link to="/fb_write">글쓰기</Link></button>
                </div>

            </section>
        </div>
    );
}

export default Community;