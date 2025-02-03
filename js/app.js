let friendList = [];
let friendsIncluded = document.getElementById('lista-amigos');
let DrawListRef = document.getElementById('lista-sorteio');

function shuffleArray(array) { //algoritmo de Fisher-Yates para embaralhar um array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function adicionar() {
    let name = document.getElementById('nome-amigo');

    if (name.value != '') {
        friendList.push(` ${name.value}`);
    }

    friendsIncluded.innerHTML = `${friendList}`;
    name.value = '';
}

function sortear() {
    let giveDrawList, receiveDrawList;
    let isValid = false;

    while (!isValid) {
        giveDrawList = shuffleArray(friendList);
        receiveDrawList = shuffleArray(friendList.slice());

        isValid = true;
        for (let i = 0; i < listLength.length; i++) {
            if (giveDrawList[i] === receiveDrawList[i]) {
                isValid = false;
                break;
            }
        }
    }
        let DrawListArray = [];
        for (let i = 0; i < listLength.length; i++){
            DrawListArray.push(`${giveDrawList[i]} -> ${receiveDrawList[i]}<br>`);
        }

        DrawListRef.innerHTML = `${DrawListArray.join('')}`;
        
}

function reiniciar() {
    friendList = [];
    friendsIncluded.innerHTML = '';
    DrawListRef.innerHTML = '';
}

