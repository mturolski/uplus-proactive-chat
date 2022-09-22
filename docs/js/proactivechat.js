function proactiveTimer() {
  if (window.location.href.indexOf("account") != -1){
    setTimeout(openProactiveMsg, 10000);
  }
}

function openProactiveMsg() {
  $(proactive_msg_wrapper).show();
}

function proactiveChatTrigger(){
  if (window.location.href.indexOf("account") != -1){
    PegaUnifiedChatWidget.triggerChat("test");
  }
}

window.onload = proactiveTimer;
