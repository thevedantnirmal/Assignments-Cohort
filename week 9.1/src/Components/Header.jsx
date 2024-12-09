export function Header(){
    return(
        <div className="flex justify-between p-[2rem] bg-gray-300 shadow-md">
            <div>
                <h1 className="text-2xl">Home</h1>
            </div>
            <div className="" >
                <ul className="list-none flex space-between">
                <li className="text-2xl">Contact us</li>
                <li className="text-2xl">Cart</li></ul>
            </div>
        </div>
    )
}