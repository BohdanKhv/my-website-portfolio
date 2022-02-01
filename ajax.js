var HiForm = document.getElementById( "hi-form" ),
    Name = document.getElementsByClassName( "name" )[ 0 ],
    Message = document.getElementsByClassName( "message" )[ 0 ],
    MessageRegular = /([a-zA-Z0-9,\.\_](@|<|>|#|\$|!|&|,|.| |=|-|\+|\*|\%)+)/g,
    NameRegular = /^[a-z ,.'-]+$/i,
    NameError = document.getElementsByClassName( "error-name" )[ 0 ],
    MessageError = document.getElementsByClassName( "error-message" )[ 0 ],
    BtnActivator = document.getElementsByClassName( "btn-activator" )[ 0 ],
    WaitForm = document.getElementsByClassName( "wait-form" )[ 0 ];

// Ajax form for footer message
HiForm.addEventListener( "submit", submitFormMessage );

function submitFormMessage ( e ) {

	e.preventDefault();

	var NameValue   = Name.value,
	    MessageValue = Message.value;

		if ( NameValue.match( NameRegular ) ) {

            if ( MessageValue.match( MessageRegular ) ) {

                var Params = 'name=' + NameValue + '&message=' + MessageValue;
                var Xhr = new XMLHttpRequest();

                Xhr.open( 'POST', 'main.php', true );
                Xhr.setRequestHeader( 'Content-type','application/x-www-form-urlencoded' );

                WaitForm.classList.remove( "display-none" );
                HiForm.classList.add( "wait" );

                Xhr.onload = function() {

                    if ( this.status == 200 ) {

                        BtnActivator.textContent = 'Thank you for your message!';
                        WaitForm.classList.add( "display-none" );

                    }
                }

                Xhr.send( Params );

            } else {
                NameError.classList.add( "display-none" );
                MessageError.classList.remove( "display-none" );
            }

        } else {
            NameError.classList.remove( "display-none" );
            MessageError.classList.add( "display-none" );
        }

}