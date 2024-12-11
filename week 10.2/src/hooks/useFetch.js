import { useState } from "react";
import { useEffect } from "react";

export default function useFetch(url){
    const [info,setInfo]=useState({})
    async function fetchInfo(){
        const data=await fetch(url)
        const json=await data.json()
        setInfo(json)

    }
    useEffect(()=>fetchInfo,[])

    return info

}