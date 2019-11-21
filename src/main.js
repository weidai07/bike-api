import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#submit-button').click(function() {

  let city = $("#input-field").val();

    let request = new XMLHttpRequest();
    const url = `https://cors-anywhere.herokuapp.com/https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=${city}&distance=1&stolenness=proximity`;

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
      console.log(bikeInfo);

      $('.display-answer').html("<p>" + bikeInfo + "</p>");
    }

  });
});
