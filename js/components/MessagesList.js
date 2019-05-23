define(['../../libs/vue'], function(Vue) {
  return Vue.component('MessagesList', {
    	template: `
			<div class="messages">
    			<message-item v-for="message of messages"
    							:message="message"></message-item>
			</div>
    	`,
	  data() {
    		return {
			  messages: null
		  }
	  },
	  created() {
    		this.messages = this.$store.getters.getMessages;
	  }

   });
});
