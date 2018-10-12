import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './ageCalculator.js';
import { lifeExpectancy } from './lifeExpectancy.js';
import { NextBirthday } from './nextBirthday.js';

$(document).ready(function() {
  $("#planet-age-result").hide();

  $("#planet-age").submit(function(event){
    event.preventDefault();
    let birthDay = $("#birthDay").val();
    let smoking = $("input:radio[name=smoking]:checked").val();
    let alcohol = $("input:radio[name=alcohol]:checked").val();
    let genetics = $("input:radio[name=genetics]:checked").val();
    let obesity = $("input:radio[name=obesity]:checked").val();
    let relationship = $("input:radio[name=relationship]:checked").val();

    let ageCalcInstance = new AgeCalculator(birthDay);
    let earthAge = ageCalcInstance.earthAgeCalculator();
    let mercuryAge = ageCalcInstance.mercuryAgeCalculator();
    let venusAge = ageCalcInstance.venusAgeCalculator();
    let marsAge = ageCalcInstance.marsAgeCalculator();
    let jupiterAge = ageCalcInstance.jupiterAgeCalculator();

    let leftLifeInstance = new lifeExpectancy(birthDay);
    let earthLeftLife = leftLifeInstance.getLeftLife("earth", smoking, alcohol, genetics, obesity, relationship);
    let mercuryLeftLife = leftLifeInstance.getLeftLife("mercury", smoking, alcohol, genetics, obesity, relationship);
    let venusLeftLife = leftLifeInstance.getLeftLife("venus", smoking, alcohol, genetics, obesity, relationship);
    let marsLeftLife = leftLifeInstance.getLeftLife("mars", smoking, alcohol, genetics, obesity, relationship);
    let jupiterLeftLife = leftLifeInstance.getLeftLife("jupiter", smoking, alcohol, genetics, obesity, relationship);

    let dayUntilBirthday = new NextBirthday(birthDay);
    let earthDaysUntilBirthday = dayUntilBirthday.getNextBirthday("earth");
    let mercuryDaysUntilBirthday = dayUntilBirthday.getNextBirthday("mercury");
    let venusDaysUntilBirthday = dayUntilBirthday.getNextBirthday("venus");
    let marsDaysUntilBirthday = dayUntilBirthday.getNextBirthday("mars");
    let jupiterDaysUntilBirthday = dayUntilBirthday.getNextBirthday("jupiter");

    $("#earth").text(`${earthAge}`);
    $("#mercury").text(`${mercuryAge}`);
    $("#venus").text(`${venusAge}`);
    $("#mars").text(`${marsAge}`);
    $("#jupiter").text(`${jupiterAge}`);

    $("#earth-expect").text(`${earthLeftLife}`);
    $("#mercury-expect").text(`${mercuryLeftLife}`);
    $("#venus-expect").text(`${venusLeftLife}`);
    $("#mars-expect").text(`${marsLeftLife}`);
    $("#jupiter-expect").text(`${jupiterLeftLife}`);

    $("#earth-birth").text(`${earthDaysUntilBirthday}`);
    $("#mercury-birth").text(`${mercuryDaysUntilBirthday}`);
    $("#venus-birth").text(`${venusDaysUntilBirthday}`);
    $("#mars-birth").text(`${marsDaysUntilBirthday}`);
    $("#jupiter-birth").text(`${jupiterDaysUntilBirthday}`);

    $("#planet-age-result").show();
  });
});
