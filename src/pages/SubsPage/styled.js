import styled from "styled-components"

const Container = styled.div`
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
width: 400px;
padding-top: 30px;
padding-bottom: 30px;
min-height: 600px;
& > p {
    color: white;
    font-weight: 700px;
    font-size: 24px;
}
`

export default Container