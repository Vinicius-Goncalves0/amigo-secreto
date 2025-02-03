let friendList = [];
let friendsIncluded = document.getElementById('lista-amigos');
let DrawListRef = document.getElementById('lista-sorteio');
let boxType = document.getElementById('nome-amigo');

function shuffleArray(array) { //algoritmo de Fisher-Yates para embaralhar um array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function adicionar() {
    let name = document.getElementById('nome-amigo');

    if (friendList.includes(name.value.trim())) {
        boxType.placeholder = 'Participante já adicionado';
        name.value = '';
        return;
    }

    if (name.value.trim() !== '') {
        friendList.push(name.value.trim());
    }

    friendsIncluded.innerHTML = friendList.join(', ');
    name.value = '';
    boxType.placeholder = 'Nome do amigo';
}

function sortear() {
    if(friendList.length < 3){
        boxType.placeholder = `Mínimo 3 participantes`;
        return
    }
        let giveDrawList, receiveDrawList;
    let isValid = false;

    while (!isValid) {
        giveDrawList = shuffleArray(friendList);
        receiveDrawList = shuffleArray(friendList.slice());

        isValid = true;
        for (let i = 0; i < friendList.length; i++) {
            if (giveDrawList[i] === receiveDrawList[i]) {
                isValid = false;
                break;
            }
        }
    }
        let DrawListArray = [];
        for (let i = 0; i < friendList.length; i++){
            DrawListArray.push(`${giveDrawList[i]} -> ${receiveDrawList[i]}<br>`);
        }

        DrawListRef.innerHTML = `${DrawListArray.join('')}`; 
        boxType.placeholder = 'Nome do amigo';
}

function reiniciar() {
    friendList = [];
    friendsIncluded.innerHTML = '';
    DrawListRef.innerHTML = '';
    boxType.placeholder = 'Nome do amigo';
}

