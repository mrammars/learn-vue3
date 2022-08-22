const app = Vue.createApp({
    data() {
        return {
            name: 'Dragon Knight',
            image: './assets/images/dk-winter.jpg',
            url: 'https://dota2.fandom.com/wiki/Dragon_Knight',
            details:["A","B","C"],
            variants:[
                {id:1, set:'Red Born', image:'./assets/images/dk-ch.jpg'},
                {id:2, set:'Persona', image:'./assets/images/dk-persona.jpg'},
                {id:3, set:'Winter' , image:'./assets/images/dk-winter.jpg'},
            ],
            cart:0,
            inStock: false
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    },
})