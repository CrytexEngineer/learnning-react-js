import React from 'react';
import {Button, Col, Input, Label, Row} from "reactstrap";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                post: '',
                day: '',
                status: ''
            }
        }
    }

    updateDay = (e) => {
        this.setState({
            post: {
                day: e.target.value,
                post: this.state.post.post,
                status: this.state.post.status
            }
        })
    }
    updatePost = (e) => {
        this.setState({
            post: {
                post: e.target.value,
                day: this.state.post.day,
                status: this.state.post.status,
            }
        })
    }
    updateStatus = (e) => {
        this.setState({
            post: {
                post: this.state.post.post,
                day: this.state.post.day,
                status: e.target.value,
            }
        })
    }

    addPost = () => {
        const post = this.state.post;
        this.props.addPost(post);
        this.setState({
            post: {
                post: '',
                day: '',
                status: ''
            }
        })
    }

    render() {
        return <Row>

            <Col>
                <br></br>
                <br></br>
                <Label>Day</Label>
                <Input type="text" name="day" value={this.state.post.day}
                       onChange={this.updateDay}/></Col>

            <Col>
                <br></br>
                <br></br>
                <Label>Post</Label>
                <Input type="text" name="post" value={this.state.post.post}
                       onChange={this.updatePost}/>
            </Col>

            <Col>
                <br></br>
                <br></br>
                <Label>Status</Label>
                <Input type="text" name="status" value={this.state.post.status}
                       onChange={this.updateStatus}/>
            </Col>

            <Col><br></br>
                <br></br>
                <br></br>
                <Button onClick={this.addPost}>Add Post</Button> </Col>
        </Row>

    }
}