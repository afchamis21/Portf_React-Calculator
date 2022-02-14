import styled from "styled-components";


export const Container = styled.div`


display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;

h1{
  margin-bottom: 1rem;
}
body{
  height: 50rem;
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .display{
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    height:7rem;
    background-color: #5429CC;
    font-size: 5rem;
    line-height:5rem;
    text-align: right;
    color: #fff;
    border-radius: 2rem;
    margin-bottom:1rem;
  }

  .buttonArea{
    display:flex;
    flex-wrap: wrap;
    gap:0.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;

    button{
      height: 8rem;
      width: 8rem;
      border: none;
      border-radius:4rem;
      font-size: 2rem;
      transition: filter 0.1s;
      background-color: #F0F2F5;
      box-shadow: 0 0 3px  #969CB3;

      &:hover{
        cursor: pointer;
        filter: brightness(0.8);
      }
    } 

    .GreenButton{
      background-color:#33CC95;
      color: #FFFFFF;
    }
  }
}
`