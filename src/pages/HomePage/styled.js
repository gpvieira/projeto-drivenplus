import styled from "styled-components"

const Container = styled.div`
    background-color: black;
    display: flex;
    min-height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 400px;
    padding-top: 30px;
    padding-bottom: 30px;
        & > p {
            color: #FFFFFF;
            font-weight: 700;
            font-size: 24px;
        }
        & > header {
            display: flex;
            width: 299px;
            justify-content: space-between;
        }
        & > header > img {
            width: 74px;
            height: 50px;
        }
        & > main {
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 400px;
        }
        & > footer {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
`

export default Container
