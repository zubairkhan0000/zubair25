// Import readline module
const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get sport based on the day of the week
function getSportForDay(day) {
    let sport;
    switch (day.toLowerCase()) {
        case 'monday':
            sport = 'Soccer';
            break;
        case 'tuesday':
            sport = 'Basketball';
            break;
        case 'wednesday':
            sport = 'Tennis';
            break;
        case 'thursday':
            sport = 'Swimming';
            break;
        case 'friday':
            sport = 'Cricket';
            break;
        case 'saturday':
            sport = 'Running';
            break;
        case 'sunday':
            sport = 'Rest Day';
            break;
        default:
            sport = 'Invalid day.';
    }
    return sport;
}

rl.question('Enter a day of the week: ', (day) => {
    const sport = getSportForDay(day);
    console.log(`On ${day},sport is: ${sport}`);
    rl.close(); 
});
