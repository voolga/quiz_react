interface SelectInputsInterface {
  text: string
  id?: string
  options: string[] | Category[]
  style: StyleObject
  setSelectValue: (param: string) => void
}

interface StyleObject {
  [key: string]: string
}

interface Category {
  id: number
  name: string
}

export const SelectInput = ({
  text,
  id,
  options,
  style,
  setSelectValue
}: SelectInputsInterface) => {
  let optionItems
  if (text === 'Choose сategory:') {
    optionItems = options
      ? options.map((item) => {
          if (typeof item === 'object' && item !== null) {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            )
          }
        })
      : null
  } else {
    optionItems = options
      ? options.map((item, i) => {
          if (typeof item === 'string') {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            )
          }
        })
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
