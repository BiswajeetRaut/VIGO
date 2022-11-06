import React from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import { StarBorderOutlined } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';
import db from '../firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
const Chat = () => {
  const {roomId} = useParams();
  console.log(roomId);
  const [title, settitle] = useState("");
  const [RoomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
            if(roomId===doc.id)
            {
                    // console.log(doc.metadata); 
                    console.log(doc.data().name);
                    // title=doc.data().name;
                    settitle(doc.data().name)
            }

        })
        
      });
      db.collection('rooms').doc(roomId)
      .collection('messages')
      .orderBy('timestamp','asc')
      .onSnapshot(snapshot=>(
          setRoomMessages(snapshot.docs.map(doc=>doc.data()))
      )

      )
    
  }, [roomId])
  console.log(title);
  console.log(RoomMessages);
  return (
    <div className="chat">
        {/* You are in {roomId} room  */}
        {/* this will take the roomid from the URL as we have used the useParam so previously we have descrrbed the path for the ROute to be /room/:roomId so whatever the roomId is given present in the URL the value of roomId will be the same extracted from the URL. This is so awesome trick I learnt from clever programmer */}
        <div className="chat_header">
            <div className="chat_headerLeft">
            <h4 className="chat_channelName">
                <strong>#{title}</strong>
                <StarBorderOutlined></StarBorderOutlined>
            </h4>
            </div>
            <div className="chat_headerRight">
            <p>
                <InfoOutlined></InfoOutlined> Details
            </p>
            </div>
        </div>
        <div className="chat_messages">
            {
                RoomMessages.map(({name,timestamp,user,userImg})=>{
                    console.log(name);
                    return(
                     <Message
                        message={name}
                        timestamp={timestamp}
                        user={user}
                        userImg={userImg}
                    />
                    )
                })
            }
        </div>
        <ChatInput channelName={title} channelId={roomId}/>
    </div>
    )
}

export default Chat