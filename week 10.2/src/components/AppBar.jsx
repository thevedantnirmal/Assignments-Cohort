export default function AppBar({userName,isLogin,setLogin}){
    const handleClick=()=>{
        setLogin(status=>!status)

    }
    return(
        <div className="flex justify-between shadow-md bg-slate-200 p-5 rounded-sm ">
            <div>
                <h1 className="text-2xl font-semibold ">Auth System Demo</h1>
            </div>
            <div className="flex justify-between w-[7.5rem]">
                <h1 className="pt-[0.3rem]">{userName}</h1>
                <button className="w-16 bg-white rounded-lg font-medium" onClick={handleClick}>{isLogin?"SLog out":"Sign In"}</button>

            </div>
        </div>
    )
}