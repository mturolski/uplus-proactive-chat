<template>
  <main v-if="offerAction != -1" class="wrap flex flex-col">
    <MashupMainArea />
  </main>
  <main v-else-if="offerURL !== ''" class="wrap flex flex-col">
    <MicroSiteMainArea />
  </main>
  <main v-else class="wrap flex flex-col static-offer">
    <MainOffer v-bind:offerType="offerIndex" />
    <Details />
    <Highlight />
  </main>
  <ProactiveChat />
</template>

<script>
import { mainconfig } from '../../global';
import ProactiveChat from '@/components/widgets/ProactiveChat.vue';
import MainOffer from './MainOffer.vue';
import Details from './Details.vue';
import Highlight from './Highlight.vue';
import MicroSiteMainArea from '../MicroSiteMainArea.vue';
import MashupMainArea from '../MashupMainArea.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainOffer,
    Details,
    Highlight,
    MicroSiteMainArea,
    MashupMainArea,
    ProactiveChat,
  },
};
</script>
