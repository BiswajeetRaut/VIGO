import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../firebase';
import './SidebarOption.css'
const SidebarOption = ({Icon,title,id,addChannelOption}) => {
  const history = useHistory();
  const selectChannel=()=>{
     if(id){
      console.log(id);
      history.push(`/room/${id}`);
     }
     else{
      history.push(`title`);
     }
  }
  const addChannel=()=>{
    console.log("addchannel");
    const channelName= prompt('Please Enter the Channel Name');
    if(channelName)
    {
      db.collection('rooms').add({
        name:channelName, 
      })
    }
  }
  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon className="sidebarOption_icon"/>}
        {
            Icon ?(
                <h3>{title}</h3>
            ):(
                <h3 className='sidebarOption_channel'>
                <span className='sidebarOption_hash'>
                #
                </span>
                {title}</h3>
            )
        }
    </div>
  )
}

export default SidebarOption