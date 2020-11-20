import * as global_func from '../main.mjs';


let Under_991 = false;
$(() => 
{
    //GLOBAL FUNCTIONS
    global_func.showHeadOfPage();
    global_func.showFeedback();
    global_func.showLittleFeedback();
    //
    let comment_images = $('.comment .img');
    global_func.shiftBetweenHeightAndWidth(comment_images);
    $(window).on('resize', () => 
    {
        //To resize comments images
        global_func.shiftBetweenHeightAndWidth(comment_images);
        if($(window).width() <= 991)
        {
            console.log('under or eqvivalent 991px');
            Under_991 = true;
        }
        else
        {
            Under_991 = false;
        }
    });
    setTimeout(() => 
    {
        global_func.shiftBetweenHeightAndWidth(comment_images);
    }, 10);
    //
    if($(window).width() <= 991)
        Under_991 = true;

    console.log('document ready');
    const win_heigth = $(window).height() - $('header').height();

    //For all screens
    $('main > article > div').css('min-height', win_heigth);

    //LOCAL FUNCTIONS
    AttachButtonsRightMenu();
    AttachEventToExpandButton();
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

function AttachEventToExpandButton()
{
    let right_panel = $('main > aside');
    let right_menu = $('#right_menu');
    right_panel.on('click', () => 
    {
        if(Under_991)
        {
            if(!right_panel.hasClass('expand'))
                right_menu.css('display', 'block');
            else
                setTimeout(() => right_menu.css('display', 'none'), 1000);
            right_panel.toggleClass('expand');
        }
    });
    // let x_pos;
    // right_panel.on('pointerdown', (event) => 
    // {
    //     event.preventDefault();
    //     let x_pos = event.clientX;
    //     let width_panel = right_panel.width();
    //     console.log('dragstart ________________' + x_pos);
    //     // pointermove
    //     right_panel.on('pointermove', (event) => 
    //     {
    //         console.log('pointermove');
    //         let adjust = x_pos - event.clientX;
    //         if(adjust > 0)
    //             right_panel.width(width_panel + adjust);
    //         console.log(x_pos);
    //     });
    //     // pointerup
    //     right_panel.on('pointerleave', (event) => 
    //     {
    //         console.log('dragend _________________' + x_pos);
    //         $('main').on('pointermove', () => {});
    //         right_panel.on('pointerup', () => {});
    //     });
    // });
}

function WindowOnScroll()
{
    $(window).on('scroll', () => 
    {
        // let childs = $('main > article > div').children();
        let scrollTop = $(window).scrollTop();
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
                    break;
                }
                else
                    console.log('its same element');
            }
        }
    });   
}