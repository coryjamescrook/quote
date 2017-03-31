var $a = "";
var $b = "";
var $c = "";
var $d = "";
var $e = "";
var $f = "";
var $g = "";
var $h = "";
var $i = "";
var $j = "";
var $k = "";
var $l = "";
var $m = "";
var $n = "";
var $o = "";
var $p = "";
var $q = "";
var $r = "";
var $s = "";
var $t = "";
var $u = "";
var $v = "";
var $w = "";
var $x = "";
var $y = "";
var $z = "";
var $zz = "";

$(document).ready(function() {
	$('#projName').hide();
	$('#projLength').hide();
	$('#projBrandName').hide();
	$('#projAgencyName').hide();
	$('#projServices').hide();
	$('#projUsage').hide();
	$('#projReview').hide();

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
		doAssignments();
		$('#projReview').fadeIn(800);
	});

	function doAssignments() {
		var textBoxes = $('input[type=text]').map(function(){
	       return this.val
		}).get();

		var checkedValues = $('input:checkbox:checked').map(function() {
		    return this.name;
		}).get();

		console.log(textBoxes);
		console.log(checkedValues);

		//// Project Details ////
		$a = $('input[name=iProjName]').val();
		$b = $('input[name=iProjLength]').val();
		$c = $('input[name=iProjBrand]').val();
		$d = $('input[name=iProjAgency]').val();

		//// SERVICES ////
		// Mixing & Mastering
		if (jQuery.inArray("iProjMM", checkedValues) !== -1) {
			$e = "Mixing & Mastering";
			$f = $('input[name=mixDialogue]').val();
			$g = $('input[name=mixStudioTime]').val();
		};

		// Sound Design
		if (jQuery.inArray("iProjSD", checkedValues) !== -1) {
			$h = "Sound Design";
		};

		// Voiceover
		if (jQuery.inArray("iProjVO", checkedValues) !== -1) {
			$i = "VO";

			if (jQuery.inArray("voSource", checkedValues) !== -1) {
				$j = "Talent Sourcing";
			};

			$k = $('input[name=voDetails]').val();
			$l = $('input[name=voHours]').val();
		};

		// ADR
		if (jQuery.inArray("iProjAD", checkedValues) !== -1) {
			$m = "ADR";
		};

		// Music Sourcing & Licensing
		if (jQuery.inArray("iProjMS", checkedValues) !== -1) {
			$n = "Music Sourcing & Licensing";
		};

		// Custom Music
		if (jQuery.inArray("iProjCM", checkedValues) !== -1) {
			$o = "Custom Music Composition";
		};

		//// USAGE ////
		// TV
		if (jQuery.inArray("iUseTV", checkedValues) !== -1) {
			$p = "TV";

			if (jQuery.inArray("tvNational", checkedValues) !== -1) {
				$q = "National Use";
			};
			if (jQuery.inArray("tvMultinational", checkedValues) !== -1) {
				$r = "Multinational Use";
			};
			if (jQuery.inArray("tvWorldwide", checkedValues) !== -1) {
				$s = "Worldwide Usage";
			};

			$t = $('input[name=tvUsageLength]').val();
		};

		// Web
		if (jQuery.inArray("iUseWeb", checkedValues) !== -1) {
			$u = "Web";
		};

		// Radio
		if (jQuery.inArray("iUseRadio", checkedValues) !== -1) {
			$v = "Radio";

			if (jQuery.inArray("radioNational", checkedValues) !== -1) {
				$w = "National Use";
			};
			if (jQuery.inArray("radioMultinational", checkedValues) !== -1) {
				$x = "Multinational Use";
			};
			if (jQuery.inArray("radioWorldwide", checkedValues) !== -1) {
				$y = "Worldwide Usage";
			};

			$z = $('input[name=radioUsageLength]').val();
		};

		// Theatre
		if (jQuery.inArray("iUseTheatre", checkedValues) !== -1) {
			$zz = "Theatre";
		};

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

		//// ALL THINGS ////
		// a - name
		// b - length
		// c - brand
		// d - agency
		// e - mix
		// f - mix-dia
		// g - mix-time
		// h - sd
		// i - vo
		// j - vo-source
		// k - vo-talent
		// l - vo-time
		// m - ad
		// n - ms
		// o - cm
		// p - tv
		// q - tv-n
		// r - tv-m
		// s - tv-w
		// t - tv-len
		// u - web
		// v - radio
		// w - radio-n
		// x - radio-m
		// y - radio-w
		// z - radio-len
		// zz - theatre

		doReview();
		
	};

	function doReview() {
		$('#overview').html(
			'<p>Project Name: ' + $a + '</p>' + 
			'<p>Spot Length: ' + $b + '</p>' + 
			'<p>Brand: ' + $c + '</p>' + 
			'<p>Agency: ' + $d + '</p>' + 
			'<p>Services: ' + $e + '</p>' + 
			'<p>Dialogue Tracks: ' + $f + '</p>' + 
			'<p>In-Studio Mix Time: ' + $g + '</p>' + 
			'<p>Sound Design: ' + $h + '</p>' + 
			'<p>Voiceover: ' + $i + '</p>' + 
			'<p>VO Sourcing: ' + $j + '</p>' + 
			'<p>VO Talent Requirements: ' + $k + '</p>' + 
			'<p>VO Session Time: ' + $l + '</p>' + 
			'<p>Music Sourcing: ' + $m + '</p>' + 
			'<p>Custom Music Composition: ' + $n + '</p>' + 
			'<p>TV: ' + $o + '</p>' + 
			'<p>National Use: ' + $p + '</p>' + 
			'<p>Multinational Use: ' + $q + '</p>' + 
			'<p>Worldwide Use: ' + $r + '</p>' + 
			'<p>Project Name: ' + $s + '</p>' + 
			'<p>Project Name: ' + $t + '</p>' + 
			'<p>Project Name: ' + $u + '</p>' + 
			'<p>Project Name: ' + $v + '</p>' + 
			'<p>Project Name: ' + $w + '</p>' + 
			'<p>Project Name: ' + $x + '</p>' + 
			'<p>Project Name: ' + $y + '</p>' + 
			'<p>Project Name: ' + $z + '</p>' + 
			'<p>Project Name: ' + $zz + '</p>')
	};

});