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
		rotateZ: [10, 0],
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

}, 800);


// Play animaton when something is clicked
$(".your-button-class").click(function () {
	// Put the play below this line
});


// Play animaton when hovered in
$(".your-button-class").mouseenter(function () {
	// Put the play below this line
});

// Play animation when scrolled into view
$('#scroll-in-1').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp.play();
		//		fadeUp.restart();
	} else {}
});

$('#scroll-in-2').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp.play();
		//		fadeUp.restart();
	} else {}
});

$('#scroll-in-ux').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp2.play();
		//		fadeUp.restart();
	} else {}
});

$('#scroll-in-front').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp3.play();
		//		fadeUp.restart();
	} else {}
});

$('#scroll-in-coder').on('inview', function (event, isInView) {
	if (isInView) {
		// Put the play below this line
		fadeUp4.play();
		//		fadeUp.restart();
	} else {}
});