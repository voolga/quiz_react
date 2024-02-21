import { NumberInput } from '../../components/NumberInput/NumberInput'
import { SelectInput } from '../../components/SelectInput/SelectInput'
import s from './WelcomeScreen.module.css'
import { Button } from '../../components/Button/Button'
import welcomeBtns from '../../components/welcomeButtonsData'
import { Circles } from '../../components/Circles/Circles'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  setCategory,
  setDifficulty,
  setType,
  setTime,
  setNumberOfQuestion,
} from '../../redux/reducers/settingsReducer'
import { useEffect } from 'react'
import { fetchCategories } from '../../redux/reducers/categoriesReducer'
import inputs from './../../components/inputsData'

export const WelcomeScreen = () => {
  const navigation = useNavigate()
  const handlerFn = (to) => {
    navigation(to)
  }

  const dispatch = useDispatch()

  function setQuestionQty(newQty) {
    dispatch(setNumberOfQuestion(newQty))
  }

  function setCategoryValue(newCategoryId) {
    dispatch(setCategory(newCategoryId))
  }

  function setDifficultyValue(newDiff) {
    dispatch(setDifficulty(newDiff))
  }

  function setTypeValue(newType) {
    dispatch(setType(newType))
  }

  function setTimeValue(newTime) {
    dispatch(setTime(newTime))
  }

  const qtySelectValue = useSelector((state) => {
    return state.settings.questionQty
  })

  const categoryValue = useSelector((state) => {
    return state.settings.categoryId
  })

  const diffValue = useSelector((state) => {
    return state.settings.difficulty
  })

  const typeValue = useSelector((state) => {
    return state.settings.type
  })

  const timeValue = useSelector((state) => {
    return state.settings.time
  })

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const categoriesList = useSelector((state) => state.categories.categories.trivia_categories)

  return (
    <>
      {categoryValue}
      {qtySelectValue}
      {diffValue}
      {typeValue}
      {timeValue}
      <div className={s.container}>
        <div className={s.header_wrapper}>
          <Circles />
          <h1>TRUE OR FALSE?</h1>
        </div>
        <h2>↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h2>
        <div className={s.inputs_wrapper}>
          <SelectInput
            text="Choose сategory:"
            style={{ gridArea: 'a' }}
            id="category"
            options={categoriesList}
            setSelectValue={setCategoryValue}
          />
          <SelectInput
            text="Choose difficulty:"
            style={{ gridArea: 'b' }}
            id="difficulty"
            options={inputs.difficultyInput.options}
            setSelectValue={setDifficultyValue}
          />
          <SelectInput
            text="Choose type:"
            style={{ gridArea: 'c' }}
            id="type"
            options={inputs.typeInput.options}
            setSelectValue={setTypeValue}
          />
          <SelectInput
            text="Choose time:"
            style={{ gridArea: 'd' }}
            id="time"
            options={inputs.timeInput.options}
            setSelectValue={setTimeValue}
          />
          <NumberInput style={{ gridArea: 'e' }} setQuestionQty={setQuestionQty} />
        </div>
        <div className={s.btns_wrapper}>
          {Object.values(welcomeBtns).map((item, index) => (
            <Button
              handlerFn={() => handlerFn(item.to)}
              className={s.btn}
              key={index}
              {...item}></Button>
          ))}
        </div>
      </div>
    </>
  )
}
