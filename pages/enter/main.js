$(() => 
{
    $(window).on('scroll', () => 
    {
        let header = $('header > ul');
        if($(window).scrollTop() > $('#back').height())
        {
            header.css('background-color', 'rgba(255, 255, 255, 1)');
        }   
        else
        {
            header.css('background-color', 'rgba(255, 255, 255, 0.5)');
        }
    });
    $('header').on('click', () => 
    {
        $('header li').each((index, elem) => 
        {
            $(elem).toggleClass('show');
        })
    })
});