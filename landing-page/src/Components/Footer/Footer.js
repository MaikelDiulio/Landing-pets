import React from 'react'
import { Container } from './Footer.styled'
import cfooter from "../../assets/images/cfooter.jpg"
import linkedin from "../../assets/images/linkedin.svg"
import github from "../../assets/images/github.svg"

function Footer() {
    return (
        <>

            <Container>
                <div className='dog'>
                    <img src={cfooter} />
                </div>
                <div className='contact'>

                    <h2>Telefone</h2>

                    <p>(00) 4002-8922</p>

                    
                    <div className='redes'>
                    <a href='https://www.linkedin.com/in/maikel-diulio-5a3a49212/' target="_blank" >
                        <img src={linkedin}/>
                    </a>

                    <a href="https://github.com/MaikelDiulio" target="_blank" >
                        <img src={github} />
                    </a>
                    </div>

                </div>
                <div className='email'>

                    <h2>Email</h2>

                    <p>petshop@gmail.com<br/></p>

                        <br/>


                </div>
                <div className='endereco'>

                    <h3>Endereço:</h3>
                    
                    <span><br/>Seg - Sex: 8h às 20h. <br/>

Sab: 8h às 18h. <br/>
Domingo: Pet Shop e Centro de Estética abrem, e funcionam das 9h ás 15h </span>

                      
             

            </div>
        </Container>

        </>

    )
}

export default Footer