import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface IUser {
	firstName: string;
	lastName: string;
	password: string;
	email: string;
}

const userSchema = new Schema<IUser>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const userModel = model<IUser>('users', userSchema);
export default userModel;
