import { Router } from "express"
import data from "../data/data"
const router = Router()

router.get('/',(req,res,next)=>{
    // get the query params
    const {slack_name, track} = req.query as {slack_name:string, track:string}; 

    // check if query parameters exist in data;
    if(data['slack_name']===slack_name && data['track']===track){
        res.status(200).json({...data, status_code:200})
    }else{
        res.status(404).json({
           message:`could not find user with that parameters, consider using ${data['slack_name']} & ${data['track']}` 
        }) 
    }
})

export default router