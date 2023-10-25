let counter = 0
function increment(){
    counter = counter + 1; 
    document.getElementsById('counter').innerHTML = counter;
}

function Decrement(){
    // counter = counter - 1;  
    counter -= 1;
    document.getElementsById('counter').innerHTML = counter;
}

function Reset(){ 
    counter = 0;
    document.getElementsById('counter').innerHTML = counter;
}
