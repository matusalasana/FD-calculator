function calcmatamount(){
    const principal=parseFloat(document.getElementById('principal').value)
    const irate=parseFloat(document.getElementById('interest').value)
    const tenure=parseFloat(document.getElementById('tenure').value)
    
    //calculation part

    const maturityamount=principal*(principal*irate*tenure)/100;

    //display the result

    document.getElementById('result').innerHTML=`The Maturity Amount:${maturityamount}`

}

document.getElementById('calcbtn').addEventListener('click',calcmatamount);