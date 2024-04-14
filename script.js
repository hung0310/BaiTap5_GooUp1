var headlineElements = document.getElementsByClassName("text_head");
var sublineElements = document.getElementsByClassName("text_sub");
var headline_page_two = document.getElementsByClassName("text_head_page_two");
var headline_page_three = document.getElementsByClassName("text_title_page_three");
var text_para_page_three = document.getElementsByClassName("text_para_page_three");
var title_content_page_four = document.getElementsByClassName("title_content_page_four");
var para_content_page_four =document.getElementsByClassName("para_content_page_four");
var title_content_page_five = document.getElementsByClassName("title_content_page_five");
var para_content_page_five =document.getElementsByClassName("para_content_page_five");
var title_page_six = document.getElementsByClassName("title_page_six");
var para_page_six = document.getElementsByClassName("para_page_six");

function checkWindowSize() {
    if (window.innerWidth >= 1280 && window.innerWidth <= 1536 || window.innerWidth >= 768 && window.innerWidth <= 1024) { 
        for (var i = 0; i < headlineElements.length; i++) {
            headlineElements[i].innerHTML = "Find the Best Solution<br>in Seconds";
        }
        for (var i = 0; i < sublineElements.length; i++) {
            sublineElements[i].innerHTML = "If debugging is the process of removing software bugs.";
        }
        for (var i = 0; i < headline_page_two.length; i++) {
            headline_page_two[i].innerHTML = "FigmaLand was Built Specifically<br>for You";
        }
        for (var i = 0; i < headline_page_three.length; i++) {
            headline_page_three[i].innerHTML = "Quick & Easy Process";
        }
        for (var i = 0; i < text_para_page_three.length; i++) {
            text_para_page_three[i].innerHTML = "Most calendars are designed for teams. Slate is designed<br>for freelancers who want a simple way to plan<br>their schedule.";
        }
        for (var i = 0; i < title_content_page_four.length; i++) {
            title_content_page_four[i].innerHTML = "Perfect for Operations<br>HR and Finance";
        }
        for (var i = 0; i < para_content_page_four.length; i++) {
            para_content_page_four[i].innerHTML = "Most calendars are designed for teams. Slate is designed<br>for freelancers who want a simple way to plan<br>their schedule.";
        }
        if(window.innerWidth >= 1280 && window.innerWidth <= 1536) {
            for (var i = 0; i < title_content_page_five.length; i++) {
                title_content_page_five[i].innerHTML = "Perfect solution<br>for small<br>businesse";
            }
        } else if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
            for (var i = 0; i < title_content_page_five.length; i++) {
                title_content_page_five[i].innerHTML = "Perfect solution for small<br>businesse";
            }
        }
        if(window.innerWidth >= 1280 && window.innerWidth <= 1536) {
            for (var i = 0; i < para_content_page_five.length; i++) {
                para_content_page_five[i].innerHTML = "Being a freelancer is a<br>rollercoaster of emotions.<br>We built Slate to keep your<br>freelance business less stressful.<br>We'd love to show you<br>what we're building...";
            }
        } else if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
            for (var i = 0; i < para_content_page_five.length; i++) {
                para_content_page_five[i].innerHTML = "Being a freelancer is a rollercoaster of emotions.<br>We built Slate to keep your freelance business less stressful.<br>We'd love to show you what we're building...";
            }
        }
        for (var i = 0; i < title_page_six.length; i++) {
            title_page_six[i].innerHTML = "Simple Pricing for Your Team";
        }
        for (var i = 0; i < para_page_six.length; i++) {
            para_page_six[i].innerHTML = "Slate helps you see how many more days you need";
        }
    }
}
window.onload = checkWindowSize;
window.addEventListener("resize", checkWindowSize);