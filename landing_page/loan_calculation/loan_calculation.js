function submit(){

    let principle = document.getElementById("principle").value
    let rate = document.getElementById("interest").value/100
    let term = document.getElementById("term").value
    let monthly = document.getElementById("monthly").value
    let balance =principle

    let tableCont = document.getElementById("table-container");
    tableCont.innerHTML=''
    let table = document.createElement("table");
    table.id = "table";
    table.border="1"

    headers = ["payment #","interest paid","principle paid","total paid","balanced"]
    headerRow = document.createElement("tr");

    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    //calc interest
    let interest = principle*rate*term
    let payment = Math.floor(Number(Number(interest)+Number(principle))/12*100+0.5)/100
    //let payment = Number(Number(interest)+Number(principle))/12
    console.log(interest,principle,payment)
    for(let i=1;i<=12*term;i++){
        let tint = Math.floor(principle*rate/12*i*100+0.5)/100
        let tpay = payment*i
        let balance = Number(principle)+Number(tint)-Number(tpay)
        let interest = balance*rate/12*1

        var a = Number(principle)-Number(tpay)+Number(tint)

        console.log("int:"+interest+"\nBal:"+a+"\n"+principle+"\n"+tpay+"\n"+tint)
        const row = document.createElement("tr");
        let cell0 = document.createElement("td");
        cell0.textContent = i;
        row.append(cell0)
        let cell2 = document.createElement("td");
        cell2.textContent = tint;
        row.append(cell2)
        let cell3 = document.createElement("td");
        cell3.textContent = payment-tint;
        row.append(cell3)
        let cell4 = document.createElement("td");
        cell4.textContent = payment;
        row.append(cell4)
        let cell5 = document.createElement("td");
        cell5.textContent = balance;
        row.append(cell5)
        table.append(row);
    }


    document.getElementById("table-container").appendChild(table);


    console.log(principle)

}
