$(document).ready(function () {
    var $menuIcon = $('<div class="themenuicon"><a id="menu_icon"><img src="css/images/list_bullets.png" /></a></div>');


    $('body').append($menuIcon);

    $menuIcon.click(function () {

        if ($('#menu_list').length) {

            $('#menu_list').remove();

        } else {

            var $menu = $(generateMenuHtml()).css({ "opacity": 0, "top": "0px" });
            $(this).parent().append($menu.css({ "opacity": 0.8, "top": "58px" }).show("fade"));
        }

    });


    

});


function generateMenuHtml() {
    var slidesLength = slides.length;

    var menuHtml = '<div id="menu_list" class="ui-widget-content ui-corner-all"><ul>';

    for (var i = 0; i < slidesLength; i++) {

        menuHtml += '<li><a href="' + slides[i].url + '">' + slides[i].name + '</a></li>';

    }


    menuHtml += "</ul><div>";

    return menuHtml;
}

var slides = [
    {
        name: "Main - What is D3?",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "You NeedTo Know",
        url: "00_1_Need_to Know_SVG_.htm",
        id: 1
    },
    {
        name: "SVG",
        url: "01_0_SVG.htm",
        id: 2
    },
    {
        name: "SVG- Basics",
        url: "01_1_0_SVG_Basic_Elements.htm",
        id: 3
    },
    {
        name: "SVG- Basics -Elements [Shape] 1.1 ",
        url: "01_1_2_0_SVG_Basic_Elements_Basic_Shapes_1.htm",
        id: 4
    },
    {
        name: "SVG- Basics -Elements [Shape] 1.2",
        url: "01_1_2_1_SVG_Basic_Elements_Basic_Shapes_2.htm",
        id: 5
    },
     {
         name: "SVG- Basics -Elements [Shape] 1.3",
         url: "01_1_2_2_SVG_Basic_Elements_Basic_Shapes_3.htm",
         id: 6
     },
      {
          name: "SVG- Basics -Elements [Text] 2",
          url: "01_1_3_SVG_Basic_Elements_Text.htm",
          id: 7
      },
      {
          name: "SVG- Basics -Elements [Group] 3.1",
          url: "01_1_4_0_SVG_Basic_Elements_Group_1.htm",
          id: 8
      },
      {
          name: "SVG- Basics -Elements [Group] 3.2",
          url: "01_1_4_1_SVG_Basic_Elements_Group_2.htm",
          id: 9
      },
       {
           name: "SVG- Advanced Elements",
           url: "01_2_0_SVG_Adv_Elements.htm",
           id: 10
       },
        {
            name: "SVG- Advanced Elements [Paths - Example] 1.1",
            url: "01_2_1_0_SVG_Adv_Elements_Paths_Example.htm",
            id: 11
        },
        {
            name: "SVG- Advanced Elements [Paths - Language] 1.2",
            url: "01_2_1_1_SVG_Adv_Elements_Paths_PathLanguage.htm",
            id: 12
        },
        {
            name: "SVG- Advanced Elements [Paths - With d3] 1.3",
            url: "01_2_1_2_SVG_Adv_Elements_Paths_Example_Withd3.htm",
            id: 13
        },
        {
            name: "SVG- Some Practical Concerns",
            url: "01_5_0_SVG_Practical_Concerns.htm",
            id: 14
        },
         {
             name: "D3",
             url: "02_0_D3.htm",
             id: 15
         },
          {
              name: "D3 - Selections",
              url: "02_1_D3_selections.htm",
              id: 16
          },
            {
                name: "D3 - Selections + Transition ",
                url: "02_2_D3_selections_with_transition.htm",
                id: 17
            },
            {
                name: "D3 - Creating From Data ",
                url: "02_3_D3_CreatingFromData.htm",
                id: 18
            },
            {
                name: "D3 - Updating From Data ",
                url: "02_4_D3_UpdatingFromData.htm",
                id: 19
            },
            {
                name: "D3 - The D3 Pattern ",
                url: "02_5_D3_TheD3Pattern.htm",
                id: 20
            },
            {
                name: "D3 - The D3 Pattern Example",
                url: "02_6_D3_TheD3Pattern_exemplified.htm",
                id: 21
            },
            {
                name: "D3 - The D3 Pattern Example + Transition",
                url: "02_7_D3_TheD3Pattern_exemplified_transition.htm",
                id: 22
            },
         {
             name: "Example - A Simple Example",
             url: "03_0_SimpleExamples.htm",
             id: 23
         },
         {
             name: "Example - Our Data Generator",
             url: "03_1_Examples_Data_Generator.htm",
             id: 23
         },
         {
             name: "Example - Prepare Your SVG",
             url: "03_2_Examples_FormattingTheSVG.htm",
             id: 24
         },
         {
             name: "Example - Bars 1",
             url: "03_3_Examples_LetsMake Bars.htm",
             id: 25
         },
          {
              name: "Example - Bars 2",
              url: "03_4_Examples_LetsMake Bars2.htm",
              id: 26
          },
          {
              name: "Example - Bars 3",
              url: "03_5_Examples_LetsMake Bars3.htm",
              id: 27
          },
           {
               name: "Example - Bars + Transition",
               url: "03_6_Examples_LetsMake Bars_transitions.htm",
               id: 28
           },
           {
               name: "Extending D3",
               url: "04_0_Extending_D3.htm",
               id: 29
           }

];