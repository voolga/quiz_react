import { NumberInput } from '../../components/NumberInput/NumberInput'
import { SelectInput } from '../../components/SelectInput/SelectInput'
import s from './WelcomeScreen.module.css'
import { Button } from '../../components/Button/Button'
import welcomeBtns from '../../components/welcomeButtonsData'
import { Circles } from '../../components/Circles/Circles'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import {
  setCategory,
  setDifficulty,
  setType,
  setTime,
  setNumberOfQuestion
} from '../../redux/reducers/settingsReducer'

const gridAreas = ['a', 'b', 'c', 'd']

export const WelcomeScreen = () => {
  const navigation = useNavigate()
  const handlerFn = (to) => {
    navigation(to)
  }

  const dispatch = useDispatch()

  function setQuestionQty(newQty) {
    dispatch(setNumberOfQuestion(newQty))
  }

  function setCategoryValue(newCategory) {
    dispatch(setCategory(newCategory))
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
    return state.settings.category
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
            options={['js', 'react']}
            setSelectValue={setCategoryValue}
          />
          <SelectInput
            text="Choose difficulty:"
            style={{ gridArea: 'b' }}
            id="difficulty"
            options={['easy', 'medium', 'hard']}
            setSelectValue={setDifficultyValue}
          />
          <SelectInput
            text="Choose type:"
            style={{ gridArea: 'c' }}
            id="type"
            options={['true/false', 'multiple choise']}
            setSelectValue={setTypeValue}
          />
          <SelectInput
            text="Choose time:"
            style={{ gridArea: 'd' }}
            id="time"
            options={['1m', '2m', '5m']}
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
