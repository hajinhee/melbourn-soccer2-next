import axios from "axios";
import React,{useState} from "react"
import tableStyles from '../../styles/Table.module.css'

export default function Calc(){
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
            alert(`결과 : ${JSON.stringify(res.data.result)}`)
        })
        .catch(err => alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h1>계산기</h1></th>
                    </tr>
                </thead>        
                <tbody>    
                    <tr>
                        <td><b>첫 번째 숫자</b></td>
                        <td><input name="num1" type="int" onChange={handleChange}/></td>
                    </tr>
                    <tr>    
                        <td><b>연산자</b></td>
                        <td><select name="opcode" onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        <option value="%">%</option>
                        </select></td>
                    </tr>  
                    <tr>  
                        <td><b>두 번째 숫자</b></td>
                        <td><input name="num2" type="int" onChange={handleChange}/></td>
                    </tr>    
                    <tr>
                        <td colSpan={2}><button type='submit'>계산하기</button><br/></td>
                    </tr>
                </tbody>
            </table>    
        </form>
        </div>   
    )}