import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../../assets/images/ArrowLeftBlack.svg'
import {ReactComponent as ArrowRight} from '../../assets/images/ArrowRight.svg'
import { Btn, Buttons, Container } from './styles'

function Select() {
  return (
    <Container>
       <Buttons>
       <Link to='/section'>

                <Btn>
                   <ArrowLeft/>
                </Btn>
                </Link>

                <Btn primary2 primary>
                   1
                </Btn>
                <Btn primary1>
                   2
                </Btn><Btn primary1>
                3
                </Btn><Btn primary1>
                 ...
                </Btn>
                <Link to='/details'>
                <Btn primary>

<ArrowRight/>
</Btn>
                </Link>
                
               </Buttons>
    </Container>
  )
}

export default Select