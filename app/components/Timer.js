"use client"

import { useEffect , useState } from "react"

export default function Timer () {
    const [uptime,setUptime] = useState('Fetching...');

    useEffect ( () => {
        const calculateUpTime = () => {
            const startTime =  new Date('2023-05-24T00:00:00');
            const now = new Date();
            const uptimeInMillis = now - startTime;
            const seconds = Math.floor(uptimeInMillis / 1000);

            const months = Math.floor(seconds / (30 * 24 * 60 * 60));
            const days = Math.floor((seconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
            const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((seconds % (60 * 60)) / 60);
            const remainingSeconds = seconds % 60;

            setUptime(` ${months} : ${days} : ${hours}: ${minutes}: ${remainingSeconds}  `)
        }
        calculateUpTime();

        const interval = setInterval(calculateUpTime, 1000)
        return () => clearInterval(interval)
    },[])
    return(
        
        <div>
            <h1 className="">Time Since Last Update</h1>
            <br></br>
            <p className="">{uptime}</p>
        </div>
    )
}
