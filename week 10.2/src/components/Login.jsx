import { useRef } from "react"

export default function Login({setLogin,setUserName}){
    const name=useRef()
    const handleClick=()=>{
        setUserName(name.current.value)
        setLogin(true)

    }
    return (
        <div className="flex justify-center items-center pt-20 ">
            <form className="bg-slate-400 p-10 " onSubmit={(e)=>e.preventDefault()}>
                <h1>Username</h1>
                <input placeholder="Enter your name" className="w-full" ref={name} />
                <button className="mt-3 bg-white" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}