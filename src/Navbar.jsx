import {Typography} from '@mui/material'
import {useNavigate,} from "react-router-dom"
import {useEffect} from "react"

export function Navbar(){
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:3000/admin/me",{
            method : "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data)
            })
        })
    },[])
    return(
        <div className={"flex justify-between m-3"}>
            <div>
                <Typography variant="h3">Study Camph</Typography>
            </div>

            <div  className={"flex gap-2"}>
                <button  className={"w-32 h-12 border-2 p-2 rounded-xl bg-blue-500 text-white"} onClick={()=>{
                    navigate("/signup")
                }}>SignUp</button>
                <button  className={"w-32 h-12 border-2 p-2 rounded-xl bg-blue-500 text-white"} onClick={()=>{
                    navigate("/signin")}
                    }>SignIn</button>
            </div>

        </div>


    )

}