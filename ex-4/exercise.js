function calculateAge(dateWasBorn, dateNow){

    if(dateWasBorn.getMonth() == dateNow.getMonth()){
        return dateNow.getFullYear() - dateWasBorn.getFullYear();
    }
    else if(dateWasBorn.getMonth() < dateNow.getMonth()){
        return dateNow.getFullYear() - dateWasBorn.getFullYear() - 1;
    }
    else{
        return dateNow.getFullYear() - dateWasBorn.getFullYear();
    }
}

var dateWasBorn = new Date(2000, 0, 26);

var age = calculateAge(dateWasBorn, new Date());

window.alert('You have ' + age + ' year old');

dateWasBorn = new Date(2000, 1, 26);

age = calculateAge(dateWasBorn, new Date());

window.alert('You have ' + age + ' year old');