import { Button } from "../Button/Button"
import buttons from '../buttonsData'

export const ButtonsGroup = () => {
    return (
        <>
            {Object.values(buttons).map((item, index) => (
                <Button key={index} {...item} />
            ))}
        </>
    )


}

