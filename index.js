const toggle = document.querySelector( 'input[name=check-box]' );
const body = document.getElementById( 'body' );
const container = document.querySelector( '.container' );
const hone = document.querySelector( 'h1' );
const cards = document.querySelector( 'div.cards' );



toggle.addEventListener( 'change', ( e ) =>
{
    if ( e.target.checked === false ) {
        body.classList.toggle( 'dark-theme' );
        container.classList.toggle( 'container-dark' );
        hone.classList.toggle( 'font-dark' );
        cards.classList.toggle( 'cards-dark' );
        console.log( e, "Dark Theme")
    } else {
        body.classList.remove( 'dark-theme');
        container.classList.remove( 'container-dark' );
        hone.classList.remove( 'font-dark' );
        cards.classList.remove('cards-dark')
    }

} )

