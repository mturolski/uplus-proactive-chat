import { mainconfig } from '@/global';


const proactiveTimer = function proactiveTimer() {
  if (mainconfig.settings.pega_chat.UseProactiveChat == true || mainconfig.settings.pega_chat.UseProactiveChat == 'true'){
    if (window.location.href.indexOf(mainconfig.settings.pega_chat.ProactiveChatPage) != -1){
      setTimeout(openProactiveMsg, mainconfig.settings.pega_chat.ProactiveChatTimeOut);
    }
  }
}

const openProactiveMsg = function openProactiveMsg() {
  document.getElementById('proactive_msg_wrapper').style.visibility = 'visible'

}

const proactiveChatTrigger = function proactiveChatTrigger(){
  PegaUnifiedChatWidget.triggerChat(mainconfig.settings.pega_chat.ProactiveChatTrigger);
}

export {proactiveTimer,openProactiveMsg, proactiveChatTrigger}

window.onpageshow = proactiveTimer;
window.addEventListener('popstate', (event) => {
  proactiveTimer;});
