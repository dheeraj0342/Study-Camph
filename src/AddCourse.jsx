
import { useState } from "react";
export function AddCourse(){
    const [title,settitle] = useState(null);
    const [description,setdescription] = useState(null);

    return (

        <div className={"flex justify-center content-center "}>
            <div className={"flex flex-col gap-2  "}>
                <div className={"flex flex-col gap-1 ml-8"}>
                    <h1>----Add Course----</h1>
                </div>
                <div  className={"flex flex-col gap-3 border-4 rounded-xl p-4"}>
                    Title: <input type={"text"} className={"w-60 h-10 border-2 rounded-xl p-4"} onChange={(e)=>{
                    settitle(e.target.value)
                }}/>
                    Description :
                    <div className={"relative"}>
                        <input type={"text"} className={"w-60 h-10 border-2 rounded-xl p-4"} onChange={(e)=>{
                            setdescription(e.target.value)
                        }} />
                    </div>

                    <button  className={"w-40 border-2 p-2 rounded-xl bg-blue-500 text-white"} onClick={()=>{
                        fetch("http://localhost:3000/admin/courses" , {
                            method :"POST",
                            body:JSON.stringify({
                                title : title,
                                description : description
                            }),

                            headers:{
                                "Content-Type": "application/json",
                                "Authorization" : "Bearer " + localStorage.getItem("token")
                            }
                        }).then((res)=>{
                            res.json().then((data)=>{
                                console.log(data)
                            })
                        })
                    }

                    }>AddCourse</button>

                </div>
            </div>
        </div>

    )

}
