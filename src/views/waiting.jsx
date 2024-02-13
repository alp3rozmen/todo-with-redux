import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Add, Complete } from '../store/todoSlices';
function Waiting() {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  console.log(todos.todos)

  const addTodo = () => {
    let todo = prompt("Ekle");
    let myTodo = {
      id : todos.length + 1,
      todo : todo,
      status : false
    }
    dispatch(Add(myTodo));
  }

  return (
    <Box style={{textAlign:"center",marginTop:"10px"}}>
      <Button onClick={() => {addTodo()}} style={{margin:"10px"}} variant="contained">Ekle</Button>
      <div>
      <h1>Bekleyenler Listesi</h1>
      <div style={{textAlign:"center", display:"inline-block"}}>
        <table cellSpacing={"30px"} style={{textAlign:"center"}}>
            <tr>
            <th>Açıklama</th>
            <th>Durum</th>
            <th>Tamamla</th>
            </tr>
            {
            todos.filter((todo) => !todo.status).map((todo) => {
                return (
                <tr key={todo.id}>
                    <td>{todo.todo}</td>
                    <td>{todo.status ? "Tamamlandı" : "Beklemede"}</td>
                    <td><button onClick={() => {dispatch(Complete({id : todo.id, todo : todo.todo, status : 'Tamamlandı'}))}}>{todo.status ? "Geri Al" : "Tamamla"}</button></td>
                </tr>
                )
            })
            }
        </table>
      </div>
      </div>
    </Box>
    
  )
}

export default Waiting;