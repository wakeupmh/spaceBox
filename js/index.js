const consult = {
    getData:()=>{
        data.map(i=>{
            consult.listData(i.id, i.foto, i.nome, i.cargo);
        });
    },
    listData:(id, foto, nome, cargo)=>{
        let txt = ` <div class="img" style="background-image:url(imgs/${foto})">`
                + ` <div class="badge">`
                + `     <div>${id}</div>`
                + ` </div></div>`
                + ` <div class="ctnText">`
                + `     <strong>${nome}</strong>`
                + `     <span>${cargo}</span>`
                + ` </div>`;
        consult.appendToMyChild('.container', txt, undefined, 'items');
        
    },
    appendToMyChild:(_dad, _html, _nodeElement = 'div', _class)=>{
        let wrapper = document.createElement(_nodeElement);
        wrapper.innerHTML = _html;
        if(_class)
            wrapper.className = _class;
        document.querySelector(_dad).appendChild(wrapper);
    }
}
consult.getData();