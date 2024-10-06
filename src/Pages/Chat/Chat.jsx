import React from 'react'
import './Chat.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../Components/RightSideBar/RightSideBar'
import Chatbox from '../../Components/chatbox/Chatbox'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar/>
        <Chatbox/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Chat