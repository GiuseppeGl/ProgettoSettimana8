import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import RicercaComponent from '../components/RicercaComponent';


export default function CityPage() {

  const { lon, lat } = useParams();
  const [datiMeteo, setDatiMeteo] = useState({});
 


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
    < RicercaComponent datiMeteo={datiMeteo} />
    </>
  )
}