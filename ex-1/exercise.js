
function injectStory(noun, verb, adverb, adjective){
    window.alert('Name: ' + noun + ' Verb: ' + verb + ' Adverb: ' + adverb + ' adjective: ' + adjective);
}

var noun = prompt('Put a name');
var verb = prompt('Put a verb');
var adverb = prompt('Put a adverb');
var adjective = prompt('Put a adjective');

injectStory(noun, verb, adverb, adjective);