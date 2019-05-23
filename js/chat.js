define(['../libs/vue',
        './store',
        './components/ChatWindow',
        './components/MessageItem',
        './components/MessagesList',
        './components/SendField'
	],
function(Vue, Store) {
    new Vue({
        el: '#chat',
        data: {
        	isChatOpen: false
        },
        store: Store,
        methods: {
        	toggleChat() {
        		this.isChatOpen = !this.isChatOpen;
			}
        }
      })
});
