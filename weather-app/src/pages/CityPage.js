import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, Container } from 'react-bootstrap';

export default function CityPage() {

  const { lon, lat } = useParams();
  const [datiMeteo, setDatiMeteo] = useState({});
  const navigate = useNavigate()


  useEffect(() => {
    let url =  'https://api.openweathermap.org/data/2.5/weather?appid=e91513d78476fc1a769fed09508ca808&lang=it&units=metric'
    axios(url + '&lon=' + lon + '&lat=' + lat).then((response) => {
      setDatiMeteo(response.data)
      console.log(response.data)
    })
      .catch(function (error) {
        console.log(error);
      })

  }, [lon, lat])


  return (
    <>
    <Button className='ms-5 my-5' variant="primary" type='button' onClick={() => navigate('/')}><i class="bi bi-caret-left-fill"></i> HomePage</Button>
    <Container className='d-flex justify-content-center'>
      <Card className='w-50'>
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