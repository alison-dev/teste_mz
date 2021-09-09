
$(function(){

    var changeIcon = false;

    /* MENU 1 */
    $(".main_header_content_menu_list_obj").on("mouseenter", function(){
        $(".main_header_content_menu_list_sub").stop().slideDown();
    });

    $(".main_header_content_menu_list_sub").on("mouseleave", function(){
        $(".main_header_content_menu_list_sub").stop().slideUp();
    });

    /* MENU 2 */
    $(".main_header_content_menu_list_obj2").on("mouseenter", function(){
        $(".main_header_content_menu_list_sub2").stop().slideDown();
    });

    $(".main_header_content_menu_list_sub2").on("mouseleave", function(){
        $(".main_header_content_menu_list_sub2").stop().slideUp();
    });

    /* MENU 3 */
    $(".main_header_content_menu_list_obj3").on("mouseenter", function(){
        $(".main_header_content_menu_list_sub3").stop().slideDown();
    });

    $(".main_header_content_menu_list_sub3").on("mouseleave", function(){
        $(".main_header_content_menu_list_sub3").stop().slideUp();
    });

    /* MENU 4 */
    $(".main_header_content_menu_list_obj4").on("mouseenter", function(){
        $(".main_header_content_menu_list_sub4").stop().slideDown();
    });

    $(".main_header_content_menu_list_sub4").on("mouseleave", function(){
        $(".main_header_content_menu_list_sub4").stop().slideUp();
    });

    $(".mobile_obj").on("click", function(){
        $(".main_header_content_menu_mobile_sub_li ul").slideDown();
    });

    $(".mobile_obj").on("click", function(){
        $(".main_header_content_menu_mobile_ul_li_ul").slideToggle();

        if(!changeIcon)
        {
            $(this).removeClass("icon-menu");
            $(this).addClass("icon-lock");  
            changeIcon = true;
            return;
        }

        if(changeIcon)
        {
            $(this).removeClass(".icon-lock");
            $(this).addClass("icon-menu");  
            changeIcon = false;
            return;
        }
              
    });
});