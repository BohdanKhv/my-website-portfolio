var MenuBtn = document.getElementsByClassName( "burger" )[ 0 ],
    MenuBg = document.getElementsByClassName( "background-for-burger" )[ 0 ],
    MenuContent = document.getElementsByClassName( "menu" )[ 0 ],
    Body = document.getElementsByTagName( "body" )[ 0 ],
    MainMenu = document.getElementsByClassName( "menu-skewY" )[ 0 ],
    CloseMenu = document.getElementsByClassName( "close-menu" )[ 0 ],
    FullMenu = document.getElementsByClassName( "main-nav-menu" )[ 0 ],
    BurgerSvg = document.getElementsByClassName( "burger-svg" )[ 0 ],
    NavCorner = document.getElementsByClassName( "nav-corner" )[ 0 ],
    AboutMe = document.getElementsByClassName( "about-me" )[ 0 ],
    AboutMeMore = document.getElementsByClassName( "about-me-more" )[ 0 ],
    DescriptionData = document.getElementsByClassName( "description-data" ),
    BgDescription = document.getElementsByClassName( "background-data" ),
    WorkItems = document.getElementsByClassName( "work-item" ),
    Menu = document.getElementsByClassName( "Menu-list" )[ 0 ],
    Item = document.getElementsByClassName( "Menu-list-item" ),
    W = window.innerWidth, //window width
    H = window.innerHeight, //window height
    SeyHi = document.getElementsByClassName( "sey-hi" )[ 0 ],
	SeyHiBtn = document.getElementsByClassName( "btn-activator" )[ 0 ],
	Designer = document.getElementsByClassName( "designer" )[ 0 ],
	FrontEnd = document.getElementsByClassName( "front-end" )[ 0 ],
	BackEnd = document.getElementsByClassName( "back-end" )[ 0 ],
	LoadingImage = document.getElementsByClassName( "loading-image" )[ 0 ],
	RocketImage = document.getElementsByClassName( "main-fh" )[ 0 ];

MenuBtn.addEventListener( "click", showMenu );

// show menu background( MenuBg ) and menu content( MenuContent ) on click menu icon( MenuBtn )
function showMenu () {

	Body.classList.add( "body-overflow" );
	MenuBg.classList.remove( "hide" );
	MenuBg.classList.add( "show" );
	BurgerSvg.classList.add( "z-index-1" );
	FullMenu.classList.remove( "z-index-1" );

	// shows main menu content
	setTimeout( function () {
		MenuContent.classList.remove( "menu-hidden" );
		MenuContent.classList.add( "menu-show" );
	}, 800 );

	// rotate menu on 0deg
	setTimeout( function () {
		MainMenu.classList.remove( "menu-skewY" );
	}, 1900 );

	// move menu items out of mouse dicartion
	setTimeout( function () {

		if ( MenuContent.classList.contains( "menu-show" ) ) {

			window.addEventListener( "mousemove", function ( e ) {

				var OffSetX = 0.5 - e.pageX / W,
				OffSetY =  0.5 - e.screenY / H,
				DY =  e.screenY - H / 2,
				DX = e.pageX - W / 2,
				ThetA = Math.atan2( DY, DX ),
				Angle = ThetA * 180 / Math.PI - 90;
				OffSetPoster = Menu.dataset.offset,
				TransFormPoster = "translate3d( 0," + -OffSetX * OffSetPoster + "px, 0) rotateX(" + ( -OffSetY * OffSetPoster ) + "deg) rotateY(" + ( OffSetX * ( OffSetPoster * 2 ) ) + "deg)"; //poster transform

				if ( Angle < 0 ) {
					Angle = Angle + 360;
				}

				Menu.style.transform = TransFormPoster;

				for ( let i = 0; i < Item.length; i++ ){

					var test= Item[i].attributes[1].value,
					OffsetLayer = test || 0,
					TransformLayer = "translate3d(" +OffSetX * OffsetLayer + "px, " + OffSetY * OffsetLayer + "px, 20px)";
					Item[i].style.transform = TransformLayer;

				}

			} );

		}

	}, 800 );

}

// // hide menu when click on menu item
for ( let i = 0; i < Item.length; i++ ) {

	Item[i].addEventListener( "click", function(e) {
		CloseMenu.click()
	} )

}


// hide menu
CloseMenu.addEventListener( "click", closeMenu );

