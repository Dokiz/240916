var treugol={
	ab:3,
	bc:4,
	ac:function(){
		return (this.ab*this.ab)+(this.bc*this.bc);
	}
};
console.log(treugol.ac());
var gupotenuza=(function(a,b){return (a*a)+(b*b)}(3,4));
console.log(gupotenuza);