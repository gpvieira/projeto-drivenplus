import Container from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import logoplanobranco from "../../assets/logoplanobranco.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import apiSubs from "../../services/apiSubs"
import { UserContext } from "../../contexts/UserContext"

export default function SubsPage() {

const navigate = useNavigate()

const {user, setUser} = useContext(UserContext)

const [form, setForm] = useState({membershipId: "1", cardName: "", cardNumber: "", securityNumber: "", expirationDate: ""})

console.log(user)


function handleSub(e) {     
        
    e.preventDefault()

    apiSubs.signSub(form)
    .then(res => {
        navigate("/home")
    })
    .catch(err => {
        alert('Falha ao realizar a assinatura, tente novamente')
    })

}

function handleForm(e) {
    setForm({...form, [e.target.name]: e.target.value})
}

function handleFormNumber(e) {
    setForm({...form, [e.target.name]: Number(e.target.value)})
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
        
            <StyledInput name="cardName" placeholder="Nome impresso no cartão" type="text" required disabled={false} value={form.cardName} onChange={handleForm}/>
            <StyledInput name="cardNumber" placeholder="Dígitos do cartão" type="text" required disabled={false} value={form.cardNumber} onChange={handleForm}/>
            <StyledInput name="securityNumber" placeholder="Código de Segurança" type="text" required disabled={false} value={form.securityNumber} onChange={handleFormNumber}/>
            <StyledInput name="expirationDate" placeholder="Validade" type="text" required disabled={false} value={form.expirationDate} onChange={handleForm}/>
                   
            <StyledButton type="submit">ASSINAR</StyledButton>

        </StyledForm>
        
        </Container>
    )
}