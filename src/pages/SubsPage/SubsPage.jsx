import Container from "./styled"
import { Link } from "react-router-dom"
import StyledSubButton from "../../components/StyledSubButton/StyledSubButton"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import apiSubs from "../../services/apiSubs"

export default function SubsPage() {

    const {user, setUser} = useContext(UserContext)
    const [subs, setSubs] = useState([])

    console.log(user)
    console.log(user.membership)

    useEffect(getSubsList, [])

    function getSubsList(){
        apiSubs.getSubs(user.token).then(res => {setSubs(res.data) 
            console.log(res.data)}).catch(err => {err.response.data.message})
    }    

    return (
        <Container>

        <p>Escolha seu Plano</p>

        {subs.map(s => (
            <Link to="/subscriptions/ID_DO_PLANO">
            <StyledSubButton key={s.id} image={s.image} price={s.price}/>
            </Link> 
        ))}
        
        </Container>
    )
}