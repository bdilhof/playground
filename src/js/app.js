import Modal from "./components/Modal.vue";

var app = new Vue({
    el: '#app',
    data: {
        displayType: 'table',
        articles: [
            {
                name: 'MYDORI S-MYDORI MC W SNEAKERS',
                article: 'Y02542_PR030',
                color: 'T8013',
                trademark: 'Diesel',
                season: 'PF21',
                brand: 'DW',
                order_group: 'L1 shoes',
                images: [
                    '',
                    '',
                    '',
                ]
            },
            {
                name: 'ASTICO S-ASTICO MID CUT SNEAKE',
                article: 'Y02370_P1992',
                color: 'T8013',
                trademark: 'Diesel',
                season: 'PF21',
                brand: 'DA',
                order_group: 'L1 shoes',
                images: [
                    '',
                    '',
                ]
            },
            {
                name: 'MYDORI S-MYDORI LC W SNEAKERS',
                article: 'Y02594_PR030',
                color: 'T1015',
                trademark: 'Diesel',
                season: 'PF21',
                brand: 'DW',
                order_group: 'L1 shoes',
                images: [
                    '',
                    '',
                    '',
                    '',
                    '',
                ]
            },
        ]
    },
    methods: {
        openModal(test) {
            console.log({
                message: 'Open modal detail',
                data: test
            });
        }
    },
    components: {
        Modal
    },
})
