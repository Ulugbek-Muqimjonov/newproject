const elList = document.querySelector(".hero__list");
const savebtn = document.querySelector(".hero__save-btn");
const saveList = document.querySelector(".hero__save-list");
const my_ArraySaved =JSON.parse(localStorage.getItem("saveditems") || "[]");
localStorage.setItem("saveditems",JSON.stringify(my_ArraySaved));
const my__Array = [
    {
        id:1,
        // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4rVvQg7KclhA6-XNe7Ja0pZWEYhcsmXEZA&usqp=CAU",
        title:"Ulug'bek",
        summary:"11111111111111111111111111",
        price:100,
        orders:[],
    },
    {
        id:2,
        // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-JgjVH4h6cMt_8ri13_4JohDqcefe7ruQQ&usqp=CAU",
        title:"Axrorbek",
        summary:"2222222222222222222",
        price:100,
        orders:[],
    },
    {
        id:3,
        // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5KQPrm7KBnkUrm7AQmjRwjUqJRR6jg5DtA&usqp=CAU",
        title:"Farruxbek",
        summary:"333333333333333",
        price:100,
        orders:[],
    },
    {
        id:4,
        // img:"https://static.wixstatic.com/media/bb1bd6_aece458af3504a6ab4f036e7fc673e00~mv2.png/v1/fill/w_640,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_aece458af3504a6ab4f036e7fc673e00~mv2.png",
        title:"Sardor",
        summary:"444444444444444444",
        price:100,
        orders:[],
    },
    {
        id:5,
        // img:"data:image/jpeg;base64,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",
        title:"Yusuf",
        summary:"555555555555555",
        price:100,
        orders:[],
    }
];

function render(arr) {
    elList.innerHTML = "";
    arr.forEach(item => {
        const liElement = document.createElement("li");
        liElement.classList.add("hero__item","card","p-2","shadow");
        
        const imgElement = document.createElement("img");
        imgElement.classList.add("hero__item-img","card-img-top");
        imgElement.setAttribute("src",`${item.img}`);
        imgElement.setAttribute("alt",`${item.summary}`);
        imgElement.width = 150;
        imgElement.height = 150;
        
        const wrapElement = document.createElement("div");
        wrapElement.classList.add("card-body","d-flex","flex-column","align-items-center");
        
        const titleElement = document.createElement("h5");
        titleElement.classList.add("card-title","fw-bold");
        titleElement.textContent = item.title;
        
        const descEelement = document.createElement("p");
        descEelement.classList.add("card-text");
        descEelement.textContent = item.summary;
        
        const btnElement = document.createElement("button");
        btnElement.classList.add("hero__btn","btn","btn-success", "w-75");
        btnElement.textContent = "save";
        btnElement.dataset.id = item.id;
        
        wrapElement.append(titleElement,descEelement,btnElement);
        liElement.append(imgElement,wrapElement);
        elList.append(liElement);
    });
}

render(my__Array);

function saveRender(arr) {
    saveList.innerHTML = "";
    arr.forEach(item => {
        const saveliElement = document.createElement("li");
        const savetitleElement = document.createElement("h5");
        const priceElement = document.createElement("span");
        const delbtn = document.createElement("button");
        
        saveliElement.classList.add("hero__save-item");
        savetitleElement.classList.add("hero__save-item-title");
        priceElement.classList.add("hero__save-item-price");
        delbtn.classList.add("hero__delbtn","btn","btn-danger");
        
        savetitleElement.textContent = item.title;
        priceElement.textContent = item.price;
        delbtn.textContent = "del";
        delbtn.dataset.id = item.id;
        
        saveliElement.append(savetitleElement,priceElement,delbtn)
        saveList.append(saveliElement);
    })
}

elList.addEventListener("click",evt => {
    
    if (evt.target.matches(".hero__btn")) {
        const delElement = my__Array.find(item => item.id == evt.target.dataset.id)
        my_ArraySaved.push(delElement);
        
        localStorage.setItem("saveditems",JSON.stringify(my_ArraySaved));
        saveRender(my_ArraySaved);
        
    }
})

saveList.addEventListener("click", evt => {
    
    if (evt.target.matches(".hero__delbtn")) {
        
        const delelementid = my_ArraySaved.findIndex(item => {
            return item.id == evt.target.dataset.id;
        })
        my_ArraySaved.splice(delelementid,1);
        localStorage.setItem("saveditems",JSON.stringify(my_ArraySaved) || "[]");
        saveRender(my_ArraySaved);  
    }
    
})
saveRender(my_ArraySaved);  

const saveexit = document.querySelector(".hero__saved-exit");
saveexit.addEventListener("click", () => {
    document.body.classList.remove("active")
})

savebtn.addEventListener("click",() => {
    document.body.classList.add("active");
})