import logohome from "../../assets/logohome.png"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import Container from "./styled"

export default function LoginPage() {
    return (
        <Container>

        <img src={logohome} alt="Logotipo" />
        <StyledInput placeholder="E-mail" disabled={false} />
        <StyledInput placeholder="Senha" disabled={false} />
        <StyledButton disabled={false}>ENTRAR</StyledButton>
        <StyledLink>Não possui uma conta? Cadastre-se</StyledLink>
        
        </Container>
    )
}