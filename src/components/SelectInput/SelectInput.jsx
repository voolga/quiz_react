export const SelectInput = ({ text, id, options, style, setSelectValue }) => {
  let optionItems
  if (text === 'Choose сategory:') {
    optionItems = options
      ? options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))
      : null
  } else {
    optionItems = options
      ? options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))
      : null
  }

  return (
    <>
      <div className="input_item" style={style}>
        <label htmlFor={id}>{text}</label>
        <select id={id} onChange={(e) => setSelectValue(e.target.value)}>
          {id === 'time' ? null : <option value="">Random</option>}
          {optionItems}
        </select>
      </div>
    </>
  )
}
