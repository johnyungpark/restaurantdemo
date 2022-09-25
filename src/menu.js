import Pict1 from './wagyu.avif';
import Pict2 from './salmon.avif';
import Pict3 from './pork.avif';
import Pict4 from './duck.avif';
import Pict5 from './chickenpasta.avif';
import Pict6 from './drinks.avif';

function menuPage() {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    content.replaceChildren();
    let grid = document.createElement('div');
    grid.classList.add('grid1');
    content.appendChild(grid);
    let div1 = document.createElement('div');
    div1.classList.add('divz');
    div1.innerHTML = "<b>A5 Kobe Beef Steak 8 oz</b><br><em>Considered the best quality steak in Japan (imported from Kobe, Japan).</em><br><b>$75.00</b>"
    grid.appendChild(div1);
    let pic1 = new Image();
    pic1.src = Pict1;
    pic1.classList.add("pic1");
    div1.appendChild(pic1);
    let div2 = document.createElement('div');
    div2.classList.add('divz');
    div2.innerHTML = "<b>Alaskan Salmon with Lime Sauce</b><br><em>Fresh Alaskan salmon from the fresh Northern lakes of Alaska. Served with a side of boiled organic vegetables.</em><br><b>$45.00</b>"
    grid.appendChild(div2);
    let pic2 = new Image();
    pic2.src = Pict2;
    pic2.classList.add("pic1");
    div2.appendChild(pic2);
    let div3 = document.createElement('div');
    div3.classList.add('divz');
    div3.innerHTML = "<b>Pork Tenderloin</b><br><em>The most tender pork marinated with a special sauce and topped with mashed sweet potato.</em><br><b>$60.00</b>"
    grid.appendChild(div3);
    let pic3 = new Image();
    pic3.src = Pict3;
    pic3.classList.add("pic1");
    div3.appendChild(pic3);
    let div4 = document.createElement('div');
    div4.classList.add('divz');
    div4.innerHTML = "<b>Duck Legs</b><br><em>Premium duck legs from the northern Ireland. Served with a special vinegar sauce and brocolli.</em><br><b>$50.00</b>"
    grid.appendChild(div4);
    let pic4 = new Image();
    pic4.src = Pict4;
    pic4.classList.add("pic1");
    div4.appendChild(pic4);
    let div5 = document.createElement('div');
    div5.classList.add('divz');
    div5.innerHTML = "<b>Chicken Pasta</b><br><em>Grilled chopped tender juicy chicken served with al dente pasta and special pesto sauce.</em><br><b>$50.00</b>"
    grid.appendChild(div5);
    let pic5 = new Image();
    pic5.src = Pict5;
    pic5.classList.add("pic1");
    div5.appendChild(pic5);
    let div6 = document.createElement('div');
    div6.classList.add('divz');
    div6.innerHTML = "<b>Drinks</b><br><em>Soda (Coke, Sprite with diet option available): </em><b>$5</b><br><em>Wine (red or white wine): </em><b>$15</br>"
    grid.appendChild(div6);
    let pic6 = new Image();
    pic6.src = Pict6;
    pic6.classList.add("pic2");
    div6.appendChild(pic6);
}

export default menuPage;