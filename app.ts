import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotEnv from 'dotEnv';

import indexRouter from './routes/index';
import login from './components/users/apis/login';
import register from './components/users/apis/register';
import connectDB from './config/db';

const app = express();

dotEnv.config({ path: './config/config.env' });
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', login);
app.use('/user', register);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	console.log('object');
	// render the error page
	res.status(err.status || 500);
	res.send('error');
});

export default app;
