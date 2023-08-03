import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import Container from "./styled"


export default function SignUpPage() {
    return (
        <Container>

        <StyledInput placeholder="Nome" disabled={false} />
        <StyledInput placeholder="CPF" disabled={false} />
        <StyledInput placeholder="E-mail" disabled={false} />
        <StyledInput placeholder="Senha" disabled={false} />
        <StyledButton disabled={false}>CADASTRAR</StyledButton>
        <StyledLink>Já possui uma conta? Entre</StyledLink>
        
        </Container>
    )
}