import React, { useState, useEffect } from "react"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
// import { useStateValue } from "./StateProvider"
// import db from "./firebase"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import LoopIcon from "@material-ui/icons/Loop"
import db from "../firebase"
import { useStateValue } from "../StateProvider"
import { Block } from "@material-ui/icons"
function Sidebar()
{   
    const [channels,setChannels]=useState([]);
    const [{user}]= useStateValue();
    useEffect(() => {
      db.collection('rooms').onSnapshot(snapshot=>(
        setChannels(snapshot.docs.map(doc=>(
            {
                id: doc.id,
                name: doc.data().name,
            }
        ))) 
      ));
    }, []);
    
    function show()
    {
        var x= document.getElementsByClassName('show');
        console.log(x);
    }
    var icon="";
    return(
        <div className="sidebar">
        <div className="sidebar_header">
        <div className="sidebar_Info">
            <h2>V-Academics Chat Help</h2>
             <h3>
                <FiberManualRecordIcon></FiberManualRecordIcon>
                {user?.displayName} 
             </h3>
        </div>
        <CreateIcon></CreateIcon>
        </div>
        <div id="show">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" ></SidebarOption>
        <SidebarOption Icon={InboxIcon} title="Mentioned & reactions" ></SidebarOption>
        <SidebarOption Icon={DraftsIcon} title="Saved Items" ></SidebarOption>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" ></SidebarOption>
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" ></SidebarOption>
        <SidebarOption Icon={AppsIcon} title="Apps" ></SidebarOption>
        <SidebarOption Icon={FileCopyIcon} title="File Browser" ></SidebarOption>
        </div>
        <div id="divless" onClick={()=>{
            if(document.getElementById('show').style.display=="none"){
            document.getElementById('show').style.display="block";
            }
            else if(document.getElementById('show').style.display=="block"){
            document.getElementById('show').style.display="none";
            }
        }}>
        <SidebarOption Icon={ExpandLessIcon} title="Show Less"></SidebarOption>
        </div>
        <hr></hr>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"></SidebarOption>
         <hr></hr>
        <SidebarOption Icon={AddIcon} title="AddChannel" addChannelOption='true'></SidebarOption>
        {/* Connect to dB and list all the channels */}
        {/* <SidebarOption.../> */}
        {
            channels.map(channel=>(

                <SidebarOption title={channel.name} id={channel.id}/>
            )
            )
        }
        </div>
    )
}
export default Sidebar;