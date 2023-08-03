import Container from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import logoplanobranco from "../../assets/logoplanobranco.png"

export default function SubsPage() {
    return (
        <Container>

            <img src={logoplanobranco} />
            <p>Driven Plus</p>
            <texto>
                <p>Benefícios</p>
                <p>1. Brindes Exclusivos</p>
                <p>2. Materiais bonus de web</p>
                <p>Preço:</p>
                <p>R$ 39,99 cobrados mensalmente</p>
            </texto>            

        <StyledInput placeholder="Nome impresso no cartão" disabled={false} />
        <StyledInput placeholder="Dígitos do cartão" disabled={false} />
        <inputslaterais>
            <input placeholder="Código de Segurança"></input>
            <input placeholder="Validade"></input>
        </inputslaterais>
        <StyledButton>ASSINAR</StyledButton>
        
        </Container>
    )
}