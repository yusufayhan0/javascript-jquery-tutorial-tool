$(document).ready(function () {
    //---------------------------------------
    $("#panel_container").css({
        "position": "absolute",
        "z-index": "1",
        "left": "0px",
        "top": "0px"
    });

    $("#panel_container div").css({
        "position": "absolute",
        "z-index": "3",
        "opacity": "0.6",
        "background-color": "black"

    });

    $("#panel_sag").css({
        "left": "0px",
        "top": "0px"
    });

    $("#panel_sol").css({
        "top": "0px"
    });

    $("#panel_alt").css({
        "left": "0px",
    });

    $("#panel_ust").css({
        "left": "0px",
        "top": "0px"
    });
    //---------------------------------------

    //---------------------------------------
    var textler = [//açıklama 
        "bu yazı div 1 yazısı",
        "bu yazı div 2 yazısı",
        "bu yazı div 3 yazısı",
        "bu yazı div 4 yazısı",
        "bu yazı div 5 yazısı",
        "bu yazı div 6 yazısı"
    ];

    var butonAdlari = [//buton id'leri
        "#div1",
        "#div2",
        "#div3",
        "#div4",
        "#div5",
        "#div6",
        "#tekrar"
    ];
    //---------------------------------------

    var index = 0;
    var tut = butonAdlari[0];

    $(window).resize(function () {//pencere boyutu değiştiğinde
        WidgetHareket();
    });

    $("#card1").css("top", $(tut).offset().top + 55 + "px");
    $("#card1").css("left", $(tut).offset().left + "px");

    $(function () {//default
        $(butonAdlari[index]).css("font-size", "1rem");
        
        $("#panel_container").css("height", $(window).width() + "px");
        $("#panel_container div").css("width", $(window).width() + "px");
        $("#panel_container div").css("height", $("body").height() + "px");
        WidgetHareket();
    });

    function defaultKod(){//tekrardan sonra çalışacak kodlar
        index=-1;
        $("#tekrar").css("display", "none");
        WidgetHareket();
    }

    $("#tekrar").click(function () {//tekrar edilmek istendiğinde çalışır
        defaultKod();
    });

    $.each(butonAdlari, function (deger, value) {
        $(value).click(function () {

            tut = butonAdlari[++index];

            if (index == butonAdlari.length-1) {//son butona gelindiğinde
                $("#degistir").text("Bitti");
                $(".card-title").text("Bitti");
                alert("bitti");
                $("#tekrar").css("display", "block");
            }

            WidgetHareket();
            if (index == butonAdlari.length) {//son butona gelindiğinde
                return;
            }
        });
    });











    function WidgetHareket() {
        $("#panel_sol").css("width", $(tut).offset().left + "px");

        $("#panel_ust").css("height", $(tut).offset().top + "px");
        $("#panel_ust").css("left", $(tut).offset().left + "px");
        $("#panel_ust").css("width", $(tut).outerWidth() + "px");

        $("#panel_sag").css("left", $(tut).offset().left + $(tut).outerWidth() + "px");

        $("#panel_alt").css("top", $(tut).offset().top + $(tut).outerHeight() + "px");
        $("#panel_alt").css("height", $("body").height() - $(tut).offset().top - $(tut).outerHeight() + "px");
        $("#panel_alt").css("left", $(tut).offset().left + "px");
        $("#panel_alt").css("width", $(tut).outerWidth() + "px");

        $("#card1").css("background-color", "#ffffff");
        $("#degistir").text(textler[index]);
        $(".card-title").text(textler[index]);
        $("#card1").css("top", $(tut).offset().top + $(tut).outerHeight() + 10 + "px");
        if ($(tut).offset().left > $(window).width() - $("#card1").width() - 10) {

            $("#card1").css("left", $(window).width() - $("#card1").width() - 10 + "px");


        } else {
            $("#card1").css("left", $(tut).offset().left + "px");
        }
    }
});