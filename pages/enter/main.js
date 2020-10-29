$(() => 
{
    
    setTimeout(() => 
    {
        let elem = $('#comments .img');
        elem.height(elem.width());
    }, 200);

    $(window).on('scroll', () => 
    {
        let header = $('header > ul');
        if($(window).scrollTop() > $('#back').height())
            header.css('background-color', 'rgba(255, 255, 255, 1)');
        else
            header.css('background-color', 'rgba(255, 255, 255, 0.5)');
    }).resize(() => 
    {
        let elem = $('#comments .img');
        elem.height(elem.width());
    });


    $('header').on('click', () => 
    {
        $('header li').each((index, elem) => 
        {
            $(elem).toggleClass('show');
        })
    })

    attachClickOnTab('#tour');
    attachClickOnTab('#railroad');
    attachClickOnTab('#fly');
});

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