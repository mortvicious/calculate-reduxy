import { combineReducers, configureStore } from "@reduxjs/toolkit";
import outputReducer from "./reducers/calcReducer";

const rootReducer = combineReducers({
    outputReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']