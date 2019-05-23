define(['../../libs/vue'], function(Vue) {
  return Vue.component('ChatWindow', {
    	template: `
    		<div class="chat-window" >
    			<messages-list></messages-list>
    			<send-field></send-field>
    		</div>
    	`

   });
});
