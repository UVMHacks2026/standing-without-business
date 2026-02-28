var payments = []
var xyVals = []
var xVals = []
var payments=[]
var balances=[]
var interestGenerated=[]

function submit(){

    let principle = document.getElementById("principle").value
    let rate = document.getElementById("interest").value/100
    let term = document.getElementById("term").value
    let monthly = document.getElementById("monthly").value
    let balance =principle;

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
    let payment = Math.floor(Number(Number(interest)+Number(principle))/(12*term)*100+0.5)/100
    document.getElementById("monthly").innerHTML="Monthly Payment: $"+payment;
    //let payment = Number(Number(interest)+Number(principle))/12
    
    for(let i=1;i<=12*term;i++){
        let tint = Math.floor(principle*rate/12*i*100+0.5)/100
        let tpay = payment*i
        let balance = Number(principle)+Number(tint)-Number(tpay)
        let interest = balance*rate/12*1

        var a = Number(principle)-Number(tpay)+Number(tint)
        xVals[i-1]=i;
        interestGenerated[i-1]=tint;
        payments[i-1]=payment-tint
        balances[i-1]=balance;

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

    const ctx = document.getElementById("myChart");
    var chart = Chart.getChart(ctx);
    if(chart !=undefined){
        chart.destroy()
    }
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xVals,
            datasets: [{
                label:"Payments",
                backgroundColor:"rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: payments
            },
            {
                label:"Interest generated",
                backgroundColor:"rgba(255,0,0,1.0)",
                borderColor: "rgba(255,0,0,0.1)",
                data: interestGenerated
            },
            {
                label:"Balance",
                backgroundColor:"rgba(0,100,255,1.0)",
                borderColor: "rgba(0,100,255,0.1)",
                data: balances
            },
            ]
        },
        options:{}
    });

}



var payments = []
var xyVals = []
var xVals = []
var payments=[]
var balances=[]
var interestGenerated=[]

function submit(){

    let principle = document.getElementById("principle").value
    let rate = document.getElementById("interest").value/100
    let term = document.getElementById("term").value
    let monthly = document.getElementById("monthly").value
    let balance =principle;

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
    let payment = Math.floor(Number(Number(interest)+Number(principle))/(12*term)*100+0.5)/100
    document.getElementById("monthly").innerHTML="Monthly Payment: $"+payment;
    //let payment = Number(Number(interest)+Number(principle))/12
    
    for(let i=1;i<=12*term;i++){
        let tint = Math.floor(principle*rate/12*i*100+0.5)/100
        let tpay = payment*i
        let balance = Number(principle)+Number(tint)-Number(tpay)
        let interest = balance*rate/12*1

        var a = Number(principle)-Number(tpay)+Number(tint)
        xVals[i-1]=i;
        interestGenerated[i-1]=tint;
        payments[i-1]=payment-tint
        balances[i-1]=balance;

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

    const ctx = document.getElementById("myChart");
    var chart = Chart.getChart(ctx);
    if(chart !=undefined){
        chart.destroy()
    }
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xVals,
            datasets: [{
                label:"Payments",
                backgroundColor:"rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: payments
            },
            {
                label:"Interest generated",
                backgroundColor:"rgba(255,0,0,1.0)",
                borderColor: "rgba(255,0,0,0.1)",
                data: interestGenerated
            },
            {
                label:"Balance",
                backgroundColor:"rgba(0,100,255,1.0)",
                borderColor: "rgba(0,100,255,0.1)",
                data: balances
            },
            ]
        },
        options:{}
    });

}



