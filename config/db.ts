import mongoose from 'mongoose';

const connectDB = async () =>{
	try{
		mongoose.set('strictQuery', true);
		const conn = await mongoose.connect('mongodb://127.0.0.1:27017/amirmonadiproject');
		console.log(`mongo db connected : ${conn.connection.host}`);
	}
	catch(err){
		console.log(err);
		process.exit(1);
	}
};

export default connectDB;