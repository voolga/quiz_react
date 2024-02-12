
export const Button = ({ className, buttonType, formaction, text, handlerFn }) => {
  return (
    <>
      <button onClick={handlerFn} className={className} type={buttonType} formAction={formaction}>
        {text}
      </button>
    </>
  )
}
