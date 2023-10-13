import { useLoaderData } from "react-router-dom"



export default function Github() {
    const data = useLoaderData()
 return(
    <div className="text-center m-4 bg-gray-400 text-black p-4 text-3xl">
        Github Repository : {data.followers}
    </div>
 )
}
export const GithubRepository = async() =>
{  
     const data = await fetch("https://api.github.com/users/ganeshBarbole")
    return data.json()
}