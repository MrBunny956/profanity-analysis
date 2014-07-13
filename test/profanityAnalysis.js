require('assert');
var filter = require('../lib/profanityAnalysis.js');
var assert = require('better-assert');

describe('filter', function(){
	describe('isProfane',function(){

		it("Should detect a bad word and return a boolean value",function(){
			var results = filter.analyzeBlob("he was such a shit");
            console.log(results);
            assert(results.score === 5);
            assert(results.indexOfProfanity[0].index === 4);
		});
	});
});
