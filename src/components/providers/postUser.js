import { backendURL } from "../../routes/UseGetData";


export const postUser= async (data)=>{
    console.log(data)
    const res = await fetch(backendURL+'/users/insert-user', {
       "method": "POST",
       headers:{
           "Content-type": "application/json"
       },
       body: JSON.stringify(data)

    })
    const result = await res.json();
} 