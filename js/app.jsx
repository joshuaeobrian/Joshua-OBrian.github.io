// // import {Experiences} from "./Experiences";
// // import {About} from "./About";


$(document).ready(function () {
    $("a.scrollTo").on('click',function(e) {
        var url = e.target.href;
        var hash = url.substring(url.indexOf("#")+1);
        $('html, body').animate({
            scrollTop: $('#'+hash).offset().top
        }, 1000);
        return false;
    });
    $(".contact #close").on('click', function (e) {
        $(".contact").hide();
    });
    $(".show-contact-form").on('click',function () {
        $(".contact").show();
    });
    $(".contact button").on("click",function (e) {
        e.preventDefault();
    });
});