class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
		// Danilo Peralta - Peruano - git: danilopb - danilo_peralta4@hotmail.com
		pop(){
				if (this.length > 0) {
					delete this.data[this.length-1];
					this.length--;
					return this.data;
				}
		}
}
// Alexander Rincon - Colombiano - Git: 9alex12 alexander12rs@gmail.com 
const myArray = new MyArray();