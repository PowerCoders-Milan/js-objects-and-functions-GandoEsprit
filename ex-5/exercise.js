function helloWorld(lang){
    var lang = lang.substr(0,2).toLowerCase();

    if(lang === 'it'){
        return 'Ciao, Mondo';
    }
    else if(lang === 'fr'){
        return 'Salut, Monde';
    }
    else{
        return 'Hello, World'
    }
}

var lang = prompt('Enter a language betwen \"French, Italian and English\"');

window.alert(helloWorld(lang));