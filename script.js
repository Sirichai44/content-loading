const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animater_bg = document.querySelectorAll('.animate-bg');
const animater_text = document.querySelectorAll('.animate-text');
// console.log(animater_bg);
setTimeout(showContent, 2000);

function showContent(){
    header.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg" alt="">`;
    title.innerHTML = `Sofa`;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, soluta.`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/17.jpg" alt="">`;
    seller_name.innerHTML = `David`;
    price.innerHTML = `Price 20,000 Baht`;


    animater_bg.forEach(el=>el.classList.remove('animate-bg'));
    animater_text.forEach(el=>el.classList.remove('animate-text'));
}