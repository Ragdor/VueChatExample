define(['../../libs/vue'], function(Vue) {
  return Vue.component('SendField', {
    template: `
  <div class="send-wrapper">
    <input
      class="send-input"
      v-model="value"
      type="text"
      placeholder="Type message..."
      @keyup.enter.prevent="send">

      <button
        class="send-btn"
        @click="send">
        Send
      </button>
  </div>
    `,
    data() {
      return {
        value: ''
      }
    },
    methods: {
      send (event) {
        this.$store.commit('addMessage', { from: 'me', content: this.value });
      }
    }
   });
});
