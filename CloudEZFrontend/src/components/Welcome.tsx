import { useNavigate } from "react-router-dom"

const Welcome=()=>{
    const navigate=useNavigate()
    return (
        <>
            <div className=" flex flex-col gap-10 justify-between align-middle text-white" >
            <div>
            Welcome To CloudEZ
                </div>
            <div>
                <button onClick={()=>{navigate('/login')}} className="bg-white text-black rounded-sm p-1">Login</button>
            </div>
                </div>
           
                
        </>
    )
}

export default Welcome