'use strict';


window.onload = init;

function init() {
    connectToMonsters(renderMonsters);
    // renderMonstersImg();
}

function renderMonsters(res) {


    const monsters = res.map(monster => {
        console.log(monster);
        return `<div class="card">
        <h3>${monster.fname} ${monster.lname}</h3>
        <div class="card-contant">
            <div class="monster-info">
                <h5><span>tel:</span> ${monster.tel}</h5>
                <h5><span>address:</span> ${monster.address}</h5>
                <h5><span>city:</span> ${monster.city}</h5>
                <h5><span>state:</span> ${monster.state}</h5>
                <h5><span>zip:</span> ${monster.zip}</h5>
            </div>
            <img src="https://robohash.org/${monster.fname}?set=set1" alt="monster">
        </div>
    </div>`
    });
    document.querySelector('.allMonsters').innerHTML = monsters.join('');
}