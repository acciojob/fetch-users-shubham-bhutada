import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = () => {
    const [userlist, setUserlist] = useState([])

    // useEffect(() => {
    //     axios.get("https://reqres.in/api/users")
    //     .then(response => {
    //         console.log(response.data.data)
    //         setUserlist(response.data.data)
    //     }) 
    //     .catch(err => console.log(err)) 
    // })

    function fetchusers() {
        axios.get("https://reqres.in/api/users")
        .then(response => {
            console.log(response.data.data)
            setUserlist(response.data.data)
        }) 
        .catch(err => console.log(err))  
    }
  return (
    <div>
        <span>Blue Whales</span>
        <button className='btn' onClick={fetchusers}>Get User List</button>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    userlist.length===0 ? (<tr> <td>No data found to display.</td></tr>):
                    (userlist.map(item => (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} alt={item.first_name+" "+item.last_name}/></td>
                        </tr>
                    )))
                } 
            </tbody>
        </table>
    </div>
  )
}

export default FetchData