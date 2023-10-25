import {useNavigate} from "react-router-dom"
function AdminDashboard(){
    const navigate = useNavigate();
    return(
        <div className={"flex justify-center content-center"}>
            <button className={"w-40 border-2 p-2 rounded-xl bg-blue-500 text-white"} onClick={()=>{
                navigate("/addcourse")
            }}>Add Course</button>
        </div>
    )


}
export default AdminDashboard