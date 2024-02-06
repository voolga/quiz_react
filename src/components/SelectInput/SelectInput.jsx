export const SelectInput = ({ text, id, options, style }) => {
  const optionItems = options
    ? options.map((item, index) => <option key={index}>{item}</option>)
    : null

  return (
    <>
      <div className="input_item" style={style}>
        <label for={id}>{text}</label>
        <select id={id}>{optionItems}</select>
      </div>
    </>
  )
}
