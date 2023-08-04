import Container from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import logoplanobranco from "../../assets/logoplanobranco.png"
import { useNavigate } from "react-router-dom"

export default function SubsPage() {

const navigate = useNavigate()

function handleSub(e) {
    e.preventDefault
    navigate("/home")
}

    return (
        <Container>

            <img src={logoplanobranco} />
            <p>Driven Plus</p>
            <div>
                <p>Benefícios</p>
                <p>1. Brindes Exclusivos</p>
                <p>2. Materiais bonus de web</p>
                <p>Preço:</p>
                <p>R$ 39,99 cobrados mensalmente</p>
            </div>            

        <StyledForm onSubmit={handleSub}>
        
            <StyledInput placeholder="Nome impresso no cartão" disabled={false} />
            <StyledInput placeholder="Dígitos do cartão" disabled={false} />
                <div>
                    <input placeholder="Código de Segurança"></input>
                    <input placeholder="Validade"></input>
                </div>
            <StyledButton>ASSINAR</StyledButton>

        </StyledForm>
        
        </Container>
    )
}