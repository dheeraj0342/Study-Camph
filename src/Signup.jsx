
import {BsEyeFill,BsEyeSlashFill} from "react-icons/bs";
import { useState } from "react";
export function Signup(){
    const [Email,setEmail] = useState(null);
    const [Password,setPassword] = useState(null);
    const [Icon,setIcon] = useState(false);
    const [Type,setType] = useState("password");
    const passwordToggle = ()=>{
        if(Type === "text") {
            setType("password")
            setIcon(false)
        }
        else {
            setType("text")
            setIcon(true)
        }
    }
    return (

        <div className={"flex justify-center content-center "}>
            <div className={"flex flex-col gap-2  "}>
                <div className={"flex flex-col gap-1 ml-8"}>
                    <h1>Welcome !!</h1>
                    <h3>{"Let's get Signed up"}</h3>
                </div>
                <div  className={"flex flex-col gap-3 border-4 rounded-xl p-4"}>
                    Email: <input type={"text"} className={"w-60 h-10 border-2 rounded-xl p-4"} onChange={(e)=>{
                        setEmail(e.target.value)
                }}/>
                    Password :
                    <div className={"relative"}>
                         <input type={Type} className={"w-60 h-10 border-2 rounded-xl p-4"} onChange={(e)=>{
                             setPassword(e.target.value)
                         }} />
                        {!Icon ? <BsEyeSlashFill className={"absolute top-3 right-2"} onClick={passwordToggle}></BsEyeSlashFill> : <BsEyeFill className={"absolute top-3 right-2"} onClick={passwordToggle}></BsEyeFill>}




                    </div>

                    <button  className={"w-40 border-2 p-2 rounded-xl bg-blue-500 text-white"} onClick={()=>{
                        fetch("http://localhost:3000/admin/signup" , {
                            method :"POST",
                            body : JSON.stringify({
                                username : Email,
                                password : Password

                            }),
                            headers:{
                                "Content-Type": "application/json"
                            }
                        }).then((res)=>{
                            res.json().then((data)=>{
                                localStorage.setItem("token",data.token)
                                console.log(data)
                            })
                        })

                        navigator("/admindashboard")

                    }

                    }>SignUp</button>

                </div>
            </div>
        </div>

    )
}
