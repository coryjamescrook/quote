$(document).ready(function() {
	
	//// INITIALIZE ////
	$('#errPrompt').hide();
	$('#projName').hide();
	$('#projVars').hide();
	$('#projLength').hide();
	$('#projBrandName').hide();
	$('#projAgencyName').hide();
	$('#projServices').hide();
	$('#projUsage').hide();
	$('#projReview').hide();
	$('#projThanks').hide();

	$('#mixing-more').hide();
	$('#vo-more').hide();
	$('#vo-details').hide();
	$('#radio-more').hide();
	$('#tv-more').hide();


	$('#projName').fadeIn(800);
	$('input[name=iProjName]').focus();

	//// Error Handler Disappear ////
	$('#errPrompt').click(function() {
		$('#errPrompt').fadeOut(800);
	});

	//// ENTER HANDLERS ////
	// Project Name //
	$('input[name=iProjName]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next0").click();
	    }
	});

	// Project Vars //
	$('input[name=iProjVars]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next1").click();
	    }
	});

	// Project Length //
	$('input[name=iProjLength]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next2").click();
	    }
	});

	// Project Brand //
	$('input[name=iProjBrand]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next3").click();
	    }
	});

	// Project Agency //
	$('input[name=iProjAgency]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next4").click();
	    }
	});

	// Project Review //
	$('input[name=enquiryName]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next7").click();
	    }
	});

	$('input[name=enquiryEmail]').keypress(function(e) {
	    if(e.which == 13) {
	    	$("#next7").click();
	    }
	});
	

	//// Additional Info ////
	$('input[name=iProjMM]').click(function() {
	    if($(this).is(":checked")) {
	        $("#mixing-more").fadeIn(300);
	        $("input[name=mixDialogue]").focus();
	    } else {
	        $("#mixing-more").fadeOut(200);
	    }
	});

	$('input[name=iProjVO]').click(function() {
	    if($(this).is(":checked")) {
	        $("#vo-more").fadeIn(300);
	        $("input[name=voHours]").focus();
	    } else {
	        $("#vo-more").fadeOut(200);
	    }
	});

	$('input[name=voSource]').click(function() {
	    if($(this).is(":checked")) {
	        $("#vo-details").fadeIn(300);
	        $("input[name=voDetails]").focus();
	    } else {
	        $("#vo-details").fadeOut(200);
	    }
	});

	$('input[name=iUseTV]').click(function() {
	    if($(this).is(":checked")) {
	        $("#tv-more").fadeIn(300);
	        $("input[name=tvUsageLength]").focus();
	    } else {
	        $("#tv-more").fadeOut(200);
	    }
	});

	$('input[name=iUseRadio]').click(function() {
	    if($(this).is(":checked")) {
	        $("#radio-more").fadeIn(300);
	        $("input[name=radioUsageLength]").focus();
	    } else {
	        $("#radio-more").fadeOut(200);
	    }
	});

	$('.numOnly').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


	//// NEXT HANDLERS ////

	$('#next0').click(function() {
		if ($('input[name=iProjName]').val() !== "") {
			$('#projName').hide();
			$('#projVars').fadeIn(800);
			$('input[name=iProjVars]').focus();
		}
		else {
			errPrompt(1);
		}
	});

	$('#prev1').click(function() {
		$('#projVars').hide();
		$('#projName').fadeIn(800);
		$('input[name=iProjName]').focus();
	});

	$('#next1').click(function() {
		if ($('input[name=iProjVars]').val() !== "") {
			$('#projVars').hide();
			$('#projLength').fadeIn(800);
			$('input[name=iProjLength]').focus();
		}
		else {
			errPrompt(2);
		}
	});

	$('#prev2').click(function() {
		$('#projLength').hide();
		$('#projVars').fadeIn(800);
		$('input[name=iProjVars]').focus();
	});

	$('#next2').click(function() {
		if ($('input[name=iProjLength]').val() !== "") {
			$('#projLength').hide();
			$('#projBrandName').fadeIn(800);
			$('input[name=iProjBrand]').focus();
		}
		else {
			errPrompt(3);
		}
	});

	$('#prev3').click(function() {
		$('#projBrandName').hide();
		$('#projLength').fadeIn(800);
		$('input[name=iProjLength]').focus();
	});

	$('#next3').click(function() {
		if ($('input[name=iProjBrand]').val() !== "") {
			$('#projBrandName').hide();
			$('#projAgencyName').fadeIn(800);
			$('input[name=iProjAgency]').focus();
		}
		else {
			errPrompt(4);
		}
	});

	$('#prev4').click(function() {
		$('#projAgencyName').hide();
		$('#projBrandName').fadeIn(800);
		$('input[name=iProjBrand]').focus();
	});

	$('#next4').click(function() {
		if ($('input[name=iProjAgency]').val() !== "") {
			$('#projAgencyName').hide();
			$('#projServices').fadeIn(800);
		}
		else {
			errPrompt(5);
		}
	});

	$('#prev5').click(function() {
		$('#projServices').hide();
		$('#projAgencyName').fadeIn(800);
	});

	$('#next5').click(function() {
		if ($("#serviceCheck input[type=checkbox]").filter(':checked').length > 0) {
		    $('#projServices').hide();
			$('#projUsage').fadeIn(800);
		}
		else {
			errPrompt(6);
		}
			
	});

	$('#prev6').click(function() {
		$('#projUsage').hide();
		$('#projServices').fadeIn(800);
	});

	$('#next6').click(function() {
		if ($("#usageCheck input[type=checkbox]").filter(':checked').length > 0) {
			$('#projUsage').hide();
			doReview();
			$('#projReview').fadeIn(800);
		}
		else {
			errPrompt(7);
		}
	});

	$('#prev7').click(function() {
		$('#projReview').hide();
		$('#projUsage').fadeIn(800);
	});

	$('#next7').click(function() {
		if ($('input[name=enquiryName]').val() !== "" && $('input[name=enquiryEmail]').val() !== "") {
			$('#projReview').hide();
			$('#projThanks').fadeIn(800);
		}
		else {
			errPrompt(8);
		}
	});

	$('#prev8').click(function() {
		location.reload();
	});

	$('#next8').click(function() {
		window.location.replace("http://torontosound.ca");
	});

	function doReview() {
		$( "#reviewList" ).empty();

		var textBoxes = $('input[type=text]').map(function(){
	       return this.value;
		}).get();

		var checkedValues = $('input:checkbox:checked').map(function() {
		    return this.name;
		}).get();

		// console.log(textBoxes);
		// console.log(checkedValues);

		//// Textboxes ////
		// 0 - name
		// 1 - vars
		// 2 - length
		// 3 - brand
		// 4 - agency
		// 5 - dialogue channels
		// 6 - mix hours in studio
		// 7 - talent requirements
		// 8 - vo studio time
		// 9 - tv length
		// 10 - radio length
		
		var i;
		for (i = 0; i < 5; ++i) {
		    if (textBoxes[i] !== "") {
		    	switch (i) {
			    	case 0:
			    		$( "#reviewList" ).append( "<p><strong>Project Name:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 1:
			    		$( "#reviewList" ).append( "<p><strong>Variations:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 2:
			    		$( "#reviewList" ).append( "<p><strong>Spot Length:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 3:
			    		$( "#reviewList" ).append( "<p><strong>Brand:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 4:
			    		$( "#reviewList" ).append( "<p><strong>Agency:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    }
		    }
		}

		var j;
		for (j = 0; j < checkedValues.length; ++j) {
	    	switch (checkedValues[j]) {
		    	case "iProjMM":
		    		$( "#reviewList" ).append( "<p><strong>Mix & Master Required</strong></p>" );
		    		var k;
					for (k = 5; k < 7; ++k) {
						if (textBoxes[k] !== "") {
							switch (k) {
						    	case 5:
						    		$( "#reviewList" ).append( "<p><strong># Dialogue Channels:</strong> " + textBoxes[k] + "</p>" );
						    		break;
						    	case 6:
						    		$( "#reviewList" ).append( "<p><strong>Mix Hours in Studio:</strong> " + textBoxes[k] + " hours</p>" );
						    		break;
				    		}
					    }
				    }
		    		break;
		    	case "iProjSD":
		    		$( "#reviewList" ).append( "<p><strong>Sound Design Required</strong></p>" );
		    		break;
		    	case "iProjVO":
		    		$( "#reviewList" ).append( "<p><strong>Voiceover Recording Required</strong></p>" );
		    		var k;
					for (k = 7; k < 9; ++k) {
						if (textBoxes[k] !== "") {
							switch (k) {
						    	case 7:
						    		$( "#reviewList" ).append( "<p><strong>Talent Requirements:</strong> " + textBoxes[k] + "</p>" );
						    		break;
						    	case 8:
						    		$( "#reviewList" ).append( "<p><strong>VO Studio Time:</strong> " + textBoxes[k] + " hours</p>" );
						    		break;
						    }
					    }
				    }
		    		break;
		    	case "voSource":
		    		$( "#reviewList" ).append( "<p><strong>VO Talent Sourcing Required</strong></p>" );
		    		break;
		    	case "iProjAD":
		    		$( "#reviewList" ).append( "<p><strong>ADR Required</strong></p>" );
		    		break;
		    	case "iProjMS":
		    		$( "#reviewList" ).append( "<p><strong>Music Sourcing Required</strong></p>" );
		    		break;
		    	case "iProjCM":
		    		$( "#reviewList" ).append( "<p><strong>Custom Music Composition Required</strong></p>" );
		    		break;
		    	case "iProjME":
		    		$( "#reviewList" ).append( "<p><strong>Music Editing Required</strong></p>" );
		    		break;
		    	case "iProjCA":
		    		$( "#reviewList" ).append( "<p><strong>In-session Catering Requested</strong></p>" );
		    		break;
		    }
		}

		var l;
		for (l = 0; l < checkedValues.length; ++l) {
	    	switch (checkedValues[l]) {
		    	case "iUseTV":
		    		$( "#reviewList" ).append( "<p><strong>Usage:</strong> TV</p>" );
		    		var m;
					for (m = 0; m < checkedValues.length; ++m) {
				    	switch (checkedValues[m]) {
					    	case "tvNational":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> National</p>" );
					    		break;
					    	case "tvMultinational":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> Multinational</p>" );
					    		break;
					    	case "tvWorldwide":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> Worldwide</p>" );
					    		break;
			    		}
		    		}
		    		if (textBoxes[9] !== "") {
		    			$( "#reviewList" ).append( "<p><strong>TV Usage Length:</strong> " + textBoxes[9] + "</p>" );
		    		}
		    		break;
		    	case "iUseWeb":
		    		$( "#reviewList" ).append( "<p><strong>Usage:</strong> Web</p>" );
		    		break;
		    	case "iUseRadio":
		    		$( "#reviewList" ).append( "<p><strong>Usage:</strong> Radio</p>" );
		    		var n;
					for (n = 0; n < checkedValues.length; ++n) {
				    	switch (checkedValues[n]) {
					    	case "radioNational":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> National</p>" );
					    		break;
					    	case "radioMultinational":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> Multinational</p>" );
					    		break;
					    	case "radioWorldwide":
					    		$( "#reviewList" ).append( "<p><strong>Territory:</strong> Worldwide</p>" );
					    		break;
			    		}
		    		}
		    		if (textBoxes[10] !== "") {
		    			$( "#reviewList" ).append( "<p><strong>Radio Usage Length:</strong> " + textBoxes[10] + "</p>" );
		    		}
		    		break;
		    	case "iUseTheatre":
		    		$( "#reviewList" ).append( "<p><strong>Usage:</strong> Theatre</p>" );
		    		break;
		    }
	    }

	};

});

function errPrompt(errCode) {
	switch (errCode) {
		case 1:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter a project name</p>");
			$('input[name=iProjName]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 2:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter the number of variations</p>");
			$('input[name=iProjVars]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 3:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter the length of the spot</p>");
			$('input[name=iProjLength]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 4:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter a brand</p>");
			$('input[name=iProjBrand]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 5:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter an agency name</p>");
			$('input[name=iProjAgency]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 6:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please select at least ONE service</p>");
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 7:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please select at least ONE usage</p>");
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		case 8:
			$('#thePrompt').html("");
			$('#thePrompt').html("<p id='thePrompt'>Please enter your name AND email</p>");
			$('input[name=enquiryName]').focus();
			$('#errPrompt').fadeIn(500).delay(3000).fadeOut(800);
			break;
		
	}
};



