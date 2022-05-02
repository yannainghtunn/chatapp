import { Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../component/Logo";
import pf_img from "../assets/pf.jpg";
import {motion} from "framer-motion";
const lrVarient={
  init:{
    opacity:0
  },
  ani: {
    opacity:1,
    transition: {
      duration: 2,
    }
  }
}
export default function HomeRoute() {
    const theme=useTheme();
    return (<motion.div  transition={{staggerChildren:1.1}} className="container" >
            <div style={{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10px",marginTop:"10px"}}>
                  <div style={{display:"inline-block"}}><Logo mode="dark"/></div>
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <Typography sx={{color:"black",display:"inline-block",typography:{lg:"h3",md:"h3",xs:"h4"}}}>Chattt</Typography>
                    <Typography sx={{color:"black",typography:{lg:"h5",md:"h6",xs:"h6"},}}>Open Source ChatApp.</Typography>
                  </div>
              </div>
              <br/>
              <br/>  
              <motion.div style={{margin:"auto"}} initial={{y:-20}} animate={{y:0}} transition={{duration:2,type:"spring",bounce:0.9}}><Typography sx={{color:"purple",typography:{lg:"h3",md:"h4",xs:"h5"},}}>Say Hello To Your Privacy.</Typography></motion.div>
              <br/>
            </div>
            <div style={{display:"flex",flexDirection:"column-reverse",flexGrow:1}}>
              <motion.div variants={lrVarient} initial="init" animate="ani" className="container-blur">
              <div>
              <Typography sx={{color:"purple",textAlign:"center",typography:{lg:"h3",md:"h3",xs:"h4"},}}>Feature</Typography>
              <ul>
                  <li><Typography>Send image,voice,video,stickers,gif</Typography></li>
                  <li><Typography>Messages are End-To-End Encrypted.</Typography></li>
                  <li><Typography>Add status to your timeline.</Typography></li>
                  <li><Typography>Block spam users.</Typography></li>
                  <li><Typography>Auto-Reply Feature.</Typography></li>
                  <li><Typography>Public and private groups.</Typography></li>
                  <li><Typography>Customizable themes.</Typography></li>
                  <li><Typography>Active Now Status.</Typography></li>
              </ul>
              </div>
              <br/>
              <br/>
              <Link to="/auth" state={{type:"register"}}>
                <div style={{backgroundColor:"purple",color:"white",padding:"10px 70px",borderRadius:"20px"}}>Register</div>
              </Link>
              <br/>
              OR
              <br/>
              <br/>
              <Link to="/auth" state={{type:"login"}}>
                <Button variant="outlined" style={{color:"purple",border:"1px solid purple"}}>Login</Button>
              </Link>
            </motion.div>
            <motion.div variants={lrVarient} initial="init" animate="ani" className="container-blur">
              <Typography sx={{color:"purple",textAlign:"center",typography:{lg:"h3",md:"h3",xs:"h4"},}}>Contributor</Typography>
              <br/>
              <img src={pf_img} style={{objectFit:"cover",width:"100px",height:"100px",borderRadius:"50%"}}/>
              <br/>
              <Typography sx={{color:"black",textAlign:"center",typography:{lg:"h5",md:"h5",xs:"h6"},fontWeight:"bold"}}>Yan Naing Htun</Typography>
              
            </motion.div>
            <br/>
            <br/>
          </div>
      </motion.div>);
}