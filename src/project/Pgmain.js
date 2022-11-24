import React,{useState} from 'react'
import { Button } from '@mui/material'
import './main.css'

export default function() {
    let [Like,setLike]=useState(0)
    let [Dlike,setDlike]=useState(0)
    let [inc,setinc]=useState(0)
    let [de,setde]=useState(0)
    let [up,setup]=useState(0)
    let [dow,setdow]=useState(0)
   
    return (
    <div className="main">
    
    
    <h1 className='head' ><b> Info Hut</b></h1>
    <img src="joe.jpeg" className='im'  width="800px" height="300px"></img>
    <br></br>
    <h2 >Biden sets a deadline of June for a $42 billion internet investment plan</h2>
<p className="pa">The US government is planning on providing over $42 billion in broadband infrastructure grants to states and localities to provide high-speed Internet access nationwide. President Joe Biden's administration announced that by June 30, it would show out it's strategy for allocating $42.5 billion in funds  through its Broadband Capital, Access and Deployment (BEAD) program.</p>
    
    <Button onClick={()=>setLike(Like+1)} >👍 {Like}</Button>
    <span></span>
    <Button onClick={()=>setDlike(Dlike+1)} >👎 {Dlike}</Button>
    
    <br></br>
    <br></br>
    <br></br>
    <img src="nsa.jpg" className='im'  width="800" height="300px"></img>
    <br></br>
    <h2>NSA calls for memory-unsafe languages like C and C++ to be phased out</h2>
    <p className='pa'>In its latest security advisory, the National Security Agency (NSA) has called out for businesses to shift from programming languages like C and C++ in favour of memory-safe alternatives like C#, RUST, Swift, Java, Ruby, and GO.</p>
  
    <Button onClick={()=>setinc(inc+1)} >👍 {inc}</Button>
    <span></span>
    <Button onClick={()=>setde(de+1)} >👎 {de}</Button>
  
    <br></br>
    <br></br>
    <br></br>
    <img src="gift.webp" className='im'  width="800px" height="300px"></img>
    <br></br>
    <h2>Software analysts track gift cards in BEC attacks</h2>
    <p className='pa'>A gift card is a form of payment that anyone can use to make purchases online and physically at Shopping malls, retail stores, gas stations and other locations the gift cards are accepted. Also, gift card scams are like other types of business email business scams, where you pretend as a company executive to convince an employee to make wire transfers or some other financial fraud.</p>
    
    <Button onClick={()=>setup(up+1)} >👍 {up}</Button>
    <span></span>
    <Button onClick={()=>setdow(dow+1)} >👎 {dow}</Button>
    
    
    
    </div>
  )
}



