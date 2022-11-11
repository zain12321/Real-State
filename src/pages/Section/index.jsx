import React from 'react'
import Footer from '../../components/Footer'
import Category from '../Category'
import Header from '../Header'
import PropertiesCard from '../PropertiesCard'
import Select from '../Select'
import {Container} from './styles'

function Section() {
  return (
    <Container>
      <Header/>
      <PropertiesCard/>
      <Category/>
      <Select/>
      <Footer/>
    </Container>
  )
}

export default Section