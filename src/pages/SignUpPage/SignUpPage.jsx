import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import StyledForm from "../../components/StyledForm"
import Container from "./styled"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import apiAuth from "../../services/apiAuth"


export default function SignUpPage() {

    const [form, setForm] = useState({email: "", name: "", cpf: "", password: ""})

    const navigate = useNavigate()

    function handleSignUp(e) { 
        
        e.preventDefault()

        console.log(form)

        apiAuth.signUp(form)
        .then(res => {
            alert('Cadastro realizado com sucesso')
            navigate("/home")
        })
        .catch(err => {
            alert('Falha ao cadastrar usuário, tente novamente')
        })

    }

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <Container>            

        <StyledForm onSubmit={handleSignUp}>

            <StyledInput name="name" placeholder="Nome" type="text" required disabled={false} value={form.name} onChange={handleForm}/>
            <StyledInput name="cpf" placeholder="CPF" type="text" required disabled={false} value={form.cpf} onChange={handleForm}/>
            <StyledInput name="email" placeholder="E-mail" type="email" required disabled={false} value={form.email} onChange={handleForm}/>
            <StyledInput name="password" placeholder="Senha" type="password" required disabled={false} value={form.password} onChange={handleForm}/>
        
            <StyledButton type="submit" disabled={false}>CADASTRAR</StyledButton>
        
        </StyledForm>    

        <StyledLink to="/">Já possui uma conta? Entre</StyledLink>
        
        </Container>
    )
}