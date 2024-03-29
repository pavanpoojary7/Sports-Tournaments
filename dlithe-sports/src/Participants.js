import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { collecting, updating,onlyOne } from "./Bridge";
import Button from '@mui/material/Button';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';



export const Participants=()=>{
    const{id}=useParams()

    const[tour,setTour]=useState(
        {
            "tournamentId":0,
            "name":"",
            "participants":[],
            "startDate":"",
            "winner":"",
            "venue":"",
            "price":0  
        }
    )
    useEffect(()=>{
        gather()
    },[])

    const gather=async()=>{
        const t=await onlyOne(id)
        setTour(t.data)
    }

    const declare=async(person)=>{
        const t = await updating(person,tour)
        alert(t.data)
        window.location.assign("/home")
    }

    return(
        <>
        <p className="text-center mt-lg-4 text-primary display-4">
            Athelets of {tour.name} Tournament
        </p>
        <div className="container">
            <div className="row justify-content-center p-3">
                {tour.participants.map((data,index)=>(
                    <div className="card col-lg-3 col-md-4 col-sm-6 text-dark bg-info p-4 me-3 mt-3">
                        <h1 className="text-center card-title">{data.name}</h1>
                        <hr color="blue"/>
                        <div className="card-body">
                            <p className="card-text text-center">{data.enrollId}</p>
                            <p className="float-start">{data.contactNo}</p>
                            <p className="float-end">{data.weight}</p>
                        </div>
                        <Button color="warning" className="text-center" onClick={()=>{
                            declare(data.name)
                        }}>
                            <EmojiEventsRoundedIcon/>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
        
        
        </>
    );
}