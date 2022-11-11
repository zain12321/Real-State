import React from 'react'
import Footer from '../../components/Footer'
import Orders from '../../components/Orders'
import Card from '../Cards/Card'
import Header from '../Header'
import PropertiesCard from '../PropertiesCard'
import Select from '../Select'
import { Container } from './styles'

function Details() {
  return (
    <Container><Header/>
    <PropertiesCard/>
    <Orders/>
    <Card/>
    <Select/>
    <Footer/>
    </Container>
  )
}

export default Details