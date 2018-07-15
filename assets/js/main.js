$(function() {

	// Cache the Window object
	var $window = $(window);

	// Parallax Backgrounds
	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

		}); // end window scroll
	});

});

$(document).ready(function () {
		var url = window.location;
		$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
		$('ul.nav a').filter(function() {
				 return this.href == url;
		}).parent().addClass('active');

		// Some random colors
	  const colors = ["balloon-0", "balloon-1", "balloon-2", "balloon-3"];

	  const numBalls = 20;
	  const balls = [];
	  let ballConatiner = document.createElement("div");
	  ballConatiner.setAttribute('id', 'balloon-container')
	  document.getElementsByTagName('body')[0].appendChild(ballConatiner);

	  for (let i = 0; i < numBalls; i++) {
	    let ball = document.createElement("div");
	    ball.classList.add("ball");
	    ball.classList.add(colors[Math.floor(Math.random() * colors.length)]);
	    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
	    ball.style.top = `${Math.floor(Math.random() * 70)}vh`;
	    ball.style.transform = `scale(${Math.random()})`;

	    balls.push(ball);

	    document.getElementById('balloon-container').appendChild(ball);
	    //document.getElebody.append(ball);
	  }

	  // Keyframes
	  balls.forEach((el, i, ra) => {
	    let to = {
	      x: Math.random() * 12,
	      y: -5
	    };

	    let anim = el.animate(
	      [{
	          transform: `translate(${to.x}rem, ${to.y}rem)`
	        },
	        {
	          transform: "translate(0, 0)"
	        }

	      ], {
	        duration: (Math.random() + 1) * 1500, // random duration
	        direction: "alternate",
	        fill: "forwards",
	        iterations: Infinity,
	        easing: "ease-in-out"
	      }
	    );
	  });


});
