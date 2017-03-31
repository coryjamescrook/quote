$(document).ready(function() {
	$('#projName').hide();
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

	$('#next1').click(function() {
		$('#projName').hide();
		$('#projLength').fadeIn(800);
		$('input[name=iProjLength]').focus();
	});

	$('#prev2').click(function() {
		$('#projLength').hide();
		$('#projName').fadeIn(800);
		$('input[name=iProjName]').focus();
	});

	$('#next2').click(function() {
		$('#projLength').hide();
		$('#projBrandName').fadeIn(800);
		$('input[name=iProjBrand]').focus();
	});

	$('#prev3').click(function() {
		$('#projBrandName').hide();
		$('#projLength').fadeIn(800);
		$('input[name=iProjLength]').focus();
	});

	$('#next3').click(function() {
		$('#projBrandName').hide();
		$('#projAgencyName').fadeIn(800);
		$('input[name=iProjAgency]').focus();
	});

	$('#prev4').click(function() {
		$('#projAgencyName').hide();
		$('#projBrandName').fadeIn(800);
		$('input[name=iProjBrand]').focus();
	});

	$('#next4').click(function() {
		$('#projAgencyName').hide();
		$('#projServices').fadeIn(800);
	});

	$('#prev5').click(function() {
		$('#projServices').hide();
		$('#projAgencyName').fadeIn(800);
	});

	$('#next5').click(function() {
		$('#projServices').hide();
		$('#projUsage').fadeIn(800);
	});

	$('#prev6').click(function() {
		$('#projUsage').hide();
		$('#projServices').fadeIn(800);
	});

	$('#next6').click(function() {
		$('#projUsage').hide();
		doReview();
		$('#projReview').fadeIn(800);
	});

	$('#prev7').click(function() {
		$('#projReview').hide();
		$('#projUsage').fadeIn(800);
	});

	$('#next7').click(function() {
		$('#projReview').hide();
		$('#projThanks').fadeIn(800);
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
		// 1 - length
		// 2 - brand
		// 3 - agency
		// 4 - dialogue channels
		// 5 - mix hours in studio
		// 6 - talent requirements
		// 7 - vo studio time
		// 8 - tv length
		// 9 - radio length
		
		var i;
		for (i = 0; i < 4; ++i) {
		    if (textBoxes[i] !== "") {
		    	switch (i) {
			    	case 0:
			    		$( "#reviewList" ).append( "<p><strong>Project Name:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 1:
			    		$( "#reviewList" ).append( "<p><strong>Spot Length:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 2:
			    		$( "#reviewList" ).append( "<p><strong>Brand:</strong> " + textBoxes[i] + "</p>" );
			    		break;
			    	case 3:
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
					for (k = 4; k < 6; ++k) {
						if (textBoxes[k] !== "") {
							switch (k) {
						    	case 4:
						    		$( "#reviewList" ).append( "<p><strong># Dialogue Channels:</strong> " + textBoxes[k] + "</p>" );
						    		break;
						    	case 5:
						    		$( "#reviewList" ).append( "<p><strong>Mix Hours in Studio:</strong> " + textBoxes[k] + "</p>" );
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
					for (k = 6; k < 8; ++k) {
						if (textBoxes[k] !== "") {
							switch (k) {
						    	case 6:
						    		$( "#reviewList" ).append( "<p><strong>Talent Requirements:</strong> " + textBoxes[k] + "</p>" );
						    		break;
						    	case 7:
						    		$( "#reviewList" ).append( "<p><strong>VO Studio Time:</strong> " + textBoxes[k] + "</p>" );
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
		    		if (textBoxes[8] !== "") {
		    			$( "#reviewList" ).append( "<p><strong>TV Usage Length:</strong> " + textBoxes[8] + "</p>" );
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
		    		if (textBoxes[9] !== "") {
		    			$( "#reviewList" ).append( "<p><strong>Radio Usage Length:</strong> " + textBoxes[9] + "</p>" );
		    		}
		    		break;
		    	case "iUseTheatre":
		    		$( "#reviewList" ).append( "<p><strong>Usage:</strong> Theatre</p>" );
		    		break;
		    }
	    }

	};

});