export default function (request:any) {
	try {
		request();
	} catch (error) {
		console.log(error);
	}
}
