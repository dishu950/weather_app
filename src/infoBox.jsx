import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './infoBox.css';
export default function InfoBox({info}){
let cold = "https://images.unsplash.com/photo-1599435214324-d71096238079?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let rainy = "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    
let hot = "https://images.unsplash.com/photo-1735117411770-e56899e01eb2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
return(
    <div  className='card'>
    <div className='css'>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={info.humidity > 80 ? rainy : info.temp > 15 ? hot : cold}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component= "div">
           <div>Humidity: {info.humidity}</div>
           <div>Temperature: {info.temp}°C</div>
           <div>Max Temperature: {info.temp_max}°C</div>
           <div>Min Temperature: {info.temp_min}°C</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>);
}