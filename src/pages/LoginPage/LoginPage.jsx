import logohome from "../../assets/logohome.png"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import StyledForm from "../../components/StyledForm"
import Container from "./styled"
import { useNavigate } from "react-router-dom"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"


export default function LoginPage() {
    
    const [form, setForm] = useState({email: "", password: ""})
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()


    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleLogin(e) {
        e.preventDefault()

        apiAuth.login(form)
            .then(res => {
                const {id, name, token, membership} = res.data
                setUser({id, name, token, membership})
                if (membership != null) { 
                    navigate("/home")
                } else{ navigate("/subscriptions") }
                })
            .catch(err => {
                alert(err.response.data.message)
            })        
    }

    
    return (
        <Container>

        <img src={logohome} />

        <StyledForm onSubmit={handleLogin}>

            <StyledInput name="email" placeholder="E-mail" type="email" required disabled={false} value={form.email} onChange={handleForm}/>
            <StyledInput name="password" placeholder="Senha" type="password" required disabled={false} value={form.password} onChange={handleForm}/>
            <StyledButton type="submit" disabled={false}>ENTRAR</StyledButton>
        
        </StyledForm>

        <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
        
        </Container>
    )
}