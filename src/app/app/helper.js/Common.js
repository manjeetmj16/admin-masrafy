

const Common = {};

const leftpad = number => ((number >= 10) ? String(number) : `0${number}`);

Common.requestFieldsValidation = async (fields, postData) => {
	let flag = {status: true, message: ''};
	if(fields.length) {
		for (let field of fields) {
			let arr = field.split('.');
			if(arr.length <= 1) {	
				if(typeof postData[field] == 'undefined' || postData[field] === "") {
					flag.status = false;
				}
			}
			if(arr.length == 2) {
				if(typeof postData[arr[0]][arr[1]] == 'undefined' || postData[arr[0]][arr[1]] === "") {
					flag.status = false;
				}
			}
		}
	}
	return flag;
}

export default Common;
