import React from 'react'
import { SobreContainer } from './Sobre.styled'
import o1 from "../../assets/images/o1.png"
import c2 from "../../assets/images/c2.png"
import c3 from "../../assets/images/c3.png"

function Sobre() {
    return (
        <>

            <SobreContainer>


                <h1>Quem somos</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
                    non orci vitae porta. Vestibulum et rutrum massa, nec varius tortor.
                    Cras pharetra nisi non ex facilisis blandit. Quisque convallis vulp
                    utate eleifend. Vestibulum ullamcorper, nisl at blandit vulputate,
                    lectus augue auctor dui, eget pellentesque turpis ipsum vel ligula.
                    Nullam ac vestibulum velit, ac ornare lectus. Morbi metus risus, vul
                    putate sit amet elit ac, pellentesque finibus nibh.
                    

                    Fusce efficitur convallis molestie. Cras tempus magna at erat ultricies varius. Proin
                    
                    in condimentum ipsum. Fusce egestas nunc magna, in luctus erat pellentesque id. In ali
                    quam eros tristique placerat maximus. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Nam viverra sem nunc, in porta turpis hend
                    rerit a. Donec pellentesque at lectus in fermentum. Praesent nec ante sollicitudin, lu
                    ctus arcu sed, imperdiet risus. Donec fringilla euismod tellus. Pellentesque vitae pret
                    ium justo. Vestibulum convallis mauris ipsum, quis iaculis nulla congue ut. Morbi viver
                    ra sapien elit, vitae commodo ligula porta volutpat. Maecenas eleifend mollis ligula sit
                    amet ultricies.



                </p>

                <div className='figure'>
                    <img src={o1} alt="enfeites"/>
                    <img src={c2} alt="enfeites"/>
                    <img src={c3} alt="enfeites"/>
                    
                </div>


            </SobreContainer>




        </>
    )
}

export default Sobre