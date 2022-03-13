(function (){
    var txtOutput = document.getElementById('output');
    var today = new Date();
    var birthday = new Date("10/24/1982");
    var deathday = new Date("10/24/2062");

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
}())