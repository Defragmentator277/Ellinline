import * as global_func from '../main.mjs';

$(() => 
{
    const feedback_height = 400;
    //
    let win_height = $(window).height() - $('header').height();
    //For scrolling to the Top
    $(window).scrollTop(0);
    //For right height start image
    $('#back').css('min-height', win_height * ($(window).height() >= 768 ? 1 : 1.4));
    $('#attractions').css('min-height', win_height);
    $('#hotel').css('min-height', win_height);


    $(window).on('scroll', () => 
    {
        let header = $('header > ul');
        let feedback = $('#feedback');
        if(feedback.data('active'))
            feedback.data('active', false);
        let offset_for_feedback = 0;
        if($(window).scrollTop() > $('#back').height())
        {
            offset_for_feedback = $('#feedback > h3').height() + 20;
        }
        else
        {
            feedback.data('active', false);
        }
        feedback.css('height', `${offset_for_feedback}px`);
    })
    //Border radius comments images
    .resize(() => 
    {
        shiftBetweenHeightAndWidth();
        OptionMap(win_height);
    });
    setTimeout(() => 
    {
        shiftBetweenHeightAndWidth();
    }, 10);
    // END

    IncludingFiles();

    global_func.showHeadOfPage();
    OptionMap(win_height);

    attachClickOnTab('#tour');
    attachClickOnTab('#railroad');
    attachClickOnTab('#fly');
    
    showFeedback(feedback_height);
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

function showFeedback(need_height)
{
    let feedback = $('#feedback');
    $('#feedback > h3').on('click', () => 
    {
        console.log(feedback.data('active'));
        if(!feedback.data('active'))
        {
            feedback.css('height', need_height + 'px');
            feedback.data('active', true);
        }
        else
        {
            feedback.css('height', ($('#feedback > h3').height() + 20) + 'px');
            feedback.data('active', false);
        }
    });
}

function shiftBetweenHeightAndWidth()
{
    let elem = $('#comments .img');
    elem.height(elem.width());
}

function OptionMap(height)
{
    let map = $('iframe');
    map.attr('width', $(window).width());
    map.attr('height', height);
}