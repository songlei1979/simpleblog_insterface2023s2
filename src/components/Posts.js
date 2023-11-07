import React, {useEffect, useState} from 'react';
import axios from "axios";

function Posts(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/blog/api/posts/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPosts(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [posts]);

    return (
        <div>
            {posts.map(post=>
                <p key={post.id}>{post.title}</p>
            )}
        </div>
    );
}

export default Posts;