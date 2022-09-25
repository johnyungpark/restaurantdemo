function createContactPage() {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    content.replaceChildren();
    let pic1 = document.createElement('img');
    pic1.src = "../cuservice.avif";
    pic1.classList.add("enjoyfood");
    content.appendChild(pic1);
    let box1 = document.createElement('div');
    box1.classList.add('box1');
    box1.innerHTML = "<b>Contact Numbers</b><br>Customer service: 123-456-7890<br>Reservations: 234-567-8901";
    content.appendChild(box1);
    let box2 = document.createElement('div');
    box2.classList.add('box2');
    box2.innerHTML = "<b>Contact Email</b><br>manager@NotARealEmail.com";
    content.appendChild(box2);
    let box3 = document.createElement('div');
    box3.classList.add('box3');
    box3.innerHTML = "<b>Business Inquiries</b><br>111-111-1111<br>business@NotARealEmail.com";
    content.appendChild(box3);
}

export default createContactPage;