import React, { useState , useEffect} from 'react'
import { GET_ALl_EMPLOYEE } from '../Graphql/Queries' 
import { useQuery, useMutation } from '@apollo/client'
import './style.css'
function ListOfEmployee() {
    const { data } = useQuery(GET_ALl_EMPLOYEE)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if(data){
            setUsers(data.employee)
        }
        // console.log(data)
    }, [data])
    return (
        <>
        <table>   
      <tr>
        <td><b>First Name</b></td>
        <td><b>Last Name</b></td>
        <td><b>Location</b></td>
      </tr>
      {users.map((value,idx) => {
        return (
          <tr>
            <td>{value.firstname}</td>
            <td> {value.lastname}</td>
            <td> {value.location}</td>
          </tr>
        );
      })}
    </table>
        </>
    )
}


export default ListOfEmployee