function closeMenu () {

	MenuContent.classList.add( "menu-hidden" );
	MenuContent.classList.remove( "menu-show" );
	Body.classList.remove( "body-overflow" );
	CloseMenu.classList.add( "display-none" );
	MainMenu.classList.add( "menu-skewY" );

	// makes height 20% and rotate on -10deg
	setTimeout( function () {
		MenuBg.classList.add( "aniamtion-close" );
	}, 500 );

	// push menu bg to bottom
	setTimeout( function () {
		MenuBg.classList.add( "aniamtion-close-2" );
	}, 1000 );

	// reset everything to default
	setTimeout( function () {

		MenuBg.classList.add( "hide" );
		MenuBg.classList.remove( "show" );
		MenuBg.classList.remove( "aniamtion-close" );
		MenuBg.classList.remove( "aniamtion-close-2" );
		BurgerSvg.classList.remove( "z-index-1" );
		CloseMenu.classList.remove( "display-none" );
		FullMenu.classList.add( "z-index-1" );

	}, 1500 );

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce ( Func, Wait = 10, Immediate = true ) {

	var Timeout;
	return function () {

		var Context = this, Args = arguments;
		var later = function () {
			Timeout = null;
			if ( !Immediate ) Func.apply( Context, Args );
		};
		var CallNow = Immediate && !Timeout;
		clearTimeout( Timeout );
		Timeout = setTimeout( later, Wait );
		if ( CallNow ) Func.apply( Context, Args ) ;

	};

};

// animation on scroll
window.addEventListener( "scroll", debounce( scroll ) );

function scroll () {
	if ( window.pageYOffset > 20 ) {
		NavCorner.classList.add( "box-shadow" );
	} else {
		NavCorner.classList.remove( "box-shadow" );
	}

	if ( window.pageYOffset >= 600 && window.innerWidth >= 570 ) {
		BackEnd.classList.remove( "card-appearance" );
	}

	if ( window.scrollY >= document.body.clientHeight * 0.34 && window.innerWidth <= 570 ) {
		BackEnd.classList.remove( "card-appearance" );
	}

	if ( window.pageYOffset >= 750 && window.innerWidth >= 570 ) {
		FrontEnd.classList.remove( "card-appearance" );
	}
	
	if ( window.scrollY >= document.body.clientHeight * 0.22 && window.innerWidth <= 570 ) {
		FrontEnd.classList.remove( "card-appearance" );
	}

	if ( window.pageYOffset >= 900 && window.innerWidth >= 570 ) {
		Designer.classList.remove( "card-appearance" );
	}

	if ( window.scrollY >= document.body.clientHeight * 0.11 && window.innerWidth <= 570 ) {
		Designer.classList.remove( "card-appearance" );
	}

	if ( window.pageYOffset >= 2600 && window.innerWidth >= 570 ) {
		rocket();
	}

	if ( window.pageYOffset >= 4300 && window.innerWidth <= 570 ) {
		rocket();
	}

}

function rocket () {

	if ( Roket.classList.contains( "display-none" ) ) {
		
		RocketImage.src = "img/fh.png";

		if (Math.random() >= 0.5) {
			RocketImage.src = "img/starship.png";
		}
		else if (Math.random() >= 0.5) {
			RocketImage.src = "img/starship_2.png";
		}

		RoketFire.classList.remove( "opacity-none" );
		setTimeout( function () {
			Roket.classList.remove( "transform-500" );
		}, 200 );
		setTimeout( function () {
			RoketFire.classList.add( "opacity-none" );
		}, 1500 );

	}
	Roket.classList.remove( "display-none" );

}

// on click ( AboutMeMore ) shows more information in paragraph ( AboutMe )
AboutMeMore.addEventListener( "click", showMoreAboutMe );
function showMoreAboutMe ()  {

	AboutMe.classList.toggle( "about-me-more-show" );

	if ( AboutMe.classList.contains( "about-me-more-show" ) ) {
		AboutMeMore.textContent = "Show Less";
	} else {
		AboutMeMore.textContent = "Show More";
	}

}

// show content of button ( sey hi )
SeyHiBtn.addEventListener( "click", showSeyHiFrom );

function showSeyHiFrom () {

	if ( SeyHi.classList.contains( "show-form" ) ) {

		SeyHi.style.maxHeight = "63px";
		SeyHi.classList.add( "rotator" );
		SeyHi.classList.remove( "show-form" );
		document.getElementsByClassName( "content" )[ 1 ].style.marginTop = "0px";

	} else {

		SeyHi.style.maxHeight = "600px";
		SeyHi.classList.remove( "rotator" );
		SeyHi.classList.add( "show-form" );
		document.getElementsByClassName( "content" )[ 1 ].style.marginTop = "300px";

	}

}


var Roket = document.getElementsByClassName( "roket" )[ 0 ],
RoketFire = document.getElementsByClassName( "fire" )[ 0 ];

Roket.addEventListener( "click", liftOf );

function liftOf () {

	Roket.style.transition = "7s";
	RoketFire.classList.remove( "opacity-none" );

	setTimeout( function () {
		Roket.classList.add( "transform-2000" );
		window.location = "#nav-top";
	}, 200 );
	setTimeout( function () {

		Roket.classList.add( "display-none" );
		Roket.classList.remove( "transform-2000" );

		setTimeout( function () {
			Roket.style.transition = "2s";
			RoketFire.classList.add( "opacity-none" );
			Roket.classList.add( "transform-500" );
		}, 500 );

	}, 2500 );

}


// show image while page loading
Body.classList.add( "body-overflow" );

window.onload = function () {
	
	setTimeout( function () {

		document.getElementsByTagName( "main" )[ 0 ].classList.remove( "display-none" );
		document.getElementsByTagName( "footer" )[ 0 ].classList.remove( "display-none" );
		FullMenu.classList.remove( "display-none" );

	}, 500 );
	
	setTimeout( function () {

	Body.classList.remove( "body-overflow" );
	LoadingImage.classList.add( "loading-image-transform" );
	
	LoadingImage.addEventListener( "transitionend", function () {
		LoadingImage.classList.add( "display-none" );
	} ) ;

}, 1000 );

}