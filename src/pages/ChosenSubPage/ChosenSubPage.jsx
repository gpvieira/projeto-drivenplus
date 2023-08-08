import Container from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledForm from "../../components/StyledForm"
import logoplanobranco from "../../assets/logoplanobranco.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import apiSubs from "../../services/apiSubs"
import { UserContext } from "../../contexts/UserContext"
import { useParams } from "react-router-dom"


export default function ChosenSubsPage({dadosPlano, setDadosPlano}) {

const navigate = useNavigate()

const {id_do_plano} = useParams()

const {user, setUser} = useContext(UserContext)

const [form, setForm] = useState({membershipId: "", cardName: "", cardNumber: "", securityNumber: "", expirationDate: ""})

const token = user.token

function atribuirAssinatura(){    
    setForm({...form, membershipId: Number(id_do_plano)})
}

function handleSub(e) {     
        
    e.preventDefault()       

    apiSubs.signSub(form, user.token)
    .then(res => {
        navigate("/home")
        console.log(form)
        console.log(user.token)
    })
    .catch(err => {
        alert('Falha ao realizar a assinatura, tente novamente')
        console.log(form)
        console.log(user.token)
    })

}

function handleForm(e) {
    setForm({...form, [e.target.name]: e.target.value})
}

function handleFormNumber(e) {
    setForm({...form, [e.target.name]: Number(e.target.value)})
}

function getSubDetail(){
    apiSubs.getSub(user.token, id_do_plano)
        .then(res => {
            const {image, price, perks} = res.data
            setDadosPlano({image, price, perks})
            
            console.log(res.data)
        })
        .catch(err => {
            alert('Algo deu errado!')
        })
}

    useEffect(() => getSubDetail(), [])
    useEffect(() => atribuirAssinatura(), [])

    return (
        <Container>        

        <img src={dadosPlano.image} />

        <p>Benefícios:</p>
        {dadosPlano.perks.map(b => (
            <p>{dadosPlano.perks.id}. {dadosPlano.perks.title}</p>
        ))}

        <p>Preço:</p>
        <p>R$ {dadosPlano.price} cobrados mensalmente</p>
          
        
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

/*
<p>Benefícios:</p>
        {dadosPlano.perks.map(b => (
            <p>{dadosPlano.perks.id}. {dadosPlano.perks.title}</p>
        ))}
        */
