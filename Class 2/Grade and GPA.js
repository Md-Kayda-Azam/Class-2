// Grade and GPA-----






let name =prompt('PLease your name')
let roll =prompt('Please your roll')
let mark =prompt('input your mark');






if( mark >= 85 && mark <= 100){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 4 and grade (A+)`);
}
else if( mark >= 80 && mark <= 84){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 3.7 and grade (A+)`);
}
else if( mark >= 75 && mark <= 79){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 3.3 and grade (B+)`);
}
else if( mark >= 70 && mark <= 74){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 3 and grade (B)`);
}
else if( mark >= 65 && mark <= 69){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 2.7 and grade (B-)`);
}
else if( mark >= 60 && mark <= 64){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 2.3 and grade (C+)`);
}
else if( mark >= 55 && mark <= 59){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 2 and grade (C)`);
}
else if( mark >= 50 && mark  <= 54){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 1.7 and grade (C-)`);
}
else if( mark >= 45 && mark <= 49){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 1.3 and grade (D)`);
}
else if( mark >= 40 && mark <= 44){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 1 and grade (D)`);
}
else if ( mark >= 0 && mark <= 39 ){
    console.log(`Hi ${name} your roll ${roll} number is you got GPA 0 and grade (F)`);
}

 