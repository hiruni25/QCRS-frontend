import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faEnvelope, faUser, faBed, faCoins } from '@fortawesome/free-solid-svg-icons'
import { Container, Card, Button, Row, Col, Placeholder, Navbar, Form, InputGroup, FormControl, FloatingLabel, Stack } from 'react-bootstrap';

const UpdateCenter = () => {

    return(
        <>
        <Navbar bg="light">
        <Container>
                <Stack direction="horizontal" gap={3}>
                    <Navbar.Brand>Update Centers</Navbar.Brand>
                </Stack>
            </Container>
        </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                    <Card.Body>
                            <Card.Title>Hotel 2</Card.Title>
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
                            </Row>
                            <Row>
                            <Col>
                            <Button variant="success">Update</Button>
                            </Col>
                            <Col>
                            <Button variant="danger">Delete</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                        <Card.Body>
                            <Card.Title>Hotel 2</Card.Title>
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
                            </Row>
                            <Row>
                            <Col>
                            <Button variant="success">Update</Button>
                            </Col>
                            <Col>
                            <Button variant="danger">Delete</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem'  }}>
                    <Card.Body>
                            <Card.Title>Hotel 2</Card.Title>
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
                            </Row>
                            <Row>
                            <Col>
                            <Button variant="success">Update</Button>
                            </Col>
                            <Col>
                            <Button variant="danger">Delete</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Navbar bg="dark">
                <Row style={{color:'white', width:'100%', margin:'1rem'}}>
                </Row>
            </Navbar>
        </>
    );
};

export default UpdateCenter;