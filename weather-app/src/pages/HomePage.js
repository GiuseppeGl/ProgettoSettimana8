import React from 'react'
import { Container, Navbar, Form, Row, Col, Button } from 'react-bootstrap'

export default function HomePage() {
  return (
    <Container>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Row className='w-100 m-4 d-flex align-items-center'>
                    <Col md="9" >
                        <Form.Control
                        type="text"
                        placeholder="Search your location..."
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col md="3">
                        <Button size="lg" className='px-5' type="button">Submit  <i class="bi bi-cloud-lightning-rain"></i></Button>
                    </Col>
                </Row>
            </Navbar>
        </Container>
  )
}
