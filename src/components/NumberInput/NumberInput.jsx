export const NumberInput = ({style, setQuestionQty}) => {
  return (
    <>
      <div className="input_item" style={style}>

        <label htmlFor="number-of-questions">Question qty (default 5):</label>
        <input
          type="number"
          id="number-of-questions"
          // min="5"
          // max="15"
          placeholder="Input number of questions"
          onChange={e => setQuestionQty(e.target.value)}
          >
          </input>
      </div>
    </>
  )
}