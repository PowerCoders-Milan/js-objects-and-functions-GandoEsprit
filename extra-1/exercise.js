function retireAge(birthday, yearLikeRetir){
    var yearRetire = birthday.getFullYear() + yearLikeRetir;
    var yearUntilRetire = yearRetire - (new Date()).getFullYear();
    var yearToBeRetir = birthday.getDate() + '/' + birthday.getMonth() + '/' + yearRetire;
    window.alert('You have ' + yearUntilRetire +
    ' years left until you can retire. It\'s ' + (new Date()).getFullYear() + 
    ', so you can retire the ' + yearToBeRetir + '.');
}

var birthday = prompt('When is your brithday ?');
var yearLikeRetir = prompt('At what age would you like retire ?');

var day = birthday.substr(0, 2);
var month = birthday.substr(3, 2);
var year = birthday.substr(6, 4);

var date = new Date(Number(year), Number(month), Number(day));

retireAge(date, Number(yearLikeRetir))