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


