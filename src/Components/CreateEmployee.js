
import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { ADD_EMPLOYEE } from "../Graphql/Mutation";

function CreateEmploee() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [location, setLocation] = useState("")

    const [addEmployee, {error}] = useMutation(ADD_EMPLOYEE)
    const addUser = () => {
        addEmployee ({
            variables: {
                firstname : firstname,
                lastname : lastname,
                location : location
            }
        })
        if(error){
            console.log(error)
        }
    }
    return (
        <>
          <div className="container">
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                    setFirstName(e.target.value) 
                }}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="location"
                onChange={(e) => {
                    setLocation(e.target.value)
                }}
             />
             <button
                onClick={addUser}
             >
                Create Employee
             </button>
          </div>
        </>
    )
}

export default CreateEmploee;