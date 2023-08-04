import Container from "./styled"
import { Link } from "react-router-dom"
import StyledSubButton from "../../components/StyledSubButton/StyledSubButton"


export default function SubsPage() {
    return (
        <Container>

        <Link to="/subscriptions/ID_DO_PLANO">
            <StyledSubButton />
        </Link>   
        
        <Link to="/subscriptions/ID_DO_PLANO">
            <StyledSubButton />
        </Link>
        
        <Link to="/subscriptions/ID_DO_PLANO">
            <StyledSubButton />
        </Link>
        
        </Container>
    )
}