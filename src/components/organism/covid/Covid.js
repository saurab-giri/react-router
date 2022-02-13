import React, {useEffect, useState} from 'react'

const Covid = () => {
    const [data, setData] = useState([]);  
    const getCovidData = async () =>{
        try{
        const res = await fetch('https://corona.lmao.ninja/v2/all?yesterday=');
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
       getCovidData();
    }, []);
    return (
        <div>
            <h2>Live</h2>
            <h2>World Covid Tracker</h2>
            <p>Total Cases: {data.cases} </p>
            <p>Active Cases: {data.active} </p>
            <p>Recovered Cases: {data.recovered} </p>
            <p>Death: {data.deaths} </p>
        </div>
    )
}

export default Covid
