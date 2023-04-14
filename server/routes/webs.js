import express from "express"
import AuthCon from "../Controller/auth.js"
const router=express.Router()

router.post('/auth',AuthCon.authlog)


export default router 