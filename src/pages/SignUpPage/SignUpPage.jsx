import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import StyledForm from "../../components/StyledForm"
import Container from "./styled"
import { useNavigate } from "react-router-dom"


export default function SignUpPage() {

    const navigate = useNavigate()

    function handleSignUp(e) { 
        e.preventDefault()
        navigate("/")
    }

    return (
        <Container>

            

        <StyledForm onSubmit={handleSignUp}>

            <StyledInput placeholder="Nome" disabled={false} />
            <StyledInput placeholder="CPF" disabled={false} />
            <StyledInput placeholder="E-mail" disabled={false} />
            <StyledInput placeholder="Senha" disabled={false} />
            <StyledButton disabled={false}>CADASTRAR</StyledButton>
        
        </StyledForm>    

        <StyledLink to="/">Já possui uma conta? Entre</StyledLink>
        
        </Container>
    )
}