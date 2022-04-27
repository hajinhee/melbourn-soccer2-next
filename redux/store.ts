import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/index.ts'
import rootReducer from './reducers/index.ts'

const isDev = process.env.NODE_ENV === 'development' 
// const isProd = process.env.NODE_ENV === 'production' 

const sagaMiddleware = createSagaMiddleware()

const createStore = () =>{
    const store = configureStore({
        reducer: rootReducer, 
        devTools: true,
        middleware: [sagaMiddleware],
    })
    sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore, {debug: isDev})
export type RootState = ReturnType<typeof rootReducer>