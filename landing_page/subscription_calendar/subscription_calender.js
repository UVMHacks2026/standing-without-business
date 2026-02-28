const item_has_appeared = [];
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });

    calendar.render();

    async function populate_table() {
        try {
            const response = await fetch("MOCK_DATA.json");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json(); //
            const dataList = document.getElementById('data-list');

            data.forEach(person => {
                if (item_has_appeared.includes(person.transaction)) {
                    var newEvent = {
                        title: person.transaction,
                        start: person.transaction_date,
                        end: person.transaction_date,
                        color: "#FFD100",
                        allDay: true,
                    };
                }
                else {
                    item_has_appeared.push(person.transaction)
                    var newEvent = {
                        title: person.transaction,
                        start: person.transaction_date,
                        end: person.transaction_date,
                        allDay: true,
                    };
                }
                //console.log(didnt_appear_enough)
                //console.log(newEvent);
                calendar.addEvent(newEvent);


            }); 

        }
        catch (error) {
            console.error("Could not fetch the data: ", error);
        }



    }


    document.getElementById('populate-table').addEventListener('click', populate_table);
});

// const transactionList = [];
// const count = {};
// async function fetchAndDisplayData() {
//     try {
//         const response = await fetch("MOCK_DATA.json");

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json(); //
//         const dataList = document.getElementById('data-list');

//         data.forEach(person => {
//             //const listItem = document.createElement('li');
//             //listItem.textContent = transactionList;
//             //dataList.appendChild(listItem);
//             transactionList.push(person.transaction, person.transaction_date)


//         });
//         transactionList.forEach(element => {
//             count[element] = (count[element] || 0) + 1;
//             console.log(count[element])
//         });

//         for (const element in count) {
//             if (count[element] > 5) {
//                 //const listItems = document.createElement('li');
//                 listItems.textContent = element
//                 //dataList.append(listItems);
//             }
//         }

//     }
//     catch (error) {
//         console.error("Could not fetch the data: ", error); //
//     }
// }

// //fetchAndDisplayData();
