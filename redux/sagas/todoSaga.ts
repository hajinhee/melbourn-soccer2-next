import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { addTodoApi } from '../api/todoApi.ts'
import { todoActions } from '../../redux/reducers/todoReducer.ts';
interface TodoType{
    type: string;
    payload: {
        task: String
    }
}
interface TodoSuccessType{
    type: string;
    payload: {
        task: string
    }
}
function* addTodo(todo: TodoType){
    try{
        alert('사가내부진입')
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.taskSuccess(response))
       
    }catch(error){
        yield put(todoActions.taskFailure(error))
        alert('사가내부진입실패')
    }
}
function* getTodos(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.taskSuccess(response))
       
    }catch(error){
        yield put(todoActions.taskFailure(error))
    }
}
function* modifyTodo(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.taskSuccess(response))
    }catch(error){
        yield put(todoActions.taskFailure(error))
    }
}
function* removeTodo(todo: TodoType){
    try{
        const response: TodoSuccessType = yield addTodoApi(todo.payload)
        yield put(todoActions.taskSuccess(response))
       
    }catch(error){
        yield put(todoActions.taskFailure(error))
    }
}
export function* watchAddTodo(){
    yield takeLatest(todoActions.addTodoRequest, addTodo)
}
export function* watchGetTodos(){
    yield takeLatest(todoActions.getTodosRequest, getTodos)
}
export function* watchModifyTodo(){
    yield takeLatest(todoActions.modifyTodoRequest, modifyTodo)
}
export function* watchRemoveTodo(){
    yield takeLatest(todoActions.removeTodoRequest, removeTodo)
}