import $ from "jquery";
import Swiper from './swiper.js';

window.jQuery = $;
window.$ = $;

$(function() {

    new Swiper('.slider-main__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            clickable: true,
            el: '.slider-main__pagination',
            bulletClass: 'slider-main__point',
            bulletActiveClass: 'slider-main__point_active',
        },
    });
});