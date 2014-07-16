require('assert');
var filter = require('../lib/profanityAnalysis.js');
var assert = require('better-assert');

describe('filter', function(){
	describe('isProfane',function(){

		it("Should detect a bad word and return a boolean value",function(){
			var results = filter.analyzeBlob("he was such a shit");
            assert(results.score === 500);
            assert(results.indexOfProfanity[0].index === 4);
		});

        it("Should return failed if a blacklisted word is discovered", function() {
            var results = filter.analyzeBlob("FUCK IT");
            assert(results.failed);
        });

        it("Should pass good text", function() {
            var results = filter.analyzeBlob("this is good IT");
            assert(results.failed == false);
        });
	});
});
