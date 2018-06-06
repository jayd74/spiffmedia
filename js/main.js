"use strict";

var myWork = {};

myWork.smoothScroll = function () {
    $("#toProjects").click(function () {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });

    $("#toAbout").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#toContact").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#toTop").click(function () {
        $("html, body").animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
};

$(function () {
    AOS.init();
    myWork.smoothScroll();
});