var should = require("should"),
    rules = require("./rules.js");

describe("Math", function(){
	describe("#calculateMean()", function(){
		it("should return 0 when there are no elements", function(){
			rules.calculateMean([]).should.equal(0);
		});

		it("should return the number when there are an array of 1 element", function(){
			rules.calculateMean([1]).should.equal(1);
		});

		it("should return the right mean when there is a correct array", function(){
			rules.calculateMean([1,2,3]).should.equal(2);
		});


		it("should return 0 when the array has only 0s", function(){
			rules.calculateMean([0,0,0]).should.equal(0);
		});

	});

	describe("#calculateSD()", function(){
		it("should return 0 when there are no elements", function(){
			rules.calculateSD([],0).should.equal(0);
		});

		it("should return 0 when there is no deviation" , function(){
			rules.calculateSD([1],1).should.equal(0);
		});

		it("should return the right SD when there is a correct array", function(){
			rules.calculateSD([1,2,3],2).should.be.within(.8,.9);
		});


		it("should return 0 when the array has only 0s", function(){
			rules.calculateSD([0,0,0],0).should.equal(0);
		});

	});
});

describe("Nelson Rules", function(){
	describe("Nelson Rule 1", function(){
		it("should return a rule violation when there is a point more than 3 standard deviations from the mean");
		it("should return multiple rule violations when there are points more than 3 standard deviations from the mean")
		it("should return nothing when there are no points in violation");
	});

	describe("Nelson Rule 2", function(){
		it("should return a rule violation when there are nine or more points in a row on the same side as the mean");
		it("should return multiple rule violations when there are multiple series of nine or more points in a row on the same side as the mean");
		it("should return nothing when there are no points in violation");
	});

	describe("Nelson Rule 3", function(){
		it("should return a rule violation when there are six or more points in a row that are continually increasing or decreasing.");
		it("should return multiple rule violations when there are series of six or more points in a row that are continually increasing or decreasing.")
		it("should return nothing when there are no points in violation.")
	});

	describe("Nelson Rule 4", function(){
		it("should return a rule violation when there are fourteen (or more) points in a row alternate in direction, increasing then decreasing.");
		it("should return multiple rule violations when there are multiple series with fourteen (or more) points in a row alternate in direction, increasing then decreasing.")
		it("should return nothing when there are no points in violation");
	});

	describe("Nelson Rule 5", function(){
		it("should return a rule violation when there is are two (or three) out of three points in a row are more than 2 standard deviations from the mean in the same direction.");
		it("should return multiple rule violations when there are multiple series with two (or three) out of three points in a row are more than 2 standard deviations from the mean in the same direction.")
		it("should return nothing when there are no points in violation");
	});

	describe("Nelson Rule 6", function(){
		it("should return a rule violation when there are four (or five) out of five points in a row are more than 1 standard deviation from the mean in the same direction.");
		it("should return multiple rule violations when there are multiple series with four (or five) out of five points in a row are more than 1 standard deviation from the mean in the same direction.")
		it("should return nothing when there are no points in violation");
	});

	describe("Nelson Rule 7", function(){
		it("should return a rule violation when there are fifteen points in a row are all within 1 standard deviation of the mean on either side of the mean.");
		it("should return multiple rule violations when there are multiple series with are fifteen points in a row are all within 1 standard deviation of the mean on either side of the mean.")
		it("should return nothing when there are no points in violation");
	});						

	describe("Nelson Rule 8", function(){
		it("should return a rule violation when there are eight points in a row exist with none within 1 standard deviation of the mean and the points are in both directions from the mean.");
		it("should return multiple rule violations when there are multiple series with  eight points in a row exist with none within 1 standard deviation of the mean and the points are in both directions from the mean.")
		it("should return nothing when there are no points in violation");
	});

});