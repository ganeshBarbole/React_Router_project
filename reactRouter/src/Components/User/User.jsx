import { useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams();
    return(
        <div className="text-center m-4 bg-gray-400 text-black p-4 text-3xl ">
        user : {id}
        </div>
    )
}