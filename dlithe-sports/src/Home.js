import React, {useEffect,useState} from "react";
import { collecting } from "./Bridge";
import Button from '@mui/material/Button';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

export const Home=()=>{
    const[every,setEvery]=useState([])


    useEffect(()=>{
        gather()
    },[])

    const gather=async()=>{
        const t = await collecting()
        setEvery(t.data.filter((data)=>{
            return data.winner === null
        }))
    }

    return(
        <>
            <div className="container mt-lg-5">
            <a href={`/completed`}>
                    <p className="display-6 link-primary">View Past tournaments</p>
                </a>
                <div className="row justify-content-center">
                    <div className="table-responsive-md">
                        <table className="table table-bordered table-hover shadow">
                            <thead className="bg-warning text-danger">
                                <tr>
                                    <th>Tournament Id</th>
                                    <th>Tournament Name</th>
                                    <th>Tournament Start Date</th>
                                    <th>Tournament Venue</th>
                                    <th>Tournament Participants</th>
                                    <th>Tournament Winner</th>
                                    <th>Tournament Prize Money</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-danger text-warning">
                                {every.map((obj,index)=>(
                                    <tr className="text-center">
                                        <td>{obj.tournamentId}</td>
                                        <td>{obj.name}</td>
                                        <td>{new Date(obj.startDate).toISOString()}</td>
                                        <td>{obj.venue}</td>
                                        <td>
                                            <a href={`/show/${obj.tournamentId}`} className="link-dark">
                                            {obj.participants.length}
                                            </a>
                                            </td>
                                        <td>{obj.winner}</td>
                                        <td>{obj.price}</td>
                                        <td>
                                        <a className="btn btn-outline-warning"
                                                href={`/ath/${obj.tournamentId}`}>
                                                <AccountBoxOutlinedIcon/>
                                                </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}