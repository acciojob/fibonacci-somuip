function fibonacci(num) {
// your code here
	let a =0, b=1;
	if(num<=2) return num-1;
	for(let i=0;i<num-2;i++){
		let temp = b;
		b = a + b;
		a = temp;
	}
	return b;
}

module.exports = fibonacci;
