interface ButtonInterface {
  className: string
  buttonType: "submit" | "button" | "reset" | undefined
  formaction: string
  text: string
  handlerFn: () => void
}

export const Button = ({ className, buttonType, formaction, text, handlerFn }: ButtonInterface) => {
  return (
    <>
      <button onClick={handlerFn} className={className} type={buttonType} formAction={formaction}>
        {text}
      </button>
    </>
  )
}
