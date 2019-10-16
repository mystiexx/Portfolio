import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaTwitter, } from 'react-icons/fa'

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4} md={10}>
                        <div className="about-card p-4">
                    <div className="image"></div>
                    <h6 className="text-center about-name">Roland Enola</h6>

                    <article className="text-justify">
                        I am a FrontEnd Developer, Graphics Designer
    and am also into UI on my free time, i use react
    javascript framework to build webpages.
    Am a Marvel/DC fan, also a big fan of Animes,
    crazy about rap music, cause that’s what i like
    liestening to when coding, have been coding for
    5 years now

                    </article>
                </div>
                        </Col>

                        <Col>
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

export default About;
