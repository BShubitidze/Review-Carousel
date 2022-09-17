const reviews = [
{
    id: 1,
    name: "Chandler Bing",
    img: "./images/chandler.png",
    text: "Chandler Muriel Bing is one of the main characters on the popular sitcom Friends. He is portrayed by Matthew Perry. He is notable for his sarcastic and witty sense of humor.",
},
{
    id: 2,
    name: "Joey Tribbiani",
    img: "./images/joey.png",
    text: "Joseph Francis 'Joey' Tribbiani Jr., was one of the main characters on Friends (1994–2004) and the title character in the spin-off Joey (2004–2006). He is best known for being a ladies' man and a rather silly but adorable personality. He was portrayed by Matt LeBlanc.",
},
{
    id: 3,
    name: "Monica Geller",
    img: "./images/monica.png",
    text: "Monica E. Geller is one of the main characters on the popular sitcom Friends (1994–2004), played by Courteney Cox. Monica was known as the 'Mother Hen' of the group and her Greenwich Village apartment was one of the group's main gathering places throughout the series.",
},
{
    id: 4,
    name: "Phoebe Buffay",
    img: "./images/phoebe.png",
    text: "Phoebe Buffay-Hannigan (née Buffay) is one of the main characters on the popular sitcom Friends (1994–2004), portrayed by Lisa Kudrow. She is best known for her bohemian lifestyle, silly wit and guitar playing in Central Perk.",
},
{
    id: 5,
    name: "Rachel Greene",
    img: "./images/rachel.png",
    text: "Rachel Karen Greene (see section Name) is one of the main characters on Friends (1994–2004). She was played by Jennifer Aniston, who received Emmy Awards and a Golden Globe for her performance.",
},
{
    id: 6,
    name: "Ross Geller",
    img: "./images/ross.png",
    text: "Ross Geller, Ph.D. was one of the main characters on Friends (1994–2004). He was portrayed by David Schwimmer. He's best known for his nerdy personality and very awkward sense of humor, much like Screech from Saved By The Bell, or David from Beverly Hills, 90210.",
}]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;


addEventListener('DOMContentLoaded', () => {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    author.textContent = item.name;
    img.src = item.img;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * 6);
    showPerson();
});