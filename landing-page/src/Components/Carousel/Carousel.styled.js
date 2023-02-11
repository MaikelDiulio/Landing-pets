import styled from "styled-components";
import cr1 from "../../assets/images/cr1.webp"
import cr2 from "../../assets/images/cr2.webp"
import cr3 from "../../assets/images/cr3.jpg"


export const CarouselContainer = styled.div`

  width:100%;
  border-radius: 4px;
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: azure;

  max-height: 700px;

  .boxSpan {
  display: flex;
  flex-direction: row;
   }
   .banner1{
    display: flex;
    align-items:center;
    width:98.6vw;
    height: 64vh;
    background-image: url(${cr1});
    

   }

   span{
      width: 50vw;
      max-height: 700px;
    font-size: 60px;
    /* font-family: 'Josefin Sans', sans-serif; */
    font-family: 'Orbitron', sans-serif;
    color: white;
    margin: 0 auto;
    margin-left: 100px;
    /* padding: 20px; */
    text-transform: uppercase ;
    font-weight: bold;
   
    
   }  

   .banner2{
    display: flex;
    align-items:center;
    width:98.6vw;
    height: 64vh;
    background-image: url(${cr2})

   }
   .banner3{
    display: flex;
    align-items:center ;
    font-size:100px;
    width:98.6vw;
    height: 64vh;
    background-image: url(${cr3})

   }
   .crImage {
  width: 98.6vw;
  height: 64vh;
   }

 


`


export const Rotate = styled.div`

   /* width: 100%;
   text-align: center;
   display: flex;
   align-items: center;
   flex-direction:row ; */


    
   /* .arrowLeft{
      display: flex;
      width: 100%;
      justify-content: flex-start;
      
   } */
   
   
   .buttomLeft {
      
      transform: translate(180deg);
       display: flex;
       /* flex-direction: row; */
       margin:10px 10px ;
       background-color: transparent;
       border: none;
       cursor: pointer;
       z-index: 1;
       position:absolute;
       top:650px;
       bottom: 0px;
       /* transform: rotate(100deg) ; */
         img{
            transform: rotate(180deg);
            color: gray;
         }
    
      }



      .arrowRigth{
         display: flex;
         width: 100%;
         justify-content:flex-end ;
      }

      .buttomRigth {
         
         display: flex;
       background-color: transparent;
       margin:10px 10px ;
       border: none;
       cursor: pointer;
       z-index: 2;
       position:absolute;
       top:650px;
       bottom: 0;
       justify-content: flex-end;
       bottom: -100px;

       img{
        margin-right:10px
       }
    }

    

   
   
    
     

`


