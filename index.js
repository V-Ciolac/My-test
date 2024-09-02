const giveAcessTo = (name) => console.log('Acess Greanted to ' + name)

function auth(verify) {
    let array = [];
    for(let i=0; i < verify; i++ ){
        array.push(i)
    }
    return giveAcessTo(person.name);
}
function sing(person){
    return console.log('la la la my name is ' + person.name)
}

function letPerson(person, fn){
    if(person.level === 'Admin') {
       return fn(person)
    } else if (person.level === 'user'){
       return fn(person) 
    }
    
}

letPerson({level: 'Admin', name:'Saly'}, sing)