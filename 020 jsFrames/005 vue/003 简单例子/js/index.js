/* var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
 */

// 定义一个插件
var MyPlugin = {
    install: function (vm, options) {
        // 自定义指令
        vm.directive('demo', {
            bind: function (el, binding, vnode) {
                var s = JSON.stringify
                el.innerHTML =
                    'name: ' + s(binding.name) + '<br>' +
                    'value: ' + s(binding.value) + '<br>' +
                    'expression: ' + s(binding.expression) + '<br>' +
                    'argument: ' + s(binding.arg) + '<br>' +
                    'modifiers: ' + s(binding.modifiers) + '<br>' +
                    'vnode keys: ' + Object.keys(vnode).join(', ');

                el.addEventListener('click', function (e) {
                    console.info('click', e)
                });
                let rootNode = document.querySelector('#root');
                console.info('rootNode', rootNode);
            },
            inserted: function (el, binding, vnode) {
                let rootNode = document.querySelector('#root');
                console.info('rootNode', rootNode);
            }
        });

        // 自定义混入
        Vue.mixin({
            created: function () {
                console.info('这是一个mixin')
            }
        })
    }
}

Vue.use(MyPlugin);

Vue.component('child', {
    name: 'child',
    template: `<div></div>`
});


var data = {
    message: 'Hello Vue!'
}

var app = Vue.extend({
    template: `<div id="root">
            <div>
                {{ messageComputed }}
            </div>
            </child>
        </div>`,

    data: function () {
        return data;
    },
    created: function() {
    },
    mounted: function () {
    },
    computed: {
        messageComputed: function() {
            return this.message + 'Computed' + Math.random();
        }
    }

});

var app1 = new app().$mount('#app1');

console.info(app1);

