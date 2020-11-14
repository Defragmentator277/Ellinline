//GLOBAL VARIBALES
const feedback_height = 400;

// GLOBAL FUNCTIONS
export function showHeadOfPage()
{
    $('li#logo').on('click', () => 
    {
        $('header ul li').each((index, elem) => 
        {
            $(elem).toggleClass('show');
        });
        $('#search_field').toggleClass('show');
    })
}

export function showLittleFeedback(x_pos = 0)
{
    $(window).on('scroll', () => 
    {
        let feedback = $('#feedback');
        if(feedback.data('active'))
            feedback.data('active', false);
        let offset_for_feedback = 0;
        if($(window).scrollTop() > x_pos)
        {
            offset_for_feedback = $('#feedback > h3').height() + 20;
        }
        else
        {
            feedback.data('active', false);
        }
        feedback.css('height', `${offset_for_feedback}px`);
    });
}

export function showFeedback()
{
    let feedback = $('#feedback');
    $('#feedback > h3').on('click', () => 
    {
        console.log(feedback.data('active'));
        if(!feedback.data('active'))
        {
            feedback.css('height', feedback_height + 'px');
            feedback.data('active', true);
        }
        else
        {
            feedback.css('height', ($('#feedback > h3').height() + 20) + 'px');
            feedback.data('active', false);
        }
    });
}

export function shiftBetweenHeightAndWidth(elems)
{
    elems.height(elems.width());
}

