var $maki = $(".maki");

// Create Makisus
$maki.makisu({
  selector: "dd",
  overlap: 0.6,
  speed: 0.85,
});

// Toggle on click
$(".show-schedule").on("click", function () {
  $(".list").makisu("toggle");
  $(".show-schedule").css("display", "none");
  $(".hide-schedule").css("display", "inline");
});

$(".hide-schedule").on("click", function () {
  $("#table-buttons").css("display", "none");
  $("#full-buttons").css("display", "block");
  $(".show-schedule").css("display", "none");
  $(".hide-schedule").css("display", "none");
  $(".list").makisu("toggle");
});

$("#r_10").on("click", function () {
  $(".r_10").css("display", "block");
  $(".m_10").css("display", "none");
  $(".n_10").css("display", "none");
});

$("#m_10").on("click", function () {
  $(".r_10").css("display", "none");
  $(".m_10").css("display", "block");
  $(".n_10").css("display", "none");
});

$("#n_10").on("click", function () {
  $(".r_10").css("display", "none");
  $(".m_10").css("display", "none");
  $(".n_10").css("display", "block");
});

$(".main-button").on("click", function () {
  $("#table-buttons").css("display", "flex");
  $("#full-buttons").css("display", "none");
  $(".show-schedule").css("display", "none");
  $(".hide-schedule").css("display", "inline");
  $(".list").makisu("toggle");
});

var nowDateToday = new Date();
var Ramadan_1 = new Date("2022-04-02");
var Ramadan_2 = new Date("2022-04-03");
var Ramadan_3 = new Date("2022-04-04");
var Ramadan_4 = new Date("2022-04-05");
var Ramadan_5 = new Date("2022-04-06");
var Ramadan_6 = new Date("2022-04-07");
var Ramadan_7 = new Date("2022-04-08");
var Ramadan_8 = new Date("2022-04-09");
var Ramadan_9 = new Date("2022-04-10");
var Ramadan_10 = new Date("2022-04-11");
var Ramadan_11 = new Date("2022-04-12");
var Ramadan_12 = new Date("2022-04-13");
var Ramadan_13 = new Date("2022-04-14");
var Ramadan_14 = new Date("2022-04-15");
var Ramadan_15 = new Date("2022-04-16");
var Ramadan_16 = new Date("2022-04-17");
var Ramadan_17 = new Date("2022-04-18");
var Ramadan_18 = new Date("2022-04-19");
var Ramadan_19 = new Date("2022-04-20");
var Ramadan_20 = new Date("2022-04-21");
var Ramadan_21 = new Date("2022-04-22");
var Ramadan_22 = new Date("2022-04-23");
var Ramadan_23 = new Date("2022-04-24");
var Ramadan_24 = new Date("2022-04-25");
var Ramadan_25 = new Date("2022-04-26");
var Ramadan_26 = new Date("2022-04-27");
var Ramadan_27 = new Date("2022-04-28");
var Ramadan_28 = new Date("2022-04-29");
var Ramadan_29 = new Date("2022-04-30");
var Ramadan_30 = new Date("2022-05-01");


console.log(nowDateToday.getTime());
console.log(Ramadan_1.getTime());

if (nowDateToday.getMonth() < Ramadan_1.getMonth()) {
    $("#shehri_iftar").html("Ramadan will start on 02:04:2022");
    $("#days").css("display", "none");
    $("#hours").css("display", "none");
    $("#minutes").css("display", "none");
    $("#seconds").css("display", "none");
} else if (nowDateToday.getDate() === Ramadan_1.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:19:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_2.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:19:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_3.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:20:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_4.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:20:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_5.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:21:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_6.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:21:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_7.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:21:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_8.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:22:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_9.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:22:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_10.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:23:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_11.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:23:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_12.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:23:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_13.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:24:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_14.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:24:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_15.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:24:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_16.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:25:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_17.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:25:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_18.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:26:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_19.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:26:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_20.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:27:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_21.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:27:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_22.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:28:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_23.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:28:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_24.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:29:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_25.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:29:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_26.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:29:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_27.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:30:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_28.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:30:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_29.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:31:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}else if (nowDateToday.getDate() === Ramadan_30.getDate()) {
    function makeTimer() {
      var endTime = new Date("02 April 2022 18:31:00 GMT+06:00");
      endTime = Date.parse(endTime) / 1000;

      var now = new Date();
      now = Date.parse(now) / 1000;

      var timeLeft = endTime - now;

      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );

      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $("#shehri_iftar").html("iftar time remains");
      $("#days").css("display", "none");
      $("#hours").html(hours + " " + "Hours");
      $("#minutes").html(minutes + " " + "Minutes");
      $("#seconds").html(seconds + " " + "Seconds");
    }

    setInterval(function () {
      makeTimer();
    }, 1000);  
}
