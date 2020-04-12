const toggle = document.querySelector( 'input[name=check-box]' );
console.log("The Script is here")

toggle.addEventListener( 'change', ( e ) =>
{
    if ( e.target.checked === true ) {
        console.log( e, "Light Theme")
    } else {
        console.log(e, "Dark Theme")
    }

} )