import { SelectInput } from "../SelectInput/SelectInput"
import inputs from "../inputsData"

export const InputsGroup = () => {
    return (
        <>
            {Object.values(inputs).map((input, index) => (
                <SelectInput key={index} {...input} />
            ))}
        </>
    )


}