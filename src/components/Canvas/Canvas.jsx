import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Canvas.css";
import Card from "../Card/Card";
import HomeHeading from "../HomeHeading/HomeHeading";
import CreateIcon from '@mui/icons-material/Create';
import apiURL from "../../URLs/apiURL";

function Canvas() {

    const [homeData, setHomeData] = useState([]);

    useEffect(()=>{
        getHomeCards();
    }, []);


    async function getHomeCards() {
            
        try{
            const res = await axios.get(apiURL + "home-posts");
            setHomeData(res.data);
            console.log(res.data);
        }
        catch(err) {
            console.error(err);
        }

    }

    function handleAskHere() {

    }

    

    return <React.Fragment>

    <div id="canvas">
        <button id="ask-btn" onClick={handleAskHere}>
            <div className="ask-btn-div">
                <span>Ask Here</span>
                <CreateIcon />
            </div>     
        </button>

        <div id="vertical-line">
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>        

        <div id="home-container">

            <HomeHeading />

            <div id="cards-container">
                
                {homeData.map((ele)=> {
                    return <Card 
                        key={Math.random()}
                        name="Denise Richards"
                        time={ele.time}
                        date={ele.date}
                        branch="Electrical"
                        question={ele.question}
                        topAnswer={ele.answers[0]}

                    />;
                })}
                
            </div>
            
        </div>
        

    </div>
    </React.Fragment>;
}

export default Canvas;