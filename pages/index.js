import React, { useEffect } from 'react';
import tableStyles from '@/styles/Table.module.css'
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    const user = JSON.parse(loginUser)
    if( loginUser === null){
      axios.get("http://localhost:5000/api/now").then((res) => {
        var data = res.data;
        document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
      });
    }else{
      document.getElementById("timeZone").innerHTML = '<h1>'+user.name+'님 환영합니다. <h1>'
    }
    
  },[]);
  return (
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th><h2>HOME</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr >
        <td>
            <div id="timeZone"></div></td>
        </tr>
    </tbody>
  </table>
  )
}