var VueInstance = new Vue({
    el: "#app",
    data: {
        title: "San pham 1",
        url: "//google.com.vn",
        target: "_blank",
        price: 10000,
        check: false,
    },
    methods: {
        formatPrice()
        {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price)
        }
    },
});
