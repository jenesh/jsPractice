$(document).ready( () => {
    // console.log($('div'))
    // console.log($('#root>.nav>li:nth-child(3)'))
    // console.log($('li:nth-child(1)').val());
    // $('li:nth-child(3)').html('<li>Three</li>');
    // $('input').val('Magic');

    // $('li').addClass('bg-blue')
    // $('li>li').removeClass('bg-blue')
    // $('li>li').toggleClass('bg-red')
    // $('li>li').toggleClass('bg-red')


    // console.log($('li').css('background', 'red'));
    // console.log($('.nav').attr('class', '.navigation'));
    // $('article').data('n', {first: 16});
    // $('article').attr('data-ltr', 'a');
    // console.log($('article').data('n'));
    // console.log($('article'));

    // console.log($('.nav').find('li')[0]);
    const $firstLi = $('li').eq(0);
    console.log($firstLi.text());
    
})


