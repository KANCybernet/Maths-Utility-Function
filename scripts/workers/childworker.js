this["app"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/math/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

function print( /*elements/text*/) { //displays a message to the screen. add false as last argument to append to, rather
	//if(!print.style) print.style = "margin-bottom:0.4rem";
	if (!(arguments[arguments.length - 1] === false)) display.innerHTML = ""; //than replace current screen content
	for (var i in arguments) {
		var j = arguments[i];
		if (typeof (j) == "boolean") continue;
		if (typeof (j) !== "object") display.appendChild(makeSpan(arguments[i], {
			style: print.style
		}));
		else if (HTMLElement.prototype.isPrototypeOf(j)) {
			j.style.cssText += print.style;
			display.appendChild(j);
		} else if (Array.prototype.isPrototypeOf(j)) {
			toPrint = j;
			toPrint.push(false);
			print(...toPrint);
		} else console.log(j);
	}
}

function printError(error) { //displays an error message to the screen
	print(`Error: ${error.message.replace(/^.*Error:/, "").fontcolor("red")}`);
	window.err = error;
	return false
}


function makeSpan(content, attributes) { //returns a span element of content
	let container = document.createElement("span");
	for (var i in attributes) {
		container.setAttribute(i, attributes[i])
	}
	container.innerHTML = content;
	return container;
}

function navToggler() {
	var nav = document.getElementsByClassName("optionbox")[0],
		navToggle = document.getElementsByClassName("navicon")[0];
	nav.classList.toggle("showing");
	navToggle.classList.toggle("showing");
}

function showTime() {
	let time = document.querySelector("time");
	time.innerHTML = (new Date()).toLocaleString().replace(/\:\d{1,2} /, " ");
	showTime.stopCode = setInterval(function newDate() {
		time.innerHTML = (new Date()).toLocaleString().replace(/\:\d{1,2} /, " ");;
	}, 60000)
}

function stopTime() {
	clearInterval(showTime.stopCode)
}


function disableForm(form) {
	Array.prototype.forEach.call(form.elements, e => {
		e.disabled = e.readOnly = true;
		if (e.__proto__ === `HTMLButtonElementPrototype` || e.type === "submit") e.style.cursor = `wait`;
	});
}

function enableForm(form) {
	Array.prototype.forEach.call(form.elements, e => {
		e.disabled = e.readOnly = false;
		if (e.__proto__ === `HTMLButtonElementPrototype` || e.type === "submit") e.style.cursor = `default`;
	});
}



function factors(x) { //returns all the positive integer factors of x, including x
	if (!factors.cache) {
		factors.cache = Object.create(null); //for storing computed values
		Object.defineProperty(factors.cache, "length", {
			get: function length() {
				return Object.keys(this).length
			}
		});
	};
	x = Math.abs(x);
	if (x in factors.cache) return factors.cache[x]; //if x has already been solved before, then return the value
	var answer = [x],
		increment = (x % 2 == 0 ? 1 : 2),
		base = ((x % 2 == 0 ? 2 : 3)); //if x is an odd number, then check only the odd numbers. Otherwise check both odd & even no.s
	for (var i = base; i <= Math.floor(Math.sqrt(x)); i += increment) {
		if (x % i == 0) {
			;
			var right = factors(x / i),
				left = factors(i); //when a factor of x is found, find it's complement, evaluate both their factors & combine them..
			answer = [...answer, ...right, ...left]; //to get the complete factors. (This is because the factors of a number is the product of the..
			for (var m = 0, n = right[m]; m < right.length; ++m, n = right[m]) { //combination of the factors of any of it's complementary factors.
				for (var p = 0, q = left[p]; p < left.length; ++p, q = left[p]) {
					if (n * q !== x) answer.push(n * q);
				}
			};
			if (Set) { //remove all duplicate values in answer
				answer = [...(new Set(answer))];
			} else {
				answer = answer.reduce(function (list, n) {
					if (list.every(function (s) {
						return s !== n
					})) {
						list.push(n);
					};
					return list;
				}, []);
			}
			answer = answer.sort(function (a, b) {
				return a - b
			});
			factors.cache[x] = answer;
			return answer;
		}
	}
	factors.cache[x] = answer;
	return [x]
}

function isSquare(x) { //Returns a boolean indicating whether or not x is a perfect square
	return (String(Math.sqrt(x)).indexOf(".") == -1 && x >= 0) ? true : false
};

function makeWhole(...numbers) { //returns all of numbers as whole by multiplying through by 10^ highest number of decimal digits
	numbers = numbers.map(n => ~String(n).indexOf("e") ? n.toFixed(15).replace(/0+$/, ``) : n.toString()); //collect all arguments in string form
	//determine the highest number of decimal digits in numbers
	let highestDecimalDigits = numbers.every(Number.isInteger) ? 0 : numbers.reduce((h, n) => Math.max(h, (~n.indexOf(".")) ? (n.length - 1) - n.indexOf(".") : 0), 0);
	numbers = numbers.map(n => Math.round(n * Math.pow(10, highestDecimalDigits))); //multiply all of the numbers by 10^ the highest decimal digits count
	numbers.__defineGetter__("decimalDigits", () => highestDecimalDigits);
	return numbers
};

function sqRoot(n /*number*/) { //Returns the square root of n. returns a surd or a complex number where applicable
	var nP = Math.abs(n); //set nP to the positive value of n
	if (isSquare(nP)) {
		var result = (n >= 0) ? Math.sqrt(nP) : Math.sqrt(nP) + "\u221A" + -1; //if nP is a perfect square, set result to root n if n was positive else, set to root n * root -1
	} else {
		for (var nP_fcList = factors(nP), i = nP_fcList.length - 1, j = nP_fcList[i]; i > -1; --i, j = nP_fcList[i]) { //Take the highest perfect square factor of xP if any,..
			if (isSquare(j)) {
				var result = Math.sqrt(j) + "\u221A" + n / j;
				break; //..factor it out and multiply it's root by what is left under the square root sign.
			}
		}
	};
	if (!result && result != 0) result = "\u221A" + n; //set result to root n, if n isn't a perfect square and neither is any of it's factors.
	return result
}

function lowestRatios(...numbers) { //returns the lowest integer ratios of all the numbers
	var answer = makeWhole(...numbers),
		lowest = Math.min(...answer),
		fctList = factors(lowest); //select the lowest number in the arguments and find its factors
	for (var i = fctList.length - 1, j = fctList[i]; i >= 0; --i, j = fctList[i]) {
		if (answer.every(isFactorOf.bind(null, j))) { //if all of the other arguments are divisible by any of the factors,..
			return answer.map(divide.bind(null, j)); //then divide them through by the factor and return
		}
	}
	return answer; //if none of the factors could divide through, then return the original arguments
}


function isFactorOf(x, n) {
	return n % x == 0;
}


function multiply(a, b) {
	// console.log("in multiply\t", util.inspect({ a, b }, { depth: null, colors: true }))
	if (a instanceof (Polynomial) && b instanceof (Polynomial)) {
		let product = new Polynomial();
		for (let bTerm of b.terms) {
			for (let aTerm of a.terms)
				product.add(new Term(...aTerm.variables, aTerm.coefficient, ...bTerm.variables, bTerm.coefficient));
		}
		return product;
	}
	throw new TypeError("unsupported types")
}

function divide(x, n) {
	return n / x;
}


function combination(n, m) {
	return factorial(n) / (factorial(n - m) * factorial(m));
}

function factorial(n) {
	let count = n,
		ans = 1;
	while (count > 0) {
		ans *= count;
		--count;
	}
	return ans;
}


function createWorker(name, source) { //returns a promise to create a worker
	return new Promise((resolve, reject) => {
		let worker = new Worker(`${source ? `${source}/` : ''}${name}.js`);
		resolve(worker)
	})
}

function deepAction(object, action, criteria) { //applies action to object and all of it's nested objects
	if (isQualified(object, criteria)) action(object);
	//if(typeof object == `object`) action(object);
	for (let i in object) {
		let val = object[i];
		if (isQualified(val, criteria) /*typeof(val)==="object"*/) {
			deepAction(val, action, criteria);
		}
	}

	function isQualified(object, criteria) {
		let qualified = false;
		if (typeof criteria === `object`) {
			for (let test in criteria) {
				if (eval(`${test}(object)`) == criteria[test]) {
					qualified = true;
				} else {
					break;
				}
			}
		} else if (typeof (criteria) === `function`) {
			qualified = criteria(object)
		}
		return qualified;
	}
}

//class definitions
/*
 * instances "extension" property are used to restore their prototype when they are transferred to/from workers.
 */
class Fraction {
	constructor(nume, denom) {
		if (arguments.length > 2) throw new RangeError("Invalid number of arguments.");
		if (arguments.length == 2) {
			this.extension = "Fraction";
			//if one argument is supplied, then represent it as a fraction, otherwise, make a fraction from two arguments supplied.
			this.nume = nume;
			this.denom = denom;
		} else {
			let whole = makeWhole(nume);
			this.nume = whole[0];
			this.denom = Math.pow(10, whole.decimalDigits);
		}
	}

	toLowestTerms() { //returns the fraction in it's lowest terms.
		let t, d, top, bottom, reducedRatios, n = String(this.nume),
			denom = String(this.denom);
		if (!isNaN(t = parseFloat(n)) && !isNaN(d = parseFloat(denom))) {
			reducedRatios = lowestRatios(t, d);
			top = reducedRatios[0];
			bottom = reducedRatios[1]
			if (bottom < 0) bottom = -bottom, top = -top; //make the denominator positive
			n = n.replace(t, top); //replace the coefficients
			denom = denom.replace(d, bottom);
		} else {
			if (denom[0] == "-") denom = denom.replace(/^-/, ""), n = n[0] == "-" ? n.replace(/^-/, "") : "-" + n;
		}
		return new Fraction(n, denom);
	}

	toHTML() { // returns an HTML span element that displays the fraction
		let nume = this.nume,
			denom = this.denom,
			container = document.createElement("span"),
			top = document.createElement("span"),
			bottom = document.createElement("span"),
			dLength = String(denom).length,
			numeLength = String(nume).length,
			lDiff = dLength - numeLength;
		container.style = "display:inline-block; line-height:0.86em; vertical-align:-0.72em",
			top.style.textDecoration = "underline";
		if (denom == 1) return makeSpan(nume); //bottom.style.display = "none",                           //Because any number divided by 1 is itself
		if (nume == 0) container.style.display = "none"; //Hide zero fractions
		else if (numeLength < dLength) nume = `${"&nbsp".repeat((lDiff / 2) + 1)} ${nume} ${"&nbsp".repeat((lDiff / 2) + 1)}`; //if denominator is longer than numerator, pad numerator
		top.innerHTML = nume, bottom.innerHTML = denom;
		container.innerHTML = top.outerHTML + "<br>" + bottom.outerHTML;
		container.nume = nume,
			container.denom = denom; /*container.sign = sign;*/
		return container
	}

	toHTMLText() {
		return this.toHTML().outerHTML;
	}
	valueOf() {
		return this.nume / this.denom
	}
}




class Term {
	constructor(...args) {
		this.extension = "Term";
		this.coefficient = args.reduce((product, arg) => {             //Multiply all args that convert to numbers
			return isNaN(arg) ? product : product * arg
		}, 1);
		this.variables = args.reduce((product, arg) => {
			if (arg instanceof (Exponential) && isNaN(arg)) {

				for (let [i, processedArg] of product.entries()) {
					if (processedArg.compareBase(arg) === 0) {   //if the variable has equivalent base as arg, add arg's power to it
						product[i] = new Exponential(processedArg.base, add(product[i].power, arg.power));
						return product;
					} else if (util.isString(arg.base) && util.isString(processedArg.base)) for (let productvariable of processedArg.base) {
						for (let argvariable of arg.base) {
							if (argvariable === productvariable) {                               //if a single letter of arg is in productvariable
								let toAdd;
								toAdd = new Exponential(productvariable, processedArg.power + arg.power);
								product[i] = new Exponential(processedArg.base.replace(productvariable, ""), processedArg.power);
								if (!(product[i].base)) product.splice(i, 1);
								arg = new Exponential(arg.base.replace(productvariable, ""), arg.power);
								if (product.length) {
									for (let already in product) {
										if (product[already].power === toAdd.power) {
											product[already] = new Exponential(product[already].base + toAdd.base, toAdd.power);
											break;
										} else if (already == product.length - 1) {
											product.push(toAdd);
										}
									}
								} else {
									product.push(toAdd);
								}
							}
						}
					}
					if (product[i]) {
						if (util.isString(arg.base) && util.isString(product[i].base) && product[i].comparePower(arg) == 0) {
							product[i] = new Exponential(product[i].base + arg.base, product[i].power);
							return product;
						}
					}
				}
				if (arg.base) product.push(arg);
			};
			return product;
		}, []);
		this.variables.sort((a, b) => {
			if (a.base.__proto__ == String.prototype) {
				if (b.base.__proto__ == String.prototype) return a.base.localeCompare(b.base);        //arrange variables in aphabetical order
				else return -1;      //complex term should come last
			} else {
				if (b.base.__proto__ == String.prototype) return 1;
				return 0;
			}
		})
	}
	valueOf() {
		if (this.coefficient == 0) return 0;
		return this.variables.reduce((a, b) => a * b, this.coefficient)
	}

	isAddable(other) {
		if (this.variables.length != other.variables.length) return false;
		outerLoop: for (let thisVariable of this.variables) {
			for (let otherVariable of other.variables) {
				if (thisVariable.comparePower(otherVariable) !== 0) continue;  //variables do not match
				if (thisVariable.compareBase(otherVariable) === 0) continue outerLoop; //both base and power match
			}
			return false;
		}
		return true;
	}

}


if (!util) var util = {
	isString: str => typeof (str) == "string"
}

function Tree(cargo, left = null, right = null) {
	[this.cargo, this.left, this.right] = [cargo, left, right]
}

Object.defineProperties(Tree.prototype, {
	toString: {
		value: function () {
			function _toFormat(tree, width, height, offset) {
				offset += width;
				str = "";
				if (tree.isLeaf) return str + " ".repeat(offset) + String(tree.cargo) + "\n".repeat(height);
				else if (!(tree.left && tree.right)) throw new Error("not a tree");
				str += _toFormat(tree.left, width, height, offset);
				str += " ".repeat(offset) + String(tree.cargo) + "\n".repeat(height);
				str += _toFormat(tree.right, width, height, offset);
				return str;
			}
			return _toFormat(this, 8, 1, -8)
		}
	},
	isLeaf: {
		get: function isLeaf() {
			return this.left == null && this.right == null ? true : false;
		}
	}
})

function printTree(tree, indent) {
	if (!(tree instanceof Tree)) return console.log("  ".repeat(indent) + String(tree));
	console.log('  '.repeat(indent) + tree.cargo.toString());
	printTree(tree.left, indent + 5);
	printTree(tree.right, indent + 5);
}



class Polynomial {
	constructor(...terms) {
		this.degree = 0;
		this.terms = [];
		for (let term of terms) {
			if (term == 0 || term.coefficient == 0) continue;
			for (let variable of term.variables) {
				if (isNaN(variable.base)) this.degree = Math.max(this.degree, variable.power);
			}
			for (let [index, processedTerm] of this.terms.entries()) {
				if (term.isAddable(processedTerm)) {
					term.coefficient += processedTerm.coefficient;
					this.terms.splice(index, 1);
				}
			}
			this.terms.push(term);
		}
	}

	valueOf() {
		return this.terms.reduce((sum, n) => sum + n, 0)
	}

	localeCompare(other) {

		if (this.terms.length != other.terms.length) return NaN;
		outerLoop: for (let thisTerm of this.terms) {
			for (let otherTerm of other.terms) {
				if (thisTerm.coefficient == otherTerm.coefficient && thisTerm.isAddable(otherTerm)) continue outerLoop;
			}
			return NaN;
		}
		return 0;

	}

	add(term) {
		if (term != 0 && term.coefficient != 0) {
			for (let variable of term.variables) {
				if (isNaN(variable.base)) this.degree = Math.max(this.degree, variable.power);
			}
			for (let [index, processedTerm] of this.terms.entries()) {
				if (term.isAddable(processedTerm)) {
					term.coefficient += processedTerm.coefficient;
					this.terms.splice(index, 1);
				}
			}
			if (term != 0) this.terms.push(term);  //in case adding produced 0
			else {                                  //in case degree was changed by removing terms
				this.degree = 0;
				for (let term of this.terms) {
					for (let variable of term.variables) {
						if (isNaN(variable.base)) this.degree = Math.max(this.degree, variable.power);
					}
				}
			}
		}
		return this;
	}

	get length() {
		return this.terms.length
	}
}

class Exponential {
	constructor(base, power = 1) {
		if (!isNaN(base)) this.base = Number(base); //if it can be converted to a number, then do so
		else if (base.__proto__ == String.prototype) this.base = base.toString().split("").sort().join("");  //if it is a string, then sort it
		else this.base = base; //otherwise, leave as is.
		this.power = !isNaN(power) ? Number(power) : power;
		this.extension = "Exponential";
	}
	valueOf() {
		return Math.pow(this.base, this.power);
	}
	comparePower(other) {
		if (!isNaN(this.power)) {
			if (!isNaN(other.power)) {
				if (this.power.valueOf() == other.power.valueOf()) return 0;  //values exist and are not equal
			}
			else if (other.power instanceof Polynomial) {
				if (new Polynomial(new Term(this.power.valueOf())).localeCompare(other.power) === 0) return 0;
			}
		} else if (this.power instanceof Polynomial) {
			if (!isNaN(other.power)) {
				if (new Polynomial(new Term(other.power.valueOf())).localeCompare(this.power) === 0) return 0;
			}
			else if (other.power instanceof Polynomial) {
				if (this.power.localeCompare(other.power) === 0) return 0;
			}
		}
		return NaN
	}

	compareBase(other) {
		if (this.base.valueOf() == other.base.valueOf()) return 0;
		if (util.isString(this.base)) {
			if (util.isString(other.base) && this.base.localeCompare(other.base) === 0) return 0;
			if (other.base instanceof Polynomial && new Polynomial(new Term(new Exponential(this.base))).localeCompare(other.base) === 0) return 0;
		} else if (this.base instanceof Polynomial) {
			if (other.base instanceof Polynomial && this.base.localeCompare(other.base) === 0) return 0;
			if (util.isString(other.base) && new Polynomial(new Term(new Exponential(other.base))).localeCompare(this.base) === 0) return 0;
		}
		return NaN
	}
}

function tokenize(expr) {
	let result;
	let tokens = [];
	let lastIndex = 0;
	let numberMatcher = /(\d*\.\d+)|\d+/g;
	while (result = numberMatcher.exec(expr)) {
		tokens = tokens.concat(expr.slice(lastIndex, result.index).split(""));
		tokens.push(result[0]);
		lastIndex = numberMatcher.lastIndex;
	}
	tokens = tokens.concat(expr.slice(lastIndex, expr.length).split(""));;
	tokens.push("end");
	return tokens
}
function getToken(token, tokens) {
	if (token.test(tokens[0])) {
		return tokens.shift();
	}
	return null
}

function peekToken(token, tokens) {
	return token.test(tokens[0])
}

function getSingleTerm(tokens) {
	let coefficient = 1;
	let value = "";
	let variable, number, sign;
	while (sign = getToken(/^[-+]$/, tokens)) {
		coefficient *= Number(sign[0] + 1);
	}
	if (coefficient == -1 && peekToken(/^\($/, tokens)) value = "1"; //a minus sign being before an opening paranthesis implies multiplication by -1
	else if (variable = getToken(/^[a-zA-Z]$/, tokens)) value = variable;
	else if (number = getToken(/^(\d*\.\d+)|\d+$/, tokens)) value = Number(0 + number);
	if (coefficient == 1 && value) value = "+" + value;
	else if (value) value = "-" + value;
	return value ? value : null
}
function getOperator(tokens) {
	let token = getToken(/^[\+\-\*\/\^]$/, tokens);
	if (token) return token;
	if (peekToken(/^[a-zA-Z]$/, tokens)) return "*"; //a digit/variable being before a variable implies multiplication
	if (peekToken(/^\($/, tokens)) return "*"; //a digit/variable being before an opening paranthesis implies multiplication
	return null;
}

function replaceNode(tree, node, newNode) {
	let currentTreeNode = tree;
	while (currentTreeNode.right) {
		if (currentTreeNode.right == node) {
			currentTreeNode.right = newNode;
			return
		}
		currentTreeNode = currentTreeNode.right;
	}
}

function getRightMost(tree) {
	let rightMost = tree;
	while (rightMost.right instanceof Tree) rightMost = rightMost.right;
	return rightMost;
}

function getLParans(tokens) {
	let token = getToken(/^\($/, tokens);
	if (token) return token;
	return null;
}

function getRParans(tokens) {
	let token = getToken(/\)/, tokens);
	if (token) return token;
	return null;
}

function getRank(operator) {
	if (/^[\^]$/.test(operator)) return 1;
	if (/^[\/\*]$/.test(operator)) return 2;
	if (/^[\+\-]$/.test(operator)) return 3;

}

function extend(tree, value) {
	let previousValue = tree.cargo;
	tree.cargo = value;
	tree.left = new Tree(previousValue, tree.left, tree.right);
	tree.right = null;
}


function getAllTerms(tokens) {
	let rootNode = null;
	let currentNode = rootNode;
	let parenthesisIndices = [];
	let last = "operator";
	let term;
	let operator;
	let rightMostValue = null;

	while (!getToken(/^end$/, tokens)) {
		if (getRParans(tokens)) {
			if (!parenthesisIndices.length) throw new SyntaxError(`Unexpected closing bracket: No matching opening bracket was found`);
			if (last == "operator") throw new SyntaxError(`Unexpected closing bracket: value or expression expected`);
			parenthesisIndices.pop();
			rightMostValue = currentNode;
			currentNode = parenthesisIndices.length ? parenthesisIndices[parenthesisIndices.length - 1] : rootNode;
			continue;
		}
		switch (last) {
			case "operator":     //Assume the rightmost leaf is null

				if ((term = getSingleTerm(tokens))) {
					last = "term";
					if (rootNode == null) rootNode = currentNode = rightMostValue = new Tree(term);
					else rightMostValue = rightMostValue.right = new Tree(term);
					if (currentNode == null) {
						currentNode = rightMostValue;
						parenthesisIndices[parenthesisIndices.length - 1] = currentNode;
					}
					continue
				}
				if (getLParans(tokens)) {
					currentNode = null;
					parenthesisIndices.push(currentNode);
					continue
				}
				if (peekToken(/end/, tokens)) {
					last = "operator";	//might have removed some + or -
					continue;
				}
				throw new SyntaxError(`unexpected token '${tokens.shift()}': value or expression expected.`);
			case "term":
				last = "operator";
				if ((operator = getOperator(tokens))) {
					rightMost = getRightMost(currentNode);
					switch (getRank(operator)) {
						case 1:
						case 2:
							extend(rightMostValue, operator);
							break;
						case 3:
							extend(currentNode, operator);
							rightMostValue = currentNode;
					}
					continue;
				}
				throw new SyntaxError(`unexpected token '${tokens.shift()}': operator expected.`);
		}
	}
	if (parenthesisIndices.length) throw new SyntaxError(`unexpected end of input : ${last == "operator" ? "value or expression" : "operator/closing bracket"} expected.`);
	if (last == "operator") throw new SyntaxError("unxpected end of input: value or expression expected");
	return rootNode
}
function add(a, b) {
	// console.log("in add\t", util.inspect({ a, b }, { depth: null, colors: true }))
	let sum = new Polynomial();
	if (!isNaN(a) && !isNaN(b)) {
		sum.add(new Term(new Exponential(a + b)));
		return sum
	}
	if (!(a instanceof (Polynomial))) a = new Polynomial(new Term(new Exponential(a)));
	if (!(b instanceof (Polynomial))) b = new Polynomial(new Term(new Exponential(b)));
	for (let operand of [a, b]) {
		for (let term of operand.terms)
			sum.add(term);
	}
	return sum;
}

function multiply(a, b) {
	// console.log("in multiply\t", util.inspect({ a, b }, { depth: null, colors: true }))
	if (a instanceof (Polynomial) && b instanceof (Polynomial)) {
		let product = new Polynomial();
		for (let bTerm of b.terms) {
			for (let aTerm of a.terms)
				product.add(new Term(...aTerm.variables, aTerm.coefficient, ...bTerm.variables, bTerm.coefficient));
		}
		return product;
	}
	throw new TypeError("unsupported types")
}

function subtract(a, b) {
	// console.log("in subtract\t", util.inspect({ a, b }, { depth: null, colors: true }))
	if (a instanceof (Polynomial) && b instanceof (Polynomial)) {
		let negativeB = new Polynomial();
		for (let term of b.terms) negativeB.add(new Term(term.coefficient * -1, ...term.variables));
		return add(a, negativeB);
	}
	throw new TypeError("unsupported types")
}

function raiseToPower(a, b) {
	// console.log("in raise to power\t", util.inspect({ a, b }, { depth: null, colors: true }))
	if (a instanceof (Polynomial) && b instanceof (Polynomial)) {
		if (a.terms.length == 1) {
			let product = new Polynomial();
			let variables = [];
			for (let variable of a.terms[0].variables) {
				variables.push(new Exponential(variable.base, multiply(
					!isNaN(variable.power) ? new Polynomial(new Term(new Exponential(variable.power))) : variable.power, b))
				);
			}
			product.add(new Term(a.terms[0].coefficient, ...variables));
			return product;
		}
		return new Polynomial(new Term(new Exponential(a, b)));
	}
}

const OPERATORS = {
	"*": multiply,
	"-": subtract,
	"+": add,
	"^": raiseToPower
}

function parse(expression) {
	let tree = getAllTerms(tokenize(expression));
	return evaluate(tree);
}
function evaluate(tree) {
	if (tree.isLeaf) {
		let coefficient = tree.cargo[0] == "+" ? 1 : -1;
		return new Polynomial(new Term(coefficient, new Exponential(tree.cargo.substring(1), 1)));
	}
	let left = evaluate(tree.left);
	let right = evaluate(tree.right);
	let operator = OPERATORS[tree.cargo];
	return operator(left, right);
}





class CookieStorage {
	constructor(maxage, path) {
		this.maxage = maxage;
		this.path = path;
		this.cookies = CookieStorage.getCookies();
		this.keys = [];
		for (const key in this.cookies) {
			this.keys.push(key);
		}
		this.length = this.keys.length;
	}

	key(n) {
		if (n < 0 || n >= this.keys.length) return null;
		return this.keys[n];
	}

	getItem(name) {
		return this.cookies[name] || null;
	}

	setItem(key, value) {
		if (!(key in this.cookies)) {
			this.keys.push(key);
			this.length++;
		}
		this.cookies[key] = value;
		let cookie = `${key}=${encodeURIComponent(value)}`;
		if (this.maxage) cookie += `; max-age=${this.maxage}`;
		if (this.path) cookie += `; path=${this.path}`;
		document.cookie = cookie;
	}

	removeItem(key) {
		if (!(key in this.cookies)) return;
		delete this.cookies[key];
		this.keys.splice(this.keys.indexOf(key), 1);
		this.length--;
		document.cookie = `${key}=; max-age=0`;
	}

	clear() {
		for (let i = 0; i < this.keys.length; i++) {
			document.cookie = `${this.keys[i]}=; max-age=0`;
		}
		this.cookies = {};
		this.keys = [];
		this.length = 0;
	}
}
CookieStorage.getCookies = function getCookies() {
	const cookies = {};
	const all = document.cookie;
	if (all === '') {
		return cookies;
	}
	const list = all.split('; ');
	for (let i = 0; i < list.length; i++) {
		const cookie = list[i];
		const p = cookie.indexOf('=');
		const name = cookie.substring(0, p);
		let value = cookie.substring(p + 1);
		value = decodeURIComponent(value);
		cookies[name] = value;
	}
	return cookies;
};


module.exports = {
	print,
	printError,
	makeSpan,
	navToggler,
	showTime,
	stopTime,
	enableForm,
	disableForm,
	factors,
	isSquare,
	makeWhole,
	sqRoot,
	lowestRatios,
	isFactorOf,
	multiply,
	divide,
	combination,
	printTree,
	factorial,
	createWorker,
	deepAction,
	Fraction,
	Term,
	parse,
	getAllTerms,
	tokenize,
	Exponential,
	extensions: {
		"Fraction": Fraction,
		"Term": Term,
		"Exponential": Exponential,
	}
}


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__(1);
module.exports = function binomialExpand(func){
	let nC, sA, sB, sC;                                               //Numeric coefficient, sign coefficient
	var a_match = /[\+\-]?\w+(?=[\+\-])/,
	b_match = /[\+\-]\w+(?=\))/,
	n_match = /((\([\+]?\d+\))|([\+]?\d+))$/,
	n =  n_match.test(func)?  parseInt(n_match.exec(func)[0].replace(/^[^\+\-\d]+/,"")): 1,
	a = new String(a_match.exec(func)[0]),
	b = new String(b_match.exec(func)[0]);
	a.sign = b.sign = 1; 
	if(sC = /^[\-\+]/.exec(a)){                           //if a is prefixed with a sign, 
		a = new String(a.replace(sC[0],""));              // remove the sign and multiply the coefficient by it
		a.sign =  sC[0]+1;
	}
	if(sC = /^[\-\+]/.exec(b)){
		b = new String(b.replace(sC[0],""));
		b.sign =  sC[0]+1;
	}
	if(nC=parseInt(a)){
		let sign = a.sign;
		a = new String(a.replace(/^[\+\-]?\d+/,""))
		sign? (a.sign = sign*nC): (a.sign = nC); 
	}
	if(nC=parseInt(b)){
		let sign = b.sign;
		b = new String(b.replace(/^[\+\-]?\d+/,""))
		sign? (b.sign = sign*nC): (b.sign = nC); 
	}
	if((sA = new Set(a)).size != a.length){
		let duplicates = a;
		for(let i of sA){
			duplicates = duplicates.replace(i,"");
		}
		if(duplicates) throw new Error(`Duplicates {${Array.from(new Set(duplicates)).join()}} not allowed in left variable`)
	};
	if((sB = new Set(b)).size != b.length){
		let duplicates = b;
		for(let i of sB){
			duplicates = duplicates.replace(i,"");
		}
		if(duplicates) throw new Error(`Duplicates {${Array.from(new Set(duplicates)).join()}} not allowed in right variable`)
	}
	

	
	let  power = 0, terms = [];
	while(power<=n){
		let
			coefficient = utils.combination(n,power)*Math.pow(a.sign,n-power)*Math.pow(b.sign,power),                  //n Combination p
			fvar = new utils.Exponential(a,n-power),                     //set first variable to a^(n-p)
			svar = new utils.Exponential(b,power);                       //set Second variable to b^(p)
			terms.push(new utils.Term(coefficient,fvar,svar));         //collect all in a new term.
			++power
	};
	return terms;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__(1);
module.exports = function quadraticRoots(func){
	// let variable, illegalToken, variableCheck=/[a-zA-Z]/g;
	// if(/[a-zA-Z]/.test(func)) var x = variable = /[a-zA-Z]/.exec(func)[0];                                    //the variable in func
	// else throw new Error("Argument Is Not A Quadratic Function.");
	// try{
	// 	let a_match = ``, b_match = ``, c_match, value;
	// 	var b_pattern = new RegExp(`([\\+\\-](\\d*(?:\\.\\d+)?)?${x}(?![^\\+\\-]*2))|(^(\\d*(?:\\.\\d+)?)?${x}(?![^\\+\\-]*2))`),                   //positive/negative integer/decimal number before x but not x(2)
	// 	c_pattern = new RegExp(`([\\+\\-](\\d+(?:\\.\\d+)?|(?:\\.\\d+))(?![${x}\\d\\.]))|(^((\\d+(?:\\.\\d+)?)|((?:\\.\\d+)))(?![${x}\\d\\.]))`),                            //positive/negative integer/decimal no. that doesn't occur before an x
	// 	a_pattern = new RegExp(`[\\+\\-]?(\\d*(?:\\.\\d+)?)?${x}\\^?\\(?2\\)?`),                       //positive/negative integer/decimal no. before x(2)
	// 	funcWithoutA =func.replace(new RegExp(a_pattern,"g"),""),                                      //remove a from func, for c_pattern not to match 2
	// 	a = (~func.search(a_pattern) && !isNaN(value = parseFloat(a_match = func.match(a_pattern)[0]))? value : 
	// 	~a_match.search(`-${x}`)? -1 : ~a_match.search(`^[\+]?${x}`)? 1 : 0),
	// 	b = (~func.search(b_pattern) && !isNaN(value = parseFloat(b_match = func.match(b_pattern)[0]))? value :      //set b to 0 or the occurence of b_pattern
	// 	~b_match.search(`-${x}`)? -1 : ~b_match.search(`^[\+]?${x}`)? 1 : 0),
	// 	c = (c_match = funcWithoutA.match(c_pattern))? parseFloat(c_match[0]) : 0;                     //set c to 0 or the occurence of c_pattern
	// }
	// catch(error){
	// 	if(func=="") throw new Error("No Arguments Supplied");
	// 	throw new Error("Invalid format!");
	// }
	// checkforErrors: {
	// 	while(variableCheck.test(func)){
	// 		if(func[variableCheck.lastIndex-1] !== variable) throw new Error("Function Is Not In One Variable");
	// 	};
	// 	a_pattern.lastIndex=b_pattern.lastIndex=c_pattern.lastIndex = 0;
	// 	variableCheck = /[a-zA-Z]/g;
	// 	if(!illegalToken){ a_pattern.lastIndex=b_pattern.lastIndex=c_pattern.lastIndex=0;
	// 		if(func.match(/\(/) && !func.match(/\)/)) throw new Error (`Invalid Input! Unterminated \(`);
	// 		if(func.match(/\)/) && !func.match(/\(/)) throw new Error(`Invalid Input! Unexpected token \)`);
	// 		if(illegalToken=func.match(/[\+\-][\+\-]/) || func.match(/\)[^\+\-]/)) throw new Error(`Invalid Input! Illegal Sequence ${illegalToken}`);
	// 		if(illegalToken=func.replace(a_pattern,"").replace(b_pattern,"").replace((funcWithoutA.match(c_pattern))? funcWithoutA.match(c_pattern)[0]: "","")) throw new Error(`Invalid Input! Unexpected Token ${illegalToken+(func[func.lastIndexOf(illegalToken[illegalToken.length-1])+1]||" ")}`);
	// 	}
	// 	if(a==0) throw new Error("Argument Is Not A Quadratic Function");
		
	// };
	var variable,
	a = 0,
	b = 0,
	c = 0;
	var poly = utils.parse(func);
	for (let term of poly.terms) {
		if (!term.variables.length)  {
			c = term.coefficient;
			continue;
		}
		if (term.variables[0].power == 2) {
			a = term.coefficient;
			variable = term.variables[0].base;
		}
		else if (term.variables[0].power == 1) b = term.coefficient;
	}
	var wholes = utils.makeWhole(a,b,c);                                        //make all the coefficients  whole numbers
		a = wholes[0], b = wholes[1], c = wholes[2];
	let D = (b * b) - 4 * (a * c);
	if((D>=0) && utils.isSquare(D)){                       //if determinant is a positive perfect square
		var ans1num = -b + Math.sqrt(D), ans1 = new utils.Fraction(ans1num,2*a).toLowestTerms();
		var ans2num = -b - Math.sqrt(D), ans2 = new utils.Fraction(ans2num,2*a).toLowestTerms();
		return {type:"simple",ans1,ans2,variable}
	}
	else{
		var determinant = new utils.Fraction(utils.sqRoot(D),2*a).toLowestTerms();                                    //find the square root of the determinant(in surd/complex form) and divide it by 2a
		determinant.nume = determinantNumeFormat(determinant.nume);                                         //format the numerator for display. 
		var first = new utils.Fraction(-b,2*a).toLowestTerms();                                                   //divide the first part(-b) by 2a and reduce to lowest terms
		return {type:"surd/complex",first,determinant,variable};
	}
	
	//HELPER FUNCTIONS
	
	function determinantNumeFormat(nume){
		var f = parseInt(nume);
		if(f) nume = nume.replace(f,(f==1 || f==-1? "":f));            //We don't need unity coefficient in front of squareRoot
		if(nume[0]=="-") nume = nume.replace(/^-/,"");                                 //Because of the (+-) to appear before the numerator, - sign doesn't matter at all
		return nume
	};
}


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__(1)
module.exports = function convertToBase(number, base, newBase) {
	let value;
	number = number.toString().toLowerCase();

	//Defensive Assertions
	if (!(/\b\w+\b/.test(number + base + newBase))) throw new Error("Invalid Input")
	if (base > 36 || newBase > 36) throw new Error("Conversions Above Base 36 Not Supported!");
	if (base < 2 || newBase < 2) throw new Error("Conversions Below Base 2 Not Supported!");
	for (var i = 0; i < number.length; ++i) { //check if digits in number is within the base range
		if (number.charCodeAt(i) < 58) {
			if (Number(base) + 48 <= number.charCodeAt(i)) throw new Error(`${number} Is Not A Base ${base} Number`);
		} else {
			if (number.charCodeAt(i) - 87 >= base) throw new Error(`${number} Is Not A Base ${base} Number`);
		}
	}
	//MAIN

	let answer = base10ToBaseN(toBase10(number, base), newBase); //convert number to base10, then convert to new base
	return answer
	//HELPER FUNCTIONS

	function toBase10(number, base) { //converts number to base10# 
		var wholeResult = 0,
			floatResult = 0,
			number = number.toString(),
			pointIndex = ~number.indexOf(".") ? number.indexOf(".") : Infinity;
		let [whole, float] = [number.slice(0, pointIndex), number.slice(pointIndex + 1)];
		for (let i = whole.length - 1, j = 0; i >= 0; --i, ++j) {
			wholeResult += Math.pow(base, j) * (whole.charCodeAt(i) < 58 ? whole[i] : whole.charCodeAt(i) - 87);
		}
		if (!float) return wholeResult;
		for (let placeValue, digit, i = 0, j = 1; i < float.length; ++i, ++j) {
			digit = float.charCodeAt(i) < 58 ? float[i] : float.charCodeAt(i) - 87;
			placeValue = Math.round(digit / Math.pow(base, j) * Math.pow(10, 15)) / Math.pow(10, 15);
			floatResult = Math.round((floatResult + placeValue) * Math.pow(10, 15)) / Math.pow(10, 15);
		}
		return Math.round((wholeResult + floatResult) * Math.pow(10, 15)) / Math.pow(10, 15);
	}

	function base10ToBaseN(number, n) { //Assumes number is in base10, converts it to baseN 
		if (number > Number.MAX_SAFE_INTEGER) return number.toString(n);
		number = ~String(number).indexOf("e") ? number.toFixed(15).replace(/0+$/, ``) : number.toString();
		let floatResult, wholeResult = [],
			pointIndex = ~number.indexOf(".") ? number.indexOf(".") : Infinity,
			[whole, float] = [number.slice(0, pointIndex), parseFloat(number.slice(pointIndex))],
			fraction = float ? (new utils.Fraction(float).toLowestTerms()) : null;
		while (whole > 0) {
			let digit = whole % n;
			wholeResult.push(digit < 10 ? whole % n : String.fromCharCode(digit + 87));
			whole = Math.floor(whole / n);
		}
		wholeResult = wholeResult.reverse().join("") || 0;
		if (fraction) {
			//[fraction.nume] = [base10ToBaseN(fraction.nume, n)];
			floatResult = ".";
			let placeDigit, nume = fraction.nume;
			const d = Number(fraction.denom);
			while ((floatResult.length < 60) /*&& toBase10(wholeResult + ((floatResult+0)||""),n)<Number(number)*/ ) {
				// nume += 0;
				// if(Number(toBase10(nume,n))<d){floatResult+=0; continue};
				// placeDigit = base10ToBaseN(Math.floor(toBase10(nume,n)/d),n);
				// nume = base10ToBaseN(Number((toBase10(nume,n) % d).toFixed(15)),n);
				// floatResult += placeDigit;

				// This method works too.
				// let product = Math.round(float * n * Math.pow(10,14))/Math.pow(10,14);
				// floatResult += base10ToBaseN(Math.floor(product),n);
				// float = String(product).replace(/^\d+/,``)

				nume *= n;
				placeDigit = Math.floor((nume) / d);
				floatResult += base10ToBaseN(placeDigit, n)
				nume = nume % d;
			}
		}
		return (wholeResult + (floatResult || "")).replace(/(\.\w+?)0+$/g, "$1");
	}
}


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = function findPrime(x){
	if(!findPrime.cache){
		Object.defineProperty(findPrime,"cache",{
			value: {1:2,2:3,500000:7368787,1000000:15485863}
		});
	}
	if(Number(x) != Number(x) || x<1 || x>100000000) throw new Error("Input Out Of Range"); 
	if(x in findPrime.cache) return findPrime.cache[x];        //if the x prime has been calculated, return the cached answer
	var count, number, x = Number(x), nearestIndex = Math.floor(x/5000)*5000; 
	if(nearestIndex in findPrime.cache){
		count = nearestIndex;
	}else{
		count =  Object.keys(findPrime.cache).reduce(function(least,num){if(num<=x){ var least=num}; return least;})
	} 
	number = findPrime.cache[count];
	while (count<x){
		if(isPrime(number+2)){
			++count;
			if(count%5000===0) findPrime.cache[count] = number+2;
		}
		number+=2;
	}
	return number
}

function isPrime(x){
	if(x==2) return true;
	if(x==1 || x%2==0) return false;
	var count = 3, limit = Math.sqrt(x)+1;
	while(count<limit){
		if(x%count==0) return false;
		count += 2;
	}
	return true
}


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {


var utils = __webpack_require__(1),
	findPrime = __webpack_require__(34),
	convertToBase = __webpack_require__(33),
	quadraticRoots = __webpack_require__(32),
	binomialExpand = __webpack_require__(31);
onmessage = function(message){
	if (message.data._subworker) return;
	let 
		answer,
		args = message.data.args,
		funcName = message.data.funcName,
		messageId = message.data.id,
		func = eval(funcName);
	try{
		answer = func(...args);
		postMessage({answer, id: messageId, type: "answer"});
	}catch(error){
		dispatchError(error, messageId);
		}
}

function dispatchError(error, id){                                                  //dispatches an error from a worker to its creator
	var  errorClone = {}, errorProperties = Object.getOwnPropertyNames(error);
	for(let i of errorProperties){
		errorClone[i] = error[i];
	}
	console.log(error, {errorClone})
	postMessage({type:"error", errorClone, id});
}

/***/ })

/******/ })["default"];