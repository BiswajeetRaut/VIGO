import { keys } from '@material-ui/core/styles/createBreakpoints'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Block from '../components/Block'
import db from '../firebase'
import './Rider.css'
const Rider = () => {
  const [vals, setvals] = useState([]);
  const form = document.getElementById('form');
        function myFunction() {
            var input = document.getElementById("myinput");
            var filter = input.value.toLowerCase();
            var nodes = document.getElementsByClassName('neon__card carding');
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].innerText.toLowerCase().includes(filter)) {
                    nodes[i].style.display = "block";
                }
                else{
                    nodes[i].style.display = "none";
                }
            }
        }
        useEffect(() => {
          db.collection('RenterDetails').onSnapshot(snapshot=>(setvals(snapshot.docs.map(doc=>doc.data()))))
        }, [])
        console.log(vals);
  return (
  <div className="page">

        <div className="search">
        <form action="" id="form">
            <input type="search" id="myinput" placeholder="" onChange={myFunction}/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </form>
        </div>
        <div className="neon bd-container" >
        {vals.map((keys)=>{
          return (
          <div className="neon__card carding">
            <h1 className="neon__title">{keys.model}</h1>
            <p className="neon__description">{keys.Reg}</p>
            <p className="neon__description">FROM: {keys.from} - {keys.to}</p>
            <a href={`https://wa.me/${keys.Ph}`} className="neon__button">
                <svg className="neon__button-icon" viewBox="0 0 48 48">
                    <circle cx="19" cy="18" r="18" stroke="black" stroke-width="3" fill="blanchedalmond" />
                  </svg>
                Book Cycle
            </a>
          </div>
          )
        })}
        </div>
</div>   
    
  )
}

export default Rider