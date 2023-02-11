import React from 'react'
import { BoxSingUp, BoxRigth, Center, Menu, Main, Nav } from './Initial.styled'
import Dog1 from "../../assets/images/dog1.png"


function Initial() {
    return (
        <>

            <Main>
                <Center>
                    <Menu>
                        <div className="logoTipo">
                            <h2> Pets Dog</h2>
                        </div>

                        <div className="Itens">
                            <a>login</a>
                        </div>
                    </Menu>
                    <BoxSingUp>
                        <div className="form">
                            <form>
                                <h2>Cadastre-se</h2>
                                <div className="cadastro-form">
                                    <input type="text" placeholder="Nome Completo..." />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Password" />

                                    <input type="submit" />

                                </div>
                            </form>
                        </div>
                    </BoxSingUp>

                    <BoxRigth>


                        <h1 className='logo'>Pets Dog</h1>
                        <div className="bkimg">

                            <img src={Dog1} alt="logo imagem"/>


                        </div>
                    </BoxRigth>
                </Center>
            </Main>
            <Nav>
                <button>brinquedos</button>
                <button>acessórios</button>
                <button>medicamentos</button>
                <button>alimentação</button>
                <button>banho e tosa</button>
            </Nav>

        </>
    )
}

export default Initial