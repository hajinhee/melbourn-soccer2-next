import axios from 'axios';
import tableStyles from "../common/styles/table.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'

export default function TodoList(){
    const columns = ["사용자ID", "일정", "완료"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/getTodos').then(res=>{
          setData(res.data.todos)
        }).catch(err=>{})
      },[])
    return(<>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={4}><h1>Todo 목록</h1></th>
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={tableStyles.tr}>
                <td colSpan={3} className={tableStyles.td}>일정이 없습니다</td>
                </tr>
                :data.map((todo) => (
                    <tr key={todo.userid} >
                  <td >
                    <Link href={{pathname:`/todo/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/todo/${todo.userid}`}>
                      <a>{todo.userid}</a>
                    </Link>
                  </td>
                  <td >{todo.userid}</td>
                  <td >{todo.task}</td>
                  <td >{todo.completed}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>)
    }