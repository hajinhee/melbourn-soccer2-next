import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '../reducers/userReducer.ts';
import { joinApi, loginApi, logoutApi, delUserApi } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response : UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}

function* login(login: UserLoginType){
    try{
        const response : UserLoginSuccessType = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
        window.location.href = '/'
    }catch(error){
         yield put(userActions.loginFailure(error))
    }
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
} 

function* logout(){
    try{
        const response : UserLoginSuccessType = yield logoutApi()
        yield put(userActions.logoutSuccess(response))
    }catch(error){
         console.log(error)
    }
}
export function* watchLogout(){
    yield takeLatest(userActions.logoutRequest, logout)
} 

function* delUser(){
    try{
        const response : UserLoginSuccessType = yield delUserApi()
        yield put(userActions.delUserSuccess(response))
    }catch(error){
         console.log(error)
    }
}
export function* watchDelUser(){
    yield takeLatest(userActions.delUserRequest, delUser)
} 