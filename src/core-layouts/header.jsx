import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    const todos = useSelector((state) => state.todos)
    
  return (
    <div>
        <ul style={{listStyle:"none" , display:"flex", gap:"10px"}}>
            <li><Link style={{textDecoration:"none"}} to="/Home">Tüm Yapılacaklar Listesi ({todos.length})</Link></li>
            <li><Link style={{textDecoration:"none"}} to="/Completed">Tamamlananlar ({todos.filter((todo) => todo.status).length})</Link></li>
            <li><Link style={{textDecoration:"none"}} to="/Waiting">Bekleyenler ({todos.filter((todo) => !todo.status).length})</Link></li>
        </ul>
    </div>
  )
}

export default Header