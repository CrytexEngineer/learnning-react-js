import './App.css';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Col, Container, Row} from 'reactstrap';
import Home from './Home';


function App() {
    return (
        <BrowserRouter>
            <Container>
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <Link to="/">Home</Link>*/}
                {/*        /!* <a href="/" >Home</a> *!/*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Link to="/Profile">Profile</Link>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Link to="/Comments">Comments</Link>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            {/*<Route path="/about/:id">*/}
                            {/*    <About/>*/}
                            {/*</Route>*/}
                            {/* <Route path="/about(/:id)(/:number)">
                <About />
              </Route> */}
                            {/*<Route path="/about">*/}
                            {/*    <About/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/contact/:param">*/}
                            {/*    <ContactUs/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/contact">*/}
                            {/*    <ContactUs/>*/}
                            {/*</Route>*/}
                            {/*<Route exact path="/items">*/}
                            {/*    <ItemList/>*/}
                            {/*</Route>*/}
                            {/*<Route exact path="/items/:id">*/}
                            {/*    <ItemDetail/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/items/create">*/}
                            {/*    <ItemCreate/>*/}
                            {/*</Route>*/}
                        </Switch>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
