import bcrypt from "bcrypt"
import { User } from "../model/modelSchema.js"
import Joi from "joi";


class AuthCon {
    static authlog = async (req, res) => {
        try {


            const { email, password } = req.body
            const result = await User.findOne({ email: email })
       
            //console.log(result)
            if (!result) {
                const isMatch = await bcrypt.compare(result.password,password)
                if (result.email == email && isMatch) {
                    const token = result.generateAuthToken();
                    res.status(200).send({ data: token, message: "logged in successfully" });
                } else {
                    res.send({ message: "Invalid Email or Password" })
                }

            } else {
                res.send({ message: "User IS not registered First Resgistred" })
            }


        } catch (error) {
            res.status(500).send({ message: "Internal Server Error" });


        }

    }

}

export default AuthCon
