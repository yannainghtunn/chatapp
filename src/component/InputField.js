import { useTheme } from "@mui/material";
import { useMemo, useState } from "react";


export default function InputField({type,name,callback}) {
    const [value,setValue]=useState("");
    const isInValid=useMemo(()=>{
        if(value.length==0) return false;
        switch (type) {
            case "email":
                return !String(value).toLowerCase().match(/^\S+@\S+\.\S+$/);
                break;
            case "password":
                return value.length<8;
                break;
            default:

                break;
        }
        return false;
    },[value]);
    const handleChange=(event)=>{
        setValue(event.target.value);
        callback({[name]:event.target.value},isInValid);
    };
    const theme=useTheme();
    console.log(value);
    return (<>
        <input value={value} key={name} style={{marginTop:"10px",backgroundColor:theme.palette.secondary.main,color:theme.palette.text.primary,border:"none",borderRadius:"10px",width:"100%",padding:"10px 15px",boxSizing:"border-box"}} placeholder={name} type={type} onChange={handleChange}/>
        {isInValid && <p style={{fontSize:"12px",width:"100%",color:"red",margin:"0px",marginTop:"5px",marginLeft:"5px"}}>Invalid {name}{type=="password" && ": At least 8 characterlong." }</p>}
    </>);
}