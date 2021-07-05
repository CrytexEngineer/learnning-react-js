import React from 'react';
import {Button, Col, Row} from "reactstrap";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const posts = this.props.posts;

        return <div className="container"

        >

            {posts.map((post, key) => {
                return (

                    <Row key={key}>
                        <Col>
                            <br/>
                            {post.day}<span style={{cursor: "pointer"}}/>
                        </Col>

                        <Col>
                            <br/>
                            {post.status}<span style={{cursor: "pointer"}}/></Col>
                        <Col>
                            <br/>
                            {post.post}<span style={{cursor: "pointer"}}/></Col>
                        <Col>
                            <br/>
                            <Button onClick={() => this.props.deletePost(post)}>Delete Post</Button></Col>
                    </Row>)
            })}
        </div>
    }
}