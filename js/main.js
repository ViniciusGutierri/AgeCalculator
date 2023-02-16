function calculate() {
    let dd1 = document.getElementById("date").value;
    let mm1 = document.getElementById("month").value;
    let yy1 = document.getElementById("year").value;

    let date = new Date();
    let dd2 = date.getDate();
    let mm2 = 1 + date.getMonth();
    let yy2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let resultTitle = document.querySelector("#result__title");
    let resultYear = document.querySelector("#result__year");
    let resultMonth = document.querySelector("#result__month");
    let resultDay = document.querySelector("#result__day");

    if(dd1 > dd2) {
        dd2 += month[mm2 - 1];
        mm2 -= 1;
    }
    if(mm1 > mm2) {
        mm2 += 12;
        yy2 -= 1;
    }

    let d = dd2 - dd1;
    let m = mm2 - mm1;
    let y = yy2 - yy1;

    resultYear.innerHTML = "";
    resultMonth.innerHTML = "";
    resultDay.innerHTML = "";
    resultTitle.style.color = "#FF0000";

    if(dd1 == '' || mm1 == '' || yy1 == '') {
        resultTitle.innerHTML = "*You need to fill in all the fields!";
    }
    else if (yy1 < 1900) {
        resultTitle.innerHTML = "*Enter a year above 1900";
    }
    else if (dd1 < 1) {
        resultTitle.innerHTML = "*Invalid date";  
    }
    else if (mm1 < 1 || mm1 > 12) {
        resultTitle.innerHTML = "*Invalid month";  
    }
    else {
        resultTitle.style.color = "#111111";
        resultTitle.innerHTML = "Your age is...";
        resultYear.innerHTML = y + " Years";
        resultMonth.innerHTML = m + " Months";
        resultDay.innerHTML = d + " Days";
    }
}
