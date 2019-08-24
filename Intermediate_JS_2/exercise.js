$(document).ready(() => {
    console.log('Let\'s get ready to party with jQuery');
    $('article > img').attr('class', 'image-center');
    $('article>p:last-child').remove();
    $('#title').css('font-size', `${Math.floor(Math.random() * 100)}px`);
    $('ol').append('<li>Sike I liked!</li>');
    $('aside').empty().append('<p>Apologize for the list!</p>');
    // Change CSS based on color name and value

})



$('.row > div > input').change((e) => {
    $('body').css('background-color', 
        `rgb(${$('.row > div > input')[0].value}, 
        ${$('.row > div > input')[2].value}, 
        ${$('.row > div > input')[1].value})`
    )
    // console.log(`${$('.row > div > input')[2].value}`)
})

$('img').on('click', (e) => $(e.target).remove());
