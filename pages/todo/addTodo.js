import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'

export default function AddTodo() {
    const [todo, setTodo] = useState({userid: '', task:'', completed:''})
    const [data, setData] = useState([])
    
    const dispatch = useDispatch()

    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]: value})
    }
  return (
      <form onSubmit={ e => {
          e.preventDefault()            
          alert(' 진행 1: Add 클릭 ');
          dispatch(todoActions.taskRequest(todo))
          setTodo({
            userid: '', task: '', completed: ''
          })
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={3}><h2>TodoList</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>사용자ID</b></td>
                <td><input type="text" name='userid' onChange={handleChange}/></td>
            </tr>

            <tr>
                <td><b>일정등록</b></td>
                <td><input type="text" name='task' onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><b>일정완료</b></td>
                <td><select name="completed" onChange={handleChange}>
                <option value="T">T</option>
                <option value="F">F</option>
                </select><br/></td>
            </tr>    
            </tbody>
            </table>

        <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
          Add
        </button>
            </form>
     
  );
}