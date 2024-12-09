export function Table(props){
    return(
        <div className="">
            <table className="table-auto border border-gray-300 w-full">
                <tr className="font-bold">
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Breed Type</th>
                    <th>Owner name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <tr>
                <td>Pet Name</td>
                    <td>Pet Type</td>
                    <td>Breed Type</td>
                    <td>Owner name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    
                </tr>
            </table>
        </div>
    )
}