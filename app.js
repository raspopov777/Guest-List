var vm1 = new Vue ({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Летний Фестиваль!',
            eventDescription: 'Оно вернулось! Этот летний летний фестиваль будет в красивой сельской местности, показывая нашу лучшую линию!',
            singUpText: 'Add your name to the guest list for <em>exclusive</em> offers:'
        },
        newNameText: '',
        guestName: [],
        formSubmittedClass: '',
        eventCapacity: 5,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmitted: function () {
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                this.formSubmittedClass = "submitted";
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
            }
        },
        keyPressed: function () {
            console.log('key pressed')
        }
    },
    computed: {
        sortNames: function () {
            console.log('computed');
            return this.guestName.sort()
        }
    },
    watch: {
        guestName: function(data){
            console.log('watch triggered')
        }
    },
    filters: {
       formatName: function (value) {
           return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
       }
    },
    beforeCreate: function () {
        console.log('beforeCreate')
    },
    created: function () {
        console.log('created')
    },
    beforeMount: function () {
        console.log('beforeMount')
    },
    mounted: function () {
        console.log('mounted')
    },
    beforeUpdate: function () {
        console.log('beforeUpdate')
    },
    updated: function () {
        console.log('updated')
    },
    beforeDestroy: function () {
        console.log('beforeDestroy')
    },
    Destroy: function () {
        console.log('Destroy')
    },
});

var vm2 = new Vue ({
    el: '#navigation',
    data: {
        appName: 'GuestList',
        navLinks: [
            {name: 'Home', id: 1, url: 'https://www.google.com'},
            {name: 'pcoming events', id: 2, url: 'https://www.vk.com'},
            {name: 'Guest Benefits', id: 3, url: 'https://www.fddf.com'},
            {name: 'Latest News', id: 4, url: 'https://www.yandex.ru'}
        ]
    },
    methods: {
        capacityChanged: function () {
            vm1.eventCapacity = 15;
            vm1.title = 'New title';
        },
        changeTitle: function () {
            this.$refs.name.innerText = 'Title changed';
            console.log(this.$refs)
        }
    }
});

var vm3 = new Vue({
    template:   '<div class="col-sm-12 text-center">' +
                    '<h1>Guest List</h1>' +
                '</div>'
    //template: '<h1>Guest List</h1>' // заменит элемент в точке монтирования.
    //если прописать el: '#navigation', то заментит всю навигацию на <h1>Guest List</h1>
});

//vm3.$mount('#navigation'); //монтируем vm3 в #navigation

