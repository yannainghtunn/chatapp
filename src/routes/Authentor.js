import { Box,Grid, Input, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import { useCallback, useEffect, useRef, useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import InputField from "../component/InputField";
import Logo from "../component/Logo";
import { useLocation } from "react-router-dom";

const bounceVarient={
    initial:{scale:0.7},
    animate:{scale:1,transition: {duration:2,type:"spring",bounce:0.8}},
    hover: {
        scale:1.2,
        transition:{
            yoyo: Infinity,
        }
    },
}
const DIV=styled("div")(({theme})=>({
    [theme.breakpoints.down("sm")]:{
        width:"90%"
    },
    [theme.breakpoints.up("sm")]:{
        width:"400px"
    }
}));
const DIV_BOX=styled("div")(({theme})=>({
[theme.breakpoints.down("sm")]:{
    padding:"20px",paddingTop:"20px"
},
[theme.breakpoints.up("sm")]:{
    padding:"50px",paddingTop:"40px"
}
}));
export default function AuthComponent(props) {
    const theme=useTheme();
    const location=useLocation();
    console.log("location : "+location.state);
    var type="register";
    if(location.state) {type=location.state.type}
    const [mode,setMode]=useState(type);
    const email=useRef("");
    const modeToggle=()=>{
        setMode(mode=="register"?"verify":"register");
    };
    const setEmail=(e)=>{
        email.current=e;
    };
    
    return (<>
    <Stack className="container" bgcolor={theme.palette.secondary.main} direction="column" display="flex" justifyContent="center" alignItems="center" minHeight="100vh"> 
    <DIV>
    <div sx={{width:100,height:100}}><Logo/></div>
    <motion.p variants={bounceVarient} initial="initial" animate="animate"  style={{color:theme.palette.text.primary,fontWeight:"bold",textAlign:"center",marginTop:"0px",fontSize:"20px"}}>{mode=="register"?"Register":mode=="verify"?"Verify":"Login"}</motion.p>
    <motion.div className="container-blur" transition={{}} style={{height:"100%",position:"relative"}}>
        
        <motion.div style={{zIndex:2,margin:"10px",padding:"10px 0px",position:"relative"}} variants={bounceVarient} initial={{scale:0.9}} animate="animate">
            <DIV_BOX style={{backdropFilter: "blur(10px)",boxShadow:"0px 0px 10px "+theme.palette.shadow,width:"100%",margin:'auto',boxSizing:"border-box"}}>
                {mode=="login" && <LoginComponent key="login" toggle={modeToggle} setEmail={setEmail}/>}
                {mode=="register" && <RegisterComponent key="register" toggle={modeToggle} setEmail={setEmail}/>}
                {mode=="verify" && <VerifyComponent key="verify" email={email.current}/>}    
            </DIV_BOX>
        </motion.div>
        <svg style={{display:"none",zIndex:1,top:0,right:0,borderRadius:"20%",width:"100%",height:"100%",position:"absolute"}} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="orange"/>
                        <stop offset="100%" stopColor="rgb(0,204,245)"/>
                    </linearGradient>
                </defs>
                <motion.rect initial={{opacity:0,pathLength:0}} animate={{opacity:1,pathLength:1}} transition={{duration:3}} style={{stroke: "url(#linear)", strokeWidth: "1px", fill: "none"}} x="0" y="0" width="100%" height="100%" rx="15" ry="15"/>
        </svg>
    </motion.div>
    </DIV>
    </Stack>
    </>);
}
function VerifyComponent({email}) {
    const [regForm,setRegForm]=useState({"Code":""});
    const isInValid=useRef(true);
    const parentCallback=(data,valid)=>{
        setRegForm({...regForm,...data});
        isInValid.current=valid;
    }
    const onVerify=()=>{

    }
    const [visible,setVisible]=useState(true);
    useEffect(()=>{
        setInterval(()=>{setVisible(false)},2000);
    });
    return (<>
            <Typography sx={{textAlign:"center",fontWeight:"bold"}}>{email}</Typography><br/>
            <AnimatePresence>
                {visible && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Typography sx={{backgroundColor:"#D9EDDF",padding:"5px 10px",borderRadius:"10px"}}>Email has Send.</Typography></motion.div>}
            </AnimatePresence>
            <InputField type="text" name="Code" callback={parentCallback}/>
            <motion.button variants={bounceVarient} initial="initial" animate="animate" whileTap="hover" style={{display:"block",margin:"10px auto"}} className="btn-full">Verify</motion.button>
            
        </>);
}
function RegisterComponent({toggle,setEmail}) {
    const [regForm,setRegForm]=useState({"Name":"","Email":"","Password":""});
    const isInValid=useRef(true);
    const parentCallback=(data,valid)=>{
        isInValid.current=valid;
        setEmail(regForm["Email"]);
        setRegForm({...regForm,...data});
    }
    const onRegister=()=>{
        if(isInValid) return;

    }
    return (<>
        <InputField name="Name" type="text" callback={parentCallback}/>
        <InputField name="Email" type="email" callback={parentCallback}/>
        <InputField name="Password" type="password" callback={parentCallback}/>
        <Stack style={{marginTop:"10px"}} display="flex" justifyContent="center" alignItems="center" direction="row">
            <motion.button whileTap="hover" variants={bounceVarient} initial="initial" animate="animate"  onClick={toggle} className="btn-line" style={{margin:"10px auto",display:"block"}}>Login</motion.button>
            <motion.button whileTap="hover" variants={bounceVarient} initial="initial" animate="animate" onClick={onRegister} className="btn-full" style={{margin:"10px auto",display:"block"}}>Register</motion.button>
        </Stack>
    </>);
}
function LoginComponent({toggle,setEmail}) {
    const [regForm,setRegForm]=useState({"Email":"","Password":""});
    const isInValid=useRef(true);
    const parentCallback=(data,valid)=>{
        isInValid.current=valid;
        setEmail(regForm["Email"]);
        setRegForm({...regForm,...data});
    }
    const onLogin=()=>{
        if(isInValid) return;

    }
    return (<>
        <InputField name="Email" type="email" callback={parentCallback}/>
        <InputField name="Password" type="password" callback={parentCallback}/>
        <Stack style={{marginTop:"10px"}} display="flex" justifyContent="center" alignItems="center" direction="row">
            <motion.button whileTap="hover" variants={bounceVarient} initial="initial" animate="animate" onClick={toggle} className="btn-line" style={{margin:"10px auto",display:"block"}}>Register</motion.button>
            <motion.button whileTap="hover" variants={bounceVarient} initial="initial" animate="animate"  onClick={onLogin} className="btn-full" style={{margin:"10px auto",display:"block"}}>Login</motion.button>
        </Stack>
    </>);
}