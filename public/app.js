/*document.getElementById("demo").innerHTML="Hello World!"

window.setInterval(function()){
    document.getElementId
}*/
//window.alert("hello")

/*function hello(){
    document.getElementsByClassName("demo")[0].style.backgroundColor="red";
    setTimeout(()=>{
        document.getElementsByClassName("demo")[1].style.backgroundColor="blue"
    },10000);
    

}
hello()*/

/*function Employee(id,name){
    console.log("HI "+name+" your emploiyee id is "+id)

}
Employee("007","ram")*/

/*import React from 'react'
function Employee(props){
    return(
        <div>
        <p>hi {props.name}</p>


        </div>
    )
}*/

import React from "react";
function Employee({emp, pay, arr}){
return(
<div>
<p>Hi, {emp.name} you got selected for the role {emp.role}, in {emp.company} and your monthly salary is {pay} INR.</p>
<p>Thanks and Regards<br/>Mr. Balaji,  {arr[0]}</p>
</div>
)
}
export default function App() {
return (
<div>
<Employee emp={{name: 'Ram', role: 'Software Developer', company: 'xyz technologies'}} pay={42000} arr={['Project Manager', 'Team Leader', 'Managing Director']}/>
</div>
);
}
---------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();

