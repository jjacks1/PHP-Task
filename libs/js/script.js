// ajax function for getAddress API

$('#adressSubmit').click(function() { 

    $.ajax({
        url: "libs/php/getAddressInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            streetName: $('#stName').val(),
        },

        success: function(result) { 
        
        console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#strName').html(result['data'][0]['street']);
					$('#couCode').html(result['data'][0]['countryCode']);
					$('#locality').html(result['data'][0]['locality']);
					$('#pstCode').html(result['data'][0]['postalcode']);
					
                    
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
});

// ajax function for Country Code API

$('#couCodeSubmit').click(function() {

	$.ajax({
        url: "libs/php/getCountryCode.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
			lng: $('#long').val(),
        },

        success: function(result) { 
        
        console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#countName').html(result['data']['countryName']);
					$('#countCode').html(result['data']['countryCode']);
					$('#dist').html(result['data']['distance']);
					$('#lang').html(result['data']['languages']);
					
                    
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
});

// ajax function for Timezone API 

$('#tzSbmt').click(function() {

	$.ajax({
        url: "libs/php/getTimeZone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#tzLat').val(),
			lng: $('#tzLong').val(),
        },

        success: function(result) { 
        
        console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#tzCount').html(result['data']['countryName']);
					$('#tzID').html(result['data']['timezoneID']);
					$('#gmtOff').html(result['data']['gmtOffset']);
					$('#rawOff').html(result['data']['rawOffset']);
					$('#time').html(result['data']['time']);
					
                    
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
});

