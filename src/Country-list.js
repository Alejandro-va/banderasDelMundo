import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import Country from './Country';
import {useSelector} from 'react-redux';

const CountrylistStyled = style.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  border:1px solid red;
  padding: 4em 2em;
`

const CountryList = () => {
  const state = useSelector((state) => state)
  console.log('el estado total de mi app es', state)
  const [countryList, setCountryList] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
      setCountryList(data)
      console.log(data)
    })
    .catch(()=>{
      console.log('Hubo un error')
    })
  }, [])
  return (
    <CountrylistStyled>
      {
        /* countryList.map((country)=>{uso country pq estoy iterando al componente  */
        countryList.map(({name, flag, population, region, capital})=>{/*cambio country por los datos del api*/
          return(
            
            <Country
            
              flag={flag}
              name={name}
              key={name}
              population={population}
              region={region}
              capital={capital}
             />

          )
        })
      }
    
    </CountrylistStyled>
    );
}
 
export default CountryList;