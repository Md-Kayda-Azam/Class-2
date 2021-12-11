let gender =prompt('Gender Please ? Please input male/female');
let yourName;
let yourAge;
let mrgcnfrm;
let partnerName;
let partnerAge;
let partnerDad;
let yourDad;
let finalConfurm;
let kabin;
let sakkhi1;
let sakkhi2;

//Male
if(gender == 'male'){
    yourName = prompt('Name Please');
    yourAge = prompt('Your age Please');
    if(yourAge <= 10){
        console.log(`
        Hello Mr. ${yourName},
        Your age Kid Now, so focus on you Study....
        `);
    }
    else if(yourAge > 10 && yourAge < 21){
        console.log(`
        Hello Mr. ${yourName},
        Your age only ${yourAge} Now....
        Please wait ${21 - yourAge} year then you can get marriage...!
        `);
    }
    else if (yourAge >= 21 && yourAge < 40){
        mrgcnfrm = confirm(`
        Hay ${yourName} you are perfect,
        Are you wanna marry someone now..?`);
        if(mrgcnfrm == true){
            partnerAge = prompt('Please input your wife age');
            if(partnerAge <= 17){
            console.log(`
            Hellow Mr. ${yourName} ,
            we are sorry You are elegible for marriage.
            but your partner age only ${partnerAge}....
            Please wait ${18 - partnerAge} year for marry him...
            we are sorry,
            it;s against of law
            `);
        }else{
            partnerName = prompt('Please input your wife name');
            partnerDad = prompt('Please input your wife\'s father\' name');
            yourDad = prompt('Please input your father\' name');
            finalConfurm = confirm('Think again ?, Are you really want to marry..?');
            if(finalConfurm == true){
                kabin = prompt('Input amount of your kabin');
                sakkhi1 = prompt('Please input your first sakkhi name');
                sakkhi2 = prompt('Please input your second sakkhi name');
                alert(`Congratulation...........!
                Check the console...
                `);
                console.log(`
                Mr.${yourDad} ar putro ${yourName} ar sathe ${kabin} taka kabin Dharjo koriya,
                Mr.${partnerDad} ar konna ${partnerName} ar sathe Suvo Bibaho Somponno Hoilo..!

                Sakkhi 1 = ${sakkhi1}
                Sakkhi 2 = ${sakkhi2}

                Hello Mr. ${yourName}, Congratulation..!
                You Are a Husband Now...

                Now please pay our charge....
                `);
            }             
            
        }
    }
}
}

//female
 if(gender == 'female'){
    yourName = prompt('Name Please?');
    yourAge = prompt('Your Age Please');
    if(yourAge <= 10){
        console.log(`
        Hello Mst. ${yourName},
        Your are Kid Now, So focus on your Study.......
        `);
    }
    else if(yourAge > 10 && yourAge < 18){
        console.log(`
        Hello Mst. ${yourName},
        Your age only ${yourAge} Now...
        Please wait ${18 - yourAge} year then your can get marriage.. 
        `);
    }else if(yourAge >= 18 && yourAge < 40){
        mrgcnfrm =confirm(`
        Hay ${yourName} you are perfect,
        Are you wanna marry someone now..?`);
        if(mrgcnfrm == true){
            partnerAge = prompt('Please input your husband age');
            if(partnerAge <= 20){
                console.log(`
                Hello Mst. ${yourName} ,
                we are so sorry You are Elegible for marriage.
                but your partner age only ${partnerAge}....
                Please wait ${21 - partnerAge} year for marry him..
                we are sorry,
                it's against of law
                `);
           }else{
                partnerName = prompt('Please input your husband name');
                partnerDad = prompt('Please input your husband\'s father\' name');
                yourDad = prompt('Please input your father\' name');
                finalConfurm = confirm('Think again ?, Are you really want to marry..?');
                if(finalConfurm == true){
                    kabin = prompt('Input amount of your kabin');
                    sakkhi1 = prompt('Please input your first sakkhi name');
                    sakkhi2 = prompt('Please input your second sakkhi name');
                    alert(`Congratulation...........!
                    Check the console...
                    `);
                    console.log(`
                    Mr.${yourDad} ar konnna ${yourName} ar sathe ${kabin} taka kabin Dharjo koriya,
                    Mr.${partnerDad} ar putro ${partnerName} ar sathe Suvo Bibaho Somponno Hoilo..!
    
                    Sakkhi 1 = ${sakkhi1}
                    Sakkhi 2 = ${sakkhi2}
    
                    Hello Mr. ${yourName}, Congratulation..!
                    You Are a Husband Now...
    
                    Now please pay our charge....
                    `);
                }             
                
            }
        }
    }
}
