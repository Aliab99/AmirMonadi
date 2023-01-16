import express from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

import validator from '../validator';
import userModel from './../model';

const router = express.Router();

router.post('/register', function (req, res) {
	try {
		const register = validator.register(req.body);
		if (register !== true) {
			throw register;
		}
		userModel.create(req.body);
		const token = jwt.sign({ email: req.body.email }, 'amirmonadiproject');
		res.json({
			message: 'successfully register',
			token,
			...req.body,
		});
	} catch (error) {
		console.log(error);
		res.status(400);
		res.json({
			...createError.BadRequest(),
			error,
		});
	}
});

export default router;
