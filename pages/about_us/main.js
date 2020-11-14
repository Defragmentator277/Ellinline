import * as global_func from '../main.mjs';

$(() => 
{
    //GLOBAL FUNCTIONS CALL
    global_func.showHeadOfPage();

    console.log('document ready');
    const win_heigth = $(window).height();

    //For all screens
    // $('main').height(win_heigth);
    $('main > article > div').css('min-height', win_heigth);

});