define(['../../libs/vue'], function(Vue) {
  return Vue.component('SendField', {
    	template: `
			<div class="send-wrapper">
				<input class="send-input"
					v-model="value"
					type="text"
					>
					<button class="send-btn"
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
	  	send() {
	  		this.$store.commit('addMessage', { from: 'me', content: this.value });
		}
	}

   });
});
