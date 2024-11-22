const  men = [
    {
        img: "img/0.jpg",
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        show: function (params) {
            
        }
    },
    {
        img: "img/1.jpg",
        name: "Morty Smith",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/2.jpg",
        name: "Summer Smith",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/3.jpg",
        name: "Beth Smith",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/4.jpg",
        name: "Jerry Smith",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/5.jpg",
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien"
    },
    {
        img: "img/6.jpg",
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human"
    },
    {
        img: "img/7.jpg",
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human"
    },
    {
        img: "img/8.jpg",
        name: "Agency Director",
        status: "Dead",
        species: "Human"
    },
    {
        img: "img/9.jpg",
        name: "Alan Rails",
        status: "Dead",
        species: "Human"
    },
    {
        img: "img/10.jpg",
        name: "Albert Einstein",
        status: "Dead",
        species: "Human"
    },
    {
        img: "img/11.jpg",
        name: "Alexandr",
        status: "Dead",
        species: "Human"
    },
    {
        img: "img/12.jpg",
        name: "Alien Gugah",
        status: "unknown",
        species: "Alien"
    },
    {
        img: "img/13.jpg",
        name: "Alien Morty",
        status: "unknown",
        species: "Alien"
    },
    {
        img: "img/14.jpg",
        name: "Alien Rick",
        status: "unknown",
        species: "Alien"
    },
    {
        img: "img/15.jpg",
        name: "Amish Cyborg",
        status: "Dead",
        species: "Alien"
    },
    {
        img: "img/16.jpg",
        name: "Annie",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/17.jpg",
        name: "Antenna Morty",
        status: "Alive",
        species: "Human"
    },
    {
        img: "img/18.jpg",
        name: "Antenne Rick",
        status: "unknown",
        species: "Human"
    },
    {
        img: "img/19.jpg",
        name: "Ants in my Eyes Johnson",
        status: "unknown",
        species: "Human"
    },
];

const list = document.querySelectorAll(".list");

for(let i=0;i<list.length;i++){
   let img = list[i].querySelector('img');
   let name = list[i].querySelector('.name');
   let status = list[i].querySelector('.status');
   let species = list[i].querySelector('.species');
   img.src= men[i].img;
   name.innerHTML = "<strong>Name: </strong>"+men[i].name;
   status.innerHTML = "<strong>Sataus:</strong> "+men[i].status;
   species.innerHTML = "<strong>Species:</strong> "+men[i].species;

     
} 