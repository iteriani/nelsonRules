/*jslint         browser: true,    continue: true,
  devel : true,   indent : 2,       maxerr  : 50,
  newcap: true,   nomen  : true,    plusplus: true,
  regexp: true,   sloppy : true,    vars    : false,
  white : true
*/

(function(window, Math){
var ruleSet = {};

ruleSet.calculateMean = function(arr){
	if(arr.length === 0){
		return 0;
	}
	return arr.reduce(function(prev,curr){
		return prev + curr;
	}, 0)/arr.length;
};

ruleSet.calculateSD = function(arr, mean){
	return Math.sqrt(
		ruleSet.calculateMean(
			arr.map(function(e){
				return Math.pow(e-mean,2);
			})
		)
	);
};


window.exports = ruleSet;

}(module || window, Math));
