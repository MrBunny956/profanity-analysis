profanity-analysis
=================

Not all bad words are equal.  This filter rates a blob of text based off bad words to determine if the blob is too vulgar to use.

How To use.
=================
```javascript
var filter = require('profanityAnalysis');
var results = filter.analyzeBlob(yourString);
```
the returned results will contin the following object.
```javascript
{
  indexOfProfanity: [], //Array consisting of the indexes of bad words and the weight the bad word is givin in the config.
  score: 0, //The total profanity weight values added together
  precentage: 0 //The total number of words over the weight value of the profantiy - totalWords/score
};
```
