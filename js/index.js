const consult = {
    getData:(id, elem)=>{
        if(id){
            handlers.removeOthersColorized();
            elem.classList.add('clicked');
            elem.querySelector('.ctnText span').classList.add('spanClicked');
            let finded = data.find(x => x.id === parseInt(id));
            consult.listDialog(finded.id, finded.foto, finded.nome, finded.cargo, finded.idade);
            document.querySelector('dialog').setAttribute('open', true);
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
        handlers.appendToMyChild('.container', txt, undefined, 'items', ['onclick', `consult.getData(${id}, this)`]);
    },
    listDialog:(id, foto, nome, cargo, idade)=>{
        let txt = ` <div class="dlgContainer">`
                + `     <div class="img" style="background-image:url(imgs/${foto})">`
                + `     </div>`
                + `     <div class="dlgText">`
                + `         <span>Nome:  <strong>${nome}</strong></span>`
                + `         <span>Cargo: <strong>${cargo}</strong></span>`
                + `         <span>Idade: <strong>${idade}</strong></span>`
                + `     </div>`
                + ` </div>`;
        document.querySelector('dialog').innerHTML = txt;
    }
}
const handlers = {
    appendToMyChild:(_dad, _html, _nodeElement = 'div', _class, _attr)=>{
        let wrapper = document.createElement(_nodeElement);
        wrapper.innerHTML = _html;
        if(_class)
            wrapper.className = _class;
        if(_attr)
            wrapper.setAttribute(_attr[0], _attr[1]);
        document.querySelector(_dad).appendChild(wrapper);
    },
    removeOthersColorized:()=>{
        [...document.querySelectorAll(".clicked")].map(el=>{
            el.classList.remove("clicked");
            el.querySelector('span').classList.remove('spanClicked');
        });
    }
}

consult.getData();