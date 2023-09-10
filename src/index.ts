import express,{Request, Response, NextFunction} from 'express'
import {json} from 'body-parser';
import requirementRoute from './routes/requirement';

const app = express();
app.use(json());

app.use('/api',requirementRoute)
app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({ message: err.message })
})


app.listen(5000,()=>console.log("listening on port:"+5000))