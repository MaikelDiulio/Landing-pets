import styled from "styled-components"

export const SobreContainer = styled.div`

    width: 100%;
    height: 90vh;
    background-color: #67B1C6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    h1{
    font-size: 2.5rem;
    color: #EABF02;
    font-family:'Josefin Sans', sans-serif;
    margin-bottom: 1rem;
    }

    p{
    
    width: 60vw;
    max-height: 400px;
    color:white;
    word-wrap: break-word;
    font-size: 1.1875em;
    }

    .figure{
        margin-top: 3%;
        width: 65%;
        display: flex;
        justify-content: space-between;
        

        img{
            width: 100px;
        }
    }

`