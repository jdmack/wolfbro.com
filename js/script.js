
$(document).ready(function() {

    // Initialize components
    $("#tabs").tabs();

    $( 'ul.ui-tabs-nav a' ).bind( 'click', function(e){
        e.preventDefault();
    });

    renderFAQ($("#tab-faq"));
    $(".faq-accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });

    setTimeout(() => { $(window).scrollTop(0); }); 

    log("Page loaded");
});

function openTab()
{
    $("#debug").append("Test");
    
  
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent").each(function() {
        $(this).hide()//prop("display", "none");
    });

    $(this).show();

    // Get all elements with class="tablinks" and remove the class "active"
    // let tablinks = $(".tablinks");

    // for (let i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    // document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " active";
  } 

function renderFAQ(parent)
{
    for(let i = 0; i < faqContent.sections.length; ++i) {

        parent.append($("<h3></h3>")
            .addClass("faq-section")
            .html(faqContent.sections[i].name)
        );
        let section = $("<div></div>").appendTo(parent);
        section.addClass("faq-accordion");

        for(let j = 0; j < faqContent.sections[i].questions.length; ++j) {

            section.append($("<h4></h4>")
               .addClass("faq-question")
               .attr("id", "faq-" + faqContent.sections[i].name + "-" + j)
               .html(faqContent.sections[i].questions[j].question)
            );

            section.append($("<div></div>")
                    .addClass("faq-answer")
                .append($("<p></p>")
                    .html(faqContent.sections[i].questions[j].answer)
                )
            );
        }

    }


}
