import { useState } from "react"
import { Table } from "./Table"

export function Form(){
    const [details,setDetails]=useState({
        "Name":"",
        "Type":"",
        "Breed":"",
        "Email":"",
        "OwnerName":"",
        "Phone":"",



    })
    const onChangeFn=(e)=>{
        

    }
    const handleClick=()=>{
        console.log(details)

    }
    return(
        <div className="flex-col">
        <div className="flex items-center  justify-center m-[7rem] ">
            <form className="bg-gray-200 p-[1rem] w-1/3 rounded-lg " onSubmit={(e)=>e.preventDefault()}>
                <h1 className="w-full">Pet Name</h1>
                <input className="w-full rounded-lg mb-2" type="text" 
                onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        Name:e.target.value,

            
            
                    }))
                }} ></input><br/>
                <h1>Pet Type</h1>
                <input  className="w-full" list="Breed" name="Breed" 
                 onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        Type:e.target.value,

            
            
                    }))}} />
                <datalist id="Breed">
                    <option value='cat'/>
                    <option value='dog'/>
                    <option value='monkey'/>
                    <option value='alligator'/>

                </datalist>
           
                <h1>Breed</h1>
                <input className="w-full rounded-lg mb-2" type="text" 
                onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        Breed:e.target.value,

            
            
                    }))}}></input>
                <h1>Your Name</h1>
                <input className="w-full rounded-lg mb-2" type="text" 
                 onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        OwnerName:e.target.value,

            
            
                    }))
                }}></input>
                <h1>Email</h1>
                <input className="w-full rounded-lg mb-2" type="text"
                 onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        Email:e.target.value,

            
            
                    }))
                }}></input>
                <h1>Phone</h1>
                <input className="w-full rounded-lg mb-2" type="text"
                 onChange={(e)=>{
                    setDetails((prev)=>({
            
                        ...prev,
                        Phone:e.target.value,

            
            
                    }))
                }}></input>
                <button className="bg-slate-600 text-white p-4 w-15 rounded-lg mt-3" onClick={handleClick}>submit</button>
                
            </form></div>
            <div className="flex items-center justify-center">
            <Table props={details}/>

            </div>
            
        </div>
    )
}