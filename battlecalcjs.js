function run1() {
  document.getElementById("namedis").innerHTML = document.getElementById("username").value;

  var level = document.getElementById("level").value;
  document.getElementById("leveldis").innerHTML = level;
  // populates div for level bonus in stat and hp
  if (level == "ONE") {
    var lvstat = 5;
    var lvhp = 100;
  } else if (level == "TWO") {
    var lvstat = 10;
    var lvhp = 200;
  } else if (level == "THREE") {
    var lvstat = 15;
    var lvhp = 300;
  } else if (level == "FOUR") {
    var lvstat = 20;
    var lvhp = 400;
  } else if (level == "FIVE") {
    var lvstat = 25;
    var lvhp = 500;
  } else if (level == "SIX") {
    var lvstat = 30;
    var lvhp = 600;
  } else if (level == "SEVEN") {
    var lvstat = 35;
    var lvhp = 700;
  } else if (level == "EIGHT") {
    var lvstat = 40;
    var lvhp = 800;
  } else if (level == "NINE") {
    var lvstat = 45;
    var lvhp = 900;
  } else if (level == "TEN") {
    var lvstat = 50;
    var lvhp = 1000;
  } else {
    var lvstat = 5;
    var lvhp = 100;
  }

  var role = document.getElementById("charrole").value;
  //populates divs for role bonus
  if (role == "BREAKER") {
    var breabonus = 5;
    var tankbonus = 0;
    var suppbonus = 0;
  } else if (role == "SUPPORT") {
    var breabonus = 0;
    var tankbonus = 0;
    var suppbonus = 5;
  } else if (role == "TANK") {
    var breabonus = 0;
    var tankbonus = 5;
    var suppbonus = 0;
  } else {
    var breabonus = 0;
    var tankbonus = 0;
    var suppbonus = 0;
  }

  //pull value from base stat input
  var basehpp = document.getElementById("parahp").value;
  var baseatk = document.getElementById("paraatk").value;
  var basedef = document.getElementById("paradef").value;
  var baserec = document.getElementById("pararec").value;

  //pull value from equip stat input
  var equihpp = document.getElementById("parahp2").value;
  var equiatk = document.getElementById("paraatk2").value;
  var equidef = document.getElementById("paradef2").value;
  var equirec = document.getElementById("pararec2").value;
  var equispd = document.getElementById("paraspd2").value;

  //calulate true stats
  var hitpoint = +lvhp + +basehpp + +equihpp;
  var attack = +lvstat + +baseatk + +equiatk + +breabonus;
  var defense = +lvstat + +basedef + +equidef + +tankbonus;
  var heals = +lvstat + +baserec + +equirec + +suppbonus;

  //populate stattable
  document.getElementById("hp").innerHTML = hitpoint;
  document.getElementById("atk").innerHTML = attack;
  document.getElementById("def").innerHTML = defense;
  document.getElementById("hea").innerHTML = heals;
  document.getElementById("spd").innerHTML = document.getElementById("paraspd2").value;

  document.getElementById("hpcalcdef").innerHTML = defense * 0.5;
  document.getElementById("reflectraw").innerHTML = defense * 0.5;
  document.getElementById("atkmodifier").innerHTML = 0.5;
  document.getElementById("atkraw").innerHTML = attack * 0.5;
  document.getElementById("lifestealheal").innerHTML = attack * 0.5;
  document.getElementById("healoutput").innerHTML = heals * 0.5;

  if (document.getElementById('checkbox').checked) {
    var trudef = attack;
  } else {
    var trudef = defense;
  }
  document.getElementById("hpcalcdef").innerHTML = trudef;
  var hp = document.getElementById("hpcalc").value;
  var defbuff = document.getElementById("hpbuff").value;
  var deftype = document.getElementById("hptype").value;
  var defdebuff = document.getElementById("hpdebuff").value;
  var def2 = trudef * deftype * defdebuff * defbuff;
  var raw = document.getElementById("hpdmg").value;
  var hpremain = +hp + +def2 - raw;
  document.getElementById("hpcalcdef").innerHTML = def2;
  if (hpremain > hp) {
    document.getElementById("hpcalcremain").innerHTML = hp;
  } else if (hpremain <= 0) {
    document.getElementById("hpcalcremain").innerHTML = "You're dead!";
  } else {
    document.getElementById("hpcalcremain").innerHTML = hpremain;
  }

  document.getElementById("reflectraw").innerHTML = trudef * 0.5;
  var tardef2 = document.getElementById("tardef2").value;
  var reflectadjust = trudef * 0.5 - tardef2;
  if (reflectadjust <= 0) {
    document.getElementById("reflectadjust").innerHTML = 1;
  } else {
    document.getElementById("reflectadjust").innerHTML = reflectadjust;
  }

  if (document.getElementById('checkbox').checked) {
    var truatk = defense;
  } else {
    var truatk = attack;
  }
  var atkbuff = document.getElementById("atkbuff").value;
  var atkdebuff = document.getElementById("atkdebuff").value;
  var atktype = document.getElementById("atktype").value;
  var tardef = document.getElementById("tardef").value;
  var tarbuff = document.getElementById("tarbuff").value;
  var tardebuff = document.getElementById("tardebuff").value;
  var tartype = document.getElementById("tartype").value;
  var trutardef = tardef * tarbuff * tardebuff * tartype;
  document.getElementById("atkmodifier").innerHTML = atkbuff * atkdebuff * atktype;
  var atkraw = atkbuff * atkdebuff * atktype * truatk;
  document.getElementById("atkraw").innerHTML = atkraw;
  var atkadjusted = atkraw - trutardef;
  if (atkadjusted <= 0) {
    document.getElementById("atkadjust").innerHTML = 1;
  } else {
    document.getElementById("atkadjust").innerHTML = atkadjusted;
  }

  var healtype = document.getElementById("healtype").value;
  var healbuff = document.getElementById("healbuff").value;
  var healdebuff = document.getElementById("healdebuff").value;
  document.getElementById("healoutput").innerHTML = healtype * healbuff * healdebuff * heals;
  document.getElementById("healmod").innerHTML = healtype * healbuff * healdebuff;
}