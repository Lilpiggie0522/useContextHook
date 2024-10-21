'use client'
import { useTitleContext } from "@/context/TitleContext"
import { useEffect, useState } from "react"

export default function SideBar() {
    const [title, setTitle] = useState('')   // Initialize state for title
    const { data } = useTitleContext()       // Get data from the context

    useEffect(() => {
        if (data) {                          // Ensure data is not null or undefined
            setTitle(data)                   // Update the title state with context data
        }
    }, [data])                               // Dependency on `data`, not `title`

    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
            <div>
                It's just some info
            </div>
            <div>
                <p>showing {title} as title</p>
            </div>
        </div>
    )
}