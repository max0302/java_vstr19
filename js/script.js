$('document').ready(function () {
    $('.loadjQuery').on('click', function () {
    	// alert($('#gorod').val())
        $.ajax({
            type: 'GET',
            //data: {q: $('#gorod').val(), days: $('#dni').val()},
            url: `http://api.apixu.com/v1/forecast.json?key=796a079c0fdb40eeb8f160248192208&q=${$('#gorod').val()}&days=${$('#dni').val()}`,
            success: function (data) {
                $('.name_country').text(data.location.name + ', ' + data.location.country);
                $('#oblako').attr('src', 'http:' + data.current.condition.icon);
                $('#oblakoText').text(data.current.condition.text);
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