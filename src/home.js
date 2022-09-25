function homePage() {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    content.replaceChildren();
    let pic1 = document.createElement('img');
    pic1.src = "../enjoyfood.avif";
    pic1.classList.add("enjoyfood");
    content.appendChild(pic1);
    let box1 = document.createElement('div');
    box1.classList.add('box1');
    box1.innerHTML = `<b>Zagot rated for 3 consecutive years -- 2020, 2021, 2022</b><br>
    "Indulge the excellence of fine dining. You don't want to miss a single bite!" <em>-- Chef Ramsay (world renown chef and food critic)</em>`;
    content.appendChild(box1);
    let box2 = document.createElement('div');
    box2.classList.add('box2');
    box2.innerHTML = '<b>Location</b><br>123 Riverwalk, Manhattan, NY';
    content.appendChild(box2);
    let box3 = document.createElement('div');
    box3.classList.add('box3');
    box3.innerHTML = '<b>Hours of Operation</b><br>Weekdays: 12 pm - 9 pm<br>Weekends (Sat & Sun): 12 pm - 11 pm';
    content.appendChild(box3);
}


export default homePage;
