import styled from "styled-components"

const Container = styled.div`
background-color: black;
min-height: 600px;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 400px;
padding-top: 30px;
padding-bottom: 30px;
gap: 10px;
    & > p {
        font-weight: 700;
        font-size: 32px;
    }

    & > div {
        color: white;
        display: flex;        
        flex-direction: column;
        width: 299px;        
        align-items: start;
        justify-content: start;
    }

    & > inputslaterais {        
        display: flex;     
    }

    & > inputslaterais > input {
        width: 145px;
        height: 52px;
        border-radius: 8px;
        padding-left: 8px;
    }
`

export default Container