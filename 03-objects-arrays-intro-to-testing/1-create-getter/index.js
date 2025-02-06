/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
 export function createGetter(field) {
	const path = field.split('.');

	return (obj) => {
		let currentObj = obj;
		for (let key of path) {
			if (!currentObj?.hasOwnProperty(key)) {
				return
			} 
			
			currentObj = currentObj[key];
		}
		return currentObj;
	}
 }
