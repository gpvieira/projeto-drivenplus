import StyledButton from "../../components/StyledButton"
import StyledButtonRed from "../../components/StyledButtonRed"
import Container from "./styled"
import logoplanobranco from "../../assets/logoplanobranco.png"


export default function SignUpPage() {
    return (
        <Container>

        <header>
            <img src={logoplanobranco} />
            <img src={logoplanobranco}/>
        </header>

        <p>Olá, fulano</p>

        <main>
        <StyledButton disabled={false}>Solicitar brindes</StyledButton>
        <StyledButton disabled={false}>Materiais bônus de web</StyledButton>
        </main>

        <footer>
        <StyledButton disabled={false}>Mudar plano</StyledButton>
        <StyledButtonRed disabled={false}>Cancelar plano</StyledButtonRed>
        </footer>
        
        </Container>
    )
}