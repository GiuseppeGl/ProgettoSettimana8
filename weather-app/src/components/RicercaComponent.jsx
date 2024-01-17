import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function RicercaComponent( {datiMeteo}) {

    const navigate = useNavigate()
  return (
    <>
    <Button className='ms-5 my-5' variant="primary" type='button' onClick={() => navigate('/')}><i class="bi bi-caret-left-fill"></i> HomePage</Button>
    <Container className='d-flex justify-content-center'>
      <Card className='w-20'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{datiMeteo.name}</Card.Title>
          <Card.Text>
            {datiMeteo.weather && datiMeteo.weather[0].description}
          </Card.Text>
          <Card.Text>
             Temperatura attuale : <span className='text-danger'>{datiMeteo.main && datiMeteo.main.temp} </span> 
            <hr></hr>Minima : {datiMeteo.main && datiMeteo.main.temp_min} Massima : {datiMeteo.main && datiMeteo.main.temp_max} 
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}
