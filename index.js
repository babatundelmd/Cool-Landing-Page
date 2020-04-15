const toggle = document.querySelector( 'input[name=check-box]' );
const body = document.getElementById( 'body' );
const slider = document.getElementById( 'slider' );
const container = document.querySelector( '.container' );
const hone = document.querySelectorAll( 'div h1, div h2' );
const cards = document.querySelectorAll( '.cards, .overview' );
const modeText = document.querySelector( '.mode-text' )

function toggleCard ()
{
    cards.forEach( ( e ) =>
    {
        e.classList.toggle( 'cards-dark' );
    } );

    hone.forEach( ( e ) =>
    {
        e.classList.toggle( 'font-dark' )
    } )
}

toggle.addEventListener( 'change', ( e ) =>
{
    if ( e.target.checked === false ) {
        body.classList.toggle( 'dark-theme' );
        container.classList.toggle( 'container-dark' );
        slider.classList.add( '_slider' );
        modeText.textContent = 'Light Theme'
        toggleCard();
    } else {
        body.classList.remove( 'dark-theme' );
        container.classList.remove( 'container-dark' );
        slider.classList.remove( '_slider' );
        modeText.textContent = 'Dark Theme';
        !toggleCard();

    }

} )

