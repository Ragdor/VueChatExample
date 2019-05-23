define(['../../libs/vue'], function(Vue) {
  return Vue.component('MessageItem', {
    	template: `
			<p class="message-bubble" :class="messageType">
    			{{ message.content }}
			</p>
    	`,
	  props: ['message'],
	  computed: {
	  	messageType() {
	  		return this.message.from === 'me' ? 'my-message' : 'foreign-message';
		}
	}

   });
});
