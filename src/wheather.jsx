import { useState } from 'react';
import  InfoBox  from './infoBox';
import SearchBox from './searchBox'
export default function WheatherApp(){
    let [wheatherInfo , setwheatherInfo]= useState({
            city: "Delhi",    
            humidity:73,
            temp: 23,
            temp_max:28,
            temp_min:20,
    })
let UpdateInfo =(newInfo)=>{
  setwheatherInfo(newInfo);
  console.log(newInfo);
};

    return(
        <div>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox info={wheatherInfo}/>
        </div>
    );
}