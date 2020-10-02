let $vaca = $("#vaca img");
let $off = $("main").offset().top;

$("#vaca").on("click", function () {
    $("main, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)

})