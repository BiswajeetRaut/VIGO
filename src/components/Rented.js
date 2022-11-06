import React from 'react'
import './Rented.css'
import db from '../firebase'
import firebase from 'firebase'
import { useEffect } from 'react'
const Rented = () => {
  var obj=[];
  useEffect(() => {
    // db.collection('Accounts').onSnapshot(snapshot=>{
    //     snapshot.docs.map(doc=>{
            

    //     }) 
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
            temp['reg']=doc.data().Reg;
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
        })
        obj.map((key)=>{
            document.getElementsByClassName('cards')[0].innerHTML+=`
            <tr>
            <td>${key.reg}</td>
            <td>${key.Ph}</td>
            <td>${key.from}</td>
            </tr>
            `
        })
    })
  }, [])
  
  return (
    <div className="head">
    <div className="heading-text">
    CYCLE DASHBOARD
    </div>
    <table className="cards">
    </table>
    </div>
  )
}

export default Rented