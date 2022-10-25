import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url("https://www.fullture.com/wp-content/uploads/2020/07/topo-fullture.png");
background-size: cover;
background-position: center;
font-family: 'Barlow', sans-serif
`

export const SubContainer = styled.div`
height: 65vw;
width: 100%;
background-color: #1b1919;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 0;
margin: 0;
p{
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    margin: 0;
}
input{
    margin: 0;
    width: 80%;
    height: 9vw;
    font-size: 18px;
    background-color: #1b1919;
    border: 1px solid #fff;
    color: #fff;
    padding-left: 10px;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
}
button{
    cursor: pointer;
    color: #fff;
    background-color: #1b1919;
    border: 1px solid #fff;
    height: 11vw;
    width: 40%;
    :active{
        background-color: #fe692a;
        border: 1px solid #fe692a;
    }
}
`

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `