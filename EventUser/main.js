var vueInstance = new Vue({
    el: "#app",
    data: {
        count: 0,
        clientX: 0,
        clientY: 0,
    },
    methods: {
        handelClick(event, number)
        {
            this.count += number;
        },
        handelMouseMove(event)
        {
            this.clientX = event.offsetX;
            this.clientY = event.offsetY;
        },
        handleSubmit(e)
        {
            console.log(e);
        },
    },
})