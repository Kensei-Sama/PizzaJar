$(".buttonOfRegistration").on("click", function(e) {
    $("#home-btn").hide();
    $("#registration").fadeIn(); //.show()
})

$(".buttonOfOrder").on("click", function(e) {
    $("#home-btn").hide();
    $("#order").fadeIn(); //.show()
})

$(".back").on("click", function(e) {
    $(this).parent().parent().hide();
    $("#home-btn").fadeIn(); //.show()
})

$(".choise").on("click", function(e) {
    var pizza = $(this).attr("pizza-type");
    var price = $(this).attr("price");
    console.log(pizza);
    console.log(price);

    $("#customize-order").find(".order").attr("sum", price);
    $("#customize-order").find(".order").attr("pizza-type", pizza);

    $("#order").hide();
    $("#customize-order").fadeIn();
})

$(".order").on("click", function(e) {
    var pizza = $(this).attr("pizza-type");
    var sum = parseInt($(this).attr("sum"));
    var soda = ($("#customize-order").find("#soda").is(":checked")) ? $("#customize-order").find("#soda").attr("price") : 0;
    var fries = ($("#customize-order").find("#fries").is(":checked")) ? $("#customize-order").find("#fries").attr("price") : 0;
    var dessert = ($("#customize-order").find("#dessert").is(":checked")) ? $("#customize-order").find("#dessert").attr("price") : 0;
    var sizeAndPrice = GetSizePrice($("#size").val());
    var isSoda = $("#customize-order").find("#soda").is(":checked");
    var isFries = $("#customize-order").find("#fries").is(":checked");
    var isDessert = $("#customize-order").find("#dessert").is(":checked");
    var sodaHtml = (isSoda) ? "<p>1x Üdítő " + soda + "$</p>" : "";
    var friesHtml = (isFries) ? "<p>1x Sült krumpli " + fries + "$</p>" : "";
    var dessertHtml = (isDessert) ? "<p>1x Desszert " + dessert + "$</p>" : "";

    sum += parseInt(soda) + parseInt(fries) + parseInt(dessert) + parseInt(sizeAndPrice[1]);

    console.log(sum);

    $("#customize-order").hide();

    var html = `
        <p>Rendelésed tartalma:</p>
        ` + sodaHtml + `
        ` + friesHtml + `
        ` + dessertHtml + `
        <p>Rendelésed végösszege: ` + sum + `$</p>
    `;

    $("#thank-you").find("#content").html(html);
    $("#thank-you").fadeIn();
})

function GetSizePrice(data) {
    data = data.split("_");
    return data;
}