
/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}


// Bot pop-up intro
document.addEventListener("DOMContentLoaded", () => {
  const elemsTap = document.querySelector(".tap-target");
  // eslint-disable-next-line no-undef
  const instancesTap = M.TapTarget.init(elemsTap, {});
  instancesTap.open();
  setTimeout(() => {
    instancesTap.close();
  }, 4000);
});

/* import components */
include('./static/js/components/index.js');
//var script = document.createElement('script');
//script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
//document.getElementsByTagName('head')[0].appendChild(script)
//var script2 = document.createElement('script2');
//script2.src = 'https://code.jquery.com/ui/1.13.1/jquery-ui.js';
//document.getElementsByTagName('head')[0].appendChild(script2)


window.addEventListener('load', () => {
  // initialization
  jQuery(document).ready(() => {
    // Bot pop-up intro
    jQuery("div").removeClass("tap-target-origin");

    // drop down menu for close, restart conversation & clear the chats.
    jQuery(".dropdown-trigger").dropdown();

    // initiate the modal for displaying the charts,
    // if you dont have charts, then you comment the below line
    jQuery(".modal").modal();

    // enable this if u have configured the bot to start the conversation.
    // showBotTyping();
    // jQuery("#userInput").prop('disabled', true);

    // if you want the bot to start the conversation
    // customActionTrigger();
  });
  // Toggle the chatbot screen
  jQuery("#profile_div").click(() => {
    jQuery(".profile_div").toggle();
    jQuery(".widget").toggle();
  });

  // clear function to clear the chat contents of the widget.
  jQuery("#clear").click(() => {
    jQuery(".chats").fadeOut("normal", () => {
      jQuery(".chats").html("");
      jQuery(".chats").fadeIn();
    });
  });

  // close function to close the widget.
  jQuery("#close").click(() => {
    jQuery(".profile_div").toggle();
    jQuery(".widget").toggle();
    scrollToBottomOfResults();
  });
});
