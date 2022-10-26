import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
background-size: cover;
background-position: center;
font-family: 'Barlow', sans-serif;
.icon{
    :hover{
        cursor: pointer;
    }
}
input{
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
}
.container{
    background-color: #515151; 
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    max-width: 80vw;
    min-height: 10vh;
    color: #fff;
    padding-left: 10px;
}
.subContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #515151;
    width: 80vw;
    min-height: 10vh;
    margin-bottom: 5%;
}
.preview{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 80vw - 3px;
    min-width: 80vw;
    min-height: 10vh;
    font-weight: 500;
    color: #515151;
    font-size: 30px;
    text-align: center
}
`

export const Modal = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
align-self: center;
justify-self: center;
background-color: #515151;
min-height: fit-content;
height: 50vw;
width: 90vw;
padding: 2vw;
text-align: center;
z-index: 3;
p{
    font-size: 18px;
    color: #fff;
}
a{
    color: #fff;
}
`

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `