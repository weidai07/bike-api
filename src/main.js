import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#submit-button').click(function() {

  let city = $("#city-input-field").val();
  let miles = $("#miles-input-field").val();

    let request = new XMLHttpRequest();
    const url = `https://cors-anywhere.herokuapp.com/https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=${city}&distance=${miles}&stolenness=proximity`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      let bikeInfo = response.bikes.length;

      $(".display-para").show();
      $('#display-answer').empty().text(bikeInfo);
      $("#distance-result").empty().text(miles);
    }

  });
});
