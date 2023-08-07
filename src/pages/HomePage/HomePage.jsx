import StyledButton from "../../components/StyledButton"
import StyledButtonRed from "../../components/StyledButtonRed"
import Container from "./styled"
import logoplanobranco from "../../assets/logoplanobranco.png"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"

export default function SignUpPage({dadosPlano, setDadosPlano}) {

    const {user, setUser} = useContext(UserContext)
    

    return (
        <Container>

        <header>
            <img src={dadosPlano.image} />
            <img src={logoplanobranco}/>
        </header>

        <p>Olá, {user.name}</p>

        <main>
        {dadosPlano.perks.map(l => (
            <Link to={dadosPlano.perks.link}>
            <StyledButton>{dadosPlano.perks.title}</StyledButton>
            </Link> 
        ))}
        </main>

        <footer>
        <StyledButton disabled={false}>Mudar plano</StyledButton>
        <StyledButtonRed disabled={false}>Cancelar plano</StyledButtonRed>
        </footer>
        
        </Container>
    )
}