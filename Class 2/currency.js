//currency....

let currency = prompt("Currency Name");
let amount = prompt(" Amount");

if( currency == "doller"){
    console.log(` ${currency} ${amount} = ${amount *83} Taka`);
}
else if( currency == "pound"){
    console.log(` ${currency} ${amount} = ${amount *90} Taka`);
}
else if( currency == "rupe"){
    console.log(` ${currency} ${amount} = ${amount *80} Taka`);
}
else if( currency == "real"){
    console.log(` ${currency} ${amount} = ${amount *22.60} Taka`);
}