import { NumberInput } from "../../components/NumberInput/NumberInput"
import { ButtonsGroup } from "../../components/ButtonsGroup/ButtonsGroup";
import { InputsGroup } from "../../components/InputsGroup/InputsGroup";


export const WelcomeScreen = () => {
    return (
        <div className="screen">
            <NumberInput />
            <InputsGroup />
            <ButtonsGroup />
        </div>
    )
}