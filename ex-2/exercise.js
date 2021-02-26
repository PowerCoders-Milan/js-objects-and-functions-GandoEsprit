
function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle){
    this.numberOfChildren = numberOfChildren;
    this.partnerName = partnerName;
    this.geographicLocation = geographicLocation;
    this.jobTitle = jobTitle;
}

var numberOfChildren = prompt('How many children you have?');
var partnerName = prompt('What is the of your partner?');
var geographicLocation = prompt('Who do you live');
var jobTitle = prompt('What is your job');

var info = new tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle);

window.alert('You will be a ' + info.jobTitle + ' in ' + info.geographicLocation +
', and married to ' + info.partnerName + ' with ' + info.numberOfChildren + ' kids.');