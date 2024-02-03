import { Button } from "../../components/Button/Button"


export const ButtonsGroup = () => {

    const buttons = {
        startNewGameBtn: {
            text: 'Start new game',
            className: 'new-game-btn',
            buttonType: 'submit',
            formaction: ''
        },
        seeStatisticsBtn: {
            text: 'See my statistics',
            className: 'see-stat-btn',
            buttonType: 'button',
            formaction: ''
        }
    };    

    return (
        <>
            {Object.values(buttons).map((item, index) => (
                <Button key={index} {...item} />
            ))}
        </>
    )


}

