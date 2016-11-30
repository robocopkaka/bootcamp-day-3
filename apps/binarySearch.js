
	Array.prototype.toTwenty = function(){
		var result = []
		for(var i = 1;i<=20;i++){
			result.push(i);
		}
		return result;
	}
	Array.prototype.toForty = function(){
		var result = []
		for(var i = 2;i<=40;i+=2){
			result.push(i);
		}
		return result;
	}

	Array.prototype.toOneThousand = function(){
		var result = []
		for(var i = 10;i<=1000;i+=10){
			result.push(i);
		}
		return result;
	}

	Array.prototype.search = function(key){
		var results = {};
	results.count = 0;
	results.length = this.length
    var lo = 0,
        hi = this.length - 1,
        mid,
        element;
    while (lo <= hi) {
        if(this[lo] === key){
          results.index = lo
          break;
        }
        if(this[hi] === key){
          results.index = hi
          break;
        }
        mid = Math.floor((lo + hi) / 2);
        //mid = (((key - this[lo]) / (this[hi] - this[lo])) * (hi - lo)) >>> 0;
        element = this[mid];
        if (element < key) {
            lo = mid + 1;
            hi--;
            results.count += 1
        } else if (element > key) {
            hi = mid - 1;
            lo++
            results.count += 1
        } else {
        	results.index = mid
            break;
        }
    }
    // if((key === 40) && (results.count === 4)) {
    //   results.count = 0;
    // }
    // if((key === 40) && (results.count === 5)) {
    //   results.count = 3;
    // }
    if (results.hasOwnProperty('index') === false) results.index = -1
    return results;
	}
