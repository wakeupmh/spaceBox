const consult = {
    getData:(id)=>{
        if(id){
            let finded = data.find(x => x.id === id);
            consult.listDialog(finded.id, finded.foto, finded.nome, finded.cargo, finded.idade)
        }
        else{
            data.map(i=>{
                consult.listItems(i.id, i.foto, i.nome, i.cargo);
            });
        }
    },
    listItems:(id, foto, nome, cargo)=>{
        let txt = ` <div class="img" style="background-image:url(imgs/${foto})">`
                + `     <div class="badge">`
                + `         <div>${id}</div>`
                + `     </div>`
                + ` </div>`
                + ` <div class="ctnText">`
                + `     <strong>${nome}</strong>`
                + `     <span>${cargo}</span>`
                + ` </div>`;
        handlers.appendToMyChild('.container', txt, undefined, 'items');
    },
    listDialog:(id, foto, nome, cargo, idade)=>{
        let txt = ` <div class="img" style="background-image:url(imgs/${foto})">`
                + ` </div>`
                + ` <div class="dlgText">`
                + `     <span>Nome:  <strong>${nome}</strong></span>`
                + `     <span>Cargo: <strong>${cargo}</strong></span>`
                + `     <span>Idade: <strong>${idade}</strong></span>`
                + ` </div>`;
        handlers.appendToMyChild('dialog', txt, undefined, 'dlgContainer');
    }
}
const handlers = {
    appendToMyChild:(_dad, _html, _nodeElement = 'div', _class)=>{
        let wrapper = document.createElement(_nodeElement);
        wrapper.innerHTML = _html;
        if(_class)
            wrapper.className = _class;
        document.querySelector(_dad).appendChild(wrapper);
    }
}
consult.getData(1);
consult.getData();