$('document').ready(function () {
    $('.loadjQuery').on('click', function () {
    	// alert($('#gorod').val())
        $.ajax({
            type: 'GET',
            //data: {q: $('#gorod').val(), days: $('#dni').val()},
            url: `http://api.apixu.com/v1/forecast.json?key=796a079c0fdb40eeb8f160248192208&q=${$('#gorod').val()}&days=5`,
            success: function (data) {
                $('.name_country').text(data.location.name + ', ' + data.location.country);
                $('.localtime').text(data.location.localtime);

                $('#oblako').attr('src', 'http:' + data.current.condition.icon);
                $('#oblakoText').text(data.current.condition.text);

                $('.temp_c').text(data.current.temp_c + ' °C');

                $('.wind_kph').text(`Wind: ${data.current.wind_kph} kph`);
                $('.precip_mm').text(`Precip: ${data.current.precip_mm} mm`);
                $('.pressure_mb').text(`Preasure: ${data.current.pressure_mb} mb`);

                let forecastweather = $('.forecast-weather');
                forecastweather.empty();

                data.forecast.forecastday.forEach(weather => {
                    const weatherTemplate = `
                    <div class="weather-onday">
                        <p class="forecast-weekday">${/^\w+/.exec(new Date(weather.date).toString())}</p>
                        <p class="forecast-date">${weather.date}</p>
                        <img
                            class="weather-img"
                            src="http:${weather.day.condition.icon}"
                            alt=""
                        />
                        <p class="forecast-tempc">${Math.floor(weather.day.maxtemp_c)}°C</p>
                    </div>
                `;

                    forecastweather.append(weatherTemplate);
                });
            },
            error: function (data) {
                alert('Охрана ... Отмена!!!'
                    + ' '
                    + data.status
                    + ' '
                    + data.statusText);
            }
        });
    })
});