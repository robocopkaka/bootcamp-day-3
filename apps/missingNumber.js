module.exports = {
	findMissing:function(array1, array2){
		var result = [];

		for(var i = 0; i< array1.length;i++){
			if(array2.indexOf(array1[i]) === -1){
				result.push(array1[i])
			}
		}

		for(var j = 0; j< array2.length;j++){
			if(array1.indexOf(array2[j]) === -1){
				result.push(array2[j])
			}
		}
		if(result.length === 0){
			return 0;
		}
		return result[0]
	}
}