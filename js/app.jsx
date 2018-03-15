// // import {Experiences} from "./Experiences";
// // import {About} from "./About";
let positions = ["about","experience","education","projects"];
let current;
function scrollTo(url) {
    //Todo: if current is about and url is some flag then go to 0 or if url is some flag then go to 0
    current = url.substring(url.indexOf("#")+1);
    console.log(current);
    $('html, body').animate({
        scrollTop: $('#'+current).offset().top
    }, 1000);
    return false;
}

$(document).ready(function () {
    $("a.scrollTo").on('click',function(e) {
        var url = e.target.href;
        scrollTo(url);
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
        //Todo: make api call to back end

        $(".contact").hide();
    });
    //Todo: make section smarter
    $("#go-up").on("click",function () {
        //Todo: find current position
        let position = positions[positions.indexOf(current)-1];
        console.log(position);
        //Todo: find the next one up
        scrollTo(position);
        return false;
    });
    $("#go-down").on("click",function () {
        //Todo: find current position
        let position = positions[positions.indexOf(current)+1];
        //Todo: find the next one down
        scrollTo(position);
        return false;
    });

    $("#download").click(function() {
        // // hope the server sets Content-Disposition: attachment!
        window.location = './resources/JoshuaOBrianResume.pdf';
    });
});