import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FaFacebookF, FaGithub, FaTwitter, } from 'react-icons/fa'

class Home extends Component {
    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const d = new Date();
        const day = days[d.getDay()];
        return (
            <div className="home-bar">
                <Container>
                    <Row>
                        <Col sm={4} md={10}>
                            <div className="welcome-text">
                                <h1 className="day">{day}</h1>
                                <h3 className="quote">And so the adventure <br /> begins...</h3>
                                <Button variant="outline-secondary" size="lg" className="btn">Portfolio</Button>

                                <div className="projects-box d-flex flex-row p-2">
                                    <div className="list-project">
                                        <Row>
                                            <Col md={4}>
                                                <h6>Image</h6>
                                            </Col>
                                            <Col>
                                                <h6>Project Title</h6>
                                                <article>  Enim qui consectetur Lorem nulla labore occaecat adipisicing aliquip. Deserunt fugiat duis
                                               </article>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="list-project">
                                        <Row>
                                            <Col md={4}>
                                                <h6>Image</h6>
                                            </Col>
                                            <Col md={6}>
                                                <h6>Project Title</h6>
                                                <article>  Enim qui consectetur Lorem nulla labore occaecat adipisicing aliquip. Deserunt fugiat duis
                                               </article>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </div>

                        </Col>

                        <Col md={2}>
                           
                                <div className="line">
                                <div className="side d-flex flex-lg-column flex-sm-row">
                                    <div className="icon-bar mb-lg-4 mr-sm-3">
                                        <FaFacebookF className="icon" />
                                    </div>
                                    <div className="icon-bar mb-lg-4 mr-sm-3">
                                        <FaGithub className="icon" />
                                    </div>
                                    <div className="icon-bar">
                                        <FaTwitter className="icon" />
                                    </div>
                                    </div>
                                </div>

                           

                        </Col>

                    </Row>
                </Container>

            </div>
        );
    }
}

export default Home;
