var chance = require('chance').Chance(); 

var wrap = require('word-wrap');

const first = ['SALUTATIONS', 'CHERISHED', 'BEAUTIFUL', 'WELCOME'];

const second = ['DADDY', 'SUGAR', 'HEART', 'LOVELY'];

const adjectives = ['DIVINE', 'PERFECT', 'LOVEABLE', 'HURTING', 'FIERY', 'SENSATIONAL', 'JOYOUS', 'BEAMING', 'BLISFULL', 'DELIGHTFULL', 'DARLING', 'CREATIVE', 'DEVOTED', 'EAGER', 'EROTIC', 'FERVENT', 'FOND', 'CARING'];

const nouns = ['BRILLIANCE', 'GOODNESS', 'HONOR', 'HOPE', 'KINDNESS', 'LOYALTY', 'DESIRE', 'DELITE', 'FAITH', 'ENCHANTMENT', 'FANCY', 'FONDNESS', 'HEART', 'HUNGER', 'INFATUATION', 'THIRST', 'EVERLONGING', 'LOVE', 'LUST', 'EYES', 'PASSION'];

const adverbs = ['PAINFULLY', 'FORCEFULLY', 'WILLINGLY', 'FULLY', 'INCREDIBLY', 'BREATHLESSLY', 'JOYOUSLY', 'BURNINGLY', 'PATIENTLY', 'WILLINGLY', 'DEVOTEDLY', 'EVERLONGINGLY', 'FERVENTLY', 'KINDLY', 'UNBELIEVABLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY'];

const verbs = ['FEELS', 'SEES', 'WISHES FOR', 'KEEPS', 'BURNS ONTO', 'BECOMES ONE WITH','HOLDS', 'HOPES FOR', 'RUBS', 'CHARESSES', 'HUNGERS FOR', 'IS THE ONE FOR', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'LOSES BREATH OVER', 'WAITS FOR', 'SIGHS FOR', 'FUCKS', 'THIRSTS FOR', 'TREASURES', 'HURTS FOR', 'WISHES'];

const person = ['YOURS', 'FOR YOU'];

const last = ['TRULY', 'MADLY', 'ETERNALLY', 'DEEPLY', 'FAITHFULLY', 'FOREVER'];

const name = ['ANNABEL', 'YOUR LOVE'];

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index];
}

function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}


function short() {
	return choice(first) + ' ' + choice(second);
}


function long() {
	return ' MY ' + maybe(adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					'YOUR ' + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

function end() {
	return choice(person) + ' ' + choice(last) + ', ' + '\r' + choice(name) + '. ';
}

console.log('\n\n\n\n');

var text = '';
{ 
text += short() + '\n';
}
for(var i = 0; i < 5; i++) {

 text += long();
}
{
text += '\n' + end();	
}

console.log(wrap(text, {'width': 65}));

console.log('\n\n\n\n');