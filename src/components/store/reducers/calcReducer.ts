import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operator, Symbol, Bracket } from "../../CalcBtn/CalcBtn.types";
import {math} from '../../common'

interface initialStateInterface  {
    input: string,
    inputHasOperator: boolean,
    output: string,
    hasDot: boolean,
    isOperated: boolean,
}

const initialState: initialStateInterface = {
    input: '',
    inputHasOperator: false,
    output: '',
    hasDot: false,
    isOperated: false,
}


export const calcSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        concatenate(state:initialStateInterface, action:PayloadAction<string>) {
            let payloadIsOperator:boolean = Object.values(Operator).includes(action.payload as Operator)
            let isDot:boolean = action.payload === Symbol.Dot
            if (isDot && !state.hasDot) {
                state.input += action.payload
                state.hasDot = true
            }
            if (!isDot && !payloadIsOperator) {
                state.input += action.payload
                state.isOperated = false
            }
            if (payloadIsOperator && !state.isOperated && action.payload !== Operator.Equality) {
                state.input += action.payload
                state.isOperated = true
                state.inputHasOperator = true
                state.hasDot = false
            }
            state.output = state.input
        },
        calc(state:initialStateInterface) {
            if (state.inputHasOperator) {
                state.output = math.evaluate(state.output)
                state.isOperated = false
                state.inputHasOperator = false
            }
        },
    }
})

export default calcSlice.reducer