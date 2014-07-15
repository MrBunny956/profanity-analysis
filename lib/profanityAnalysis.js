var profanityAnalysis = (function(){
	function Filter(){
		this.list = require('./curseWords/en.curseWords.json').curseWords;
	}

	Filter.prototype.isProfane = function isProfane(string){
		for(var i = 0; i < this.list.length; i++) {
			if(string.toLowerCase() == this.list[i].name.toLowerCase()) {
				return this.list[i];
            }
        }
		return false;
	};

    Filter.prototype.analyzeBlob = function analyzeBlob(blob) {
        var results = {
            indexOfProfanity: [],
            score: 0,
            precentage: 0,
            wordcount: 0
        };
        var words = blob.split(" ");
        words.some(function(word, index){
            var profanity = this.isProfane(word);
            if(profanity)
            {
                results.indexOfProfanity.push({index: index, value: profanity.value});
                results.score += profanity.value;
            }
        }.bind(this));
        results.wordcount = (words.length === 0) ? 0 : words.length;
        results.precentage = (words.length === 0) ? 0 : results.score/words.length;
        return results;
    };


	Filter.prototype.replaceWord = function replaceWord(string){
		return string.split("").map(function(c){
			return "*";
		}).join("");
	};

	return Filter;
})();


module.exports = new profanityAnalysis();
