// ---------- Food item ---------------------

var retrievedItemname = localStorage.getItem('item_name');
$("#food-item-heading").text(retrievedItemname);
$(".cart-item-name").text(retrievedItemname);

var retrievedItemDescription = localStorage.getItem('item_description');
$(".hg-food-item-text").text(retrievedItemDescription)

var retrievedItemPrice = localStorage.getItem('item_price');
$(".hg-food-item-heading2").text(retrievedItemPrice)

var retrievedItemImg = localStorage.getItem('item_img');
document.querySelector(".hg-food-item-img").setAttribute('src', retrievedItemImg)


var qty_num = parseInt($(".qty-num").html());

var item_price = $(".hg-food-item-heading2").html().split('LKR')[1];

var total_cost = $(".total-cost").html().split('LKR')[1];

$(".total-cost").html(retrievedItemPrice)


var tot_price = (item_price * qty_num)
$(".feather-minus-circle").click(function() {

    if ($(".qty-num").html() <= 1) {
        $(".qty-num").text(1)
        tot_price = item_price * 1;
        $(".total-cost").text("LKR " + tot_price + ".00");

    } else {
        $(".qty-num").text(qty_num -= 1);
        tot_price = item_price * qty_num
        $(".total-cost").text("LKR " + tot_price + ".00");
    }
});

$(".feather-plus-circle").click(function() {

    $(".qty-num").text(qty_num += 1)
    tot_price = (item_price * qty_num)
    $(".total-cost").text("LKR " + tot_price + ".00");

});

document.querySelector("#hg-order-btn").addEventListener("click", function() {

    localStorage.setItem('item-qty', document.querySelector(".qty-num").textContent);
    localStorage.setItem('total-item-price', document.querySelector(".total-cost").textContent);
})

// ---------- Food item --------------------- //