'use client'

import SideBar from "@/components/SideBar";
import { useTitleContext } from "@/context/TitleContext";
import { useEffect } from "react";

export default function Home() {
  const { setData } = useTitleContext()
  async function fetchIt() {
    try {
      const response = await fetch('https://dummyjson.com/products/1')
      const data = await response.json()
      console.log(data.title)
      setData(data.title)
    } catch (error) {
      throw Error("something wrong")
    }
  }

  useEffect(() => {
    fetchIt()
  }, [])
  return (
    <div>
      <SideBar />
    </div>
  );
}
