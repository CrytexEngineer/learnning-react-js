import './App.css';

import React, {useState} from 'react';


import PostForm from './PostForm';
import PostList from './PostList';
import {Container} from "reactstrap";


function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([...posts, post])
    }

    const deletePost = (deletedPost) => {
        setPosts([...posts.filter(post => post != deletedPost)]);
    }

    return (
        <React.Fragment>
            <Container>
                <PostForm addPost={addPost}></PostForm>
                <PostList posts={posts} deletePost={deletePost}></PostList>
            </Container>

        </React.Fragment>
    );
}

export default App;
