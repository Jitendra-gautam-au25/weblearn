import express from "express"
import SignUpCon from "../Controller/register.js"
const router=express.Router()

router.post('/users',SignUpCon.SignUp)


export default router 