//program perty----


const name = prompt('Please your name?');
const age = prompt('Please your age?');
const gender = prompt('Please your gender "male / female');


if( age >= 20 && age <= 35 && gender == 'male' ){
    console.log(` Congratulation ${name} Brother we are waiting for you this program. `);
}
else if( age < 20 && gender == 'male'){
    console.log(`Sorry ${name} We can't Give you access this program`);
}
else if( age > 35 && gender =='male'){
    console.log(`Sorry ${name} We can't Give you access this program `);
}
else if( age >= 18 && age <= 35 && gender == 'female'){
    console.log(` Congratulation ${name} Sister we are waiting for you this program. `);
}
else if( age <18 && age >= 36 && gender == 'female'){
    console.log(`Sorry ${name} Sister we can't Give you access this program.`);
}
else if( age > 35 && gender == 'female'){
    console.log(` Sorry ${name} Sister you are is no perfect please wait `);
}
else {
    console.log(`Give your right information please`);
}