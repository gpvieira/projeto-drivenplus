import styled from "styled-components"

const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 1000px;
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
