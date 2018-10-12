import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './AgeCalculator.js';

$(document).ready(function() {
  $("#planet-age-result").hide();
  
  $("#planet-age").submit(function(event){
    event.preventDefault();
    let birthDay = $("#birthDay").val();
    let ageCalcInstance = new AgeCalculator(birthDay);
    let earthAge = ageCalcInstance.earthAgeCalculator();
    let mercuryAge = ageCalcInstance.mercuryAgeCalculator();
    let venusAge = ageCalcInstance.venusAgeCalculator();
    let marsAge = ageCalcInstance.marsAgeCalculator();
    let jupiterAge = ageCalcInstance.jupiterAgeCalculator();

    $("#earth").text(`${earthAge}`);
    $("#mercury").text(`${mercuryAge}`);
    $("#venus").text(`${venusAge}`);
    $("#mars").text(`${marsAge}`);
    $("#jupiter").text(`${jupiterAge}`);
    $("#planet-age-result").show();
  });
});
