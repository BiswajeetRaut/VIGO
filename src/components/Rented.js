import React from 'react'
import './Rented.css'
import db from '../firebase'
import firebase from 'firebase'
import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
const Rented = () => {
  var obj=[];
  const [vals, setvals] = useState([]);
  const {reg} =useParams();
  var torenter = "/renter/"+ reg.toString();
  useEffect(() => {
    function deletedoc()
    {
      console.log('inside');
    }
    // db.collection('Accounts').onSnapshot(snapshot=>{
    //     snapshot.docs.map(doc=>{
            

    //     }) 
    // db.collection('RenterDetails').doc("UpUQ3aZkZR8IkjmySLow").delete();
    db.collection('RenterDetails').onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
            var temp={};    
            // doc.data().
            // db.collection('RenterDetails').doc(doc.id).update({
            //     name: "Biswajeet1"
            // });
            // db.collection('RenterDetails').doc(doc.id).update({
            //     name: "Biswajeet1"
            // },{merge:true});
            // db.collection('RenterDetails').doc(doc.id).delete();
            if(doc.data().Reg==reg)
            {
            temp['id']=doc.id;
            temp['reg']=doc.data().Reg;
            temp['model']=doc.data().model;
            temp['Ph']=doc.data().Ph;
            temp['from']=doc.data().from;
            temp['to']=doc.data().to;
            temp['date']=doc.data().date;
            temp['price']=doc.data().price;
            console.log(doc.data().status);
            console.log(doc.id);
            if(doc.data().status==undefined)
            {
                temp['status']=false;
            }
            else{
                temp['status']=doc.data().status;
            }
        
            console.log(temp);
            obj.push(temp);
            console.log(obj);
          }
        })
        setvals(obj);
      //   obj.map((key)=>{
      //       document.getElementsByClassName('rwd-table')[0].innerHTML+=`
      //   <tr>
      //   <td data-th="Renter ID">
      //     ${key.id}
      //   </td>
      //   <td data-th="RegNo">
      //     ${key.reg}
      //   </td>
      //   <td data-th="Model">
      //     ${key.model}
      //   </td>
      //   <td data-th="Phone Number">
      //     ${key.Ph}
      //   </td>
      //   <td data-th="Date">
      //     ${key.date}
      //   </td>
      //   <td data-th="From">
      //     ${key.from}
      //   </td>
      //   <td data-th="To">
      //     ${key.to}
      //   </td>
      //   <td data-th="Price">
      //     ${key.price}
      //   </td>
      //   <td data-th="Delete" >
      //     <button className="btn-del" id=${key.id}>Delete</button>
      //   </td>
      // </tr>
      //       `
        // })
    })
  }, []);
  return (
    <div className="head">
    {/* <div className="heading-text">
    CYCLE DASHBOARD
    </div> */}
    <div class="container" >
    <h1 style={{marginBottom:50,}}>CYCLE DASHBOARD</h1>
  <table class="rwd-table">
    <tbody>
      <tr>
        <th>RenterID</th>
        <th>RegNo</th>
        <th>Model</th>
        <th>Phone Number</th>
        <th>Date</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
      {
        vals.map((key)=>{
          console.log(key);
          return(
          <tr>
          <td data-th="Renter ID">
           {key.id}
         </td>
         <td data-th="RegNo">
           {key.reg}
         </td>
         <td data-th="Model">
           {key.model}
         </td>
         <td data-th="Phone Number">
           {key.Ph}
         </td>
         <td data-th="Date">
           {key.date}
         </td>
         <td data-th="From">
           {key.from}
         </td>
         <td data-th="To">
           {key.to}
         </td>
         <td data-th="Price">
           {key.price}
         </td>
         <td data-th="Delete" >
           <button className="btn-del" id={key.id} onClick={()=>{
            console.log(key);
            var x=key.id;
            console.log(x);
            db.collection('RenterDetails').doc(`${x}`).delete();
           }}>Delete</button>
         </td>
        </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
<div className="back">
          <NavLink
              exact
              to={torenter}
              activeClassName="active"
    
              className="nav-links">
            <input type="button" value="Go Back" className='buton'/>
            </NavLink>
  </div>
    </div>
  )
}

export default Rented