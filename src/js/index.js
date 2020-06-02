import $ from "jquery";
import Swiper from './swiper.js';

window.jQuery = $;
window.$ = $;

require('@fancyapps/fancybox');

import a from './jquery.mousewheel.js';
import b from './jquery.jscrollpane.min.js';

$(function() {

    $('.menu-top-btn').click(function(){

        $('.menu-top').toggleClass('menu-top_active');
    });

    $('.menu-top__close').click(function(){

        $('.menu-top').removeClass('menu-top_active');
    });

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

    if ($(window).width() > 1360)
    {
        var scrollPane = $('.scroll-pane__block').jScrollPane();
        var scrollApi = scrollPane.data('jsp');

        $('.scroll-pane__down').click(function(){

            scrollApi.scrollByY(50);
        });
    }

    $('.form-one__file-input').change(function(){

        $(this).next('.form-one__file-name').text($(this).val().split('\\').pop());
    });
});