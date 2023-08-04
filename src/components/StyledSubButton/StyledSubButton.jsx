import BotaoPlano from "./styled";
import logoplanobranco from "../../assets/logoplanobranco.png"

export default function StyledSubButton({image, price}) {

    return (
        <BotaoPlano>
            <img src={image} />
            <p>{price}</p>
        </BotaoPlano>
    )

}