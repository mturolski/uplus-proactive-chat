<template>
  <section
    v-if="typeof CDHContainer.title === 'undefined'"
    class="flex flex-col full-height"
  >
    <iframe
      :src="offerURL"
      style="overflow: hidden"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
  </section>
  <section v-else-if="!isprocessed" class="flex flex-col">
    <h1>{{ CDHContainer.title }}</h1>
    <div class="main-offer primary-card flex flex-nowrap">
      <div
        class="image"
        v-bind:style="{
          backgroundImage: 'url(./img' + CDHContainer.img + ')',
        }"
      ></div>
      <div class="details">
        <div v-if="typeof CDHContainer.message !== 'undefined'">
          <label>{{ $t('message.offer_builtin_description') }}</label>
          <p>{{ CDHContainer.message }}</p>
        </div>
        <div v-if="typeof CDHContainer.benefits !== 'undefined'">
          <label>{{ $t('message.offer_builtin_benefits') }}</label>
          <p>{{ CDHContainer.benefits }}</p>
        </div>
        <div class="button-row padding-t-2x">
          <button v-on:click="processOffer('Rejected')" class="tertiary">
            {{ $t('message.offer_builtin_button_rejected') }}
          </button>
          <button v-on:click="processOffer('Accepted')" class="strong">
            {{ $t('message.offer_builtin_button_accepted') }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="flex flex-col">
    <h1>{{ $t('message.offer_builtin_response_heading') }}</h1>
    <div class="primary-card flex-mid-align flex flex-col">
      <i class="product-icon pi pi-check"></i>
      <p class="success-text">{{ $t('message.offer_builtin_thankyou') }}</p>
      <p>{{ $t('message.offer_builtin_response') }}</p>
      <div>
        <button v-on:click="closeOffer()" class="strong">
          {{ $t('message.offer_builtin_button_close') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../global';
import { captureResponse } from '../CDHIntegration';

export default {
  data() {
    return {
      ...mainconfig,
      isprocessed: false,
    };
  },
  methods: {
    processOffer(outcome) {
      captureResponse(this, this.CDHContainer, outcome);
      this.isprocessed = true;
    },
    closeOffer() {
      top.postMessage('pegaMashupNavigateBack', location.origin);
    },
  },
};
</script>
