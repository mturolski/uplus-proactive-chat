<template>
  <div id="proactive_msg_wrapper" onpageshow="TriggerProactiveTimer">
    <span id="close" onclick="this.parentNode.remove(); return false;">x</span>
    <div id="proactive_msg" v-on:click="TriggerProactiveChat()">
      {{ settings.pega_chat.ProactiveChatMsg }}
    </div>
  </div>
</template>

<script>
import {
  proactiveTimer,
  openProactiveMsg,
  proactiveChatTrigger,
} from '../../proactivechat';
import '@/assets/css/_proactivechat.css';
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    TriggerProactiveChat() {
      proactiveChatTrigger();
      document.getElementById('proactive_msg_wrapper').style.visibility =
        'hidden';
    },
    TriggerProactiveTimer() {
      proactiveTimer();
    },
  },
  components: {},
};
</script>
