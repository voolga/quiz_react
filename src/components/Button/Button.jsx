export const Button = ({ className, buttonType, formaction, text}) => {
    return (
        <>
            <button className={className} type={buttonType} formaction={formaction}>{text}</button>
        </>
    )
}
