export const NumberInput = () => {
    return (
        <>
            <label for="number-of-questions" >Number of Questions:</label>
            <input
                type="number"
                id="number-of-questions"
                min="5"
                max="15"
                placeholder="Input number of questions">
            </input>
        </>
    )


}