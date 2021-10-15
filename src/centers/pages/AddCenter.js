import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faEnvelope, faUser, faBed, faCoins } from '@fortawesome/free-solid-svg-icons'
import { Container, Card, Button, Row, Col, Placeholder, Navbar, Form, InputGroup, FormControl, FloatingLabel, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const searchIcon = <FontAwesomeIcon icon={faSearch} />

const AddCenter = () => {
    return (
        <>
        <Navbar bg="light">
        <Container>
                <Stack direction="horizontal" gap={3}>
                    <Navbar.Brand>Add Center</Navbar.Brand>
                </Stack>
            </Container>
        </Navbar>
            <Container>
            <Stack gap={3}>
                <div className="bg-light border">First item</div>
                <div className="bg-light border">Second item</div>
                <div className="bg-light border">Third item</div>
            </Stack>
            </Container>
            <Navbar bg="dark">
                <Row style={{color:'white', width:'100%', margin:'1rem'}}>
                <Col>
                </Col>
                </Row>
            </Navbar>
        </>
        );
};

export default AddCenter;