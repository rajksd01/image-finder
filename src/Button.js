 import { useState } from "react"
 import "./components/App.css"

function Button(props) {
const[value,setValue]=useState('')
   
//form submit huda
 const onFormSubmit=(e)=>{
        e.preventDefault()
        props.data(value)
    }

   //Input field ma change aauda 
   const onInputChange =(e)=>{
        setValue(e.target.value)
       
   }
  return (
    <form  onSubmit={onFormSubmit}>
      <input   onChange={onInputChange}  />
    </form>


  );
}

export default Button;
