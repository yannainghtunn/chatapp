import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import "../style.css";
const flyVarient={
    init:{
        rotate:90,pathLength:0.3,
    },
    ani:{
        pathLength:1,rotate:0,
        transition: {
            duration:4,type:"spring",bounce:0.9
        }
    }
}

export default function Logo(props) {
    const theme=useTheme();
    const color=props.mode?"#00506C":theme.palette.secondary.icons;
    return (<div  style={{width:"100px",height:"100px",display:"block",margin:"auto"}}><svg  style={{display:"block",margin:"auto",width:"100px",height:"100px"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000"
    preserveAspectRatio="xMidYMid meet">
   <metadata>
   Created by potrace 1.16, written by Peter Selinger 2001-2019
   </metadata>
   <motion.circle initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.5}} cx="250" cy="250" r="180" fill="none" stroke={color} strokeWidth="15px"/>
   <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
   fill={color} stroke="none">
   <motion.path variants={flyVarient} initial="init" animate="ani" d="M3390 3324 c-195 -69 -418 -147 -770 -269 -69 -24 -267 -93 -440
   -153 -173 -61 -405 -141 -514 -180 l-200 -69 142 -145 143 -146 69 -173 c39
   -95 74 -177 79 -182 5 -5 31 6 62 27 30 20 59 36 65 36 6 0 37 -28 69 -62 107
   -115 367 -378 374 -378 3 0 83 127 177 283 201 331 440 724 694 1142 100 165
   184 303 187 308 7 12 -5 8 -137 -39z"/>
   </g>
   </svg></div>);
}