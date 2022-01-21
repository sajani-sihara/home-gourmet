var fav_item_1_name = localStorage.getItem('fav_item_1_name');
if (fav_item_1_name) {
    $("#fav-item-1").removeClass('far fa-heart').addClass('fas fa-heart');
}

$("#fav-item-1").click(function() {
    if ($(this).hasClass("far fa-heart")) {

        localStorage.setItem('fav_item_1_img', document.querySelector("#card-item-img-1").getAttribute('src'));
        localStorage.setItem('fav_item_1_name', document.querySelector(".card-heading-1").textContent);

        $(this).removeClass('far fa-heart').addClass('fas fa-heart');

    } else {
        $(this).removeClass('fas fa-heart').addClass('far fa-heart');

        localStorage.removeItem("fav_item_1_name");
        localStorage.removeItem("fav_item_1_img");
    }
});


var fav_item_2_name = localStorage.getItem('fav_item_2_name');
if (fav_item_2_name) {
    $("#fav-item-2").removeClass('far fa-heart').addClass('fas fa-heart');
}
$("#fav-item-2").click(function() {
    if ($(this).hasClass("far fa-heart")) {

        localStorage.setItem('fav_item_2_img', document.querySelector("#card-item-img-2").getAttribute('src'));
        localStorage.setItem('fav_item_2_name', document.querySelector(".card-heading-2").textContent);

        $(this).removeClass('far fa-heart').addClass('fas fa-heart');


    } else {
        $(this).removeClass('fas fa-heart').addClass('far fa-heart');

        localStorage.removeItem("fav_item_2_name");
        localStorage.removeItem("fav_item_2_img");
    }
});


var fav_item_3_name = localStorage.getItem('fav_item_3_name');
if (fav_item_3_name) {
    $("#fav-item-3").removeClass('far fa-heart').addClass('fas fa-heart');
}
$("#fav-item-3").click(function() {
    if ($(this).hasClass("far fa-heart")) {

        localStorage.setItem('fav_item_3_img', document.querySelector("#card-item-img-3").getAttribute('src'));
        localStorage.setItem('fav_item_3_name', document.querySelector(".card-heading-3").textContent);

        $(this).removeClass('far fa-heart').addClass('fas fa-heart');



    } else {
        $(this).removeClass('fas fa-heart').addClass('far fa-heart');

        localStorage.removeItem("fav_item_3_name");
        localStorage.removeItem("fav_item_3_img");
    }
});