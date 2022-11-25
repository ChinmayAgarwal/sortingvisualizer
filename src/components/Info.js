import React from "react";
import Data from "../Data";
import "./Legends/Legends.css"
function Info(props)
{
    let obj= {};

    obj = Data.map((info)=>{
        if(info.algo === props.algo)
        {
            return info;
        }
        return {};
    })

    return <div className="info">
        <div className='key2'> 
            <span >Best Case Time Complexity : {obj.besttc}</span> 
        </div>
        <div className='key2'> 
            <span>Worst Case Time Complexity : {obj.worsttc}</span> 
        </div>
        <div className='key2'> 
            <span>Space Complexity : {obj.spacec}</span> 
        </div>
        <div className='key2'> 
            <span><a target = "_blank" rel="noopener noreferrer" href={obj.url}><img className = "more-info" src = "./moreInfo.png" alt =""/></a></span> 
        </div>
    </div>
}

export default Info;