import React, {useState} from 'react'
import style from "board/styles/board-form.module.css"
import { useDispatch } from 'react-redux'
import { addBoard } from '../../redux/reducers/boardReducer.ts'
export default function Board(){
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
       const {name, value} = e.target 
       setInputs({...inputs, [name]: value})
    }

   
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form onSubmit={e => {
                e.preventDefault()
                
                if(inputs) dispatch(addBoard(inputs))
            }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="title" name="title" placeholder="글 제목 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit} 
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}