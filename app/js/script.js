const sliderItem = document.querySelectorAll('.slider__item');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let index = 0;
sliderItem[index].classList.add('active');

function prevItem() {
    sliderItem[index].classList.remove('active');
    index = index === 0 ? sliderItem.length -1 : index -1;
    sliderItem[index].classList.add('active');
}
function nextItem() {
    sliderItem[index].classList.remove('active');
    index = index === sliderItem.length-1 ? 0 : index + 1;
    sliderItem[index].classList.add('active');
}

prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);
