import { NumberInput } from '../../components/NumberInput/NumberInput'
import { SelectInput } from '../../components/SelectInput/SelectInput'
import inputs from '../../components/inputsData'
import s from './WelcomeScreen.module.css'
import { Button } from '../../components/Button/Button'
import buttons from '../../components/buttonsData'
import { Circles } from '../../components/Circles/Circles'

const gridAreas = ['a', 'b', 'c', 'd']

export const WelcomeScreen = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header_wrapper}>
          <Circles />
          <h1>TRUE OR FALSE?</h1>
        </div>
        {/* <h2>
          Set up the game
        </h2> */}
        <div className={s.inputs_wrapper}>
          {Object.values(inputs).map((input, index) => (
            <SelectInput key={index} {...input} style={{ gridArea: gridAreas[index] }} />
          ))}
          <NumberInput style={{ gridArea: 'e' }} />
        </div>
        <h2>↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h2>
        <div className={s.btns_wrapper}>
          {Object.values(buttons).map((item, index) => (
            <Button key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}
