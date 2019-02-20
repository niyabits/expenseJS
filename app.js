// Add Balance
// Get Elements
const form = document.querySelector('#add-bal-form');
const balInput = document.querySelector('#add-bal-i');
const balEl = document.querySelector('#total-bal');

// Adding Event Listener
form.addEventListener('submit', addBal);
let bal = 0;

// function for it
function addBal(e) {
  e.preventDefault();

  let balInputInt = parseInt(balInput.value);

  bal = bal + balInputInt;

  if (isNaN(bal) == false) {
    balEl.innerText = String(bal);
  } else {
    balEl.innerText = 0;
  }

  localStorage.setItem('balLS', bal);
}

// Append Items cost to Table from form
// Get Elements
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item');
const costInput = document.querySelector('#cost');
const tbody = document.querySelector('tbody');

// Add Event Listener
itemForm.addEventListener('submit', appendItem);

// Adding the function
function appendItem(e) {
  const date = new Date();

  e.preventDefault();

  const createRow = document.createElement('tr');

  const tRow = (createRow.innerHTML = `
  <tr>
    <td>${itemInput.value}</td>
    <td>${costInput.value}</td>
    <td>${date}</td>
  </tr>
  `);

  tbody.innerHTML += tRow;

  let records;
  if (localStorage.getItem('records') === null) {
    records = [];
  } else {
    records = JSON.parse(localStorage.getItem('records'));
  }

  records.push(tRow);

  localStorage.setItem('records', JSON.stringify(records));

  intCostInput = parseInt(costInput.value);

  bal = bal - intCostInput;

  localStorage.setItem('balLS', bal);

  balEl.innerText = String(bal);

  console.log(tRow);
}

const records = JSON.parse(localStorage.getItem('records'));

records.forEach(function(records) {
  tbody.innerHTML += records;
});

const balLS = JSON.parse(localStorage.getItem('balLS'));

bal = bal + balLS;
balEl.innerText = bal;
