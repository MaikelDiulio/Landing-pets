import React, { useEffect, useRef, useState } from 'react'
import { CarouselContainer, Rotate } from './Carousel.styled'
// import cr1 from "../../assets/images/cr1.webp"
// import cr2 from "../../assets/images/cr2.webp"
// import cr3 from "../../assets/images/cr3.jpg"
import botao from "../../assets/images/botao.png"
function Carousel() {

    const caroulselRef = useRef(null);
    const [count, setCount] = useState(1)

    const rigthClick = (e) => {
        e.preventDefault();
        caroulselRef.current.scrollLeft += caroulselRef.current.offsetWidth
    }


    const leftClick = (e) => {
        e.preventDefault();
        caroulselRef.current.scrollLeft -= caroulselRef.current.offsetWidth
    }


    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 2000);


        return () => clearInterval(interval);
    }, [count]);


    const nextImage = () => {
        setCount((count) => (count % 4) + 1);
    };


    return (
        <>
            <CarouselContainer ref={caroulselRef} >
                <div className="imagens">
                    <div className="boxSpan">

                        <div className='banner1' >

                            <span checked={count === 1}
                                onChange={() => setCount(1)}>Os melhores preços vc encontra aqui!</span>
                        </div>
                        <div className='banner2' >
                            <span checked={count === 2}
                                onChange={() => setCount(2)}>novos clientes com cupons exclusivos</span>
                        </div>
                        <div className='banner3'>
                            <span checked={count === 3}
                                onChange={() => setCount(3)}>tudo que seu pet precisa!</span>
                        </div>
                    </div>
                </div>

            </CarouselContainer>

                    <Rotate>
                        <div className='arrowLeft'>
                            <button className='buttomLeft' onClick={leftClick}> <img src={botao} alt="botão" /></button>
                        </div>

                        <div className='arrowRigth'>
                            <button className='buttomRigth' onClick={rigthClick}> <img src={botao} alt="botão" /></button>
                        </div>

                    </Rotate>



        </>
    )
}

export default Carousel