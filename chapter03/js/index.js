Vue.createApp({
    template: "#my-app",
    data: () => {
        return {
            books: [
                { id: 1, name: "《算法导论》", date: "2006-9", price: 85.00, count:1 },
                { id: 2, name: "《UNIX编程艺术》", date: "2006-2", price: 59.00, count:2 },
                { id: 3, name: "《编程珠玑》", date: "2008-10", price: 39.00, count:1 },
                { id: 4, name: "《代码大全》", date: "2006-3", price: 128.00, count:1 },
            ],
            abc:'',
            book_catch:{
                id : 0,
                name:'',
                date:'',
                price:'',
                count:0,
            }
        };
    },
    methods:{
        Input(event,str){
            eval(`this.book_catch.${str} = event.target.innerText`)
        },
        changeCount(index,change){
            switch (change){
                case 'add':
                    this.books[index].count++
                    break;
                case 'del':
                    if(this.books[index].count > 0){
                        this.books[index].count--
                    }
                    break
            }
        },
        addBooks(){
            this.book_catch.id = this.books.length + 1
            if( 
                this.book_catch.id !=0 &
                this.book_catch.name != "" &
                this.book_catch.date != "" &
                this.book_catch.price != "" &
                this.book_catch.count != 0 
              ){
                this.books.push(this.book_catch)
                this.book_catch ={  id : 0,
                                    name:'',
                                    date:'',
                                    price:'',
                                    count:0,}
                                }
        }
    }
}).mount('#app')
