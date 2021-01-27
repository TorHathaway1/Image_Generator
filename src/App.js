import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CardHeader } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "5L0FWzKtXtMhpFK078Kibg1El-Q7ELl-Wna7FGlIKtY"
  );
  const [results, setResult] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rando = getRandomInt(1, 20);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=" +
      rando +
      "&query=" +
      photo +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Random Image Generator</Typography>
        </Toolbar>
      </AppBar>

      <h1>Search for an image!</h1>
      <TextField
        onChange={handleChange}
        name="photo"
        type="text"
        id="standard-full-width"
        label=""
        style={{ margin: 8 }}
        placeholder="Search..."
        helperText="Input a keyword to search for images"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button onClick={handleSubmit} variant="outlined" color="primary">
        Search
      </Button>
      <div>
        {results.map((photo) => (
          <img src={photo.urls.small} />
        ))}
      </div>
    </div>
  );
}
