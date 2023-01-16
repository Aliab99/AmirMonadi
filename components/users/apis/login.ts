import express from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

import validator from '../validator';
import userModel from './../model';
('./validator');

const router = express.Router();

router.post('/login', async function (req, res) {
	try {
		const login = validator.login(req.body);
		if (login !== true) {
			throw login;
		}
		const user = await userModel.findOne({ email: req.body.email });
		if(user?.password !== req.body.password) throw 'رمز یا ایمیل وارد شده صحیح نیست' ;
		console.log(user);
		const token = jwt.sign({ email: req.body.email }, 'amirmonadiproject');
		res.json({
			message: 'successfully login',
			token,
			...req.body,
		});
	} catch (error) {
		console.log(error);
		res.json({
			...createError.BadRequest(),
			error
		});
	}
});

export default router;
