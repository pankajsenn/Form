import React, { useEffect, useState } from 'react'
import './Display.css'
function Display() {
    const [newdata,setdata] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/get/info")
            .then((res) => res.json())
            .then(data=>setdata(data.info))
            .catch(err=>console.log(err))
    }, [])
    console.log(newdata)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age/Sex</th>
                        <th>Mobile</th>
                        <th>Govt ID/GovtID Type</th>
                        <th>Guardian Details</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {
                           newdata.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.Dob}/{element.sex}</td>
                                        <td>{element.mobile}</td>
                                        <td>{element.govtid}/{element.govtway}</td>
                                        <td>{element.guardian}.{element.guardianname}</td>
                                        <td>{element.nationality}</td>
                                    </tr>
                                )
                           })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Display
