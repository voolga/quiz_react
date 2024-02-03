export const SelectInput = ({ text, id, options }) => {
    
    const optionItems = options ? options.map((item, index) => (
        <option key={index}>{item}</option>
    )) : null;
    console.log(optionItems);

    return (
        <>
            <label for={id}>{text}</label>
            <select id={id}>
                {optionItems}
            </select>
        </>
    )


}