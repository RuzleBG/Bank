const users=[{
    name:"test",
    pin: 1234,
    ballance: 1000
}]

var transaction_history=[{
    Date: "",
    ammount_withdrawn: "",
    remaning_ballance: "",
}];

let name = prompt("Please enter your name");
if (name == null || name == "") {
  alert("Invalid Input")
  document.location.reload(true);
}
let pin=prompt("Please enter your pin");
if (pin == null || pin == "") {
    alert("Invalid Input")
    document.location.reload(true);
  }

  let user_index;
  users.forEach(function(user, i, users) {
    if(user.name==name && user.pin==pin){
        alert("Welcome!")
        user_index=i;

    }
    else{
        alert("Invalid Login");
        document.location.reload(true);
    }
  })

  const tax=0.2;

function bill_count(ammount){
    let bill_ammount={
        hundret:0,
        fifty:0,
        twenty:0,
        ten:0
    }
    if(ammount-1==9){
        alert("Invalid Input");
    }
    else{
    const trans_ammount=ammount;
    bill_ammount.hundret=Math.floor(ammount/100);
    console.log(bill_ammount.hundret);
    ammount=ammount-bill_ammount.hundret*100;
    bill_ammount.fifty=Math.floor(ammount/50);
    ammount=ammount-bill_ammount.fifty*50;    
    bill_ammount.twenty=Math.floor(ammount/20);
    ammount=ammount-bill_ammount.twenty*20;    
    bill_ammount.ten=Math.floor(ammount/10);
    ammount=ammount-bill_ammount.ten*10;
    users[user_index].ballance-=tax;
    let transaction={
        Date: new Date().toLocaleDateString(),
        ammount_withdrawn: trans_ammount,
        remaning_ballance: users[user_index].ballance
    }
    alert("time: "+ transaction.Date+ " You Withdrew: " + bill_ammount.hundret+ " 100 leva bills, "+ bill_ammount.fifty+ " 50 leva bills, "+ bill_ammount.twenty+ " 20 leva bills, "+ bill_ammount.ten+ " 10 leva bills"+ " transaction ammount: "+trans_ammount+ " tax: "+ tax+ " remaning ballance: " +users[user_index].ballance);
    transaction_history.push(transaction);   
    }
}

function withdraw(){
    const money=document.querySelector('#money').value;
    if(money>400){
        alert("Limit is 400 leva!");
    }
    else{
    let pin2 = prompt("Please enter your Pin");
    if(pin2!=users[user_index].pin){
        alert("Invalid Pin!")
    }
    else{
    users[user_index].ballance-=money;
    alert("Withdraw successfull")
    bill_count(money);
    }
    }
}

function show(){
 
    for(var transaction of transaction_history){
        if(transaction.Date!=""){
    document.getElementById("history").insertAdjacentHTML('afterend', `<h4>Date: ${transaction.Date} , tax: ${tax} , ammount withdrawn: ${transaction.ammount_withdrawn} , remaining ballance: ${transaction.remaning_ballance}</h4>`);
}}};

    
