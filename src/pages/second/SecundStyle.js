import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
min-height: 100vh;
background-size: cover;
background-position: center;
font-family: 'Barlow', sans-serif;
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

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `

// export const MainContainer = styled.div`

// `