

interface WelcomeButtons {
    text: string
    buttonType: "submit" | "button" | "reset" | undefined,
    formaction: string,
    to: string,
}

interface NestedInterface {
    [key: string]: WelcomeButtons;
}

const welcomeBtns: NestedInterface = {
    startNewGameBtn: {
        text: 'Start new game',
        buttonType: 'submit',
        formaction: '',
        to: '/quiz',
    },
    seeStatisticsBtn: {
        text: 'See statistics',
        buttonType: 'button',
        formaction: '',
        to: '/stat',
    }
};

export default welcomeBtns