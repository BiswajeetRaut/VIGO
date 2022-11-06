import React from 'react'
import { useState } from 'react';
import db from '../firebase';
import './ChatInput.css'
import firebase from "firebase";
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
const ChatInput = ({channelName, channelId}) => {
    console.log(channelId);
  const [input,setinput]=useState('');
  const [{user}]= useStateValue();
  const sendMessage = (e)=>{
    e.preventDefault();
    if(channelId)
    {
        db.collection("rooms").doc(channelId).collection("messages").add({
            name: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImg: user.photoURL,
        })
    }
  }
  return (
    <div className='chatInput'>
        <form>
            <input type="text" 
            value={input}
            onChange={(e)=>setinput(e.target.value)}
            placeholder={`Message #${channelName}`}/>
            <button 
            type="submit" 
            onClick={sendMessage}
            >SEND</button>

        </form>
    </div>
  )
}

export default ChatInput