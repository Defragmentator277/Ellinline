import * as global_func from '../main.mjs';

$(() => 
{
    //
    let win_height = $(window).height() - $('header').height();
    //For scrolling to the Top
    $(window).scrollTop(0);
    //For right height start image
    $('#back').css('min-height', win_height * ($(window).height() >= 768 ? 1 : 1.4));
    $('#attractions').css('min-height', win_height);
    $('#hotel').css('min-height', win_height);


    //Border radius comments images
    $(window).resize(() => 
    {
        global_func.shiftBetweenHeightAndWidth($('#comments .img'));
        OptionMap(win_height);
    });
    setTimeout(() => 
    {
        global_func.shiftBetweenHeightAndWidth($('#comments .img'));
    }, 10);
    // END

    IncludingFiles();

    //GLOBAL FUNCTIONS
    global_func.showHeadOfPage();
    global_func.showLittleFeedback($('#back').height());
    global_func.showFeedback();
    global_func.shiftBetweenHeightAndWidth($('#comments .img'));

    //LOCAL FUNCTIONS
    OptionMap(win_height);

    attachClickOnTab('#tour');
    attachClickOnTab('#railroad');
    attachClickOnTab('#fly');
});

function IncludingFiles()
{
    // var header = link.import.querySelector('header');
    // document.getElementById('#fill').appendChild(header);
}
// END

function attachClickOnTab(id_tab)
{
    $(id_tab).on('click', () => 
    {
        if(!$(id_tab).hasClass('active'))
        {
            let act_tab = $('.tabs .active').removeClass('active');
            $(id_tab).addClass('active');
            $('#' + act_tab.attr('id') + '_tab').css('display', 'none');
            $(id_tab + '_tab').css('display', 'flex');
        }
    });
}

function OptionMap(height)
{
    let map = $('iframe');
    map.attr('width', $(window).width());
    map.attr('height', height);
}