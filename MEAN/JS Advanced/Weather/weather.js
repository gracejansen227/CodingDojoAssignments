
  $(document).ready(function(){

    $('form').submit(function(){
      $('#displayCity').append('<h2>' + $('#search').val() + '</h2>');


      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $('#search').val() + '&&appid=caf7e404e0608de4f1e04640399f6f65',
      function(res){
        console.log(res);
        var kelvin = res.main.temp;

        var fahr = (9/5)*(kelvin -273) +32;

        fahr = Math.floor(fahr);

        $('#weatherInfo').html('<h3>' + fahr + ' &#176; F </h3>');

        if( fahr > 70){
          $('#weatherInfo').append('<h4> ITS FUCKINNGGG HOTT IN THIS BITCH </h4>');
        }
          else {
            $('#weatherInfo').append('<h4> damn its too cold out </h4>');
          }

      }, 'json'
    );

      return false;
    });



  });
