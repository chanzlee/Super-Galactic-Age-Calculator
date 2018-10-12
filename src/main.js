import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './AgeCalculator.js';

$(document).ready(function() {
  $("#planet-age-result").hide();
  $("#life-expectancy-result").hide();

  $("#planet-age").submit(function(event){
    event.preventDefault();
    let birthDay = $("#birthDay").val();
    let smoking = $("#smoking").val();
    let alcohol = $("#alcohol").val();
    let genetics = $("#genetics").val();
    let obesity = $("#obesity").val();
    let relationship = $("#relationship").val();
    
    let ageCalcInstance = new AgeCalculator(birthDay);
    let earthAge = ageCalcInstance.earthAgeCalculator();
    let mercuryAge = ageCalcInstance.mercuryAgeCalculator();
    let venusAge = ageCalcInstance.venusAgeCalculator();
    let marsAge = ageCalcInstance.marsAgeCalculator();
    let jupiterAge = ageCalcInstance.jupiterAgeCalculator();

    let earthLeftLife = ageCalcInstance.getLeftLife("earth", smoking, alcohol, genetics, obesity, relationship);
    let mercuryLeftLife = ageCalcInstance.getLeftLife("mercury", smoking, alcohol, genetics, obesity, relationship);
    let venusLeftLife = ageCalcInstance.getLeftLife("venus", smoking, alcohol, genetics, obesity, relationship);
    let marsLeftLife = ageCalcInstance.getLeftLife("mars", smoking, alcohol, genetics, obesity, relationship);
    let jupiterLeftLife = ageCalcInstance.getLeftLife("jupiter", smoking, alcohol, genetics, obesity, relationship);

    $("#earth").text(`${earthAge}`);
    $("#mercury").text(`${mercuryAge}`);
    $("#venus").text(`${venusAge}`);
    $("#mars").text(`${marsAge}`);
    $("#jupiter").text(`${jupiterAge}`);

    $("#earth p").text(`${earthLeftLife}`);
    $("#mercury p").text(`${mercuryLeftLife}`);
    $("#venus p").text(`${venusLeftLife}`);
    $("#mars p").text(`${marsLeftLife}`);
    $("#jupiter p").text(`${jupiterLeftLife}`);

    $("#planet-age-result").show();
    $("#life-expectancy-result").show();
  });
});
