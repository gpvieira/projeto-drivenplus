import BotaoPlano from "./styled";
import logoplanobranco from "../../assets/logoplanobranco.png"

export default function StyledSubButton() {

    return (
        <BotaoPlano>
            <img src={logoplanobranco} />
            <p>R$ 39,99</p>
        </BotaoPlano>
    )

}