
// let input = document.getElementById('arr')
// let click = document.getElementById('click')
// let answer = document.getElementById('answer')


// click.onclick = function () {
// 	let tver = input.value.split(",")
// 	if (tver.every(e => !isNaN(e) && e)) {
// 		console.log(tver);
// 		answer.innerText = secondMinimum(tver)
// 	}
// 	else {

// 	}


// }



// function secondMinimum(a) {
// 	//      min2
// 	//     a[i]
// 	let a = [1, 2, 3]
// 	//      min

// 	let min = a[0]
// 	let min2 = a[0]
// 	for (let i = 0; i < a.length; i++) {
// 		if (min > a[i]) {
// 			if (min2 > min) {
// 				min2 = min
// 			}
// 			min = a[i]
// 		} else if (min2 > a[i]) {
// 			min2 = a[i]
// 		}
// 	}
// 	return ('Մինիմում ՝' + min) + '\n' + ('Երկրորդ մինիմում ՝'+min2)
// }

// let a = 125



// function spasi(x) {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			res(x)
// 		}, 2000)
// 	})
// }
// function heto(x) {
// 	return new Promise((res, rej) => {

// 		if (x > 0) {
// 			res('da ladno')
// 		}
// 		else {
// 			rej('neto')
// 		}
// 	})
// }


// // async function all() {
// // 	try {
// // 		let spas = await spasi(-2)
// // 		let het = await heto(spas)
// // 		console.log(het);
// // 	} catch (error) {
// // 		console.log(error);
// // 	}

// // }
// // all()



// // spasi(-2).then(r => {
// // 	return heto(r)
// // })
// // .then(r=>{
// // 	console.log(r);
// // })
// // 	.catch(e => {
// // 	console.log(e);
// // })
// function* myus(i) {
// 	yield i++
// 	yield i++
// 	yield i++
// 	yield i++
// }

// function* names(i) {
// 	yield i++
// 	yield* myus(10)
// 	yield i++
// 	yield i++
// }
// // let ns = names(0)
// // console.log(ns.next().value); //0
// // console.log(ns.next().value); //10
// // console.log(ns.next().value); //11
// // console.log(ns.next().value); //12
// // console.log(ns.next().value); //13
// // console.log(ns.next().value); //1
// // console.log(ns.next().value); //2


// // async function* foo() {
// // 	yield await Promise.resolve('a');
// // 	yield await Promise.resolve('b');
// // 	yield await Promise.resolve('c');
// // }

// // let str = '';

// // async function generate() {
// // 	for await (const val of foo()) {
// // 		str = str + val;
// // 	}
// // 	console.log(str);
// // }

// // generate();
// // // Expected output: "abc"

// function a() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => res('a'), 2000)
// 	})
// }

// function b() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => res('b'), 2000)
// 	})
// }

// function a() {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => res('c'), 2000)
// 	})
// }

// async function abc() {
// 	let ayb = await a()
// 	console.log(ayb);
// 	// yield ayb
// 	// let bay = await b()
// 	// yield ayb
// 	// let gay = await c()
// 	// yield ayb
// }
// // let s = abc()
// abc()
// // console.log(s.next().value);
// // console.log(s.next().value);
// // console.log(s.next().value);


// Number.prototype[Symbol.iterator] = function () {
// 	let c = 1
// 	let end = this.valueOf()
// 	return {
// 		next() {
// 			if (c <= end) {
// 				return { value: c++, done: false }
// 			}
// 			else {
// 				return { done: true }
// 			}
// 		}
// 	}
// }
// (15).toExponential()
// console.log((.7).toPrecision());
// // Expected output: "1.23e+5"utput: "1.23e+5"


let ob = {
	a: 7
}
let s

Object.defineProperties(ob, {
	a: {
		// writable: true,
		// set(news) {
		// 	value = news
		// }
		configurable: false,
		// get: true,
		// enumerable: true,
		// value: true,
	}
})
// ob.a = 20
// delete ob.a
// console.log(ob.a);
// console.log(s);
// console.log(Object.getOwnPropertyDescriptor(ob, "a"));
// console.log(Object.getOwnPropertyDescriptors(ob));

