import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { Card, CardActionArea, CardContent, Typography, CardMedia, Grid } from '@mui/material';

function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/filmes").then((dados) => setFilmes(dados.data)).catch((error) => console.log(error));
  }, [])

  return (
    <div className="App">
      <Grid container spacing={2}>
        {filmes.map(function(filmes, index){
          return <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={filmes.imagem}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {filmes.nome}
              </Typography>
              <Typography color='blue' variant="body1">
               {filmes.sinopse}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        })}
        </Grid>
    </div>
  )
}

export default App
