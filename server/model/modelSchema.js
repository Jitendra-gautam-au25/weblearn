import  mongoose from "mongoose";
import  jwt from "jsonwebtoken";
import Joi from "joi";
import  passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});


userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.ABSEDEKDMEEL, {
		expiresIn: "10d",
	});
	return token;
};


const User = mongoose.model("userSign", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};
//  const validate = (data) => {
// 	    const schema = Joi.object({
// 	        email: Joi.string().email().required().label("Email"),
// 	        password: Joi.string().required().label("Password"),
// 	    });
// 	    return schema.validate(data);
// 	};
export   {User, validate }
// export  default  User;
;
 
