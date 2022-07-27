import React, {FC} from 'react'
import { useAppSelector } from '../../hooks/redux'
import CalcBtn from '../CalcBtn/CalcBtn'
import { BtnType, Operator, Symbol, Bracket } from '../CalcBtn/CalcBtn.types'
import styles from './Calculator.module.scss'

const Calculator:FC = () => {

  const {output} = useAppSelector(state => state.outputReducer)
  
  return (
    <div className={styles['calculator']}>
        <span className={styles['output']}>{output || '0'}</span>
        <div className={styles['btn-container']}>
            <CalcBtn type={BtnType.Number} number={7}/>
            <CalcBtn type={BtnType.Number} number={8}/>
            <CalcBtn type={BtnType.Number} number={9}/>
            <CalcBtn type={BtnType.Operator} operator={Operator.Divide}/>
            {/* <CalcBtn type={BtnType.Operator} operator={Operator.Sqrt}/> */}

            <CalcBtn type={BtnType.Number} number={4}/>
            <CalcBtn type={BtnType.Number} number={5}/>
            <CalcBtn type={BtnType.Number} number={6}/>
            <CalcBtn type={BtnType.Operator} operator={Operator.Multiply}/>
            {/* <CalcBtn type={BtnType.Operator} operator={Operator.Power}/> */}


            <CalcBtn type={BtnType.Number} number={1}/>
            <CalcBtn type={BtnType.Number} number={2}/>
            <CalcBtn type={BtnType.Number} number={3}/>
            <CalcBtn type={BtnType.Operator} operator={Operator.Minus}/>
            {/* <CalcBtn type={BtnType.Bracket} bracket={Bracket.OpenBracket}/> */}


            <CalcBtn type={BtnType.Number} number={0}/>
            <CalcBtn type={BtnType.Symbol} symbol={Symbol.Dot}/>
            <CalcBtn type={BtnType.Operator} operator={Operator.Equality} className={styles['btn-equal']}/>
            <CalcBtn type={BtnType.Operator} operator={Operator.Plus}/>
            {/* <CalcBtn type={BtnType.Bracket} bracket={Bracket.CloseBracket}/> */}
        </div>

    </div>
  )
}


export default Calculator