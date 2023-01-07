
import axios from "axios";
import { useEffect, useState } from "react"
import api from "../../api";
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";

function Athletes() {
    let [profiles, setProfiles] = useState([]);
    //since this is a single-crud, I'm just going to do dispatch-thunk behavior inside of this component to save time instead of setting up a store.
    let data;

    console.log(profiles, 'profiles')


    useEffect(() => {
        async function fetchData() {
            let response = await api.getAllProfiles()
            data = response.data.data.profiles;
            setProfiles(data);
            return response;
        }
        fetchData();
        // console.log(data, 'data', profiles)
    }, [])



    return (
        <div className="Athletes">
            <>All Profiles</>
            <>
                {profiles?.map(profile => (
                    <SingleAthlete profile={profile} />
                    // <div className='profile' >
                    //     <span>{Object.keys(profile).map(field => (
                    //         <div>{field}</div>
                    //     ))}</span>
                    //     <span>{Object.values(profile).map(field => (
                    //         <div>{field}</div>
                    //     ))}</span>

                    // </div>
                ))}
            </>

        </div >
    );
}

export default Athletes;