let fs = [
	{ 'name': 'Ashot', 'age': 22, 'gyux': 'qeti' },
	{ 'name': 'Arman', 'age': 22, 'gyux': 'Teqstil' },
	{ 'name': 'Davo', 'age': 20, 'gyux': 'Varamaberd' },
	{ 'name': 'Haykaz', 'age': 22, 'gyux': 'qeti' },
	{ 'name': 'Arshak', 'age': 22, 'gyux': 'Sayrar' },
	{ 'name': 'Heno', 'age': 22, 'gyux': 'Sayrar' },
	{ 'name': 'Davo_sanik', 'age': 21, 'gyux': 'Varamaberd' },
	{ 'name': 'Karapet', 'age': 25, 'gyux': 'qeti' },
	{ 'name': 'Edo', 'age': 27, 'gyux': 'qeti' },

]
// let Gexeri = Object.groupBy(fs, ({gyux,age}) => {
// 	return age>20&&age<25?gyux+'_jahelner':gyux+'_mecer'
// })
// console.log(Gexeri);

let fsd = {
	a: 87
}

// Object.preventExtensions(fsd)//yndardzakel che el
// fsd.b = 20
// console.log(fsd);//{a:87}

Object.freeze(fsd)
fsd.a = 30
fsd.b = 30

console.log(fsd);//// console.log(fsd);//{a:87}


// console.log(Object.getOwnPropertyDescriptor(fsd,'a'));

// configurable
// :
// false
// enumerable
// :
// true
// value
// :
// 30
// writable
// :
// false


// let on = {
// 	a: 7,
// 	getA(...a) {
// 		return this.a
// 	}
// }

// console.log(on.getA.bind(on, 20,30)());

// // console.log(on.getA.apply(on,[0,20]));

// Number.prototype[Symbol.iterator] = function () {
// 	let s = 0
// 	let end = this.valueOf()
// 	return {
// 		next() {
// 			s += 2
// 			if (s < end) {
// 				return { value: s, done: false }
// 			}
// 			return {done:true}
// 		}
// 	}
// }

let hash = {
	a: 7,
	b: 10,
	c: 11
}

// Object.prototype[Symbol.iterator] = function () {
// 	let s = 0
// 	let target = Object.entries(this.valueOf())
// 	let end = target.length
// 	return {
// 		next() {
// 			if (s < end) {
// 				return { value: target[s++], done: false }
// 			}
// 			return { done: true }
// 		}
// 	}
// }
// // console.log(...hash);
// for (const it of hash) {
// 	console.log(it);
// }

let simvolLocal = Symbol('name')
let simvolGlobal = Symbol.for('age')
let simvolGlobal2 = Symbol.for('age')
let simvolKey = Symbol.keyFor(simvolGlobal)
// console.log(String.raw([10,2],20));

let object = {
	[simvolLocal]: "Ashot",
	[simvolGlobal]: "27"
}

// console.log(object[simvolGlobal2].match(/a/i));
// let key = Symbol('key')
// class Men{
// 	[key] = 20
//   #pass = 230
// 	constructor(x,y) {
// 		this.#pass = 100
// 		return 20
// 	}


// }
// let as = new Men()

// console.log(as);


// class Ar {
// 	static as = 15
// 	constructor(name) {
// 		this.name = name
// 	}
// 	static es() {
// 		return 20
// 	}
// }
// console.log((new Ar).constructor.name);

// l: for (let i = 1; i < 100; i++) {
// 	if (i === 1) continue;
// 	for (let ii = 2; ii < i; ii++) {
// 		if (i % ii == 0) {
// 			continue l
// 		}
// 	}
// 	console.log(i);

// }

// class Queue {
// 	constructor() {
// 		this.a = []

// 	}
// 	q_push(n) {
// 		this.a.push(n)
// 	}
// 	q_pop() {
// 		return this.a.shift()
// 	}
// }
// let d = new Queue()
// d.q_push(2)
// console.log(d);


let a = [10, 5, 40, 4, 10, 0, 2, 10, 50, -4]

function minTwo(a) {
	let min = 0
	let min_2 = 0

	let i = 1

	while (i < a.length) {

		if (a[min] > a[i]) {
			[min_2, min] = [min, i]
		}
		else if (a[min_2] > a[i] && a[i] > a[min]) {
			min_2 = i
		}
		i++
	}

	return a[min_2]
}

function maxTwo(a) {
	let max = 0
	let max_2 = 0

	let i = 1

	while (i < a.length) {

		if (a[max] < a[i]) {
			[max_2, max] = [max, i]
		}
		else if (a[max_2] < a[i] && a[i] < a[max]) {
			max_2 = i
		}
		i++
	}

	return a[max_2]
}


console.log(minTwo(a));
console.log(maxTwo(a));



