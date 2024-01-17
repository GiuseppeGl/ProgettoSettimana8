import React, { useState } from 'react'
import { Container, Navbar, Form, Row, Col } from 'react-bootstrap'
import cities from '../city.list.json'
import ListaComponent from '../components/ListaComponent'
import orso from '../img/orso.jpg'

export default function HomePage() {

    const [dati, setDati] = useState([])


  const handlerChangeS = (e) => {
    const cerca = e.target.value
    if(e.target.value.length > 2) {
        function cFirstLetter(string) {
            const lowercaseString = string.toLowerCase();
            return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
        }
       let goodCity = cFirstLetter(cerca)
       const results = cities.filter(city => city.name.includes(goodCity));
       setDati(results)
    } else {
        setDati([])
    }


  }


    return (
    <>
        <Container >
            <h1 className='text-center'> Il Meteo dove vuoi </h1>
            <div className='text-center'><img src={orso} alt="Background" style={{ width: '30%', marginTop: '20px' }} /></div>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Row className='w-100 m-4 d-flex align-items-center'>
                    <Col md="12" >
                        <Form.Control
                        type="text"
                        placeholder="Search your location..."
                        className=" mr-sm-2"
                        onChange={handlerChangeS}
                        />
                    </Col>
                </Row>
            </Navbar>
            {setDati && <ListaComponent cities={dati} /> }
        </Container>
    </>
  )
}
