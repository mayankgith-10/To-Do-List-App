import React from 'react'
import tick_icon from '../assets/check-solid-full.svg'
import delete_icon from '../assets/image copy.png'
import not_tick from '../assets/image copy 2.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=> {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img className='w-6' src={isComplete ? tick_icon : not_tick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <img onClick={()=> deleteTodo(id)} src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems
