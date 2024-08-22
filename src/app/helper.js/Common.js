const Common = {};

Common.requestFieldsValidation = async (fields, postData) => {
  
    let flag = { status: true, message: '' };
    console.log("fields",fields);
	console.log("postData",postData);
    if (fields?.length) {
        for (let field of fields) {
            let arr = field?.split('.');
			
            // Check for single level property
            if (arr.length === 1) {
                if (typeof postData[field] === 'undefined' || postData[field] === null || postData[field] === "") {
                    flag.status = false;
                    flag.message = `Field ${field} is required`;
                    break;  // Exit the loop on first failure
                }
            }

            // Check for nested properties (two levels)
            if (arr.length === 2) {
                if (typeof postData[arr[0]] === 'undefined' || postData[arr[0]] === null || typeof postData[arr[0]][arr[1]] === 'undefined' || postData[arr[0]][arr[1]] === null || postData[arr[0]][arr[1]] === "") {
                    flag.status = false;
                    flag.message = `Field ${field} is required`;
                    break;  // Exit the loop on first failure
                }
            }

            // Optionally, add more checks for deeper nesting if needed
        }
    }

    return flag;
};

export default Common;