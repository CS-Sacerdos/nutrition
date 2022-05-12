import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({ posts, loading }) => {

    posts.reverse();

    return (
        <>
            { loading &&
                <div> loading... </div>
            }
            {
                posts.map((posts, index) =>
                    <tr>
                        <th><Link to="/">{posts.subject}</Link></th>
                        <td>{posts.writer}</td>
                        <td>{posts.create_date}</td>
                    </tr>)
            }
        </>
    );
};
export default Posts;