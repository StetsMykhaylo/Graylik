
// let ril = document.querySelector('.ri_left');
// let rir = document.querySelector('.ri_right');
// let rw_item = document.querySelectorAll('.rw_item');
// let rules_list = document.querySelector('.rules_list');
// let rules_howto = document.querySelector('.rules_howto');
// let rules_wrapper = document.querySelector('.rules_wrapper');

// ril.onclick = function () {
//     rir.classList.remove('red');
//     ril.classList.add('red');
//     rules_list.classList.remove('hide');
//     rules_howto.classList.add('hide');
//     rules_wrapper.classList.remove('max');
// }
// rir.onclick = function () {
//     ril.classList.remove('red');
//     rir.classList.add('red');
//     rules_howto.classList.remove('hide');
//     rules_list.classList.add('hide');
//     rules_wrapper.classList.add('max');
// }





let btn = document.querySelectorAll('.aai_title');
let item = document.querySelectorAll('.aai_hidden');
for (let key in btn) {
    btn[key].onclick = function () {
        btn[key].classList.toggle('red');
        item[key].classList.toggle('hidden');

    }

}

let burger_abs = document.querySelector('.burger_abs');
let burger_menu_abs = document.querySelector('.burger_menu_abs');

burger_abs.onclick = function () {
    burger_menu_abs.classList.toggle('left_position');
}

let burger_fix = document.querySelector('.burger_fix');
let burger_menu_fix = document.querySelector('.burger_menu_fix');

burger_fix.onclick = function () {
    burger_menu_fix.classList.toggle("left_position");
}


const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1.2,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 5,
    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    breakpoints: {
        568:
        {

            slidesPerView: 1,
        },
    }
}
);


//---------------------SEND FORM

$('#myForm').submit(function (e) {
    $.post('sender.php', $('#myForm').serialize());
    e.preventDefault();

});
//-------------------------------------------
