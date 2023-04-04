import { sliderImgs, legends } from './util/storage.js';
import html from './core.js';
import { attach } from '../store.js';
import Modal from '../components/Modal.js';

const $ = document.querySelector.bind(document);

attach(Modal, $('.js-modal'));

const sliderWrapper = $('.slider-wrapper');
const slider = $('.js-slider');

let slideIndex = 0;
const radioes = sliderImgs.map((img, i) => {
    const label = document.createElement('label');
    label.className = 'move__wrapper';
    label.innerHTML = html` <input class="move__btn" type="radio" name="radio" />
        <span class="move__checkmark"></span>`;
    return label;
});

start();

function start() {
    const leftBtn = $('.js-prev-btn');
    const rightBtn = $('.js-next-btn');

    slider.style.width = sliderImgs.length * 100 + '%';
    slider.innerHTML = html`
        ${sliderImgs.map(
            (img) => `<div class="slider__slide"><img class="slider__slide-img" src="${img}" alt=""></div>`,
        )}
    `;

    slide(0);
    leftBtn.onclick = moveLeft;
    rightBtn.onclick = moveRight;

    const radioBlock = document.createElement('div');
    radioBlock.className = 'move';
    radioes.forEach((radio, i) => {
        let cl = 'move__wrapper--active';
        radioBlock.append(radio);
        if (i === 0) radio.classList.add(cl);
        radio.onclick = () => {
            slide(i);
        };
    });
    sliderWrapper.append(radioBlock);

    handleLegend();
}

function slide(i) {
    let cl = 'move__wrapper--active';
    radioes[slideIndex].classList.remove(cl);
    radioes[i].classList.add(cl);

    slider.style.left = -i * 100 + '%';
    slideIndex = i;
}

function moveLeft() {
    if (slideIndex > 0) {
        slide(slideIndex - 1);
    } else {
        return;
    }
}

function moveRight() {
    if (slideIndex < sliderImgs.length - 1) {
        slide(slideIndex + 1);
    } else {
        return;
    }
}

function handleLegend() {
    const legendBlock = $('.js-legend');
    legends.map((legend, i) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'l-2-4 c-6';
        wrapper.innerHTML = html`<div class="player legend" onclick="dispatch('showModal',  'legend',${i})">
            <img src="${legend.img}" alt="" class="player__img" />
            <div class="legend__name">
                <span class="legend__name-text line line--above"
                    >${(
                        legend.name.slice(0, legend.name.lastIndexOf(' ')) +
                        '<br/>' +
                        legend.name.slice(legend.name.lastIndexOf(' ') + 1)
                    ).toUpperCase()}</span
                >
            </div>
        </div>`;
        legendBlock.append(wrapper);
    });
}
