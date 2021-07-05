import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {Button, Card, CardBody, Col, Container, Input, Row} from "reactstrap";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            profiles: [],
            newComment: ""
        }
    }

    componentDidMount() {
        this.initData();
    }


    onUpdate = (e) => {
        this.setState({newComment: e.target.value})
    }

    initData = () => {
        axios.get(`http://localhost:3000/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({
                    posts
                });
            })

        axios.get(`http://localhost:3000/comments`)
            .then(res => {
                const comments = res.data;
                this.setState({
                    comments
                });
            })
    }


    postComment = () => {
        const comment = {body: this.state.newComment};
        const comments = this.state.comments;
        axios.post(`http://localhost:3000/comments`, comment)
            .then(res => {
                this.initData();
            });
    }


    deleteItem = (id) => {
        console.log("Fru,m")
        axios.delete(`http://localhost:3000/comments/${id}`)
            .then(res => {
                const comments = this.state.comments;
                this.setState({comments: [...comments.filter(it => it.id != id)]});
            })
    }


    render() {
        const {posts} = this.state;
        const {comments} = this.state
        return <div>
            <Container>
                <h1>Post</h1><br/>
                {posts.map((item) => {
                    console.log(item)
                    return (
                        <Row key={item.id}>
                            <td>{item.title}
                                {item.body}
                                <Link to={`/items/${item.id}`}>{item.itemName}</Link></td>
                        </Row>
                    )
                })}
                <br/>
                <br/>
                <h5>Comment</h5><br/>

                <Input type="textarea" name="text" id="exampleText" value={this.state.newComment}
                       onChange={this.onUpdate}/>
                <br/>
                <Button onClick={this.postComment}>Add new comment</Button>


                <br/>
                <br/>
                {comments.map((item) => {
                    return (
                        <Row key={item.id}>
                            <Card className="mb-4">
                                <CardBody>
                                    {item.title}
                                    {item.body}
                                    <Row>
                                        <Col> <Link to={`/items/${item.id}`}>{item.itemName}</Link></Col>
                                        <Col><Button onClick={()=>this.deleteItem(item.id)}>Remove</Button></Col>
                                    </Row>

                                < /CardBody>
                            </Card>

                        </Row>
                    )
                })}
            </Container>

        </div>
    }
}