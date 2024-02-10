import { NumberInput } from '../../components/NumberInput/NumberInput'
import { SelectInput } from '../../components/SelectInput/SelectInput'
import inputs from '../../components/inputsData'
import s from './WelcomeScreen.module.css'
import { Button } from '../../components/Button/Button'
import welcomeBtns from '../../components/welcomeButtonsData'
import { Circles } from '../../components/Circles/Circles'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const gridAreas = ['a', 'b', 'c', 'd']

export const WelcomeScreen = () => {
  const navigation = useNavigate()
  const handlerFn = (to) => {
    navigation(to)
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.header_wrapper}>
          <Circles />
          <h1>TRUE OR FALSE?</h1>
        </div>
        <h2>↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h2>
        <div className={s.inputs_wrapper}>
          {Object.values(inputs).map((input, index) => (
            <SelectInput key={index} {...input} style={{ gridArea: gridAreas[index] }} />
          ))}
          <NumberInput style={{ gridArea: 'e' }} />
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
