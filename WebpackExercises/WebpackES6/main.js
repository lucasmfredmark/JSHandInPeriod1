require('./main.css');
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

/*
const name = 'Scotch.io';

setTimeout(() => alert(`Hello there from ${name}`), 300);
*/

function Person(firstName, lastName, favoriteSport) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteSport = favoriteSport;
}

const persons = [
    new Person("Kurt", "Wonnegut", "Soccer"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Soccer")
];

function makeTable(tableData, filterBySport) {
    const filteredData = filterBySport ? tableData.filter(person => person.favoriteSport === filterBySport) : tableData;
    const tableHeaders = _.keys(filteredData[0]);
    const headerHTML = tableHeaders.map(header => `<th>${_.startCase(header)}</th>`).join('');
    const bodyHTML = filteredData.map(person => `<tr>${_.values(person).map(value => `<td>${value}</td>`).join('')}</tr>`).join('');
    
    return `<table class="table table-striped">
    <thead><tr>${headerHTML}</tr></thead>
    <tbody>${bodyHTML}</tbody>
    </table>`;
}

const personsTable = makeTable(persons);
const personsTableFiltered = makeTable(persons, 'Soccer');

document.getElementById('personsTable').innerHTML = personsTable;
document.getElementById('personsTableFiltered').innerHTML = personsTableFiltered;