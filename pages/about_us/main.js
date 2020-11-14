import * as global_func from '../main.mjs';

$(() => 
{
    //GLOBAL FUNCTIONS
    global_func.showHeadOfPage();
    global_func.showFeedback();
    global_func.showLittleFeedback();
    //
    let comment_images = $('.comment .img');
    global_func.shiftBetweenHeightAndWidth(comment_images);
    $(window).on('resize', () => global_func.shiftBetweenHeightAndWidth(comment_images));
    //

    console.log('document ready');
    const win_heigth = $(window).height() - $('header').height();

    //For all screens
    $('main > article > div').css('min-height', win_heigth);

    //LOCAL FUNCTIONS
    AttachButtonsRightMenu();
    WindowOnScroll();
});

const button_menu = [ 'why_we', 'essential', 'reviews', 'job', 'rewards'];
function AttachButtonsRightMenu()
{
    let childs = $('#right_menu').children();
    let height_head = $('header').height();
    for(let i = 0; i < childs.length; i++)
    {
        childs.eq(i).on('click', () => 
        {
            $('html, body').animate({ 'scrollTop': $('#' + button_menu[i]).offset().top - height_head }, 'fast');
        });
        //Appear animation
        setTimeout(() => 
        {
            childs.eq(i).css('max-width', '100%');
        }, 300 * i);
    }
}

// function AppearButtons()
// {
// }

function WindowOnScroll()
{
    $(window).on('scroll', () => 
    {
        // let childs = $('main > article > div').children();
        let scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        for(let i = 0; i < button_menu.length; i++)
        {
            let elem = $('#' + button_menu[i]);
            if(scrollTop < elem.offset().top + elem.height() / 2)
            {
                let active_elem = $('#right_menu > a.active');
                let unact_elem = $('#right_menu > a').eq(i);
                if(active_elem !== unact_elem)
                {
                    active_elem.removeClass('active');
                    unact_elem.addClass('active');
                    //Chainge background color for connections between backgrounds
                    $('main > aside').css('background-color', elem.css('backgroundColor'));
                    console.log('chainge active!');
                    break;
                }
                else
                    console.log('its same element');
            }
        }
    });   
}