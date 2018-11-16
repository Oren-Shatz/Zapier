var res = input.text;

var Gibberish = "àáâãäåæçèéêëìîíðïñòôóöõ÷øùú";
var Hebrew = "אבגדהוזחטיךכלםמןנסעףפץצקרשת";

var i;
for (i = 0; i < Gibberish.length; i++) { 
   res = res.replace(Gibberish.substring(i,i+1), Hebrew.substring(i,i+1));
}

output = [{text: res}];
