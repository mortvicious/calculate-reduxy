import React, {FC} from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { calcSlice } from '../store/reducers/calcReducer'
import styles from './CalcBtn.module.scss'
import { BtnType, ICalcBtn, Operator } from './CalcBtn.types'

const CalcBtn:FC<ICalcBtn> = ({operator, number, type, symbol, bracket, className}) => {

  const {concatenate, calc} = calcSlice.actions
  const dispatch = useAppDispatch() 

  const isAllowedForConcatenate:boolean = operator !== Operator.Equality

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {textContent} = e.currentTarget
    if (isAllowedForConcatenate) dispatch(concatenate(textContent || ''))
    if (!isAllowedForConcatenate) dispatch(calc())
  }
 
  return (
    <button 
      onClick={handleClick} 
      className={styles['calc-btn'] + ` ` + className}>
        {type === BtnType.Operator ? operator : ''}
        {type === BtnType.Number ? number : ''}
        {type === BtnType.Symbol ? symbol : ''}
        {type === BtnType.Bracket ? bracket : '' }
    </button>
  )
}


export default CalcBtn