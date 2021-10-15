import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faEnvelope, faUser, faBed, faCoins } from '@fortawesome/free-solid-svg-icons'
import { Container, Card, Button, Row, Col, Placeholder, Navbar, Form, InputGroup, FormControl, FloatingLabel, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const searchIcon = <FontAwesomeIcon icon={faSearch} />

const Center = () => {

    return(
        <>
        <Navbar bg="light">
        <Container>
                <Stack direction="horizontal" gap={3}>
                    <Navbar.Brand>Center</Navbar.Brand>
                    <FormControl id="inlineFormInputSearch" placeholder="Search" />                
                    <Button variant="secondary">{searchIcon}</Button>
                    <Form.Select defaultValue="Price Range">
                        <option>Price</option>
                        <option>0 - 15,000</option>
                        <option>15,000 - 50,000</option>
                        <option>50,000 +</option>
                    </Form.Select>
                    <Form.Select defaultValue="District">
                        <option>District</option>
                        <option>Colombo</option>
                        <option>Gampaha</option>
                        <option>Kilinochchi</option>
                    </Form.Select>
                </Stack>
            </Container>
        </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                        <Card.Body>
                            <Card.Title>Package 1</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> 1 x Guests
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faBed} /> 1 x Bed
                            </Card.Text>
                            <Row>
                            <Col>
                            <FontAwesomeIcon icon={faCoins} /> Rs.14,000
                            </Col>
                            <Col>
                            <Button variant="primary">Reserve</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                        <Card.Body>
                            <Card.Title>Package 2</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> 1 x Guests
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faBed} /> 1 x Bed
                            </Card.Text>
                            <Row>
                            <Col>
                            <FontAwesomeIcon icon={faCoins} /> Rs.24,000
                            </Col>
                            <Col>
                            <Button variant="primary">Reserve</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                        <Card.Body>
                            <Card.Title>Package 3</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faUser} /> 1 x Guests
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faBed} /> 1 x Bed
                            </Card.Text>
                            <Row>
                            <Col>
                            <FontAwesomeIcon icon={faCoins} /> Rs.54,000
                            </Col>
                            <Col>
                            <Button variant="primary">Reserve</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Navbar bg="dark">
                <Row style={{color:'white', width:'100%', margin:'1rem'}}>
                <Col>
                    <h5>Contact Details</h5><br />
                    <p>Feel free to contact us by phone, email or by our contact form</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 070 2482252</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> qcenter.online@gmail.com</p>
                </Col>
                <Col>
                    <p>SEND US A MESSAGE</p>
                    <Form>
                    <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                        <Row>
                        <Col><Form.Control type="text" placeholder="Your Full Name" /></Col>
                        <Col><Form.Control type="text" placeholder="Phone Number" /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Message"/><br />
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form.Group>
                    </Form>
                </Col>
                </Row>
            </Navbar>
        </>
    );
};

export default Center;