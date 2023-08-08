import StyledButton from "../../components/StyledButton"
import StyledButtonRed from "../../components/StyledButtonRed"
import Container from "./styled"
import logoplanobranco from "../../assets/logoplanobranco.png"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"
import icone from "../../assets/icone.png"

export default function SignUpPage({dadosPlano, setDadosPlano, id_do_plano}) {

    const {user, setUser} = useContext(UserContext)    
    
    console.log(dadosPlano)

    console.log(id_do_plano)

    return (
        <Container>

        <header>
            <img src={dadosPlano.image} />
            <img src={icone} />
        </header>

        <p>Olá, {user.name}</p>

            

        <footer>
        <StyledButton disabled={false}>Mudar plano</StyledButton>
        <StyledButtonRed disabled={false}>Cancelar plano</StyledButtonRed>
        </footer>
        
        </Container>
    )
}