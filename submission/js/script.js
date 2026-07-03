const units = [
    {
        name: "Studio Apartment",
        price: "KSh 18,000/month",
        description: "Ideal for individuals.",
        availability: "Available Now"
    },
    {
        name: "One Bedroom",
        price: "KSh 25,000/month",
        description: "Comfortable living space.",
        availability: "Available Soon"
    },
    {
        name: "Two Bedroom",
        price: "KSh 35,000/month",
        description: "Perfect for families.",
        availability: "Available Now"
    }
];

const unitsList = document.getElementById("unitsList");

units.forEach(unit => {

    const card = document.createElement("div");

    card.innerHTML = `
        <h3>${unit.name}</h3>
        <p>${unit.description}</p>
        <p>${unit.price}</p>
        <p><strong>${unit.availability}</strong></p>
    `;

    unitsList.appendChild(card);

});

const input = document.getElementById("wishlistInput");

const button = document.getElementById("addBtn");

const list = document.getElementById("wishlist");

button.addEventListener("click", function(){

    if(input.value==="") return;

    const li=document.createElement("li");

    li.textContent=input.value;

    const remove=document.createElement("button");

    remove.textContent="Remove";

    remove.addEventListener("click",function(){

        li.remove();

    });

    li.appendChild(remove);

    list.appendChild(li);

    input.value="";

});

const themeBtn=document.getElementById("themeBtn");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});

const form=document.getElementById("contactForm");

const feedback=document.getElementById("feedback");

form.addEventListener("submit",function(event){

event.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

if(name==="" || email===""){

feedback.textContent="Please fill all fields.";

}else{

feedback.textContent="Thank you! We will contact you shortly.";

}

});
const banner=document.getElementById("banner");

const text=document.getElementById("bannerText");

banner.addEventListener("click",function(){

text.classList.toggle("show");

});