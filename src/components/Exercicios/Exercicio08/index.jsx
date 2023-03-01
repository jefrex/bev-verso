import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Pai } from "./pai"


export const Exercicio08 = () => {
    return(
        <Card title="Exercício #8 - Comunicação indireta com useState">
            <Paragraph>
                Não conseguimos mostrar o valor gerado na interface
                sem useState. Além disso, o useState serve para
                mostrar elementos que serão modificados ao longo
                do tempo.
            </Paragraph>

            <Pai />
        </Card>
    )
}