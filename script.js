let feedItems = [
    {
        name: "Elizabeth Melendez",
        avatar: "https://i.pravatar.cc/40?img=10",
        text: "Something that Amy said"
    },
    {
        name: "Jafir Cunningham",
        avatar: "https://i.pravatar.cc/40?img=51",
        text: "Something that Jafir said"
    },
    {
        name: "Stacy Fojas",
        avatar: "https://i.pravatar.cc/40?img=35",
        text: "Something that Stacy said"
    },
];


/* 

WE NEED TO MAKE THIS

<div class="card">
    <div class="header">
        <img class="avatar" src="https://i.pravatar.cc/40?img=3" alt="">
        <span class="profileName">Jane Doe</span>
    </div>
    <div class="message">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eos at cumque rerum consequuntur. Dolores itaque recusandae eligendi eum? Maiores quibusdam aliquam odio, sequi aliquid eum! Maiores ea porro esse.
    </div>
</div> 

*/

/* ------------------- CREATE DYNMAIC DOM ELEMENT ---------------- */

//locate the container from .html page
let singleEle = document.querySelector("#singleItem");

//create a card in memory
let cardEle = document.createElement("div");

//add card into feed element
singleEle.appendChild(cardEle);

//give card a class of "card"
cardEle.className = "card";

//create header, add into card, add class
//let headerEle = document.createElement("div");
//headerEle.className = "header";
//cardEle.appendChild(headerEle);

//create message and add into card, add class
//let messageEle = document.createElement("div");
//messageEle.className = "nessage";
//cardEle.appendChild(messageEle);

//create avatar image into header
//let avatarEle = document.createElement("img");
//avatarEle.setAttribute("src", "https://i.pravatar.cc/40?img=35");
//avatarEle.className = "avatar";
//headerEle.appendChild(avatarEle);

//create name
//let nameEle = document.createElement("span");
//nameEle.className = "profileName";
//nameEle.innerText = "Jane Doe";
//headerEle.appendChild(nameEle);

//create message area
//DO THIS ON YOUR OWN


/* ------------------- CREATE DYNMAIC LIST OF ELEMENTS ---------------- */
