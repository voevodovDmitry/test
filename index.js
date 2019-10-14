const users = [


    {
    id: 1,
    name: 'Jon',
    surname: 'Smith',
    img: 'https://st.kp.yandex.net/images/film_iphone/iphone360_102474.jpg',
    age: 18,
    gender: 'male',
    },

    

    {
        id: 2,
        name: 'Clarke',
        surname: 'Henderson',
        img: 'https://islamnews.ru/wp-content/uploads/2018/07/tshshns.png',
        age: 33,
        gender: 'male',
    },

    {
        id: 3,
        name: 'Rahim',
        surname: 'Sterling',
        img: 'https://img2.gorod.lv/images/news_item_in_cifs/pic/149509/big/0.jpg?v=1471346568',
        age: 23,
        gender: 'male',
    },

    {
        id: 4,
        name: 'Lasana',
        surname: 'Traure',
        img: 'https://i.kapital.kz/c/2934e39f216508a85eb2adbaff7afbf6/n/1280/960/4/f/0/e/a/9c82fa777907d4b80e775847e17.jpg',
        age: 21,
        gender: 'female',
    },

    {
        id: 5,
        name: 'Stiven',
        surname: 'Gerard',
        img: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-11/20061030_gaf_u43_026.jpg?itok=dG9zv_jw',
        age: 41,
        gender: 'male',
    }


]   

for (let i=0; i<users.length; i++)
{
    console.log(users[i]);
}
/*
const cardUser = document.createElement('div');
const cardUserLeft = document.createElement('div');
const cardUserRight = document.createElement('div');
const imgCard = document.createElement('img');
const nameUser = document.createElement('h2');
const infoUser = document.createElement('ol');
const surnameCard = document.createElement('li');
const ageCard = document.createElement('li');
const genderCard = document.createElement('li');

document.body.append(cardUser);
cardUser.append(cardUserLeft);
cardUser.append(cardUserRight);
cardUserLeft.append(imgCard);
cardUserRight.append(nameUser);
cardUserRight.append(infoUser);
infoUser.append(surnameCard);
infoUser.append(ageCard);
infoUser.append(genderCard);
*/


let wrap = document.createElement('div');


let  template =
`<div class="wraper" > <div class="cardLeft">
<div class='avatar'>
<img src="https://img.gazeta.ru/files3/29/10248029/upload-001-pic685-685x390-73229.jpg" alt="" class='avatar2'>
</div>
</div>
<div class ='cardRight'>
<h2 class="nameCard">name: </h2>
<ol class="ListInfo">
    <li>surname: </li>
    <li>age: </li>
    <li>gender: </li>
</ol>
</div>
</div>

`
wrap.innerHTML = template;
document.body.append(wrap);


function viewList(data) {
    // контейнер для сбора елементов что бы вставлять оин раз
    let appendElem = document.createDocumentFragment();
   
    data.forEach(function(item){
       
       let card = document.createElement("div")
        card.classList.add('wraper')
       
        let template = `
            <img class="avatar" src=${item.img}>
            <div class="content">
                <h2>name: ${item.name}</h2>
                <ul>
                    <li>surname: ${item.surname}</li>
                    <li>age:${item.age}</li>
                    <li>gender:${item.gender}</li>
                </ul>
            </div>
   
        `
    card.innerHTML = template
    appendElem.appendChild(card)
        })
   
    document.body.append(appendElem)

}

viewList(users)









