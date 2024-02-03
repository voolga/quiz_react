import { SelectInput } from "../../components/SelectInput/SelectInput"

export const InputsGroup = () => {

    const inputs = {
        categoryInput: {
            text: 'Category:',
            id: 'category',
            options: ['JS', 'React']
        },
        difficultyInput: {
            text: 'Choose difficulty',
            id: 'difficulty',
            options: ['easy', 'medium', 'hard']
        },
        typeInput: {
            text: 'Choose type',
            id: 'type',
            options: ['true', 'false']
        },
        timeInput: {
            text: 'Choose time',
            id: 'time',
            options: ['1m', '2m', '5m']
        },
    };

    return (
        <>
            {Object.values(inputs).map((input, index) => (
                <SelectInput key={index} {...input} />
            ))}
        </>
    )


}