'use client'
import { useParams } from "next/navigation"
import UploadAvatar from "@/components/UploadAvatar"


export default function UserPage() {
    
    const params=useParams<{username:string}>()
    const username=params?.username
    const decodedUsername = decodeURIComponent(username)
   
    return (
        <div>
            <h1>Upload Avatar</h1>
            <UploadAvatar />
        </div>
    )
}





