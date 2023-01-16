import Validator from 'fastest-validator';

const v = new Validator();

const login = {
	password: { type: 'string', min: 8, max: 255 },
	email : {type: 'email', min: 5, max:200 }, 
};
const register = {
	firstName: { type: 'string', min: 3, max: 255 },
	lastName : {type: 'string', min: 3, max: 255},
	password: { type: 'string', min: 8, max: 255 },
	email : {type: 'email', min: 5, max:200 },
};

export default {login : v.compile(login) , register : v.compile(register)};
