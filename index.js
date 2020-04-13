const toggle = document.querySelector( 'input[name=check-box]' );
const body = document.getElementById( 'body' );
const container = document.querySelector( '.container' );
const hone =  document.querySelector('h1, h2')


toggle.addEventListener( 'change', ( e ) =>
{
    if ( e.target.checked === false ) {
        body.classList.toggle( 'dark-theme' );
        container.classList.toggle( 'container-dark' );
        hone.classList.toggle('font-dark')
        console.log( e, "Dark Theme")
    } else {
        body.classList.remove( 'dark-theme');
        container.classList.remove( 'container-dark' );
        hone.classList.remove('font-dark')
    }

} )