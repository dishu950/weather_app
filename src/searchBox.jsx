import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';
export default function SearchBox({UpdateInfo}){
    let [city , setCity] = useState("");
    let [error , setError]= useState(false);
    let URL = "https://api.openweathermap.org/data/2.5/weather";
    let key = "112f40aa203446985af195e858a42057";

    let getWheather= async (city) => {
        try{
        const response = await fetch(`${URL}?q=${city}&appid=${key}&units=metric`);
        const data = await response.json();
        let result = {
            city: city,    
            humidity:data.main.humidity,
            temp: data.main.temp,
            temp_max:data.main.temp_max,
            temp_min:data.main.temp_min,
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }

    };
    function handleCityChange(event){
        setCity(event.target.value);
    }
    async function handleSubmit(event){
        try{
        event.preventDefault();
        let newInfo =await getWheather(city); 
        UpdateInfo(newInfo);   
        }
        catch(err){
            setError(true);
        }
    } 
    return(
    <div>
            <form onSubmit={handleSubmit}>
                <br></br>
            <label htmlFor="city">City:</label>
            <TextField id="city" placeholder="Enter city name" value={city} onChange={handleCityChange} label="Outlined secondary" color="secondary" focused />
            <br></br><br></br>
            <Button type="submit" variant="outlined">Get Wheather</Button>
            {error && <p style={{color:"red"}}>No suce Place Exist</p>}
            </form>
    </div>
    )
}