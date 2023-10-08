$(document).ready(function() {
    $("button").click(function() {
      let inputValue = $("input").val();
      if (inputValue !== "") {
        let newItem = $("<li><div id='wrap'>" + inputValue + "</div><i class='fa-solid fa-x'></i></li>");
        $("ul").append(newItem);
        $("input").val("");
      }
    });
   
    $("input").keypress(function(event) {
      if (event.which === 13) { 
        $("button").click();
      }
    });
  
    
    $("ul").on("click", "i.fa-x", function() {
      $(this).parent().remove();
    });

    $("ul").on("click", "li", function() {
        $(this).css("text-decoration", "line-through");
        let tick = $("<i class='fa-solid fa-check'></i>");
        $("#wrap", this).prepend(tick);
      });
      
      
  
    $("ul").on("click", "i.fa-check", function() {
      $(this).toggleClass("completed");
    });

    //bai 14.2==================================
    
    $(".accordion header button").click(function(){
        let content = $(this).parent().next(".content");
        console.log(content.height());
        if (content.height() === 0) {
           
          content.css("height", "100px");
          content.find("p").show();
          $(this).text("-");
        } else {
          content.css("height", 0);
          content.find("p").hide();
          $(this).text("+");
        }
      });
  });
  

  
  
  