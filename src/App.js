import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Roboto from "@fontsource/roboto";
import HomeRoute from "./routes/HomeRoute";
import Authentor from "./routes/Authentor";
import "./style.css";
import {lightTheme,darkTheme} from "./utils/Themes";
import {LightMode,DarkMode, Light} from "@mui/icons-material";
function App() {
  const [mode,setMode]=useState("light");
  const theme=useTheme();
  const switchMode=()=> {
    setMode(mode=="dark"?"light":"dark");
  }
  return (
    <ThemeProvider theme={mode=="light"?lightTheme:darkTheme}>
      {mode=="lightt" && <LightMode sx={{color:"#3596B5",position:"absolute",right:20,top:20}} onClick={switchMode}/>}
      {mode=="darkk" && <DarkMode  sx={{color:"#3596B5",position:"absolute",right:20,top:20}} onClick={switchMode}/>}
      <div sx={{width:"100%",height:"100%",backgroundColor:theme.palette.background}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeRoute/>}/>
          <Route path="/auth" element={<Authentor/>}/>
        </Routes>
      </Router>
      </div>
    </ThemeProvider>
    
  ); 
}

export default App;
