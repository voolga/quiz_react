interface InputsTypes {
    text: string,
    id: string,
    options: string[],
    className: string,
}

interface InputsWrapper {
    [key: string]: InputsTypes
}

const inputs: InputsWrapper = {
    categoryInput: {
        text: 'Choose сategory:',
        id: 'category',
        options: ['JS', 'React'],
        className: 'category-input',
    },
    difficultyInput: {
        text: 'Choose difficulty',
        id: 'difficulty',
        options: ['easy', 'medium', 'hard'],
        className: 'difficulty-input'

    },
    typeInput: {
        text: 'Choose type',
        id: 'type',
        options: ['boolean', 'multiple'],
        className: 'type-input'

    },
    timeInput: {
        text: 'Choose time',
        id: 'time',
        options: ['1m', '2m', '5m'],
        className: 'time-input'
    },
};

export default inputs