(function (){
    var txtOutput = document.getElementById('output');
    var btnCalculate = document.getElementById('btnCalculate');
    var dateBirthday = document.getElementById('dateBirthday');
    var numExpectancy = document.getElementById('numExpectancy');

    btnCalculate.click = calc;

    btnCalculate.addEventListener('click', function() {
        calc();
    });


    function calc() {
        var today = new Date();
        var birthday = new Date(dateBirthday.value);
        var deathday = new Date(birthday.getFullYear() + numExpectancy.value, birthday.getMonth(), birthday.getDate());

        var msPerWeek = 7 * 24 * 60 * 60 * 1000;

        var weeksPassed = (today.getTime() - birthday.getTime()) / msPerWeek;
        var weeksLeft = (deathday.getTime() - today.getTime()) / msPerWeek;

        var out = '';
        for(var i = 1; i < weeksPassed + weeksLeft; i++) {
            if(i < weeksPassed) {
                out += '<span class="chit filled">&nbsp;</span>';
            } else {
                out += '<span class="chit">&nbsp;</span>';
            }

            if(i % 52 == 0) {
                out += '<br/>';
            }
        }

        txtOutput.innerHTML = out;
    }
}())