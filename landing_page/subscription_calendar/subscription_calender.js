const item_has_appeared = [];

amount_of_money_paid = 0;
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
                company_and_price = person.transaction + " $" + person.transaction_price
                if (item_has_appeared.includes(person.transaction)) {
                    var newEvent = {
                        title: company_and_price,
                        start: person.transaction_date,
                        end: person.transaction_date,
                        color: "#154734",
                        allDay: true,
                    };
                }
                else {
                    item_has_appeared.push(person.transaction)
                    var newEvent = {
                        title: company_and_price,
                        start: person.transaction_date,
                        end: person.transaction_date,
                        allDay: true,
                    };
                }
                calendar.addEvent(newEvent);
                amount_of_money_paid = amount_of_money_paid+ parseInt(person.transaction_price);
                document.getElementById('money').textContent ="You spend " + "$" + amount_of_money_paid + " on subscription this year";

            });

        }
        catch (error) {
            console.error("Could not fetch the data: ", error);
        }



    }


    document.getElementById('populate-table').addEventListener('click', populate_table);
});