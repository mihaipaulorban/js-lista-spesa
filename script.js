//Lista della spesa
const shoppingListItems = [
    'Pasta',
    'Latte',
    'Uova',
    'Farina',
    'Cereali',
    'Cioccolato',
    'Yogurt',
    'Pane',
    'Acqua'
];

// Console Log per la spesq
console.log('Lista della Spesa:');
let i = 0;
while (i < shoppingListItems.length) {
    console.log(shoppingListItems[i]);
    i++;
}

// Seleziona il div nell'html per aggiungerci la lista
const shoppingListContainer = document.getElementById('shopping-list-container');

// Crea un ul per contenere gli elementi della lista della spesa
const ul = document.createElement('ul');
ul.textContent = 'Lista della Spesa:';

i = 0;
while (i < shoppingListItems.length) {
    // Crea un li per ogni elemento della spesa e aggiungi il testo
    const li = document.createElement('li');
    li.textContent = shoppingListItems[i];

    // Aggiungi li a ul
    ul.appendChild(li);

    i++;
}

// Aggiungi tutto al div nell'html
shoppingListContainer.appendChild(ul);
