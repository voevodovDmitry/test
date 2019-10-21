
function getSum (){
    let sum=0;
    for (let i=0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }
   
}

const x = getSum(1,2,100,4,1, 1,1,1,1,1,1,1);
console.log(x);

function  s_o(r){
    s=2*3.14*r*r;
    return Math.PI*r*r; 
}
function V(h){
    const s = s_o(17);
    return Math.ceil(s*h); 
}

let volume = V(3);
console.log(volume);





//===============================   Асинхронность  ==============================================

                                        // 1.XMLHttpRequest

// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', 'https://randomuser.me/api/');

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else { // если всё прошло гладко, выводим результат
//     alert(`Готово, получили ${xhr.response} байт`); // response -- это ответ сервера
//     console.log(JSON.parse(xhr.response))
//   }
// };

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     alert(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }

// };

// xhr.onerror = function() {
//   alert("Запрос не удался");
// };


// fetch('https://randomuser.me/api/')
//     .then(function (response){
//         return response.json()
//     } )
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err)
//     })




//     //wrap.innerHTML = template;
//     document.body.append(wrap);
    
    
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

        
fetch('https://randomuser.me/api/')
    .then(function (response){
     return response.json()
    } )
    .then(function(data){
        let user = data.results
        console.log(user, 'sjdbksvds')
        viewList(user)
    })
    .catch(function(e) {
        console.log(e)
    })