// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {

	var wordWrap = tricksWord.item(i);
	wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');

}


var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {

	var letterWrap = tricksLetter.item(i);
	letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}



//
//// Slide In Animation
//var slideIn = anime.timeline({
//	loop: false,
//	autoplay: false,
//});
//
//slideIn
//	.add({
//		targets: '.slide-in .letter',
//		opacity: [0, 1],
//		easing: "easeInOutQuad",
//		duration: 2250,
//		delay: (el, i) => 150 * (i + 1)
//	}).add({
//		targets: '.slide-in',
//		opacity: 0,
//		duration: 1000,
//		easing: "easeOutExpo",
//		delay: 1000
//	});
//
//
//// Slide Up Animation
//var slideUp = anime.timeline({
//	loop: false,
//	autoplay: false,
//});
//
//slideUp
//	.add({
//		targets: '.slide-up .letter',
//		translateY: ["1.1em", 0],
//		opacity: [0, 1],
//		translateZ: 0,
//		duration: 750,
//		delay: (el, i) => 50 * i
//	}).add({
//		targets: '.slide-up',
//		opacity: 0,
//		duration: 1000,
//		easing: "easeOutExpo",
//		delay: 1000
//	});
//

// Fade Up Animation
var fadeUp = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp
	.add({
		targets: '.fade-up .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});

var fadeUp2 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp2
	.add({
		targets: '.fade-up2 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});

var fadeUp3 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp3
	.add({
		targets: '.fade-up3 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp4 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp4
	.add({
		targets: '.fade-up4 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp5 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp5
	.add({
		targets: '.fade-up5 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});



//about me 


var fadeUp6 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp6
	.add({
		targets: '.fade-up6 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});

var fadeUp7 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp7
	.add({
		targets: '.fade-up7 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});

var fadeUp8 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp8
	.add({
		targets: '.fade-up8 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});





//selected works 

var fadeUp9 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp9
	.add({
		targets: '.fade-up9 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp10 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp10
	.add({
		targets: '.fade-up10 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp11 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp11
	.add({
		targets: '.fade-up11 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp12 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp12
	.add({
		targets: '.fade-up12 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp13 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp13
	.add({
		targets: '.fade-up13 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp14 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp14
	.add({
		targets: '.fade-up14 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp15 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp15
	.add({
		targets: '.fade-up15 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp16 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp16
	.add({
		targets: '.fade-up16 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp17 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp17
	.add({
		targets: '.fade-up17 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp18 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp18
	.add({
		targets: '.fade-up18 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [-10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp19 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp19
	.add({
		targets: '.fade-up19 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeUp20 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp20
	.add({
		targets: '.fade-up20 .tricksword',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});









//fade in animation

var fadeIn = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeIn
	.add({
		targets: '.fade-in .tricksword',
		translateY: [-100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});


var fadeIn2 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeIn2
	.add({
		targets: '.fade-in2',
		translateY: [-100, 0],
		translateZ: 0,
		opacity: [0, 1],
		rotateZ: [10, 0],
		easing: "easeOutExpo",
		duration: 1500,
		delay: (el, i) => 0 + 30 * i
	});





//.add({
//		targets: '.fade-up .letter',
//		translateY: [0, -100],
//		opacity: [1, 0],
//		easing: "easeInExpo",
//		duration: 1200,
//		delay: (el, i) => 100 + 30 * i
//	})



//
//
//// Rotate In Animation
//var rotateIn = anime.timeline({
//	loop: false,
//	autoplay: false,
//});
//
//rotateIn
//	.add({
//		targets: '.rotate-in .letter',
//		translateY: ["1.1em", 0],
//		translateX: ["0.55em", 0],
//		translateZ: 0,
//		rotateZ: [180, 0],
//		duration: 750,
//		easing: "easeOutExpo",
//		delay: (el, i) => 50 * i
//	}).add({
//		targets: '.rotate-in',
//		opacity: 0,
//		duration: 1000,
//		easing: "easeOutExpo",
//		delay: 1000
//	});
//
//
//// Pop In Animation
//var popIn = anime.timeline({
//	loop: false,
//	autoplay: false,
//});
//
//popIn
//	.add({
//		targets: '.pop-in .letter',
//		scale: [0, 1],
//		duration: 1500,
//		elasticity: 600,
//		delay: (el, i) => 45 * (i + 1)
//	}).add({
//		targets: '.pop-in',
//		opacity: 0,
//		duration: 1000,
//		easing: "easeOutExpo",
//		delay: 1000
//	});


// Play your animation with these

//slideUp.play();
//slideIn.play();
//rotateIn.play();
//popIn.play();



// Wait before playing animation
setTimeout(() => {
	// Put the play below this line
	//	fadeUp.play();
	//	fadeUp2.play();
}, 200);

setTimeout(() => {
	// Put the play below this line
	//	fadeIn.play();
	//	fadeIn2.play();
}, 800);


// Play animaton when something is clicked
$(".your-button-class").click(function () {
	// Put the play below this line
});


// Play animaton when hovered in
$(".your-button-class").mouseenter(function () {
	// Put the play below this line
});




//// Play animation when scrolled into view
//$('#scroll-in-1').on('inview', function (event, isInView) {
//	if (isInView) {
//		// Put the play below this line
//
//		//		fadeUp.restart();
//	} else {}
//});

//$('#scroll-in-2').on('inview', function (event, isInView) {
//	if (isInView) {
//		// Put the play below this line
//		fadeUp.play();
//		//		fadeUp.restart();
//	} else {}
//});




$('#scroll-in-1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp.play();
		fadeUp2.play();
		fadeIn.play();
		fadeIn2.play();

	} else {}
});




$('#scroll-in-druhin').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp.play();
		//				fadeUp.restart();
	} else {}
});

$('#scroll-in-tarafder').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp2.play();
		//				fadeUp2.restart();
	} else {}
});




$('#scroll-in-ux').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp3.play();
		//				fadeUp3.restart();
	} else {}
});

$('#scroll-in-front').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp4.play();
		//				fadeUp4.restart();
	} else {}
});

$('#scroll-in-coder').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp5.play();
		//				fadeUp5.restart();
	} else {}
});





$('#scroll-in-about1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp6.play();
		//				fadeUp6.restart();
	} else {}
});

$('#scroll-in-about2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp7.play();
		//				fadeUp7.restart();
	} else {}
});

$('#scroll-in-about3').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp8.play();
		//				fadeUp8.restart();
	} else {}
});

$('#scroll-in-works1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp9.play();
		//				fadeUp9.restart();
	} else {}
});

$('#scroll-in-works2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp10.play();
		//				fadeUp10.restart();
	} else {}
});

$('#scroll-in-works0').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp11.play();
		//				fadeUp11.restart();
	} else {}
});



$('#scroll-in-awards1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp12.play();
		//				fadeUp12.restart();
	} else {}
});

$('#scroll-in-awards2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp13.play();
		//				fadeUp13.restart();
	} else {}
});

$('#scroll-in-awards3').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp14.play();
		//				fadeUp14.restart();
	} else {}
});



$('#scroll-in-testi1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp15.play();
		//				fadeUp15.restart();
	} else {}
});

$('#scroll-in-testi2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp16.play();
		//				fadeUp16.restart();
	} else {}
});

$('#scroll-in-cv1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp17.play();
		//				fadeUp17.restart();
	} else {}
});

$('#scroll-in-cv2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp18.play();
		//				fadeUp18.restart();
	} else {}
});

$('#scroll-in-cv3').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp19.play();
		//				fadeUp19.restart();
	} else {}
});

$('#scroll-in-cv0').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp20.play();
		//				fadeUp20.restart();
	} else {}
});