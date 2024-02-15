export const SelectInput = ({ text, id, options, style, setSelectValue }) => {
  const optionItems = options
    ? options.map((item, index) => <option key={index} value={item}>{item}</option>)
    : null

  return (
    <>
      <div className="input_item" style={style}>
        <label for={id}>{text}</label>
        <select id={id} onChange={(e) => setSelectValue(e.target.value)}>
          {optionItems}
        </select>
      </div>
    </>
  )
}
