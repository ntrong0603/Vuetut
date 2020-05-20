var vueInstance = new Vue({
    el: "#app", //phần tử muốn quản lý
    data: {
        title: 'Dien thoai Samsung'
    },
    methods: {
        say: (text) =>
        {
            return 'Hello ' + text;
        }
    },
})
//Hệ thống phản ứng (Reactivity) giám sát thuột tính liên quan đên thay đổi dữ liệu
console.log(vueInstance);

setTimeout(() =>
{
    vueInstance.title = "OPPLE";
}, 3000);