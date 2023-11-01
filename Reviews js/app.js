const reviews = [
   {
    id: 1,
    name: "Mario Gonzalez",
    job: 'SO Developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text:  "dasdfrfefawefawrf fawefawae Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
   },

   {
    id: 2,
    name: "Claudia Lopez",
    job: 'Web Designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text:  "dipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
   },

   {
    id: 3,
    name: "Jose Perez",
    job: 'The boss',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text:  "tis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
   },

   {
    id: 4,
    name: "Sarahi Ontiveros",
    job: 'Intern',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text:  "dipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
   },
];

   //Data of html/Css
const Author = document.getElementById('author');
const Job = document.getElementById('job');
const Info = document.querySelector('.info');
const Img = document.getElementById('person-img');

   //Buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

    //Initial element
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    Img.src = item.img;
    Author.textContent = item.name;
    Job.textContent = item.job;
    Info.textContent = item.text;
  });

    //Show Person based item
function showPerson(person){
    const item = reviews[person];
    Img.src = item.img;
    Author.textContent = item.name;
    Job.textContent = item.job;
    Info.textContent = item.text;
};

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    console.log("hola");
    showPerson(randomReview());
});

function randomReview (){
    return Math.floor(Math.random() * reviews.length);
}


