import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chats = () => {

    const [chats,SetChats]=useState([])

    const fetchData=async()=>{
        const {data}=await axios.get('http://localhost:5000/api/chat')
        console.log(data)
        SetChats(data)
    }


    useEffect(()=>{
 fetchData();
    },[])
  return (
    <div>
      {chats.map((chat,_id)=>
      <div key={_id}>
        {chat.chatName}
      </div>
      )}
    </div>
  )
}

export default Chats
