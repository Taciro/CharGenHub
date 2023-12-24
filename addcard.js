let chars = [];

function displaychars() {
    const charcontent = document.getElementById('charcontent');

    charcontent.innerHTML = '';

    for (let i = 0; i < chars.length; i++) {
        const chard = document.createElement('div');
        chard.className = "card"

        chard.innerHTML = `<h3>Character Card</h3><h3>Name:${chars[i][0]}</h3><p>Role:${chars[i][1]}</p>`;
        chard.rolename = 'card';
        charcontent.appendChild(chard);
    }
}


function addcharCard() {

    const newchar = [charname.value, charrole.value];


    if (charname.value.trim() && charrole.value.trim()) {
        chars.push(newchar);
        displaychars();


        charname.value = '';
        charrole.value = '';
    } else {
        alert('Please fill in all the blanks.')
    }
}

displaychars();

document.getElementById('addButton').addEventListener('click', addcharCard);