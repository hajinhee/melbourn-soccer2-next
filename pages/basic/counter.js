import React, {useState} from "react";
import tableStyles from '../../styles/Table.module.css'


export default function Counter(){
    const [count, setCount] = useState(0)

    return (<>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h1>Counter</h1></th>
                    </tr>
                </thead>        
                <tbody>
                    <tr>
                        <td><button onClick={()=>{setCount(count +1)}}>+</button></td>
                        <td><button onClick={()=>{setCount(count -1)}}>-</button></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{count}</td>
                    </tr>
                </tbody>
        </table>
        </>
)}