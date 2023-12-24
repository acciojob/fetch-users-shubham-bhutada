import React,{useState} from 'react'
import axios from 'axios'

const FetchData = () => {
    const [userlist, setUserlist] = useState([])

    function fetchusers() {
        axios.get("https://reqres.in/api/users")
        .then(response => {
            console.log(response.data.data)
            setUserlist(response.data.data)}) 
        .catch(err => console.log(err)) 
    }
  return (
    <div>
        <span>Blue Whales</span>
        <button onClick={fetchusers}>Get User List</button>
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
                {userlist.length===0 ? <tr>No data found to display</tr>:
                (userlist.map(item => (
                    <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td><img src={item.avatar} alt={item.first_name+" "+item.last_name}/></td>
                    </tr>
                )))} 
            </tbody>
        </table>
    </div>
  )
}

export default FetchData