import React, {useState} from "react";
import axios from 'axios';
import tableStyles from '../../styles/Table.module.css'


export default function Bmi(){   // 함수
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value  //조직화된 데이터
        })

        
    }
    const handleSubmit = e => {             // handleClick => 상수 
        e.preventDefault()
        axios.post(proxy+'/basic/bmi', inputs)
        .then(res => {
            alert(`결과 : ${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h1>BMI</h1></th>
                    </tr>
                </thead>        
                <tbody>    
                    <tr>
                        <td><b>이름</b></td>
                        <td><input type='text' name='name' onChange={handleChange}/></td>
                    </tr>
                    <tr>    
                        <td><b>키</b></td>
                        <td><input type='text' name='height' onChange={handleChange}/></td>
                    </tr>    
                    <tr>
                        <td><b>몸무게</b></td>
                        <td><input type='text' name='weight' onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type='submit'>BMI 체크</button><br/></td>
                    </tr>
                </tbody>
            </table>
        </form>
        </div>)
} 