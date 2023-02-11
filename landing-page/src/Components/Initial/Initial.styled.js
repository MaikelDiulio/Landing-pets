import styled from "styled-components";





export const Main = styled.div`


  /* width: 100%; */
  /* height: 100%; */
  padding: 40px 0;
  background-color: #EABF02;
  /* background-position: center; */
  /* background-size: cover; */
  /* min-height: 400px; */

`

export const Nav = styled.div`
background-color: burlywood;
display: flex;
justify-content: space-between;
align-items: flex-end;
height: 5vh;
width:100%;

 button{
  border: none;
  height: 5vh;
  width: 20vw;
  margin: 0 0.5px;
  border-radius:2px;
  background-color: #6979c7;
  color: white;
  text-transform: uppercase;
  font-weight:bold;
  font-family:'Josefin Sans', sans-serif;

  :hover {
        cursor:pointer;
        filter: brightness(1) ;
        
        background-color:gray;
    }
  
    :active {
        filter: brightness(0.8);
        color: white;
    }
    
}

 

`



export const Center = styled.div`
 
  max-width: 100%;
  max-height: 600px;
  margin: 0 auto;
  /* margin-bottom: 5rem; */
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;

  


`

export const Menu = styled.div`
 
 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
   


   h2 {
   color: #736F71;
   } 

  a {
  color: #736F71;
  text-decoration: none;
  border: 1px solid #736F71;
  padding: 3px 8px;
  border-radius: 5px;



  :hover {
        cursor:pointer;
        filter: brightness(1) white;
    }

    :active {
        filter: brightness(0.8);
        color:black;
        border:black;
    }
  }
 
`


export const BoxSingUp = styled.div`

    max-height: 700px;
    width: 50%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;

    .form {
  padding: 0 10px;
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
  margin: 40px auto;
  justify-content: center;
  /* flex-direction: column; */
  }

   .cadastro-form {
  margin: 0 auto;
  max-width: 50vw;
  display: flex;
  width: 100%;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 20px;
   } 

  .form h2 {
  color: #736F71;
  font-size: 1.25em;
  font-weight: normal;
  font-family: 'Josefin Sans', sans-serif;
  text-transform: inherit;
  margin-top: 5px;
  margin-left: 20px;
  }

  .cadastro-form input[type=text] {

  width: 20vw;
  height: 6vh;
  margin: 8px 0px;
  border-radius: 11px;
  border: none;
  justify-content: space-around;
  text-align: center;
   }

  .cadastro-form input[type=submit] {

  width: 40%;
  height: 3.5vh;
  border-radius: 1rem;
  background-color: #378FC7;
  cursor: pointer;
  color: white;
  border: 0;
  font-size: 2rem,;
  margin-left: 5vw;


  :hover {
        cursor:pointer;
        filter: brightness(1.20);
    }

    :active {
        filter: brightness(0.85);
        
    }



   }
    
    
`


export const BoxRigth = styled.div`



    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    .bolinhas{
      background-color: aqua;
    
    }
    .bkimg {
      display: flex;
      justify-content: center ;
      background-color: white;
      border-radius: 45%;
      box-sizing: 5px 5px;
      box-shadow:10px 13px 200px whitesmoke;

    }

    
     img{
        height: 50%;
        width: 32.89vw;
        margin-top: 0.5vh;
        border-radius: 10%;
        background-color: transparent;
        border: none;
     } 


     .logo{
        color: #736F71;
        font-family:'Josefin Sans', sans-serif;
        font-size:5vw;
        margin-left: 5vw;

     }

     .osso{
        width: 3vw;
     }



`


