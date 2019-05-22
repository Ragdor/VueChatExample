define(['../libs/vue', '../libs/vuex'], 
function(Vue, Vuex) {
    Vue.use(Vuex);

    const store = new Vuex.Store({
        state: {
            messages: [
                { from: 'me', content: 'test' },
                { from: 'foreign', content: 'test2' },
                { from: 'me', content: 'test3' },
                { from: 'foreign', content: 'test4' }
              ]
        },
        mutations: {
          addMessage(state, message) {
            state.messages.push(message);
          }
        },
        actions: {
            fetchMessages(context) {
                setInterval(function(){ 
                    context.commit('addMessage', { from: 'foreign', content: 'testStore' });
                }, 5000);
            }
        },
        getters: {
            getMessages(state) {
                return state.messages;
            }
        }
      });

    return store;
});
