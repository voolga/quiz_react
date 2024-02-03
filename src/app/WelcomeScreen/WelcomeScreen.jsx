import { NumberInput } from "../../components/NumberInput/NumberInput"
import { ButtonsGroup } from "./ButtonsGroup";
import { InputsGroup } from "./InputsGroup";


export const WelcomeScreen = () => {


    return (
        <div className="screen">
            <NumberInput />
            <InputsGroup />
            <ButtonsGroup />
        </div>
    )


}