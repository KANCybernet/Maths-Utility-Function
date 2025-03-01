this["app"] = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/math/scripts/"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 61));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return normalizeComponent;
        }
      );
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */
      ) {
        scriptExports = scriptExports || {};

        // ES6 modules interop
        var type = typeof scriptExports.default;
        if (type === "object" || type === "function") {
          scriptExports = scriptExports.default;
        }

        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === "function"
            ? scriptExports.options
            : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function (context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function () {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options: options,
        };
      }

      /***/
    },
    /* 1 */
    /***/ function (module, exports) {
      function print(/*elements/text*/) {
        //displays a message to the screen. add false as last argument to append to, rather
        //if(!print.style) print.style = "margin-bottom:0.4rem";
        if (!(arguments[arguments.length - 1] === false))
          display.innerHTML = ""; //than replace current screen content
        for (var i in arguments) {
          var j = arguments[i];
          if (typeof j == "boolean") continue;
          if (typeof j !== "object")
            display.appendChild(
              makeSpan(arguments[i], {
                style: print.style,
              })
            );
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

      function printError(error) {
        //displays an error message to the screen
        print(
          `Error: ${error.message.replace(/^.*Error:/, "").fontcolor("red")}`
        );
        window.err = error;
        return false;
      }

      function makeSpan(content, attributes) {
        //returns a span element of content
        let container = document.createElement("span");
        for (var i in attributes) {
          container.setAttribute(i, attributes[i]);
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
        time.innerHTML = new Date().toLocaleString().replace(/\:\d{1,2} /, " ");
        showTime.stopCode = setInterval(function newDate() {
          time.innerHTML = new Date()
            .toLocaleString()
            .replace(/\:\d{1,2} /, " ");
        }, 60000);
      }

      function stopTime() {
        clearInterval(showTime.stopCode);
      }

      function disableForm(form) {
        Array.prototype.forEach.call(form.elements, (e) => {
          e.disabled = e.readOnly = true;
          if (
            e.__proto__ === `HTMLButtonElementPrototype` ||
            e.type === "submit"
          )
            e.style.cursor = `wait`;
        });
      }

      function enableForm(form) {
        Array.prototype.forEach.call(form.elements, (e) => {
          e.disabled = e.readOnly = false;
          if (
            e.__proto__ === `HTMLButtonElementPrototype` ||
            e.type === "submit"
          )
            e.style.cursor = `default`;
        });
      }

      function factors(x) {
        //returns all the positive integer factors of x, including x
        if (!factors.cache) {
          factors.cache = Object.create(null); //for storing computed values
          Object.defineProperty(factors.cache, "length", {
            get: function length() {
              return Object.keys(this).length;
            },
          });
        }
        x = Math.abs(x);
        if (x in factors.cache) return factors.cache[x]; //if x has already been solved before, then return the value
        var answer = [x],
          increment = x % 2 == 0 ? 1 : 2,
          base = x % 2 == 0 ? 2 : 3; //if x is an odd number, then check only the odd numbers. Otherwise check both odd & even no.s
        for (var i = base; i <= Math.floor(Math.sqrt(x)); i += increment) {
          if (x % i == 0) {
            var right = factors(x / i),
              left = factors(i); //when a factor of x is found, find it's complement, evaluate both their factors & combine them..
            answer = [...answer, ...right, ...left]; //to get the complete factors. (This is because the factors of a number is the product of the..
            for (var m = 0, n = right[m]; m < right.length; ++m, n = right[m]) {
              //combination of the factors of any of it's complementary factors.
              for (var p = 0, q = left[p]; p < left.length; ++p, q = left[p]) {
                if (n * q !== x) answer.push(n * q);
              }
            }
            if (Set) {
              //remove all duplicate values in answer
              answer = [...new Set(answer)];
            } else {
              answer = answer.reduce(function (list, n) {
                if (
                  list.every(function (s) {
                    return s !== n;
                  })
                ) {
                  list.push(n);
                }
                return list;
              }, []);
            }
            answer = answer.sort(function (a, b) {
              return a - b;
            });
            factors.cache[x] = answer;
            return answer;
          }
        }
        factors.cache[x] = answer;
        return [x];
      }

      function isSquare(x) {
        //Returns a boolean indicating whether or not x is a perfect square
        return String(Math.sqrt(x)).indexOf(".") == -1 && x >= 0 ? true : false;
      }

      function makeWhole(...numbers) {
        //returns all of numbers as whole by multiplying through by 10^ highest number of decimal digits
        numbers = numbers.map((n) =>
          ~String(n).indexOf("e")
            ? n.toFixed(15).replace(/0+$/, ``)
            : n.toString()
        ); //collect all arguments in string form
        //determine the highest number of decimal digits in numbers
        let highestDecimalDigits = numbers.every(Number.isInteger)
          ? 0
          : numbers.reduce(
              (h, n) =>
                Math.max(
                  h,
                  ~n.indexOf(".") ? n.length - 1 - n.indexOf(".") : 0
                ),
              0
            );
        numbers = numbers.map((n) =>
          Math.round(n * Math.pow(10, highestDecimalDigits))
        ); //multiply all of the numbers by 10^ the highest decimal digits count
        numbers.__defineGetter__("decimalDigits", () => highestDecimalDigits);
        return numbers;
      }

      function sqRoot(n /*number*/) {
        //Returns the square root of n. returns a surd or a complex number where applicable
        var nP = Math.abs(n); //set nP to the positive value of n
        if (isSquare(nP)) {
          var result = n >= 0 ? Math.sqrt(nP) : Math.sqrt(nP) + "\u221A" + -1; //if nP is a perfect square, set result to root n if n was positive else, set to root n * root -1
        } else {
          for (
            var nP_fcList = factors(nP),
              i = nP_fcList.length - 1,
              j = nP_fcList[i];
            i > -1;
            --i, j = nP_fcList[i]
          ) {
            //Take the highest perfect square factor of xP if any,..
            if (isSquare(j)) {
              var result = Math.sqrt(j) + "\u221A" + n / j;
              break; //..factor it out and multiply it's root by what is left under the square root sign.
            }
          }
        }
        if (!result && result != 0) result = "\u221A" + n; //set result to root n, if n isn't a perfect square and neither is any of it's factors.
        return result;
      }

      function lowestRatios(...numbers) {
        //returns the lowest integer ratios of all the numbers
        var answer = makeWhole(...numbers),
          lowest = Math.min(...answer),
          fctList = factors(lowest); //select the lowest number in the arguments and find its factors
        for (
          var i = fctList.length - 1, j = fctList[i];
          i >= 0;
          --i, j = fctList[i]
        ) {
          if (answer.every(isFactorOf.bind(null, j))) {
            //if all of the other arguments are divisible by any of the factors,..
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
        if (a instanceof Polynomial && b instanceof Polynomial) {
          let product = new Polynomial();
          for (let bTerm of b.terms) {
            for (let aTerm of a.terms)
              product.add(
                new Term(
                  ...aTerm.variables,
                  aTerm.coefficient,
                  ...bTerm.variables,
                  bTerm.coefficient
                )
              );
          }
          return product;
        }
        throw new TypeError("unsupported types");
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

      function createWorker(name, source) {
        //returns a promise to create a worker
        return new Promise((resolve, reject) => {
          let worker = new Worker(`${source ? `${source}/` : ""}${name}.js`);
          resolve(worker);
        });
      }

      function deepAction(object, action, criteria) {
        //applies action to object and all of it's nested objects
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
          } else if (typeof criteria === `function`) {
            qualified = criteria(object);
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
          if (arguments.length > 2)
            throw new RangeError("Invalid number of arguments.");
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

        toLowestTerms() {
          //returns the fraction in it's lowest terms.
          let t,
            d,
            top,
            bottom,
            reducedRatios,
            n = String(this.nume),
            denom = String(this.denom);
          if (!isNaN((t = parseFloat(n))) && !isNaN((d = parseFloat(denom)))) {
            reducedRatios = lowestRatios(t, d);
            top = reducedRatios[0];
            bottom = reducedRatios[1];
            if (bottom < 0) (bottom = -bottom), (top = -top); //make the denominator positive
            n = n.replace(t, top); //replace the coefficients
            denom = denom.replace(d, bottom);
          } else {
            if (denom[0] == "-")
              (denom = denom.replace(/^-/, "")),
                (n = n[0] == "-" ? n.replace(/^-/, "") : "-" + n);
          }
          return new Fraction(n, denom);
        }

        toHTML() {
          // returns an HTML span element that displays the fraction
          let nume = this.nume,
            denom = this.denom,
            container = document.createElement("span"),
            top = document.createElement("span"),
            bottom = document.createElement("span"),
            dLength = String(denom).length,
            numeLength = String(nume).length,
            lDiff = dLength - numeLength;
          (container.style =
            "display:inline-block; line-height:0.86em; vertical-align:-0.72em"),
            (top.style.textDecoration = "underline");
          if (denom == 1) return makeSpan(nume); //bottom.style.display = "none",                           //Because any number divided by 1 is itself
          if (nume == 0) container.style.display = "none";
          //Hide zero fractions
          else if (numeLength < dLength)
            nume = `${"&nbsp".repeat(lDiff / 2 + 1)} ${nume} ${"&nbsp".repeat(
              lDiff / 2 + 1
            )}`; //if denominator is longer than numerator, pad numerator
          (top.innerHTML = nume), (bottom.innerHTML = denom);
          container.innerHTML = top.outerHTML + "<br>" + bottom.outerHTML;
          (container.nume = nume),
            (container.denom = denom); /*container.sign = sign;*/
          return container;
        }

        toHTMLText() {
          return this.toHTML().outerHTML;
        }
        valueOf() {
          return this.nume / this.denom;
        }
      }

      class Term {
        constructor(...args) {
          this.extension = "Term";
          this.coefficient = args.reduce((product, arg) => {
            //Multiply all args that convert to numbers
            return isNaN(arg) ? product : product * arg;
          }, 1);
          this.variables = args.reduce((product, arg) => {
            if (arg instanceof Exponential && isNaN(arg)) {
              for (let [i, processedArg] of product.entries()) {
                if (processedArg.compareBase(arg) === 0) {
                  //if the variable has equivalent base as arg, add arg's power to it
                  product[i] = new Exponential(
                    processedArg.base,
                    add(product[i].power, arg.power)
                  );
                  return product;
                } else if (
                  util.isString(arg.base) &&
                  util.isString(processedArg.base)
                )
                  for (let productvariable of processedArg.base) {
                    for (let argvariable of arg.base) {
                      if (argvariable === productvariable) {
                        //if a single letter of arg is in productvariable
                        let toAdd;
                        toAdd = new Exponential(
                          productvariable,
                          processedArg.power + arg.power
                        );
                        product[i] = new Exponential(
                          processedArg.base.replace(productvariable, ""),
                          processedArg.power
                        );
                        if (!product[i].base) product.splice(i, 1);
                        arg = new Exponential(
                          arg.base.replace(productvariable, ""),
                          arg.power
                        );
                        if (product.length) {
                          for (let already in product) {
                            if (product[already].power === toAdd.power) {
                              product[already] = new Exponential(
                                product[already].base + toAdd.base,
                                toAdd.power
                              );
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
                  if (
                    util.isString(arg.base) &&
                    util.isString(product[i].base) &&
                    product[i].comparePower(arg) == 0
                  ) {
                    product[i] = new Exponential(
                      product[i].base + arg.base,
                      product[i].power
                    );
                    return product;
                  }
                }
              }
              if (arg.base) product.push(arg);
            }
            return product;
          }, []);
          this.variables.sort((a, b) => {
            if (a.base.__proto__ == String.prototype) {
              if (b.base.__proto__ == String.prototype)
                return a.base.localeCompare(b.base);
              //arrange variables in aphabetical order
              else return -1; //complex term should come last
            } else {
              if (b.base.__proto__ == String.prototype) return 1;
              return 0;
            }
          });
        }
        valueOf() {
          if (this.coefficient == 0) return 0;
          return this.variables.reduce((a, b) => a * b, this.coefficient);
        }

        isAddable(other) {
          if (this.variables.length != other.variables.length) return false;
          outerLoop: for (let thisVariable of this.variables) {
            for (let otherVariable of other.variables) {
              if (thisVariable.comparePower(otherVariable) !== 0) continue; //variables do not match
              if (thisVariable.compareBase(otherVariable) === 0)
                continue outerLoop; //both base and power match
            }
            return false;
          }
          return true;
        }
      }

      if (!util)
        var util = {
          isString: (str) => typeof str == "string",
        };

      function Tree(cargo, left = null, right = null) {
        [this.cargo, this.left, this.right] = [cargo, left, right];
      }

      Object.defineProperties(Tree.prototype, {
        toString: {
          value: function () {
            function _toFormat(tree, width, height, offset) {
              offset += width;
              str = "";
              if (tree.isLeaf)
                return (
                  str +
                  " ".repeat(offset) +
                  String(tree.cargo) +
                  "\n".repeat(height)
                );
              else if (!(tree.left && tree.right))
                throw new Error("not a tree");
              str += _toFormat(tree.left, width, height, offset);
              str +=
                " ".repeat(offset) + String(tree.cargo) + "\n".repeat(height);
              str += _toFormat(tree.right, width, height, offset);
              return str;
            }
            return _toFormat(this, 8, 1, -8);
          },
        },
        isLeaf: {
          get: function isLeaf() {
            return this.left == null && this.right == null ? true : false;
          },
        },
      });

      function printTree(tree, indent) {
        if (!(tree instanceof Tree))
          return console.log("  ".repeat(indent) + String(tree));
        console.log("  ".repeat(indent) + tree.cargo.toString());
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
              if (isNaN(variable.base))
                this.degree = Math.max(this.degree, variable.power);
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
          return this.terms.reduce((sum, n) => sum + n, 0);
        }

        localeCompare(other) {
          if (this.terms.length != other.terms.length) return NaN;
          outerLoop: for (let thisTerm of this.terms) {
            for (let otherTerm of other.terms) {
              if (
                thisTerm.coefficient == otherTerm.coefficient &&
                thisTerm.isAddable(otherTerm)
              )
                continue outerLoop;
            }
            return NaN;
          }
          return 0;
        }

        add(term) {
          if (term != 0 && term.coefficient != 0) {
            for (let variable of term.variables) {
              if (isNaN(variable.base))
                this.degree = Math.max(this.degree, variable.power);
            }
            for (let [index, processedTerm] of this.terms.entries()) {
              if (term.isAddable(processedTerm)) {
                term.coefficient += processedTerm.coefficient;
                this.terms.splice(index, 1);
              }
            }
            if (term != 0) this.terms.push(term);
            //in case adding produced 0
            else {
              //in case degree was changed by removing terms
              this.degree = 0;
              for (let term of this.terms) {
                for (let variable of term.variables) {
                  if (isNaN(variable.base))
                    this.degree = Math.max(this.degree, variable.power);
                }
              }
            }
          }
          return this;
        }

        get length() {
          return this.terms.length;
        }
      }

      class Exponential {
        constructor(base, power = 1) {
          if (!isNaN(base)) this.base = Number(base);
          //if it can be converted to a number, then do so
          else if (base.__proto__ == String.prototype)
            this.base = base.toString().split("").sort().join("");
          //if it is a string, then sort it
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
              if (this.power.valueOf() == other.power.valueOf()) return 0; //values exist and are not equal
            } else if (other.power instanceof Polynomial) {
              if (
                new Polynomial(new Term(this.power.valueOf())).localeCompare(
                  other.power
                ) === 0
              )
                return 0;
            }
          } else if (this.power instanceof Polynomial) {
            if (!isNaN(other.power)) {
              if (
                new Polynomial(new Term(other.power.valueOf())).localeCompare(
                  this.power
                ) === 0
              )
                return 0;
            } else if (other.power instanceof Polynomial) {
              if (this.power.localeCompare(other.power) === 0) return 0;
            }
          }
          return NaN;
        }

        compareBase(other) {
          if (this.base.valueOf() == other.base.valueOf()) return 0;
          if (util.isString(this.base)) {
            if (
              util.isString(other.base) &&
              this.base.localeCompare(other.base) === 0
            )
              return 0;
            if (
              other.base instanceof Polynomial &&
              new Polynomial(
                new Term(new Exponential(this.base))
              ).localeCompare(other.base) === 0
            )
              return 0;
          } else if (this.base instanceof Polynomial) {
            if (
              other.base instanceof Polynomial &&
              this.base.localeCompare(other.base) === 0
            )
              return 0;
            if (
              util.isString(other.base) &&
              new Polynomial(
                new Term(new Exponential(other.base))
              ).localeCompare(this.base) === 0
            )
              return 0;
          }
          return NaN;
        }
      }

      function tokenize(expr) {
        let result;
        let tokens = [];
        let lastIndex = 0;
        let numberMatcher = /(\d*\.\d+)|\d+/g;
        while ((result = numberMatcher.exec(expr))) {
          tokens = tokens.concat(expr.slice(lastIndex, result.index).split(""));
          tokens.push(result[0]);
          lastIndex = numberMatcher.lastIndex;
        }
        tokens = tokens.concat(expr.slice(lastIndex, expr.length).split(""));
        tokens.push("end");
        return tokens;
      }
      function getToken(token, tokens) {
        if (token.test(tokens[0])) {
          return tokens.shift();
        }
        return null;
      }

      function peekToken(token, tokens) {
        return token.test(tokens[0]);
      }

      function getSingleTerm(tokens) {
        let coefficient = 1;
        let value = "";
        let variable, number, sign;
        while ((sign = getToken(/^[-+]$/, tokens))) {
          coefficient *= Number(sign[0] + 1);
        }
        if (coefficient == -1 && peekToken(/^\($/, tokens)) value = "1";
        //a minus sign being before an opening paranthesis implies multiplication by -1
        else if ((variable = getToken(/^[a-zA-Z]$/, tokens))) value = variable;
        else if ((number = getToken(/^(\d*\.\d+)|\d+$/, tokens)))
          value = Number(0 + number);
        if (coefficient == 1 && value) value = "+" + value;
        else if (value) value = "-" + value;
        return value ? value : null;
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
            return;
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
            if (!parenthesisIndices.length)
              throw new SyntaxError(
                `Unexpected closing bracket: No matching opening bracket was found`
              );
            if (last == "operator")
              throw new SyntaxError(
                `Unexpected closing bracket: value or expression expected`
              );
            parenthesisIndices.pop();
            rightMostValue = currentNode;
            currentNode = parenthesisIndices.length
              ? parenthesisIndices[parenthesisIndices.length - 1]
              : rootNode;
            continue;
          }
          switch (last) {
            case "operator": //Assume the rightmost leaf is null
              if ((term = getSingleTerm(tokens))) {
                last = "term";
                if (rootNode == null)
                  rootNode = currentNode = rightMostValue = new Tree(term);
                else rightMostValue = rightMostValue.right = new Tree(term);
                if (currentNode == null) {
                  currentNode = rightMostValue;
                  parenthesisIndices[
                    parenthesisIndices.length - 1
                  ] = currentNode;
                }
                continue;
              }
              if (getLParans(tokens)) {
                currentNode = null;
                parenthesisIndices.push(currentNode);
                continue;
              }
              if (peekToken(/end/, tokens)) {
                last = "operator"; //might have removed some + or -
                continue;
              }
              throw new SyntaxError(
                `unexpected token '${tokens.shift()}': value or expression expected.`
              );
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
              throw new SyntaxError(
                `unexpected token '${tokens.shift()}': operator expected.`
              );
          }
        }
        if (parenthesisIndices.length)
          throw new SyntaxError(
            `unexpected end of input : ${
              last == "operator"
                ? "value or expression"
                : "operator/closing bracket"
            } expected.`
          );
        if (last == "operator")
          throw new SyntaxError(
            "unxpected end of input: value or expression expected"
          );
        return rootNode;
      }
      function add(a, b) {
        // console.log("in add\t", util.inspect({ a, b }, { depth: null, colors: true }))
        let sum = new Polynomial();
        if (!isNaN(a) && !isNaN(b)) {
          sum.add(new Term(new Exponential(a + b)));
          return sum;
        }
        if (!(a instanceof Polynomial))
          a = new Polynomial(new Term(new Exponential(a)));
        if (!(b instanceof Polynomial))
          b = new Polynomial(new Term(new Exponential(b)));
        for (let operand of [a, b]) {
          for (let term of operand.terms) sum.add(term);
        }
        return sum;
      }

      function multiply(a, b) {
        // console.log("in multiply\t", util.inspect({ a, b }, { depth: null, colors: true }))
        if (a instanceof Polynomial && b instanceof Polynomial) {
          let product = new Polynomial();
          for (let bTerm of b.terms) {
            for (let aTerm of a.terms)
              product.add(
                new Term(
                  ...aTerm.variables,
                  aTerm.coefficient,
                  ...bTerm.variables,
                  bTerm.coefficient
                )
              );
          }
          return product;
        }
        throw new TypeError("unsupported types");
      }

      function subtract(a, b) {
        // console.log("in subtract\t", util.inspect({ a, b }, { depth: null, colors: true }))
        if (a instanceof Polynomial && b instanceof Polynomial) {
          let negativeB = new Polynomial();
          for (let term of b.terms)
            negativeB.add(new Term(term.coefficient * -1, ...term.variables));
          return add(a, negativeB);
        }
        throw new TypeError("unsupported types");
      }

      function raiseToPower(a, b) {
        // console.log("in raise to power\t", util.inspect({ a, b }, { depth: null, colors: true }))
        if (a instanceof Polynomial && b instanceof Polynomial) {
          if (a.terms.length == 1) {
            let product = new Polynomial();
            let variables = [];
            for (let variable of a.terms[0].variables) {
              variables.push(
                new Exponential(
                  variable.base,
                  multiply(
                    !isNaN(variable.power)
                      ? new Polynomial(
                          new Term(new Exponential(variable.power))
                        )
                      : variable.power,
                    b
                  )
                )
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
        "^": raiseToPower,
      };

      function parse(expression) {
        let tree = getAllTerms(tokenize(expression));
        return evaluate(tree);
      }
      function evaluate(tree) {
        if (tree.isLeaf) {
          let coefficient = tree.cargo[0] == "+" ? 1 : -1;
          return new Polynomial(
            new Term(coefficient, new Exponential(tree.cargo.substring(1), 1))
          );
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
        if (all === "") {
          return cookies;
        }
        const list = all.split("; ");
        for (let i = 0; i < list.length; i++) {
          const cookie = list[i];
          const p = cookie.indexOf("=");
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
          Fraction: Fraction,
          Term: Term,
          Exponential: Exponential,
        },
      };

      /***/
    },
    /* 2 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: C:/Users/chalu/Documents/programming/chalu-exibits/node_modules/vue-style-loader/lib/listToStyles.js
      /**
       * Translates the list format produced by css-loader into something
       * easier to manipulate.
       */
      function listToStyles(parentId, list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {
            id: parentId + ":" + i,
            css: css,
            media: media,
            sourceMap: sourceMap,
          };
          if (!newStyles[id]) {
            styles.push((newStyles[id] = { id: id, parts: [part] }));
          } else {
            newStyles[id].parts.push(part);
          }
        }
        return styles;
      }

      // CONCATENATED MODULE: C:/Users/chalu/Documents/programming/chalu-exibits/node_modules/vue-style-loader/lib/addStylesClient.js
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return addStylesClient;
        }
      );
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

      var hasDocument = typeof document !== "undefined";

      if (typeof DEBUG !== "undefined" && DEBUG) {
        if (!hasDocument) {
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. " +
              "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
          );
        }
      }

      /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

      var stylesInDom = {
        /*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/
      };

      var head =
        hasDocument &&
        (document.head || document.getElementsByTagName("head")[0]);
      var singletonElement = null;
      var singletonCounter = 0;
      var isProduction = false;
      var noop = function () {};
      var options = null;
      var ssrIdKey = "data-vue-ssr-id";

      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page
      var isOldIE =
        typeof navigator !== "undefined" &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function addStylesClient(parentId, list, _isProduction, _options) {
        isProduction = _isProduction;

        options = _options || {};

        var styles = listToStyles(parentId, list);
        addStylesToDom(styles);

        return function update(newList) {
          var mayRemove = [];
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
          if (newList) {
            styles = listToStyles(parentId, newList);
            addStylesToDom(styles);
          } else {
            styles = [];
          }
          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];
            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j]();
              }
              delete stylesInDom[domStyle.id];
            }
          }
        };
      }

      function addStylesToDom(styles /* Array<StyleObject> */) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          if (domStyle) {
            domStyle.refs++;
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }
            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j]));
            }
            if (domStyle.parts.length > item.parts.length) {
              domStyle.parts.length = item.parts.length;
            }
          } else {
            var parts = [];
            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j]));
            }
            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function createStyleElement() {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        head.appendChild(styleElement);
        return styleElement;
      }

      function addStyle(obj /* StyleObjectPart */) {
        var update, remove;
        var styleElement = document.querySelector(
          "style[" + ssrIdKey + '~="' + obj.id + '"]'
        );

        if (styleElement) {
          if (isProduction) {
            // has SSR styles and in production mode.
            // simply do nothing.
            return noop;
          } else {
            // has SSR styles but in dev mode.
            // for some reason Chrome can't handle source map in server-rendered
            // style tags - source maps in <style> only works if the style tag is
            // created and inserted dynamically. So we remove the server rendered
            // styles and inject new ones.
            styleElement.parentNode.removeChild(styleElement);
          }
        }

        if (isOldIE) {
          // use singleton mode for IE9.
          var styleIndex = singletonCounter++;
          styleElement =
            singletonElement || (singletonElement = createStyleElement());
          update = applyToSingletonTag.bind(
            null,
            styleElement,
            styleIndex,
            false
          );
          remove = applyToSingletonTag.bind(
            null,
            styleElement,
            styleIndex,
            true
          );
        } else {
          // use multi-style-tag mode in all other cases
          styleElement = createStyleElement();
          update = applyToTag.bind(null, styleElement);
          remove = function () {
            styleElement.parentNode.removeChild(styleElement);
          };
        }

        update(obj);

        return function updateStyle(newObj /* StyleObjectPart */) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap
            ) {
              return;
            }
            update((obj = newObj));
          } else {
            remove();
          }
        };
      }

      var replaceText = (function () {
        var textStore = [];

        return function (index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join("\n");
        };
      })();

      function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = styleElement.childNodes;
          if (childNodes[index]) styleElement.removeChild(childNodes[index]);
          if (childNodes.length) {
            styleElement.insertBefore(cssNode, childNodes[index]);
          } else {
            styleElement.appendChild(cssNode);
          }
        }
      }

      function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          styleElement.setAttribute("media", media);
        }
        if (options.ssrId) {
          styleElement.setAttribute(ssrIdKey, obj.id);
        }

        if (sourceMap) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
          // http://stackoverflow.com/a/26603875
          css +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
            " */";
        }

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }

      /***/
    },
    /* 3 */
    /***/ function (module, exports) {
      /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return "@media " + item[2] + "{" + content + "}";
            } else {
              return content;
            }
          }).join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
          if (typeof modules === "string") modules = [[null, modules, ""]];
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number") alreadyImportedModules[id] = true;
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (
              typeof item[0] !== "number" ||
              !alreadyImportedModules[item[0]]
            ) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
              }
              list.push(item);
            }
          }
        };
        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || "";
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === "function") {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
          });

          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join("\n");
        }

        return [content].join("\n");
      }

      // Adapted from convert-source-map (MIT)
      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        var data =
          "sourceMappingURL=data:application/json;charset=utf-8;base64," +
          base64;

        return "/*# " + data + " */";
      }

      /***/
    },
    /* 4 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        props: ["power", "base"],
      };

      /***/
    },
    /* 5 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //

      var mathExponential = __webpack_require__(28).default;
      exports.default = {
        props: ["coefficient", "variables"],
        components: {
          "math-exponential": mathExponential,
        },
      };

      /***/
    },
    /* 6 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //

      var mathTerm = __webpack_require__(29).default;
      exports.default = {
        props: ["terms"],
        components: {
          "math-term": mathTerm,
        },
      };

      /***/
    },
    /* 7 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        props: ["error"],
      };

      /***/
    },
    /* 8 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        props: ["nume", "denom"],
        methods: {},
        computed: {
          denomIsVisible: function denomIsVisible() {
            return !(this.denom == 1 || this.nume == 0);
          },
          numeLength: function numeLength() {
            return String(this.nume).length;
          },
          denomLength: function denomLength() {
            return String(this.denom).length;
          },
        },
      };

      /***/
    },
    /* 9 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //

      exports.default = {
        props: ["text"],
      };

      /***/
    },
    /* 10 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        props: ["message"],
      };

      /***/
    },
    /* 11 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        data: function data() {
          return {
            errors: [],
            waiting: false,
            argument: "",
          };
        },

        inject: ["runAsync"],
        methods: {
          submit: function submit() {
            this.waiting = true;
            this.runAsync(
              [this.argument],
              "quadraticRoots",
              function (error, answer) {
                var output = void 0;
                if (error) this.errors.push(error);
                else {
                  if (answer.type == "simple") {
                    output = [
                      {
                        type: "plain-text",
                        content: { text: answer.variable + "  = " },
                      },
                      { type: "math-fraction", content: answer.ans1 },
                    ].concat(
                      answer.ans1.valueOf() === answer.ans2.valueOf()
                        ? []
                        : [
                            {
                              type: "plain-text",
                              content: {
                                text: " , " + answer.variable + "  = ",
                              },
                            },
                            { type: "math-fraction", content: answer.ans2 },
                          ]
                    );
                  }
                  if (answer.type == "surd/complex") {
                    output = [
                      {
                        type: "plain-text",
                        content: { text: answer.variable + "  = " },
                      },
                      { type: "math-fraction", content: answer.first },
                      { type: "plain-text", content: { text: " \xB1 " } },
                      { type: "math-fraction", content: answer.determinant },
                    ];
                    if (answer.first == 0) output.splice(1, 1);
                  }
                }
                this.display = output || [
                  { type: "error-message", content: { error: error } },
                ];
                this.waiting = false;
              }.bind(this)
            );
          },
        },
        computed: {
          display: {
            get: function get() {
              return this.$store.state.display.quadratic;
            },
            set: function set(payload) {
              this.$store.commit("display", { quadratic: payload });
            },
          },
        },
        watch: {
          waiting: function waiting(value) {
            if (value) {
              this.display = [
                {
                  type: "delay-message",
                  content: { message: "Processing please wait" },
                },
              ];
            }
          },
        },
      };

      /***/
    },
    /* 12 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        data: function data() {
          return {
            argument: 0,
            waiting: false,
            errors: [],
          };
        },

        inject: ["runAsync", "outputComponents"],
        computed: {
          display: {
            get: function get() {
              return this.$store.state.display.prime;
            },
            set: function set(payload) {
              this.$store.commit("display", { prime: payload });
            },
          },
        },
        methods: {
          submit: function submit() {
            this.waiting = true;
            this.runAsync(
              [this.argument],
              "findPrime",
              function (error, answer) {
                if (error) this.errors.push(error);
                this.display = answer
                  ? [{ type: "plain-text", content: { text: answer } }]
                  : [{ type: "error-message", content: { error: error } }];
                this.waiting = false;
              }.bind(this)
            );
          },
        },
        watch: {
          waiting: function waiting(value) {
            if (value) {
              this.display = [
                {
                  type: "delay-message",
                  content: { message: "Processing please wait" },
                },
              ];
            }
          },
        },
      };

      /***/
    },
    /* 13 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        data: function data() {
          return {
            errors: [],
            argument: "",
            waiting: false,
          };
        },

        inject: ["runAsync"],
        computed: {
          display: {
            get: function get() {
              return this.$store.state.display.binomial;
            },
            set: function set(payload) {
              this.$store.commit("display", { binomial: payload });
            },
          },
        },
        methods: {
          submit: function submit() {
            this.waiting = true;
            this.runAsync(
              [this.argument],
              "binomialExpand",
              function (error, answer) {
                var terms = void 0;
                if (error) this.errors.push(error);
                else {
                  terms = answer;
                }
                this.display = error
                  ? [{ type: "error-message", content: { error: error } }]
                  : [{ type: "math-polynomial", content: { terms: terms } }];
                this.waiting = false;
              }.bind(this)
            );
          },
        },
        watch: {
          waiting: function waiting(value) {
            if (value) {
              this.display = [
                {
                  type: "delay-message",
                  content: { message: "Processing please wait" },
                },
              ];
            }
          },
        },
      };

      /***/
    },
    /* 14 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      exports.default = {
        data: function data() {
          return {
            active: false,
            waiting: false,
            errors: [],
            number: null,
            base: null,
            newBase: null,
          };
        },

        inject: ["runAsync"],
        computed: {
          display: {
            get: function get() {
              return this.$store.state.display.base;
            },
            set: function set(payload) {
              this.$store.commit("display", { base: payload });
            },
          },
        },
        methods: {
          submit: function submit() {
            this.waiting = true;
            this.runAsync(
              [this.number, this.base, this.newBase],
              "convertToBase",
              function (error, answer) {
                if (error) this.errors.push(error);
                this.display = answer
                  ? [{ type: "plain-text", content: { text: answer } }]
                  : [{ type: "error-message", content: { error: error } }];
                this.waiting = false;
              }.bind(this)
            );
          },
        },
        watch: {
          waiting: function waiting(value) {
            if (value) {
              this.display = [
                {
                  type: "delay-message",
                  content: { message: "Processing please wait" },
                },
              ];
            }
          },
        },
      };

      /***/
    },
    /* 15 */
    /***/ function (module, exports) {
      module.exports = function () {
        /* Detect if we're in a worker or not */
        var isWorker = false;
        try {
          document;
        } catch (e) {
          isWorker = true;
        }

        if (isWorker) {
          if (!self.Worker) {
            self.Worker = function (path) {
              this.id = Math.random().toString(36).substr(2, 5);
              this.eventListeners = {
                message: [],
                error: [],
              };
              self.addEventListener(
                "message",
                function (e) {
                  if (e.data._from === this.id) {
                    if (e.data.cmd == "passMessage") {
                      var relayEvent = new MessageEvent("message");
                      relayEvent.initMessageEvent(
                        "message",
                        false,
                        false,
                        e.data.message,
                        this,
                        "",
                        null,
                        []
                      );
                      this.dispatchEvent(relayEvent);
                      if (this.onmessage) {
                        this.onmessage(relayEvent);
                      }
                    }
                    if (e.data.cmd == "passError") {
                      var relayEvent = Object.assign(
                        new Event("error"),
                        e.data.errorProperties
                      );
                      this.dispatchEvent(relayEvent);
                      if (this.onerror) {
                        this.onerror(relayEvent);
                      }
                    }
                  }
                }.bind(this)
              );
              var location = self.location.pathname;
              var absPath =
                location.substring(0, location.lastIndexOf("/")) + "/" + path;
              self.postMessage({
                _subworker: true,
                cmd: "newWorker",
                id: this.id,
                path: absPath,
              });
            };
            Worker.prototype = {
              onerror: null,
              onmessage: null,
              postMessage: function (message) {
                self.postMessage({
                  _subworker: true,
                  id: this.id,
                  cmd: "passMessage",
                  message: message,
                });
              },
              terminate: function () {
                self.postMessage({
                  _subworker: true,
                  cmd: "terminate",
                  id: this.id,
                });
              },
              addEventListener: function (type, listener, useCapture) {
                if (this.eventListeners[type]) {
                  this.eventListeners[type].push(listener);
                }
              },
              removeEventListener: function (type, listener, useCapture) {
                if (!(type in this.eventListeners)) {
                  return;
                }
                var index = this.eventListeners[type].indexOf(listener);
                if (index !== -1) {
                  this.eventListeners[type].splice(index, 1);
                }
              },
              dispatchEvent: function (event) {
                var listeners = this.eventListeners[event.type];
                for (var i = 0; i < listeners.length; i++) {
                  listeners[i](event);
                }
              },
            };
          }
        } else {
          var allWorkers = {};
          var cmds = {
            newWorker: function (event) {
              var workerId = event.data.id;
              var worker = new Worker(event.data.path);
              worker.addEventListener("message", function (e) {
                var envelope = {
                  _subworker: true,
                  _from: workerId,
                  message: e.data,
                  cmd: "passMessage",
                };
                event.target.postMessage(envelope);
              });

              worker.addEventListener("error", function (e) {
                var envelope = {
                  _subworker: true,
                  _from: workerId,
                  errorProperties: {
                    message: e.message,
                    lineno: e.lineno,
                    filename: e.filename,
                    colno: e.colno,
                  },
                  cmd: "passError",
                };
                event.target.postMessage(envelope);
              });

              allWorkers[workerId] = worker;
            },
            terminate: function (event) {
              allWorkers[event.data.id].terminate();
            },
            passMessage: function (event) {
              allWorkers[event.data.id].postMessage(event.data.message);
            },
          };
          var messageRecieved = function (event) {
            if (event.data._subworker) {
              cmds[event.data.cmd](event);
            }
          };

          /* Hijack Worker */
          var oldWorker = Worker;
          Worker = function (path) {
            if (this.constructor !== Worker) {
              throw new TypeError(
                "Failed to construct 'Worker': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
              );
            }

            var blobIndex = path.indexOf("blob:");

            if (blobIndex !== -1 && blobIndex !== 0) {
              path = path.substring(blobIndex);
            }

            var newWorker = new oldWorker(path);
            newWorker.addEventListener("message", messageRecieved);

            return newWorker;
          };
        }
      };

      /***/
    },
    /* 16 */
    /***/ function (module, exports) {
      var g;

      // This works in non-strict mode
      g = (function () {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 17 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "span",
          [
            _c("math-term", _vm._b({}, "math-term", _vm.terms[0], false)),
            _vm._l(_vm.terms.slice(1), function (term, index) {
              return _c(
                "math-term",
                _vm._b({ key: index }, "math-term", term, false),
                [_vm._v(_vm._s(term.coefficient > 0 ? "+" : ""))]
              );
            }),
          ],
          2
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 18 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "span",
          [
            _vm._t("default"),
            !_vm.variables.length || _vm.coefficient != 1
              ? _c("span", [_vm._v(_vm._s(_vm.coefficient))])
              : _vm.coefficient == -1
              ? _c("span", [_vm._v("-")])
              : _vm._e(),
            _vm._l(_vm.variables, function (variable, index) {
              return _c(
                "math-exponential",
                _vm._b({ key: index }, "math-exponential", variable, false)
              );
            }),
          ],
          2
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 19 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("span", { staticClass: "exponential-container" }, [
          _c("span", { staticClass: "base" }, [
            _vm._v(
              _vm._s(
                _vm.base.length === 1 || _vm.power == 1
                  ? _vm.base
                  : "(" + _vm.base + ")"
              )
            ),
          ]),
          _vm.power != 1
            ? _c("span", { staticClass: "power" }, [_vm._v(_vm._s(_vm.power))])
            : _vm._e(),
        ]);
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 20 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("span", [
          _vm._v("Error: "),
          _c("span", { staticClass: "message" }, [
            _vm._v(_vm._s(_vm.error.message.replace(/^.*Error:/, ""))),
          ]),
        ]);
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 21 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("span", { staticClass: "fraction-container" }, [
          _c(
            "span",
            {
              staticClass: "top",
              class: !_vm.denomIsVisible ? "is-whole-number" : null,
            },
            [
              _vm._v(
                _vm._s(
                  _vm.numeLength >= _vm.denomLength
                    ? _vm.nume
                    : " ".repeat((_vm.numeLength - _vm.denomLength) / 2 + 1) +
                        " " +
                        _vm.nume +
                        " " +
                        " ".repeat((_vm.numeLength - _vm.denomLength) / 2 + 1)
                )
              ),
            ]
          ),
          _vm.denomIsVisible ? _c("br") : _vm._e(),
          _vm.denomIsVisible
            ? _c("span", { staticClass: "bottom" }, [_vm._v(_vm._s(_vm.denom))])
            : _vm._e(),
        ]);
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 22 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("span", [_vm._v(_vm._s(_vm.text))]);
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 23 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("span", [
          _vm._v(_vm._s(_vm.message)),
          _c("br"),
          _c("span", { staticClass: "first" }, [_vm._v(".")]),
          _c("span", { staticClass: "second" }, [_vm._v(".")]),
          _c("span", { staticClass: "third" }, [_vm._v(".")]),
        ]);
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 24 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "form",
          {
            attrs: { id: "quadraticForm", "accept-charset": "utf-8" },
            on: {
              submit: function ($event) {
                $event.preventDefault();
                return _vm.submit($event);
              },
            },
          },
          [
            _c("fieldset", [
              _c("legend", [_vm._v("Quadratic functions root finder ")]),
              _c("label", [
                _vm._v("Enter function: "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.argument,
                      expression: "argument",
                    },
                  ],
                  attrs: {
                    type: "text",
                    name: "argument",
                    disabled: _vm.waiting,
                    required: "required",
                  },
                  domProps: { value: _vm.argument },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.argument = $event.target.value;
                    },
                  },
                }),
              ]),
              _c(
                "button",
                { staticClass: "evaluator", attrs: { disabled: _vm.waiting } },
                [_vm._v("Evaluate")]
              ),
            ]),
          ]
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 25 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "form",
          {
            attrs: { id: "primeForm" },
            on: {
              submit: function ($event) {
                $event.preventDefault();
                return _vm.submit($event);
              },
            },
          },
          [
            _c("fieldset", [
              _c("legend", [_vm._v("Prime Number Finder")]),
              _c("label", [
                _vm._v("Enter Number: "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.argument,
                      expression: "argument",
                    },
                  ],
                  attrs: {
                    type: "number",
                    name: "argument",
                    disabled: _vm.waiting,
                    max: "100000000",
                    min: "1",
                    required: "required",
                  },
                  domProps: { value: _vm.argument },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.argument = $event.target.value;
                    },
                  },
                }),
              ]),
              _c(
                "button",
                { staticClass: "evaluator", attrs: { disabled: _vm.waiting } },
                [_vm._v("Find")]
              ),
            ]),
          ]
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 26 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "form",
          {
            attrs: { id: "binomialForm", "accept-charset": "utf-8" },
            on: {
              submit: function ($event) {
                $event.preventDefault();
                return _vm.submit($event);
              },
            },
          },
          [
            _c("fieldset", [
              _c("legend", [_vm._v("Binomial Functions Expander")]),
              _c("label", [_vm._v("Enter function: ")]),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.argument,
                    expression: "argument",
                  },
                ],
                attrs: {
                  type: "text",
                  name: "argument",
                  disabled: _vm.waiting,
                  pattern:
                    "\\([\\+\\-]?\\d*[a-zA-Z]*[\\+\\-]\\d*[a-zA-Z]*\\)(\\^\\(?[\\+]?\\d)?[\\+]?\\d*\\)?",
                  placeholder: "e.g. (4x+6)^2",
                  required: "required",
                },
                domProps: { value: _vm.argument },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.argument = $event.target.value;
                  },
                },
              }),
              _c(
                "button",
                { staticClass: "evaluator", attrs: { disabled: _vm.waiting } },
                [_vm._v("Expand")]
              ),
            ]),
          ]
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 27 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return render;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return staticRenderFns;
        }
      );
      var render = function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "form",
          {
            attrs: { id: "baseForm", "accept-charset": "utf-8" },
            on: {
              submit: function ($event) {
                $event.preventDefault();
                return _vm.submit($event);
              },
            },
          },
          [
            _c("fieldset", [
              _c("legend", [_vm._v("Base Converter ")]),
              _c("label", [
                _vm._v("Number: "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.number,
                      expression: "number",
                    },
                  ],
                  attrs: {
                    type: "text",
                    name: "number",
                    disabled: _vm.waiting,
                    readonly: _vm.waiting,
                    pattern: "^[\\-\\+]?((\\w+)|[\\-\\+]?((\\w+)?(\\.\\w+)))$",
                    required: "required",
                  },
                  domProps: { value: _vm.number },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.number = $event.target.value;
                    },
                  },
                }),
              ]),
              _c("label", [
                _vm._v("Base : "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.base,
                      expression: "base",
                    },
                  ],
                  attrs: {
                    type: "number",
                    name: "base",
                    disabled: _vm.waiting,
                    readonly: _vm.waiting,
                    max: "36",
                    min: "2",
                    required: "required",
                  },
                  domProps: { value: _vm.base },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.base = $event.target.value;
                    },
                  },
                }),
              ]),
              _c("label", [
                _vm._v("New Base : "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newBase,
                      expression: "newBase",
                    },
                  ],
                  attrs: {
                    type: "number",
                    name: "newbase",
                    disabled: _vm.waiting,
                    readonly: _vm.waiting,
                    max: "36",
                    min: "2",
                    required: "required",
                  },
                  domProps: { value: _vm.newBase },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return;
                      }
                      _vm.newBase = $event.target.value;
                    },
                  },
                }),
              ]),
              _c(
                "button",
                {
                  staticClass: "evaluator",
                  style: _vm.waiting ? "is-button-waiting" : null,
                  attrs: { disabled: _vm.waiting, readonly: _vm.waiting },
                },
                [_vm._v("Convert")]
              ),
            ]),
          ]
        );
      };
      var staticRenderFns = [];
      render._withStripped = true;

      if (false) {
      }

      /***/
    },
    /* 28 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_102814ca_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        19
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      function injectStyle(context) {
        if (disposed) return;
        __webpack_require__(40);
      }
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = injectStyle;
      /* scopeId */
      var __vue_scopeId__ = "data-v-102814ca";
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_102814ca_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_102814ca_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathExponential_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\mathExponential.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 29 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        5
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fc28686_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        18
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fc28686_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fc28686_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathTerm_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\mathTerm.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 30 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (global, setImmediate) {
        /*!
         * Vue.js v2.5.16
         * (c) 2014-2018 Evan You
         * Released under the MIT License.
         */
        /*  */

        var emptyObject = Object.freeze({});

        // these helpers produces better vm code in JS engines due to their
        // explicitness and function inlining
        function isUndef(v) {
          return v === undefined || v === null;
        }

        function isDef(v) {
          return v !== undefined && v !== null;
        }

        function isTrue(v) {
          return v === true;
        }

        function isFalse(v) {
          return v === false;
        }

        /**
         * Check if value is primitive
         */
        function isPrimitive(value) {
          return (
            typeof value === "string" ||
            typeof value === "number" ||
            // $flow-disable-line
            typeof value === "symbol" ||
            typeof value === "boolean"
          );
        }

        /**
         * Quick object check - this is primarily used to tell
         * Objects from primitive values when we know the value
         * is a JSON-compliant type.
         */
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }

        /**
         * Get the raw type string of a value e.g. [object Object]
         */
        var _toString = Object.prototype.toString;

        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }

        /**
         * Strict object type check. Only returns true
         * for plain JavaScript objects.
         */
        function isPlainObject(obj) {
          return _toString.call(obj) === "[object Object]";
        }

        function isRegExp(v) {
          return _toString.call(v) === "[object RegExp]";
        }

        /**
         * Check if val is a valid array index.
         */
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }

        /**
         * Convert a value to a string that is actually rendered.
         */
        function toString(val) {
          return val == null
            ? ""
            : typeof val === "object"
            ? JSON.stringify(val, null, 2)
            : String(val);
        }

        /**
         * Convert a input value to a number for persistence.
         * If the conversion fails, return original string.
         */
        function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        }

        /**
         * Make a map and return a function for checking if a key
         * is in that map.
         */
        function makeMap(str, expectsLowerCase) {
          var map = Object.create(null);
          var list = str.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase
            ? function (val) {
                return map[val.toLowerCase()];
              }
            : function (val) {
                return map[val];
              };
        }

        /**
         * Check if a tag is a built-in tag.
         */
        var isBuiltInTag = makeMap("slot,component", true);

        /**
         * Check if a attribute is a reserved attribute.
         */
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");

        /**
         * Remove an item from an array
         */
        function remove(arr, item) {
          if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
              return arr.splice(index, 1);
            }
          }
        }

        /**
         * Check whether the object has the property.
         */
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }

        /**
         * Create a cached version of a pure function.
         */
        function cached(fn) {
          var cache = Object.create(null);
          return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        }

        /**
         * Camelize a hyphen-delimited string.
         */
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function (str) {
          return str.replace(camelizeRE, function (_, c) {
            return c ? c.toUpperCase() : "";
          });
        });

        /**
         * Capitalize a string.
         */
        var capitalize = cached(function (str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        });

        /**
         * Hyphenate a camelCase string.
         */
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function (str) {
          return str.replace(hyphenateRE, "-$1").toLowerCase();
        });

        /**
         * Simple bind polyfill for environments that do not support it... e.g.
         * PhantomJS 1.x. Technically we don't need this anymore since native bind is
         * now more performant in most browsers, but removing it would be breaking for
         * code that was able to run in PhantomJS 1.x, so this must be kept for
         * backwards compatibility.
         */

        /* istanbul ignore next */
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l
              ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
              : fn.call(ctx);
          }

          boundFn._length = fn.length;
          return boundFn;
        }

        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }

        var bind = Function.prototype.bind ? nativeBind : polyfillBind;

        /**
         * Convert an Array-like object to a real Array.
         */
        function toArray(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        }

        /**
         * Mix properties into target object.
         */
        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }

        /**
         * Merge an Array of Objects into a single Object.
         */
        function toObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i]);
            }
          }
          return res;
        }

        /**
         * Perform no operation.
         * Stubbing args to make Flow happy without leaving useless transpiled code
         * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
         */
        function noop(a, b, c) {}

        /**
         * Always return false.
         */
        var no = function (a, b, c) {
          return false;
        };

        /**
         * Return same value
         */
        var identity = function (_) {
          return _;
        };

        /**
         * Generate a static keys string from compiler modules.
         */
        function genStaticKeys(modules) {
          return modules
            .reduce(function (keys, m) {
              return keys.concat(m.staticKeys || []);
            }, [])
            .join(",");
        }

        /**
         * Check if two values are loosely equal - that is,
         * if they are plain objects, do they have the same shape?
         */
        function looseEqual(a, b) {
          if (a === b) {
            return true;
          }
          var isObjectA = isObject(a);
          var isObjectB = isObject(b);
          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                return (
                  a.length === b.length &&
                  a.every(function (e, i) {
                    return looseEqual(e, b[i]);
                  })
                );
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return (
                  keysA.length === keysB.length &&
                  keysA.every(function (key) {
                    return looseEqual(a[key], b[key]);
                  })
                );
              } else {
                /* istanbul ignore next */
                return false;
              }
            } catch (e) {
              /* istanbul ignore next */
              return false;
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
          } else {
            return false;
          }
        }

        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
              return i;
            }
          }
          return -1;
        }

        /**
         * Ensure a function is called only once.
         */
        function once(fn) {
          var called = false;
          return function () {
            if (!called) {
              called = true;
              fn.apply(this, arguments);
            }
          };
        }

        var SSR_ATTR = "data-server-rendered";

        var ASSET_TYPES = ["component", "directive", "filter"];

        var LIFECYCLE_HOOKS = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
        ];

        /*  */

        var config = {
          /**
           * Option merge strategies (used in core/util/options)
           */
          // $flow-disable-line
          optionMergeStrategies: Object.create(null),

          /**
           * Whether to suppress warnings.
           */
          silent: false,

          /**
           * Show production mode tip message on boot?
           */
          productionTip: "production" !== "production",

          /**
           * Whether to enable devtools
           */
          devtools: "production" !== "production",

          /**
           * Whether to record perf
           */
          performance: false,

          /**
           * Error handler for watcher errors
           */
          errorHandler: null,

          /**
           * Warn handler for watcher warns
           */
          warnHandler: null,

          /**
           * Ignore certain custom elements
           */
          ignoredElements: [],

          /**
           * Custom user key aliases for v-on
           */
          // $flow-disable-line
          keyCodes: Object.create(null),

          /**
           * Check if a tag is reserved so that it cannot be registered as a
           * component. This is platform-dependent and may be overwritten.
           */
          isReservedTag: no,

          /**
           * Check if an attribute is reserved so that it cannot be used as a component
           * prop. This is platform-dependent and may be overwritten.
           */
          isReservedAttr: no,

          /**
           * Check if a tag is an unknown element.
           * Platform-dependent.
           */
          isUnknownElement: no,

          /**
           * Get the namespace of an element
           */
          getTagNamespace: noop,

          /**
           * Parse the real tag name for the specific platform.
           */
          parsePlatformTagName: identity,

          /**
           * Check if an attribute must be bound using property, e.g. value
           * Platform-dependent.
           */
          mustUseProp: no,

          /**
           * Exposed for legacy reasons
           */
          _lifecycleHooks: LIFECYCLE_HOOKS,
        };

        /*  */

        /**
         * Check if a string starts with $ or _
         */
        function isReserved(str) {
          var c = (str + "").charCodeAt(0);
          return c === 0x24 || c === 0x5f;
        }

        /**
         * Define a property.
         */
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true,
          });
        }

        /**
         * Parse simple path.
         */
        var bailRE = /[^\w.$]/;
        function parsePath(path) {
          if (bailRE.test(path)) {
            return;
          }
          var segments = path.split(".");
          return function (obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return;
              }
              obj = obj[segments[i]];
            }
            return obj;
          };
        }

        /*  */

        // can we use __proto__?
        var hasProto = "__proto__" in {};

        // Browser environment sniffing
        var inBrowser = typeof window !== "undefined";
        var inWeex =
          typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid =
          (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
        var isIOS =
          (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

        // Firefox has a "watch" function on Object.prototype...
        var nativeWatch = {}.watch;

        var supportsPassive = false;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function get() {
                /* istanbul ignore next */
                supportsPassive = true;
              },
            }); // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, opts);
          } catch (e) {}
        }

        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
        var _isServer;
        var isServerRendering = function () {
          if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && !inWeex && typeof global !== "undefined") {
              // detect presence of vue-server-renderer and avoid
              // Webpack shimming the process
              _isServer = global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };

        // detect devtools
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        /* istanbul ignore next */
        function isNative(Ctor) {
          return (
            typeof Ctor === "function" && /native code/.test(Ctor.toString())
          );
        }

        var hasSymbol =
          typeof Symbol !== "undefined" &&
          isNative(Symbol) &&
          typeof Reflect !== "undefined" &&
          isNative(Reflect.ownKeys);

        var _Set; // $flow-disable-line
        /* istanbul ignore if */ if (
          typeof Set !== "undefined" &&
          isNative(Set)
        ) {
          // use native Set when available.
          _Set = Set;
        } else {
          // a non-standard Set polyfill that only works with primitive keys.
          _Set = (function () {
            function Set() {
              this.set = Object.create(null);
            }
            Set.prototype.has = function has(key) {
              return this.set[key] === true;
            };
            Set.prototype.add = function add(key) {
              this.set[key] = true;
            };
            Set.prototype.clear = function clear() {
              this.set = Object.create(null);
            };

            return Set;
          })();
        }

        /*  */

        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop; // work around flow check
        var formatComponentName = noop;

        if (false) {
          var repeat, classify, classifyRE, hasConsole;
        }

        /*  */

        var uid = 0;

        /**
         * A dep is an observable that can have multiple
         * directives subscribing to it.
         */
        var Dep = function Dep() {
          this.id = uid++;
          this.subs = [];
        };

        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub);
        };

        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub);
        };

        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        };

        Dep.prototype.notify = function notify() {
          // stabilize the subscriber list first
          var subs = this.subs.slice();
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };

        // the current target watcher being evaluated.
        // this is globally unique because there could be only one
        // watcher being evaluated at any time.
        Dep.target = null;
        var targetStack = [];

        function pushTarget(_target) {
          if (Dep.target) {
            targetStack.push(Dep.target);
          }
          Dep.target = _target;
        }

        function popTarget() {
          Dep.target = targetStack.pop();
        }

        /*  */

        var VNode = function VNode(
          tag,
          data,
          children,
          text,
          elm,
          context,
          componentOptions,
          asyncFactory
        ) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text;
          this.elm = elm;
          this.ns = undefined;
          this.context = context;
          this.fnContext = undefined;
          this.fnOptions = undefined;
          this.fnScopeId = undefined;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = undefined;
          this.parent = undefined;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = undefined;
          this.isAsyncPlaceholder = false;
        };

        var prototypeAccessors = { child: { configurable: true } };

        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        prototypeAccessors.child.get = function () {
          return this.componentInstance;
        };

        Object.defineProperties(VNode.prototype, prototypeAccessors);

        var createEmptyVNode = function (text) {
          if (text === void 0) text = "";

          var node = new VNode();
          node.text = text;
          node.isComment = true;
          return node;
        };

        function createTextVNode(val) {
          return new VNode(undefined, undefined, undefined, String(val));
        }

        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
        function cloneVNode(vnode) {
          var cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children,
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
          );
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;
          cloned.isComment = vnode.isComment;
          cloned.fnContext = vnode.fnContext;
          cloned.fnOptions = vnode.fnOptions;
          cloned.fnScopeId = vnode.fnScopeId;
          cloned.isCloned = true;
          return cloned;
        }

        /*
         * not type checking this file because flow doesn't play well with
         * dynamically accessing methods on Array prototype
         */

        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);

        var methodsToPatch = [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse",
        ];

        /**
         * Intercept mutating methods and emit events
         */
        methodsToPatch.forEach(function (method) {
          // cache original method
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];

            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted) {
              ob.observeArray(inserted);
            }
            // notify change
            ob.dep.notify();
            return result;
          });
        });

        /*  */

        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

        /**
         * In some cases we may want to disable observation inside a component's
         * update computation.
         */
        var shouldObserve = true;

        function toggleObserving(value) {
          shouldObserve = value;
        }

        /**
         * Observer class that is attached to each observed
         * object. Once attached, the observer converts the target
         * object's property keys into getter/setters that
         * collect dependencies and dispatch updates.
         */
        var Observer = function Observer(value) {
          this.value = value;
          this.dep = new Dep();
          this.vmCount = 0;
          def(value, "__ob__", this);
          if (Array.isArray(value)) {
            var augment = hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        };

        /**
         * Walk through each property and convert them into
         * getter/setters. This method should only be called when
         * value type is Object.
         */
        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
          }
        };

        /**
         * Observe a list of Array items.
         */
        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        };

        // helpers

        /**
         * Augment an target Object or Array by intercepting
         * the prototype chain using __proto__
         */
        function protoAugment(target, src, keys) {
          /* eslint-disable no-proto */
          target.__proto__ = src;
          /* eslint-enable no-proto */
        }

        /**
         * Augment an target Object or Array by defining
         * hidden properties.
         */
        /* istanbul ignore next */
        function copyAugment(target, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target, key, src[key]);
          }
        }

        /**
         * Attempt to create an observer instance for a value,
         * returns the new observer if successfully observed,
         * or the existing observer if the value already has one.
         */
        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return;
          }
          var ob;
          if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
          } else if (
            shouldObserve &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
          ) {
            ob = new Observer(value);
          }
          if (asRootData && ob) {
            ob.vmCount++;
          }
          return ob;
        }

        /**
         * Define a reactive property on an Object.
         */
        function defineReactive(obj, key, val, customSetter, shallow) {
          var dep = new Dep();

          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }

          // cater for pre-defined getter/setters
          var getter = property && property.get;
          if (!getter && arguments.length === 2) {
            val = obj[key];
          }
          var setter = property && property.set;

          var childOb = !shallow && observe(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                  if (Array.isArray(value)) {
                    dependArray(value);
                  }
                }
              }
              return value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              /* eslint-disable no-self-compare */
              if (newVal === value || (newVal !== newVal && value !== value)) {
                return;
              }
              /* eslint-enable no-self-compare */
              if (false) {
              }
              if (setter) {
                setter.call(obj, newVal);
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal);
              dep.notify();
            },
          });
        }

        /**
         * Set a property on an object. Adds the new property and
         * triggers change notification if the property doesn't
         * already exist.
         */
        function set(target, key, val) {
          if (false) {
          }
          if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            return val;
          }
          if (key in target && !(key in Object.prototype)) {
            target[key] = val;
            return val;
          }
          var ob = target.__ob__;
          if (target._isVue || (ob && ob.vmCount)) {
            "production" !== "production" &&
              warn(
                "Avoid adding reactive properties to a Vue instance or its root $data " +
                  "at runtime - declare it upfront in the data option."
              );
            return val;
          }
          if (!ob) {
            target[key] = val;
            return val;
          }
          defineReactive(ob.value, key, val);
          ob.dep.notify();
          return val;
        }

        /**
         * Delete a property and trigger change if necessary.
         */
        function del(target, key) {
          if (false) {
          }
          if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1);
            return;
          }
          var ob = target.__ob__;
          if (target._isVue || (ob && ob.vmCount)) {
            "production" !== "production" &&
              warn(
                "Avoid deleting properties on a Vue instance or its root $data " +
                  "- just set it to null."
              );
            return;
          }
          if (!hasOwn(target, key)) {
            return;
          }
          delete target[key];
          if (!ob) {
            return;
          }
          ob.dep.notify();
        }

        /**
         * Collect dependencies on array elements when the array is touched, since
         * we cannot intercept array element access like property getters.
         */
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
              dependArray(e);
            }
          }
        }

        /*  */

        /**
         * Option overwriting strategies are functions that handle
         * how to merge a parent option value and a child option
         * value into the final value.
         */
        var strats = config.optionMergeStrategies;

        /**
         * Options with restrictions
         */
        if (false) {
        }

        /**
         * Helper that recursively merges two data objects together.
         */
        function mergeData(to, from) {
          if (!from) {
            return to;
          }
          var key, toVal, fromVal;
          var keys = Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
              set(to, key, fromVal);
            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }

        /**
         * Data
         */
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
              return mergeData(
                typeof childVal === "function"
                  ? childVal.call(this, this)
                  : childVal,
                typeof parentVal === "function"
                  ? parentVal.call(this, this)
                  : parentVal
              );
            };
          } else {
            return function mergedInstanceDataFn() {
              // instance merge
              var instanceData =
                typeof childVal === "function"
                  ? childVal.call(vm, vm)
                  : childVal;
              var defaultData =
                typeof parentVal === "function"
                  ? parentVal.call(vm, vm)
                  : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }

        strats.data = function (parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              "production" !== "production" &&
                warn(
                  'The "data" option should be a function ' +
                    "that returns a per-instance value in component " +
                    "definitions.",
                  vm
                );

              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }

          return mergeDataOrFn(parentVal, childVal, vm);
        };

        /**
         * Hooks and props are merged as arrays.
         */
        function mergeHook(parentVal, childVal) {
          return childVal
            ? parentVal
              ? parentVal.concat(childVal)
              : Array.isArray(childVal)
              ? childVal
              : [childVal]
            : parentVal;
        }

        LIFECYCLE_HOOKS.forEach(function (hook) {
          strats[hook] = mergeHook;
        });

        /**
         * Assets
         *
         * When a vm is present (instance creation), we need to do
         * a three-way merge between constructor options, instance
         * options and parent options.
         */
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            "production" !== "production" &&
              assertObjectType(key, childVal, vm);
            return extend(res, childVal);
          } else {
            return res;
          }
        }

        ASSET_TYPES.forEach(function (type) {
          strats[type + "s"] = mergeAssets;
        });

        /**
         * Watchers.
         *
         * Watchers hashes should not overwrite one
         * another, so we merge them as arrays.
         */
        strats.watch = function (parentVal, childVal, vm, key) {
          // work around Firefox's Object.prototype.watch...
          if (parentVal === nativeWatch) {
            parentVal = undefined;
          }
          if (childVal === nativeWatch) {
            childVal = undefined;
          }
          /* istanbul ignore if */
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          if (false) {
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = {};
          extend(ret, parentVal);
          for (var key$1 in childVal) {
            var parent = ret[key$1];
            var child = childVal[key$1];
            if (parent && !Array.isArray(parent)) {
              parent = [parent];
            }
            ret[key$1] = parent
              ? parent.concat(child)
              : Array.isArray(child)
              ? child
              : [child];
          }
          return ret;
        };

        /**
         * Other object hashes.
         */
        strats.props = strats.methods = strats.inject = strats.computed = function (
          parentVal,
          childVal,
          vm,
          key
        ) {
          if (childVal && "production" !== "production") {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = Object.create(null);
          extend(ret, parentVal);
          if (childVal) {
            extend(ret, childVal);
          }
          return ret;
        };
        strats.provide = mergeDataOrFn;

        /**
         * Default strategy.
         */
        var defaultStrat = function (parentVal, childVal) {
          return childVal === undefined ? parentVal : childVal;
        };

        /**
         * Validate component names
         */
        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key);
          }
        }

        function validateComponentName(name) {
          if (!/^[a-zA-Z][\w-]*$/.test(name)) {
            warn(
              'Invalid component name: "' +
                name +
                '". Component names ' +
                "can only contain alphanumeric characters and the hyphen, " +
                "and must start with a letter."
            );
          }
          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn(
              "Do not use built-in or reserved HTML elements as component " +
                "id: " +
                name
            );
          }
        }

        /**
         * Ensure all props option syntax are normalized into the
         * Object-based format.
         */
        function normalizeProps(options, vm) {
          var props = options.props;
          if (!props) {
            return;
          }
          var res = {};
          var i, val, name;
          if (Array.isArray(props)) {
            i = props.length;
            while (i--) {
              val = props[i];
              if (typeof val === "string") {
                name = camelize(val);
                res[name] = { type: null };
              } else if (false) {
              }
            }
          } else if (isPlainObject(props)) {
            for (var key in props) {
              val = props[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : { type: val };
            }
          } else if (false) {
          }
          options.props = res;
        }

        /**
         * Normalize all injections into Object-based format
         */
        function normalizeInject(options, vm) {
          var inject = options.inject;
          if (!inject) {
            return;
          }
          var normalized = (options.inject = {});
          if (Array.isArray(inject)) {
            for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = { from: inject[i] };
            }
          } else if (isPlainObject(inject)) {
            for (var key in inject) {
              var val = inject[key];
              normalized[key] = isPlainObject(val)
                ? extend({ from: key }, val)
                : { from: val };
            }
          } else if (false) {
          }
        }

        /**
         * Normalize raw function directives into object format.
         */
        function normalizeDirectives(options) {
          var dirs = options.directives;
          if (dirs) {
            for (var key in dirs) {
              var def = dirs[key];
              if (typeof def === "function") {
                dirs[key] = { bind: def, update: def };
              }
            }
          }
        }

        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn(
              'Invalid value for option "' +
                name +
                '": expected an Object, ' +
                "but got " +
                toRawType(value) +
                ".",
              vm
            );
          }
        }

        /**
         * Merge two option objects into a new one.
         * Core utility used in both instantiation and inheritance.
         */
        function mergeOptions(parent, child, vm) {
          if (false) {
          }

          if (typeof child === "function") {
            child = child.options;
          }

          normalizeProps(child, vm);
          normalizeInject(child, vm);
          normalizeDirectives(child);
          var extendsFrom = child.extends;
          if (extendsFrom) {
            parent = mergeOptions(parent, extendsFrom, vm);
          }
          if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
              parent = mergeOptions(parent, child.mixins[i], vm);
            }
          }
          var options = {};
          var key;
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!hasOwn(parent, key)) {
              mergeField(key);
            }
          }
          function mergeField(key) {
            var strat = strats[key] || defaultStrat;
            options[key] = strat(parent[key], child[key], vm, key);
          }
          return options;
        }

        /**
         * Resolve an asset.
         * This function is used because child instances need access
         * to assets defined in its ancestor chain.
         */
        function resolveAsset(options, type, id, warnMissing) {
          /* istanbul ignore if */
          if (typeof id !== "string") {
            return;
          }
          var assets = options[type];
          // check local registration variations first
          if (hasOwn(assets, id)) {
            return assets[id];
          }
          var camelizedId = camelize(id);
          if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId];
          }
          var PascalCaseId = capitalize(camelizedId);
          if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId];
          }
          // fallback to prototype chain
          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
          if (false) {
          }
          return res;
        }

        /*  */

        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key];
          var absent = !hasOwn(propsData, key);
          var value = propsData[key];
          // boolean casting
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, "default")) {
              value = false;
            } else if (value === "" || value === hyphenate(key)) {
              // only cast empty string / same name to boolean if
              // boolean has higher priority
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
              }
            }
          }
          // check default value
          if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key);
            // since the default value is a fresh copy,
            // make sure to observe it.
            var prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
          }
          if (false) {
          }
          return value;
        }

        /**
         * Get the default value of a prop.
         */
        function getPropDefaultValue(vm, prop, key) {
          // no default, return undefined
          if (!hasOwn(prop, "default")) {
            return undefined;
          }
          var def = prop.default;
          // warn against non-factory defaults for Object & Array
          if (false) {
          }
          // the raw prop value was also undefined from previous render,
          // return previous default value to avoid unnecessary watcher trigger
          if (
            vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
          ) {
            return vm._props[key];
          }
          // call factory function for non-Function types
          // a value is Function if its prototype is function even across different execution context
          return typeof def === "function" && getType(prop.type) !== "Function"
            ? def.call(vm)
            : def;
        }

        /**
         * Assert whether a prop is valid.
         */
        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn('Missing required prop: "' + name + '"', vm);
            return;
          }
          if (value == null && !prop.required) {
            return;
          }
          var type = prop.type;
          var valid = !type || type === true;
          var expectedTypes = [];
          if (type) {
            if (!Array.isArray(type)) {
              type = [type];
            }
            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i]);
              expectedTypes.push(assertedType.expectedType || "");
              valid = assertedType.valid;
            }
          }
          if (!valid) {
            warn(
              'Invalid prop: type check failed for prop "' +
                name +
                '".' +
                " Expected " +
                expectedTypes.map(capitalize).join(", ") +
                ", got " +
                toRawType(value) +
                ".",
              vm
            );
            return;
          }
          var validator = prop.validator;
          if (validator) {
            if (!validator(value)) {
              warn(
                'Invalid prop: custom validator check failed for prop "' +
                  name +
                  '".',
                vm
              );
            }
          }
        }

        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

        function assertType(value, type) {
          var valid;
          var expectedType = getType(type);
          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value;
            valid = t === expectedType.toLowerCase();
            // for primitive wrapper objects
            if (!valid && t === "object") {
              valid = value instanceof type;
            }
          } else if (expectedType === "Object") {
            valid = isPlainObject(value);
          } else if (expectedType === "Array") {
            valid = Array.isArray(value);
          } else {
            valid = value instanceof type;
          }
          return {
            valid: valid,
            expectedType: expectedType,
          };
        }

        /**
         * Use function string name to check built-in types,
         * because a simple equality check will fail when running
         * across different vms / iframes.
         */
        function getType(fn) {
          var match = fn && fn.toString().match(/^\s*function (\w+)/);
          return match ? match[1] : "";
        }

        function isSameType(a, b) {
          return getType(a) === getType(b);
        }

        function getTypeIndex(type, expectedTypes) {
          if (!Array.isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          for (var i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i;
            }
          }
          return -1;
        }

        /*  */

        function handleError(err, vm, info) {
          if (vm) {
            var cur = vm;
            while ((cur = cur.$parent)) {
              var hooks = cur.$options.errorCaptured;
              if (hooks) {
                for (var i = 0; i < hooks.length; i++) {
                  try {
                    var capture = hooks[i].call(cur, err, vm, info) === false;
                    if (capture) {
                      return;
                    }
                  } catch (e) {
                    globalHandleError(e, cur, "errorCaptured hook");
                  }
                }
              }
            }
          }
          globalHandleError(err, vm, info);
        }

        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
              logError(e, null, "config.errorHandler");
            }
          }
          logError(err, vm, info);
        }

        function logError(err, vm, info) {
          if (false) {
          }
          /* istanbul ignore else */
          if ((inBrowser || inWeex) && typeof console !== "undefined") {
            console.error(err);
          } else {
            throw err;
          }
        }

        /*  */
        /* globals MessageChannel */

        var callbacks = [];
        var pending = false;

        function flushCallbacks() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }

        // Here we have async deferring wrappers using both microtasks and (macro) tasks.
        // In < 2.4 we used microtasks everywhere, but there are some scenarios where
        // microtasks have too high a priority and fire in between supposedly
        // sequential events (e.g. #4521, #6690) or even between bubbling of the same
        // event (#6566). However, using (macro) tasks everywhere also has subtle problems
        // when state is changed right before repaint (e.g. #6813, out-in transitions).
        // Here we use microtask by default, but expose a way to force (macro) task when
        // needed (e.g. in event handlers attached by v-on).
        var microTimerFunc;
        var macroTimerFunc;
        var useMacroTask = false;

        // Determine (macro) task defer implementation.
        // Technically setImmediate should be the ideal choice, but it's only available
        // in IE. The only polyfill that consistently queues the callback after all DOM
        // events triggered in the same loop is by using MessageChannel.
        /* istanbul ignore if */
        if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
          macroTimerFunc = function () {
            setImmediate(flushCallbacks);
          };
        } else if (
          typeof MessageChannel !== "undefined" &&
          (isNative(MessageChannel) ||
            // PhantomJS
            MessageChannel.toString() === "[object MessageChannelConstructor]")
        ) {
          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = flushCallbacks;
          macroTimerFunc = function () {
            port.postMessage(1);
          };
        } else {
          /* istanbul ignore next */
          macroTimerFunc = function () {
            setTimeout(flushCallbacks, 0);
          };
        }

        // Determine microtask defer implementation.
        /* istanbul ignore next, $flow-disable-line */
        if (typeof Promise !== "undefined" && isNative(Promise)) {
          var p = Promise.resolve();
          microTimerFunc = function () {
            p.then(flushCallbacks);
            // in problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.
            if (isIOS) {
              setTimeout(noop);
            }
          };
        } else {
          // fallback to macro
          microTimerFunc = macroTimerFunc;
        }

        /**
         * Wrap a function so that if any code inside triggers state change,
         * the changes are queued using a (macro) task instead of a microtask.
         */
        function withMacroTask(fn) {
          return (
            fn._withTask ||
            (fn._withTask = function () {
              useMacroTask = true;
              var res = fn.apply(null, arguments);
              useMacroTask = false;
              return res;
            })
          );
        }

        function nextTick(cb, ctx) {
          var _resolve;
          callbacks.push(function () {
            if (cb) {
              try {
                cb.call(ctx);
              } catch (e) {
                handleError(e, ctx, "nextTick");
              }
            } else if (_resolve) {
              _resolve(ctx);
            }
          });
          if (!pending) {
            pending = true;
            if (useMacroTask) {
              macroTimerFunc();
            } else {
              microTimerFunc();
            }
          }
          // $flow-disable-line
          if (!cb && typeof Promise !== "undefined") {
            return new Promise(function (resolve) {
              _resolve = resolve;
            });
          }
        }

        /*  */

        var mark;
        var measure;

        if (false) {
          var perf;
        }

        /* not type checking this file because flow doesn't play well with Proxy */

        var initProxy;

        if (false) {
          var getHandler,
            hasHandler,
            isBuiltInModifier,
            hasProxy,
            warnNonPresent,
            allowedGlobals;
        }

        /*  */

        var seenObjects = new _Set();

        /**
         * Recursively traverse an object to evoke all converted
         * getters, so that every nested property inside the object
         * is collected as a "deep" dependency.
         */
        function traverse(val) {
          _traverse(val, seenObjects);
          seenObjects.clear();
        }

        function _traverse(val, seen) {
          var i, keys;
          var isA = Array.isArray(val);
          if (
            (!isA && !isObject(val)) ||
            Object.isFrozen(val) ||
            val instanceof VNode
          ) {
            return;
          }
          if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
              return;
            }
            seen.add(depId);
          }
          if (isA) {
            i = val.length;
            while (i--) {
              _traverse(val[i], seen);
            }
          } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--) {
              _traverse(val[keys[i]], seen);
            }
          }
        }

        /*  */

        var normalizeEvent = cached(function (name) {
          var passive = name.charAt(0) === "&";
          name = passive ? name.slice(1) : name;
          var once$$1 = name.charAt(0) === "~"; // Prefixed last, checked first
          name = once$$1 ? name.slice(1) : name;
          var capture = name.charAt(0) === "!";
          name = capture ? name.slice(1) : name;
          return {
            name: name,
            once: once$$1,
            capture: capture,
            passive: passive,
          };
        });

        function createFnInvoker(fns) {
          function invoker() {
            var arguments$1 = arguments;

            var fns = invoker.fns;
            if (Array.isArray(fns)) {
              var cloned = fns.slice();
              for (var i = 0; i < cloned.length; i++) {
                cloned[i].apply(null, arguments$1);
              }
            } else {
              // return handler return value for single handlers
              return fns.apply(null, arguments);
            }
          }
          invoker.fns = fns;
          return invoker;
        }

        function updateListeners(on, oldOn, add, remove$$1, vm) {
          var name, def, cur, old, event;
          for (name in on) {
            def = cur = on[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            /* istanbul ignore if */
            if (isUndef(cur)) {
              "production" !== "production" &&
                warn(
                  'Invalid handler for event "' +
                    event.name +
                    '": got ' +
                    String(cur),
                  vm
                );
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur);
              }
              add(
                event.name,
                cur,
                event.once,
                event.capture,
                event.passive,
                event.params
              );
            } else if (cur !== old) {
              old.fns = cur;
              on[name] = old;
            }
          }
          for (name in oldOn) {
            if (isUndef(on[name])) {
              event = normalizeEvent(name);
              remove$$1(event.name, oldOn[name], event.capture);
            }
          }
        }

        /*  */

        function mergeVNodeHook(def, hookKey, hook) {
          if (def instanceof VNode) {
            def = def.data.hook || (def.data.hook = {});
          }
          var invoker;
          var oldHook = def[hookKey];

          function wrappedHook() {
            hook.apply(this, arguments);
            // important: remove merged hook to ensure it's called only once
            // and prevent memory leak
            remove(invoker.fns, wrappedHook);
          }

          if (isUndef(oldHook)) {
            // no existing hook
            invoker = createFnInvoker([wrappedHook]);
          } else {
            /* istanbul ignore if */
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              // already a merged invoker
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
            } else {
              // existing plain hook
              invoker = createFnInvoker([oldHook, wrappedHook]);
            }
          }

          invoker.merged = true;
          def[hookKey] = invoker;
        }

        /*  */

        function extractPropsFromVNodeData(data, Ctor, tag) {
          // we are only extracting raw values here.
          // validation and default values are handled in the child
          // component itself.
          var propOptions = Ctor.options.props;
          if (isUndef(propOptions)) {
            return;
          }
          var res = {};
          var attrs = data.attrs;
          var props = data.props;
          if (isDef(attrs) || isDef(props)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key);
              if (false) {
                var keyInLowerCase;
              }
              checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false);
            }
          }
          return res;
        }

        function checkProp(res, hash, key, altKey, preserve) {
          if (isDef(hash)) {
            if (hasOwn(hash, key)) {
              res[key] = hash[key];
              if (!preserve) {
                delete hash[key];
              }
              return true;
            } else if (hasOwn(hash, altKey)) {
              res[key] = hash[altKey];
              if (!preserve) {
                delete hash[altKey];
              }
              return true;
            }
          }
          return false;
        }

        /*  */

        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:

        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.
        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
              return Array.prototype.concat.apply([], children);
            }
          }
          return children;
        }

        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
        function normalizeChildren(children) {
          return isPrimitive(children)
            ? [createTextVNode(children)]
            : Array.isArray(children)
            ? normalizeArrayChildren(children)
            : undefined;
        }

        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }

        function normalizeArrayChildren(children, nestedIndex) {
          var res = [];
          var i, c, lastIndex, last;
          for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === "boolean") {
              continue;
            }
            lastIndex = res.length - 1;
            last = res[lastIndex];
            //  nested
            if (Array.isArray(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text);
                  c.shift();
                }
                res.push.apply(res, c);
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c);
              } else if (c !== "") {
                // convert primitive to vnode
                res.push(createTextVNode(c));
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text);
              } else {
                // default key for nested array children (likely generated by v-for)
                if (
                  isTrue(children._isVList) &&
                  isDef(c.tag) &&
                  isUndef(c.key) &&
                  isDef(nestedIndex)
                ) {
                  c.key = "__vlist" + nestedIndex + "_" + i + "__";
                }
                res.push(c);
              }
            }
          }
          return res;
        }

        /*  */

        function ensureCtor(comp, base) {
          if (
            comp.__esModule ||
            (hasSymbol && comp[Symbol.toStringTag] === "Module")
          ) {
            comp = comp.default;
          }
          return isObject(comp) ? base.extend(comp) : comp;
        }

        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode();
          node.asyncFactory = factory;
          node.asyncMeta = {
            data: data,
            context: context,
            children: children,
            tag: tag,
          };
          return node;
        }

        function resolveAsyncComponent(factory, baseCtor, context) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
          }

          if (isDef(factory.resolved)) {
            return factory.resolved;
          }

          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
          }

          if (isDef(factory.contexts)) {
            // already pending
            factory.contexts.push(context);
          } else {
            var contexts = (factory.contexts = [context]);
            var sync = true;

            var forceRender = function () {
              for (var i = 0, l = contexts.length; i < l; i++) {
                contexts[i].$forceUpdate();
              }
            };

            var resolve = once(function (res) {
              // cache resolved
              factory.resolved = ensureCtor(res, baseCtor);
              // invoke callbacks only if this is not a synchronous resolve
              // (async resolves are shimmed as synchronous during SSR)
              if (!sync) {
                forceRender();
              }
            });

            var reject = once(function (reason) {
              "production" !== "production" &&
                warn(
                  "Failed to resolve async component: " +
                    String(factory) +
                    (reason ? "\nReason: " + reason : "")
                );
              if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender();
              }
            });

            var res = factory(resolve, reject);

            if (isObject(res)) {
              if (typeof res.then === "function") {
                // () => Promise
                if (isUndef(factory.resolved)) {
                  res.then(resolve, reject);
                }
              } else if (
                isDef(res.component) &&
                typeof res.component.then === "function"
              ) {
                res.component.then(resolve, reject);

                if (isDef(res.error)) {
                  factory.errorComp = ensureCtor(res.error, baseCtor);
                }

                if (isDef(res.loading)) {
                  factory.loadingComp = ensureCtor(res.loading, baseCtor);
                  if (res.delay === 0) {
                    factory.loading = true;
                  } else {
                    setTimeout(function () {
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true;
                        forceRender();
                      }
                    }, res.delay || 200);
                  }
                }

                if (isDef(res.timeout)) {
                  setTimeout(function () {
                    if (isUndef(factory.resolved)) {
                      reject(false ? undefined : null);
                    }
                  }, res.timeout);
                }
              }
            }

            sync = false;
            // return in case resolved synchronously
            return factory.loading ? factory.loadingComp : factory.resolved;
          }
        }

        /*  */

        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory;
        }

        /*  */

        function getFirstComponentChild(children) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (
                isDef(c) &&
                (isDef(c.componentOptions) || isAsyncPlaceholder(c))
              ) {
                return c;
              }
            }
          }
        }

        /*  */

        /*  */

        function initEvents(vm) {
          vm._events = Object.create(null);
          vm._hasHookEvent = false;
          // init parent attached events
          var listeners = vm.$options._parentListeners;
          if (listeners) {
            updateComponentListeners(vm, listeners);
          }
        }

        var target;

        function add(event, fn, once) {
          if (once) {
            target.$once(event, fn);
          } else {
            target.$on(event, fn);
          }
        }

        function remove$1(event, fn) {
          target.$off(event, fn);
        }

        function updateComponentListeners(vm, listeners, oldListeners) {
          target = vm;
          updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
          target = undefined;
        }

        function eventsMixin(Vue) {
          var hookRE = /^hook:/;
          Vue.prototype.$on = function (event, fn) {
            var this$1 = this;

            var vm = this;
            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                this$1.$on(event[i], fn);
              }
            } else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              // optimize hook:event cost by using a boolean flag marked at registration
              // instead of a hash lookup
              if (hookRE.test(event)) {
                vm._hasHookEvent = true;
              }
            }
            return vm;
          };

          Vue.prototype.$once = function (event, fn) {
            var vm = this;
            function on() {
              vm.$off(event, on);
              fn.apply(vm, arguments);
            }
            on.fn = fn;
            vm.$on(event, on);
            return vm;
          };

          Vue.prototype.$off = function (event, fn) {
            var this$1 = this;

            var vm = this;
            // all
            if (!arguments.length) {
              vm._events = Object.create(null);
              return vm;
            }
            // array of events
            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                this$1.$off(event[i], fn);
              }
              return vm;
            }
            // specific event
            var cbs = vm._events[event];
            if (!cbs) {
              return vm;
            }
            if (!fn) {
              vm._events[event] = null;
              return vm;
            }
            if (fn) {
              // specific handler
              var cb;
              var i$1 = cbs.length;
              while (i$1--) {
                cb = cbs[i$1];
                if (cb === fn || cb.fn === fn) {
                  cbs.splice(i$1, 1);
                  break;
                }
              }
            }
            return vm;
          };

          Vue.prototype.$emit = function (event) {
            var vm = this;
            if (false) {
              var lowerCaseEvent;
            }
            var cbs = vm._events[event];
            if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs;
              var args = toArray(arguments, 1);
              for (var i = 0, l = cbs.length; i < l; i++) {
                try {
                  cbs[i].apply(vm, args);
                } catch (e) {
                  handleError(e, vm, 'event handler for "' + event + '"');
                }
              }
            }
            return vm;
          };
        }

        /*  */

        /**
         * Runtime helper for resolving raw children VNodes into a slot object.
         */
        function resolveSlots(children, context) {
          var slots = {};
          if (!children) {
            return slots;
          }
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            var data = child.data;
            // remove slot attribute if the node is resolved as a Vue slot node
            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
            }
            // named slots should only be respected if the vnode was rendered in the
            // same context.
            if (
              (child.context === context || child.fnContext === context) &&
              data &&
              data.slot != null
            ) {
              var name = data.slot;
              var slot = slots[name] || (slots[name] = []);
              if (child.tag === "template") {
                slot.push.apply(slot, child.children || []);
              } else {
                slot.push(child);
              }
            } else {
              (slots.default || (slots.default = [])).push(child);
            }
          }
          // ignore slots that contains only whitespace
          for (var name$1 in slots) {
            if (slots[name$1].every(isWhitespace)) {
              delete slots[name$1];
            }
          }
          return slots;
        }

        function isWhitespace(node) {
          return (node.isComment && !node.asyncFactory) || node.text === " ";
        }

        function resolveScopedSlots(
          fns, // see flow/vnode
          res
        ) {
          res = res || {};
          for (var i = 0; i < fns.length; i++) {
            if (Array.isArray(fns[i])) {
              resolveScopedSlots(fns[i], res);
            } else {
              res[fns[i].key] = fns[i].fn;
            }
          }
          return res;
        }

        /*  */

        var activeInstance = null;
        var isUpdatingChildComponent = false;

        function initLifecycle(vm) {
          var options = vm.$options;

          // locate first non-abstract parent
          var parent = options.parent;
          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
            }
            parent.$children.push(vm);
          }

          vm.$parent = parent;
          vm.$root = parent ? parent.$root : vm;

          vm.$children = [];
          vm.$refs = {};

          vm._watcher = null;
          vm._inactive = null;
          vm._directInactive = false;
          vm._isMounted = false;
          vm._isDestroyed = false;
          vm._isBeingDestroyed = false;
        }

        function lifecycleMixin(Vue) {
          Vue.prototype._update = function (vnode, hydrating) {
            var vm = this;
            if (vm._isMounted) {
              callHook(vm, "beforeUpdate");
            }
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            var prevActiveInstance = activeInstance;
            activeInstance = vm;
            vm._vnode = vnode;
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
            if (!prevVnode) {
              // initial render
              vm.$el = vm.__patch__(
                vm.$el,
                vnode,
                hydrating,
                false /* removeOnly */,
                vm.$options._parentElm,
                vm.$options._refElm
              );
              // no need for the ref nodes after initial patch
              // this prevents keeping a detached DOM tree in memory (#5851)
              vm.$options._parentElm = vm.$options._refElm = null;
            } else {
              // updates
              vm.$el = vm.__patch__(prevVnode, vnode);
            }
            activeInstance = prevActiveInstance;
            // update __vue__ reference
            if (prevEl) {
              prevEl.__vue__ = null;
            }
            if (vm.$el) {
              vm.$el.__vue__ = vm;
            }
            // if parent is an HOC, update its $el as well
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
              vm.$parent.$el = vm.$el;
            }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
          };

          Vue.prototype.$forceUpdate = function () {
            var vm = this;
            if (vm._watcher) {
              vm._watcher.update();
            }
          };

          Vue.prototype.$destroy = function () {
            var vm = this;
            if (vm._isBeingDestroyed) {
              return;
            }
            callHook(vm, "beforeDestroy");
            vm._isBeingDestroyed = true;
            // remove self from parent
            var parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove(parent.$children, vm);
            }
            // teardown watchers
            if (vm._watcher) {
              vm._watcher.teardown();
            }
            var i = vm._watchers.length;
            while (i--) {
              vm._watchers[i].teardown();
            }
            // remove reference from data ob
            // frozen object may not have observer.
            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
            }
            // call the last hook...
            vm._isDestroyed = true;
            // invoke destroy hooks on current rendered tree
            vm.__patch__(vm._vnode, null);
            // fire destroyed hook
            callHook(vm, "destroyed");
            // turn off all instance listeners.
            vm.$off();
            // remove __vue__ reference
            if (vm.$el) {
              vm.$el.__vue__ = null;
            }
            // release circular reference (#6759)
            if (vm.$vnode) {
              vm.$vnode.parent = null;
            }
          };
        }

        function mountComponent(vm, el, hydrating) {
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode;
            if (false) {
            }
          }
          callHook(vm, "beforeMount");

          var updateComponent;
          /* istanbul ignore if */
          if (false) {
          } else {
            updateComponent = function () {
              vm._update(vm._render(), hydrating);
            };
          }

          // we set this to vm._watcher inside the watcher's constructor
          // since the watcher's initial patch may call $forceUpdate (e.g. inside child
          // component's mounted hook), which relies on vm._watcher being already defined
          new Watcher(
            vm,
            updateComponent,
            noop,
            null,
            true /* isRenderWatcher */
          );
          hydrating = false;

          // manually mounted instance, call mounted on self
          // mounted is called for render-created child components in its inserted hook
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook(vm, "mounted");
          }
          return vm;
        }

        function updateChildComponent(
          vm,
          propsData,
          listeners,
          parentVnode,
          renderChildren
        ) {
          if (false) {
          }

          // determine whether component has slot children
          // we need to do this before overwriting $options._renderChildren
          var hasChildren = !!(
            (
              renderChildren || // has new static slots
              vm.$options._renderChildren || // has old static slots
              parentVnode.data.scopedSlots || // has new scoped slots
              vm.$scopedSlots !== emptyObject
            ) // has old scoped slots
          );

          vm.$options._parentVnode = parentVnode;
          vm.$vnode = parentVnode; // update vm's placeholder node without re-render

          if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode;
          }
          vm.$options._renderChildren = renderChildren;

          // update $attrs and $listeners hash
          // these are also reactive so they may trigger child update if the child
          // used them during render
          vm.$attrs = parentVnode.data.attrs || emptyObject;
          vm.$listeners = listeners || emptyObject;

          // update props
          if (propsData && vm.$options.props) {
            toggleObserving(false);
            var props = vm._props;
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props; // wtf flow?
              props[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            // keep a copy of raw propsData
            vm.$options.propsData = propsData;
          }

          // update listeners
          listeners = listeners || emptyObject;
          var oldListeners = vm.$options._parentListeners;
          vm.$options._parentListeners = listeners;
          updateComponentListeners(vm, listeners, oldListeners);

          // resolve slots + force update if has children
          if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
          }

          if (false) {
          }
        }

        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
              return true;
            }
          }
          return false;
        }

        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
              return;
            }
          } else if (vm._directInactive) {
            return;
          }
          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
            }
            callHook(vm, "activated");
          }
        }

        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
              return;
            }
          }
          if (!vm._inactive) {
            vm._inactive = true;
            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
            }
            callHook(vm, "deactivated");
          }
        }

        function callHook(vm, hook) {
          // #7573 disable dep collection when invoking lifecycle hooks
          pushTarget();
          var handlers = vm.$options[hook];
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              try {
                handlers[i].call(vm);
              } catch (e) {
                handleError(e, vm, hook + " hook");
              }
            }
          }
          if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook);
          }
          popTarget();
        }

        /*  */

        var MAX_UPDATE_COUNT = 100;

        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;

        /**
         * Reset the scheduler's state.
         */
        function resetSchedulerState() {
          index = queue.length = activatedChildren.length = 0;
          has = {};
          if (false) {
          }
          waiting = flushing = false;
        }

        /**
         * Flush both queues and run the watchers.
         */
        function flushSchedulerQueue() {
          flushing = true;
          var watcher, id;

          // Sort queue before flush.
          // This ensures that:
          // 1. Components are updated from parent to child. (because parent is always
          //    created before the child)
          // 2. A component's user watchers are run before its render watcher (because
          //    user watchers are created before the render watcher)
          // 3. If a component is destroyed during a parent component's watcher run,
          //    its watchers can be skipped.
          queue.sort(function (a, b) {
            return a.id - b.id;
          });

          // do not cache length because more watchers might be pushed
          // as we run existing watchers
          for (index = 0; index < queue.length; index++) {
            watcher = queue[index];
            id = watcher.id;
            has[id] = null;
            watcher.run();
            // in dev build, check and stop circular updates.
            if (false) {
            }
          }

          // keep copies of post queues before resetting state
          var activatedQueue = activatedChildren.slice();
          var updatedQueue = queue.slice();

          resetSchedulerState();

          // call component updated and activated hooks
          callActivatedHooks(activatedQueue);
          callUpdatedHooks(updatedQueue);

          // devtool hook
          /* istanbul ignore if */
          if (devtools && config.devtools) {
            devtools.emit("flush");
          }
        }

        function callUpdatedHooks(queue) {
          var i = queue.length;
          while (i--) {
            var watcher = queue[i];
            var vm = watcher.vm;
            if (vm._watcher === watcher && vm._isMounted) {
              callHook(vm, "updated");
            }
          }
        }

        /**
         * Queue a kept-alive component that was activated during patch.
         * The queue will be processed after the entire tree has been patched.
         */
        function queueActivatedComponent(vm) {
          // setting _inactive to false here so that a render function can
          // rely on checking whether it's in an inactive tree (e.g. router-view)
          vm._inactive = false;
          activatedChildren.push(vm);
        }

        function callActivatedHooks(queue) {
          for (var i = 0; i < queue.length; i++) {
            queue[i]._inactive = true;
            activateChildComponent(queue[i], true /* true */);
          }
        }

        /**
         * Push a watcher into the watcher queue.
         * Jobs with duplicate IDs will be skipped unless it's
         * pushed when the queue is being flushed.
         */
        function queueWatcher(watcher) {
          var id = watcher.id;
          if (has[id] == null) {
            has[id] = true;
            if (!flushing) {
              queue.push(watcher);
            } else {
              // if already flushing, splice the watcher based on its id
              // if already past its id, it will be run next immediately.
              var i = queue.length - 1;
              while (i > index && queue[i].id > watcher.id) {
                i--;
              }
              queue.splice(i + 1, 0, watcher);
            }
            // queue the flush
            if (!waiting) {
              waiting = true;
              nextTick(flushSchedulerQueue);
            }
          }
        }

        /*  */

        var uid$1 = 0;

        /**
         * A watcher parses an expression, collects dependencies,
         * and fires callback when the expression value changes.
         * This is used for both the $watch() api and directives.
         */
        var Watcher = function Watcher(
          vm,
          expOrFn,
          cb,
          options,
          isRenderWatcher
        ) {
          this.vm = vm;
          if (isRenderWatcher) {
            vm._watcher = this;
          }
          vm._watchers.push(this);
          // options
          if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
          } else {
            this.deep = this.user = this.lazy = this.sync = false;
          }
          this.cb = cb;
          this.id = ++uid$1; // uid for batching
          this.active = true;
          this.dirty = this.lazy; // for lazy watchers
          this.deps = [];
          this.newDeps = [];
          this.depIds = new _Set();
          this.newDepIds = new _Set();
          this.expression = false ? undefined : "";
          // parse expression for getter
          if (typeof expOrFn === "function") {
            this.getter = expOrFn;
          } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
              this.getter = function () {};
              "production" !== "production" &&
                warn(
                  'Failed watching path: "' +
                    expOrFn +
                    '" ' +
                    "Watcher only accepts simple dot-delimited paths. " +
                    "For full control, use a function instead.",
                  vm
                );
            }
          }
          this.value = this.lazy ? undefined : this.get();
        };

        /**
         * Evaluate the getter, and re-collect dependencies.
         */
        Watcher.prototype.get = function get() {
          pushTarget(this);
          var value;
          var vm = this.vm;
          try {
            value = this.getter.call(vm, vm);
          } catch (e) {
            if (this.user) {
              handleError(
                e,
                vm,
                'getter for watcher "' + this.expression + '"'
              );
            } else {
              throw e;
            }
          } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
              traverse(value);
            }
            popTarget();
            this.cleanupDeps();
          }
          return value;
        };

        /**
         * Add a dependency to this directive.
         */
        Watcher.prototype.addDep = function addDep(dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
              dep.addSub(this);
            }
          }
        };

        /**
         * Clean up for dependency collection.
         */
        Watcher.prototype.cleanupDeps = function cleanupDeps() {
          var this$1 = this;

          var i = this.deps.length;
          while (i--) {
            var dep = this$1.deps[i];
            if (!this$1.newDepIds.has(dep.id)) {
              dep.removeSub(this$1);
            }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
        };

        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */
        Watcher.prototype.update = function update() {
          /* istanbul ignore else */
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync) {
            this.run();
          } else {
            queueWatcher(this);
          }
        };

        /**
         * Scheduler job interface.
         * Will be called by the scheduler.
         */
        Watcher.prototype.run = function run() {
          if (this.active) {
            var value = this.get();
            if (
              value !== this.value ||
              // Deep watchers and watchers on Object/Arrays should fire even
              // when the value is the same, because the value may
              // have mutated.
              isObject(value) ||
              this.deep
            ) {
              // set new value
              var oldValue = this.value;
              this.value = value;
              if (this.user) {
                try {
                  this.cb.call(this.vm, value, oldValue);
                } catch (e) {
                  handleError(
                    e,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
          }
        };

        /**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */
        Watcher.prototype.evaluate = function evaluate() {
          this.value = this.get();
          this.dirty = false;
        };

        /**
         * Depend on all deps collected by this watcher.
         */
        Watcher.prototype.depend = function depend() {
          var this$1 = this;

          var i = this.deps.length;
          while (i--) {
            this$1.deps[i].depend();
          }
        };

        /**
         * Remove self from all dependencies' subscriber list.
         */
        Watcher.prototype.teardown = function teardown() {
          var this$1 = this;

          if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
              remove(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
              this$1.deps[i].removeSub(this$1);
            }
            this.active = false;
          }
        };

        /*  */

        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop,
          set: noop,
        };

        function proxy(target, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
          };
          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
          };
          Object.defineProperty(target, key, sharedPropertyDefinition);
        }

        function initState(vm) {
          vm._watchers = [];
          var opts = vm.$options;
          if (opts.props) {
            initProps(vm, opts.props);
          }
          if (opts.methods) {
            initMethods(vm, opts.methods);
          }
          if (opts.data) {
            initData(vm);
          } else {
            observe((vm._data = {}), true /* asRootData */);
          }
          if (opts.computed) {
            initComputed(vm, opts.computed);
          }
          if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch);
          }
        }

        function initProps(vm, propsOptions) {
          var propsData = vm.$options.propsData || {};
          var props = (vm._props = {});
          // cache prop keys so that future props updates can iterate using Array
          // instead of dynamic object key enumeration.
          var keys = (vm.$options._propKeys = []);
          var isRoot = !vm.$parent;
          // root instance props should be converted
          if (!isRoot) {
            toggleObserving(false);
          }
          var loop = function (key) {
            keys.push(key);
            var value = validateProp(key, propsOptions, propsData, vm);
            /* istanbul ignore else */
            if (false) {
              var hyphenatedKey;
            } else {
              defineReactive(props, key, value);
            }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
            if (!(key in vm)) {
              proxy(vm, "_props", key);
            }
          };

          for (var key in propsOptions) loop(key);
          toggleObserving(true);
        }

        function initData(vm) {
          var data = vm.$options.data;
          data = vm._data =
            typeof data === "function" ? getData(data, vm) : data || {};
          if (!isPlainObject(data)) {
            data = {};
            "production" !== "production" &&
              warn(
                "data functions should return an object:\n" +
                  "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
                vm
              );
          }
          // proxy data on instance
          var keys = Object.keys(data);
          var props = vm.$options.props;
          var methods = vm.$options.methods;
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            if (false) {
            }
            if (props && hasOwn(props, key)) {
              "production" !== "production" &&
                warn(
                  'The data property "' +
                    key +
                    '" is already declared as a prop. ' +
                    "Use prop default value instead.",
                  vm
                );
            } else if (!isReserved(key)) {
              proxy(vm, "_data", key);
            }
          }
          // observe data
          observe(data, true /* asRootData */);
        }

        function getData(data, vm) {
          // #7573 disable dep collection when invoking data getters
          pushTarget();
          try {
            return data.call(vm, vm);
          } catch (e) {
            handleError(e, vm, "data()");
            return {};
          } finally {
            popTarget();
          }
        }

        var computedWatcherOptions = { lazy: true };

        function initComputed(vm, computed) {
          // $flow-disable-line
          var watchers = (vm._computedWatchers = Object.create(null));
          // computed properties are just getters during SSR
          var isSSR = isServerRendering();

          for (var key in computed) {
            var userDef = computed[key];
            var getter = typeof userDef === "function" ? userDef : userDef.get;
            if (false) {
            }

            if (!isSSR) {
              // create internal watcher for the computed property.
              watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
              );
            }

            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
            if (!(key in vm)) {
              defineComputed(vm, key, userDef);
            } else if (false) {
            }
          }
        }

        function defineComputed(target, key, userDef) {
          var shouldCache = !isServerRendering();
          if (typeof userDef === "function") {
            sharedPropertyDefinition.get = shouldCache
              ? createComputedGetter(key)
              : userDef;
            sharedPropertyDefinition.set = noop;
          } else {
            sharedPropertyDefinition.get = userDef.get
              ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : userDef.get
              : noop;
            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
          }
          if (false) {
          }
          Object.defineProperty(target, key, sharedPropertyDefinition);
        }

        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate();
              }
              if (Dep.target) {
                watcher.depend();
              }
              return watcher.value;
            }
          };
        }

        function initMethods(vm, methods) {
          var props = vm.$options.props;
          for (var key in methods) {
            if (false) {
            }
            vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
          }
        }

        function initWatch(vm, watch) {
          for (var key in watch) {
            var handler = watch[key];
            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }

        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject(handler)) {
            options = handler;
            handler = handler.handler;
          }
          if (typeof handler === "string") {
            handler = vm[handler];
          }
          return vm.$watch(expOrFn, handler, options);
        }

        function stateMixin(Vue) {
          // flow somehow has problems with directly declared definition object
          // when using Object.defineProperty, so we have to procedurally build up
          // the object here.
          var dataDef = {};
          dataDef.get = function () {
            return this._data;
          };
          var propsDef = {};
          propsDef.get = function () {
            return this._props;
          };
          if (false) {
          }
          Object.defineProperty(Vue.prototype, "$data", dataDef);
          Object.defineProperty(Vue.prototype, "$props", propsDef);

          Vue.prototype.$set = set;
          Vue.prototype.$delete = del;

          Vue.prototype.$watch = function (expOrFn, cb, options) {
            var vm = this;
            if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
              cb.call(vm, watcher.value);
            }
            return function unwatchFn() {
              watcher.teardown();
            };
          };
        }

        /*  */

        function initProvide(vm) {
          var provide = vm.$options.provide;
          if (provide) {
            vm._provided =
              typeof provide === "function" ? provide.call(vm) : provide;
          }
        }

        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm);
          if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(function (key) {
              /* istanbul ignore else */
              if (false) {
              } else {
                defineReactive(vm, key, result[key]);
              }
            });
            toggleObserving(true);
          }
        }

        function resolveInject(inject, vm) {
          if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            var result = Object.create(null);
            var keys = hasSymbol
              ? Reflect.ownKeys(inject).filter(function (key) {
                  /* istanbul ignore next */
                  return Object.getOwnPropertyDescriptor(
                    inject,
                    key
                  ).enumerable;
                })
              : Object.keys(inject);

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var provideKey = inject[key].from;
              var source = vm;
              while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                  result[key] = source._provided[provideKey];
                  break;
                }
                source = source.$parent;
              }
              if (!source) {
                if ("default" in inject[key]) {
                  var provideDefault = inject[key].default;
                  result[key] =
                    typeof provideDefault === "function"
                      ? provideDefault.call(vm)
                      : provideDefault;
                } else if (false) {
                }
              }
            }
            return result;
          }
        }

        /*  */

        /**
         * Runtime helper for rendering v-for lists.
         */
        function renderList(val, render) {
          var ret, i, l, keys, key;
          if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === "number") {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject(val)) {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
              key = keys[i];
              ret[i] = render(val[key], key, i);
            }
          }
          if (isDef(ret)) {
            ret._isVList = true;
          }
          return ret;
        }

        /*  */

        /**
         * Runtime helper for rendering <slot>
         */
        function renderSlot(name, fallback, props, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name];
          var nodes;
          if (scopedSlotFn) {
            // scoped slot
            props = props || {};
            if (bindObject) {
              if (false) {
              }
              props = extend(extend({}, bindObject), props);
            }
            nodes = scopedSlotFn(props) || fallback;
          } else {
            var slotNodes = this.$slots[name];
            // warn duplicate slot usage
            if (slotNodes) {
              if (false) {
              }
              slotNodes._rendered = true;
            }
            nodes = slotNodes || fallback;
          }

          var target = props && props.slot;
          if (target) {
            return this.$createElement("template", { slot: target }, nodes);
          } else {
            return nodes;
          }
        }

        /*  */

        /**
         * Runtime helper for resolving filters
         */
        function resolveFilter(id) {
          return resolveAsset(this.$options, "filters", id, true) || identity;
        }

        /*  */

        function isKeyNotMatch(expect, actual) {
          if (Array.isArray(expect)) {
            return expect.indexOf(actual) === -1;
          } else {
            return expect !== actual;
          }
        }

        /**
         * Runtime helper for checking keyCodes from config.
         * exposed as Vue.prototype._k
         * passing in eventKeyName as last argument separately for backwards compat
         */
        function checkKeyCodes(
          eventKeyCode,
          key,
          builtInKeyCode,
          eventKeyName,
          builtInKeyName
        ) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
          }
        }

        /*  */

        /**
         * Runtime helper for merging v-bind="object" into a VNode's data.
         */
        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject(value)) {
              "production" !== "production" &&
                warn(
                  "v-bind without argument expects an Object or Array value",
                  this
                );
            } else {
              if (Array.isArray(value)) {
                value = toObject(value);
              }
              var hash;
              var loop = function (key) {
                if (
                  key === "class" ||
                  key === "style" ||
                  isReservedAttribute(key)
                ) {
                  hash = data;
                } else {
                  var type = data.attrs && data.attrs.type;
                  hash =
                    asProp || config.mustUseProp(tag, type, key)
                      ? data.domProps || (data.domProps = {})
                      : data.attrs || (data.attrs = {});
                }
                if (!(key in hash)) {
                  hash[key] = value[key];

                  if (isSync) {
                    var on = data.on || (data.on = {});
                    on["update:" + key] = function ($event) {
                      value[key] = $event;
                    };
                  }
                }
              };

              for (var key in value) loop(key);
            }
          }
          return data;
        }

        /*  */

        /**
         * Runtime helper for rendering static trees.
         */
        function renderStatic(index, isInFor) {
          var cached = this._staticTrees || (this._staticTrees = []);
          var tree = cached[index];
          // if has already-rendered static tree and not inside v-for,
          // we can reuse the same tree.
          if (tree && !isInFor) {
            return tree;
          }
          // otherwise, render a fresh tree.
          tree = cached[index] = this.$options.staticRenderFns[index].call(
            this._renderProxy,
            null,
            this // for render fns generated for functional component templates
          );
          markStatic(tree, "__static__" + index, false);
          return tree;
        }

        /**
         * Runtime helper for v-once.
         * Effectively it means marking the node as static with a unique key.
         */
        function markOnce(tree, index, key) {
          markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
          return tree;
        }

        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== "string") {
                markStaticNode(tree[i], key + "_" + i, isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }

        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }

        /*  */

        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject(value)) {
              "production" !== "production" &&
                warn("v-on without argument expects an Object value", this);
            } else {
              var on = (data.on = data.on ? extend({}, data.on) : {});
              for (var key in value) {
                var existing = on[key];
                var ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
              }
            }
          }
          return data;
        }

        /*  */

        function installRenderHelpers(target) {
          target._o = markOnce;
          target._n = toNumber;
          target._s = toString;
          target._l = renderList;
          target._t = renderSlot;
          target._q = looseEqual;
          target._i = looseIndexOf;
          target._m = renderStatic;
          target._f = resolveFilter;
          target._k = checkKeyCodes;
          target._b = bindObjectProps;
          target._v = createTextVNode;
          target._e = createEmptyVNode;
          target._u = resolveScopedSlots;
          target._g = bindObjectListeners;
        }

        /*  */

        function FunctionalRenderContext(data, props, children, parent, Ctor) {
          var options = Ctor.options;
          // ensure the createElement function in functional components
          // gets a unique context - this is necessary for correct named slot check
          var contextVm;
          if (hasOwn(parent, "_uid")) {
            contextVm = Object.create(parent);
            // $flow-disable-line
            contextVm._original = parent;
          } else {
            // the context vm passed in is a functional context as well.
            // in this case we want to make sure we are able to get a hold to the
            // real context instance.
            contextVm = parent;
            // $flow-disable-line
            parent = parent._original;
          }
          var isCompiled = isTrue(options._compiled);
          var needNormalization = !isCompiled;

          this.data = data;
          this.props = props;
          this.children = children;
          this.parent = parent;
          this.listeners = data.on || emptyObject;
          this.injections = resolveInject(options.inject, parent);
          this.slots = function () {
            return resolveSlots(children, parent);
          };

          // support for compiled functional template
          if (isCompiled) {
            // exposing $options for renderStatic()
            this.$options = options;
            // pre-resolve slots for renderSlot()
            this.$slots = this.slots();
            this.$scopedSlots = data.scopedSlots || emptyObject;
          }

          if (options._scopeId) {
            this._c = function (a, b, c, d) {
              var vnode = createElement(
                contextVm,
                a,
                b,
                c,
                d,
                needNormalization
              );
              if (vnode && !Array.isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
              }
              return vnode;
            };
          } else {
            this._c = function (a, b, c, d) {
              return createElement(contextVm, a, b, c, d, needNormalization);
            };
          }
        }

        installRenderHelpers(FunctionalRenderContext.prototype);

        function createFunctionalComponent(
          Ctor,
          propsData,
          data,
          contextVm,
          children
        ) {
          var options = Ctor.options;
          var props = {};
          var propOptions = options.props;
          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props[key] = validateProp(
                key,
                propOptions,
                propsData || emptyObject
              );
            }
          } else {
            if (isDef(data.attrs)) {
              mergeProps(props, data.attrs);
            }
            if (isDef(data.props)) {
              mergeProps(props, data.props);
            }
          }

          var renderContext = new FunctionalRenderContext(
            data,
            props,
            children,
            contextVm,
            Ctor
          );

          var vnode = options.render.call(
            null,
            renderContext._c,
            renderContext
          );

          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(
              vnode,
              data,
              renderContext.parent,
              options
            );
          } else if (Array.isArray(vnode)) {
            var vnodes = normalizeChildren(vnode) || [];
            var res = new Array(vnodes.length);
            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(
                vnodes[i],
                data,
                renderContext.parent,
                options
              );
            }
            return res;
          }
        }

        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
          // #7817 clone node before setting fnContext, otherwise if the node is reused
          // (e.g. it was from a cached normal slot) the fnContext causes named slots
          // that should not be matched to match.
          var clone = cloneVNode(vnode);
          clone.fnContext = contextVm;
          clone.fnOptions = options;
          if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
          }
          return clone;
        }

        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key];
          }
        }

        /*  */

        // Register the component hook to weex native render engine.
        // The hook will be triggered by native, not javascript.

        // Updates the state of the component to weex native render engine.

        /*  */

        // https://github.com/Hanks10100/weex-native-directive/tree/master/component

        // listening on native callback

        /*  */

        /*  */

        // inline hooks to be invoked on component VNodes during patch
        var componentVNodeHooks = {
          init: function init(vnode, hydrating, parentElm, refElm) {
            if (
              vnode.componentInstance &&
              !vnode.componentInstance._isDestroyed &&
              vnode.data.keepAlive
            ) {
              // kept-alive components, treat as a patch
              var mountedNode = vnode; // work around flow
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
            } else {
              var child = (vnode.componentInstance = createComponentInstanceForVnode(
                vnode,
                activeInstance,
                parentElm,
                refElm
              ));
              child.$mount(hydrating ? vnode.elm : undefined, hydrating);
            }
          },

          prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions;
            var child = (vnode.componentInstance = oldVnode.componentInstance);
            updateChildComponent(
              child,
              options.propsData, // updated props
              options.listeners, // updated listeners
              vnode, // new parent vnode
              options.children // new children
            );
          },

          insert: function insert(vnode) {
            var context = vnode.context;
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook(componentInstance, "mounted");
            }
            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance);
              } else {
                activateChildComponent(componentInstance, true /* direct */);
              }
            }
          },

          destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
              } else {
                deactivateChildComponent(componentInstance, true /* direct */);
              }
            }
          },
        };

        var hooksToMerge = Object.keys(componentVNodeHooks);

        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return;
          }

          var baseCtor = context.$options._base;

          // plain options object: turn it into a constructor
          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
          }

          // if at this stage it's not a constructor or an async component factory,
          // reject.
          if (typeof Ctor !== "function") {
            if (false) {
            }
            return;
          }

          // async component
          var asyncFactory;
          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
            if (Ctor === undefined) {
              // return a placeholder node for async component, which is rendered
              // as a comment node but preserves all the raw information for the node.
              // the information will be used for async server-rendering and hydration.
              return createAsyncPlaceholder(
                asyncFactory,
                data,
                context,
                children,
                tag
              );
            }
          }

          data = data || {};

          // resolve constructor options in case global mixins are applied after
          // component constructor creation
          resolveConstructorOptions(Ctor);

          // transform component v-model data into props & events
          if (isDef(data.model)) {
            transformModel(Ctor.options, data);
          }

          // extract props
          var propsData = extractPropsFromVNodeData(data, Ctor, tag);

          // functional component
          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(
              Ctor,
              propsData,
              data,
              context,
              children
            );
          }

          // extract listeners, since these needs to be treated as
          // child component listeners instead of DOM listeners
          var listeners = data.on;
          // replace with listeners with .native modifier
          // so it gets processed during parent component patch.
          data.on = data.nativeOn;

          if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
            var slot = data.slot;
            data = {};
            if (slot) {
              data.slot = slot;
            }
          }

          // install component management hooks onto the placeholder node
          installComponentHooks(data);

          // return a placeholder vnode
          var name = Ctor.options.name || tag;
          var vnode = new VNode(
            "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
            data,
            undefined,
            undefined,
            undefined,
            context,
            {
              Ctor: Ctor,
              propsData: propsData,
              listeners: listeners,
              tag: tag,
              children: children,
            },
            asyncFactory
          );

          // Weex specific: invoke recycle-list optimized @render function for
          // extracting cell-slot template.
          // https://github.com/Hanks10100/weex-native-directive/tree/master/component
          /* istanbul ignore if */
          return vnode;
        }

        function createComponentInstanceForVnode(
          vnode, // we know it's MountedComponentVNode but flow doesn't
          parent, // activeInstance in lifecycle state
          parentElm,
          refElm
        ) {
          var options = {
            _isComponent: true,
            parent: parent,
            _parentVnode: vnode,
            _parentElm: parentElm || null,
            _refElm: refElm || null,
          };
          // check inline-template render functions
          var inlineTemplate = vnode.data.inlineTemplate;
          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
          }
          return new vnode.componentOptions.Ctor(options);
        }

        function installComponentHooks(data) {
          var hooks = data.hook || (data.hook = {});
          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i];
            hooks[key] = componentVNodeHooks[key];
          }
        }

        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
        function transformModel(options, data) {
          var prop = (options.model && options.model.prop) || "value";
          var event = (options.model && options.model.event) || "input";
          (data.props || (data.props = {}))[prop] = data.model.value;
          var on = data.on || (data.on = {});
          if (isDef(on[event])) {
            on[event] = [data.model.callback].concat(on[event]);
          } else {
            on[event] = data.model.callback;
          }
        }

        /*  */

        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;

        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
        function createElement(
          context,
          tag,
          data,
          children,
          normalizationType,
          alwaysNormalize
        ) {
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = undefined;
          }
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
          }
          return _createElement(
            context,
            tag,
            data,
            children,
            normalizationType
          );
        }

        function _createElement(
          context,
          tag,
          data,
          children,
          normalizationType
        ) {
          if (isDef(data) && isDef(data.__ob__)) {
            "production" !== "production" &&
              warn(
                "Avoid using observed data object as vnode data: " +
                  JSON.stringify(data) +
                  "\n" +
                  "Always create fresh vnode data objects in each render!",
                context
              );
            return createEmptyVNode();
          }
          // object syntax in v-bind
          if (isDef(data) && isDef(data.is)) {
            tag = data.is;
          }
          if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode();
          }
          // warn against non-primitive key
          if (false) {
          }
          // support single function children as default scoped slot
          if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {};
            data.scopedSlots = { default: children[0] };
            children.length = 0;
          }
          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
          }
          var vnode, ns;
          if (typeof tag === "string") {
            var Ctor;
            ns =
              (context.$vnode && context.$vnode.ns) ||
              config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
              // platform built-in elements
              vnode = new VNode(
                config.parsePlatformTagName(tag),
                data,
                children,
                undefined,
                undefined,
                context
              );
            } else if (
              isDef((Ctor = resolveAsset(context.$options, "components", tag)))
            ) {
              // component
              vnode = createComponent(Ctor, data, context, children, tag);
            } else {
              // unknown or unlisted namespaced elements
              // check at runtime because it may get assigned a namespace when its
              // parent normalizes children
              vnode = new VNode(
                tag,
                data,
                children,
                undefined,
                undefined,
                context
              );
            }
          } else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children);
          }
          if (Array.isArray(vnode)) {
            return vnode;
          } else if (isDef(vnode)) {
            if (isDef(ns)) {
              applyNS(vnode, ns);
            }
            if (isDef(data)) {
              registerDeepBindings(data);
            }
            return vnode;
          } else {
            return createEmptyVNode();
          }
        }

        function applyNS(vnode, ns, force) {
          vnode.ns = ns;
          if (vnode.tag === "foreignObject") {
            // use default namespace inside foreignObject
            ns = undefined;
            force = true;
          }
          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (
                isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== "svg"))
              ) {
                applyNS(child, ns, force);
              }
            }
          }
        }

        // ref #5318
        // necessary to ensure parent re-render when deep bindings like :style and
        // :class are used on slot nodes
        function registerDeepBindings(data) {
          if (isObject(data.style)) {
            traverse(data.style);
          }
          if (isObject(data.class)) {
            traverse(data.class);
          }
        }

        /*  */

        function initRender(vm) {
          vm._vnode = null; // the root of the child tree
          vm._staticTrees = null; // v-once cached trees
          var options = vm.$options;
          var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
          var renderContext = parentVnode && parentVnode.context;
          vm.$slots = resolveSlots(options._renderChildren, renderContext);
          vm.$scopedSlots = emptyObject;
          // bind the createElement fn to this instance
          // so that we get proper render context inside it.
          // args order: tag, data, children, normalizationType, alwaysNormalize
          // internal version is used by render functions compiled from templates
          vm._c = function (a, b, c, d) {
            return createElement(vm, a, b, c, d, false);
          };
          // normalization is always applied for the public version, used in
          // user-written render functions.
          vm.$createElement = function (a, b, c, d) {
            return createElement(vm, a, b, c, d, true);
          };

          // $attrs & $listeners are exposed for easier HOC creation.
          // they need to be reactive so that HOCs using them are always updated
          var parentData = parentVnode && parentVnode.data;

          /* istanbul ignore else */
          if (false) {
          } else {
            defineReactive(
              vm,
              "$attrs",
              (parentData && parentData.attrs) || emptyObject,
              null,
              true
            );
            defineReactive(
              vm,
              "$listeners",
              options._parentListeners || emptyObject,
              null,
              true
            );
          }
        }

        function renderMixin(Vue) {
          // install runtime convenience helpers
          installRenderHelpers(Vue.prototype);

          Vue.prototype.$nextTick = function (fn) {
            return nextTick(fn, this);
          };

          Vue.prototype._render = function () {
            var vm = this;
            var ref = vm.$options;
            var render = ref.render;
            var _parentVnode = ref._parentVnode;

            // reset _rendered flag on slots for duplicate slot check
            if (false) {
              var key;
            }

            if (_parentVnode) {
              vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
            }

            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
            vm.$vnode = _parentVnode;
            // render self
            var vnode;
            try {
              vnode = render.call(vm._renderProxy, vm.$createElement);
            } catch (e) {
              handleError(e, vm, "render");
              // return error render result,
              // or previous vnode to prevent render error causing blank component
              /* istanbul ignore else */
              if (false) {
              } else {
                vnode = vm._vnode;
              }
            }
            // return empty vnode in case the render function errored out
            if (!(vnode instanceof VNode)) {
              if (false) {
              }
              vnode = createEmptyVNode();
            }
            // set parent
            vnode.parent = _parentVnode;
            return vnode;
          };
        }

        /*  */

        var uid$3 = 0;

        function initMixin(Vue) {
          Vue.prototype._init = function (options) {
            var vm = this;
            // a uid
            vm._uid = uid$3++;

            var startTag, endTag;
            /* istanbul ignore if */
            if (false) {
            }

            // a flag to avoid this being observed
            vm._isVue = true;
            // merge options
            if (options && options._isComponent) {
              // optimize internal component instantiation
              // since dynamic options merging is pretty slow, and none of the
              // internal component options needs special treatment.
              initInternalComponent(vm, options);
            } else {
              vm.$options = mergeOptions(
                resolveConstructorOptions(vm.constructor),
                options || {},
                vm
              );
            }
            /* istanbul ignore else */
            if (false) {
            } else {
              vm._renderProxy = vm;
            }
            // expose real self
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            callHook(vm, "beforeCreate");
            initInjections(vm); // resolve injections before data/props
            initState(vm);
            initProvide(vm); // resolve provide after data/props
            callHook(vm, "created");

            /* istanbul ignore if */
            if (false) {
            }

            if (vm.$options.el) {
              vm.$mount(vm.$options.el);
            }
          };
        }

        function initInternalComponent(vm, options) {
          var opts = (vm.$options = Object.create(vm.constructor.options));
          // doing this because it's faster than dynamic enumeration.
          var parentVnode = options._parentVnode;
          opts.parent = options.parent;
          opts._parentVnode = parentVnode;
          opts._parentElm = options._parentElm;
          opts._refElm = options._refElm;

          var vnodeComponentOptions = parentVnode.componentOptions;
          opts.propsData = vnodeComponentOptions.propsData;
          opts._parentListeners = vnodeComponentOptions.listeners;
          opts._renderChildren = vnodeComponentOptions.children;
          opts._componentTag = vnodeComponentOptions.tag;

          if (options.render) {
            opts.render = options.render;
            opts.staticRenderFns = options.staticRenderFns;
          }
        }

        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options;
          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super);
            var cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
              // super option changed,
              // need to resolve new options.
              Ctor.superOptions = superOptions;
              // check if there are any late-modified/attached options (#4976)
              var modifiedOptions = resolveModifiedOptions(Ctor);
              // update base extend options
              if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(
                superOptions,
                Ctor.extendOptions
              );
              if (options.name) {
                options.components[options.name] = Ctor;
              }
            }
          }
          return options;
        }

        function resolveModifiedOptions(Ctor) {
          var modified;
          var latest = Ctor.options;
          var extended = Ctor.extendOptions;
          var sealed = Ctor.sealedOptions;
          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified) {
                modified = {};
              }
              modified[key] = dedupe(latest[key], extended[key], sealed[key]);
            }
          }
          return modified;
        }

        function dedupe(latest, extended, sealed) {
          // compare latest and sealed to ensure lifecycle hooks won't be duplicated
          // between merges
          if (Array.isArray(latest)) {
            var res = [];
            sealed = Array.isArray(sealed) ? sealed : [sealed];
            extended = Array.isArray(extended) ? extended : [extended];
            for (var i = 0; i < latest.length; i++) {
              // push original options and not sealed options to exclude duplicated options
              if (
                extended.indexOf(latest[i]) >= 0 ||
                sealed.indexOf(latest[i]) < 0
              ) {
                res.push(latest[i]);
              }
            }
            return res;
          } else {
            return latest;
          }
        }

        function Vue(options) {
          if (false) {
          }
          this._init(options);
        }

        initMixin(Vue);
        stateMixin(Vue);
        eventsMixin(Vue);
        lifecycleMixin(Vue);
        renderMixin(Vue);

        /*  */

        function initUse(Vue) {
          Vue.use = function (plugin) {
            var installedPlugins =
              this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
              return this;
            }

            // additional parameters
            var args = toArray(arguments, 1);
            args.unshift(this);
            if (typeof plugin.install === "function") {
              plugin.install.apply(plugin, args);
            } else if (typeof plugin === "function") {
              plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
          };
        }

        /*  */

        function initMixin$1(Vue) {
          Vue.mixin = function (mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
          };
        }

        /*  */

        function initExtend(Vue) {
          /**
           * Each instance constructor, including Vue, has a unique
           * cid. This enables us to create wrapped "child
           * constructors" for prototypal inheritance and cache them.
           */
          Vue.cid = 0;
          var cid = 1;

          /**
           * Class inheritance
           */
          Vue.extend = function (extendOptions) {
            extendOptions = extendOptions || {};
            var Super = this;
            var SuperId = Super.cid;
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
            }

            var name = extendOptions.name || Super.options.name;
            if (false) {
            }

            var Sub = function VueComponent(options) {
              this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub["super"] = Super;

            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
            if (Sub.options.props) {
              initProps$1(Sub);
            }
            if (Sub.options.computed) {
              initComputed$1(Sub);
            }

            // allow further extension/mixin/plugin usage
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;

            // create asset registers, so extended classes
            // can have their private assets too.
            ASSET_TYPES.forEach(function (type) {
              Sub[type] = Super[type];
            });
            // enable recursive self-lookup
            if (name) {
              Sub.options.components[name] = Sub;
            }

            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend({}, Sub.options);

            // cache constructor
            cachedCtors[SuperId] = Sub;
            return Sub;
          };
        }

        function initProps$1(Comp) {
          var props = Comp.options.props;
          for (var key in props) {
            proxy(Comp.prototype, "_props", key);
          }
        }

        function initComputed$1(Comp) {
          var computed = Comp.options.computed;
          for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key]);
          }
        }

        /*  */

        function initAssetRegisters(Vue) {
          /**
           * Create asset registration methods.
           */
          ASSET_TYPES.forEach(function (type) {
            Vue[type] = function (id, definition) {
              if (!definition) {
                return this.options[type + "s"][id];
              } else {
                /* istanbul ignore if */
                if (false) {
                }
                if (type === "component" && isPlainObject(definition)) {
                  definition.name = definition.name || id;
                  definition = this.options._base.extend(definition);
                }
                if (type === "directive" && typeof definition === "function") {
                  definition = { bind: definition, update: definition };
                }
                this.options[type + "s"][id] = definition;
                return definition;
              }
            };
          });
        }

        /*  */

        function getComponentName(opts) {
          return opts && (opts.Ctor.options.name || opts.tag);
        }

        function matches(pattern, name) {
          if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1;
          } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1;
          } else if (isRegExp(pattern)) {
            return pattern.test(name);
          }
          /* istanbul ignore next */
          return false;
        }

        function pruneCache(keepAliveInstance, filter) {
          var cache = keepAliveInstance.cache;
          var keys = keepAliveInstance.keys;
          var _vnode = keepAliveInstance._vnode;
          for (var key in cache) {
            var cachedNode = cache[key];
            if (cachedNode) {
              var name = getComponentName(cachedNode.componentOptions);
              if (name && !filter(name)) {
                pruneCacheEntry(cache, key, keys, _vnode);
              }
            }
          }
        }

        function pruneCacheEntry(cache, key, keys, current) {
          var cached$$1 = cache[key];
          if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
            cached$$1.componentInstance.$destroy();
          }
          cache[key] = null;
          remove(keys, key);
        }

        var patternTypes = [String, RegExp, Array];

        var KeepAlive = {
          name: "keep-alive",
          abstract: true,

          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number],
          },

          created: function created() {
            this.cache = Object.create(null);
            this.keys = [];
          },

          destroyed: function destroyed() {
            var this$1 = this;

            for (var key in this$1.cache) {
              pruneCacheEntry(this$1.cache, key, this$1.keys);
            }
          },

          mounted: function mounted() {
            var this$1 = this;

            this.$watch("include", function (val) {
              pruneCache(this$1, function (name) {
                return matches(val, name);
              });
            });
            this.$watch("exclude", function (val) {
              pruneCache(this$1, function (name) {
                return !matches(val, name);
              });
            });
          },

          render: function render() {
            var slot = this.$slots.default;
            var vnode = getFirstComponentChild(slot);
            var componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
              // check pattern
              var name = getComponentName(componentOptions);
              var ref = this;
              var include = ref.include;
              var exclude = ref.exclude;
              if (
                // not included
                (include && (!name || !matches(include, name))) ||
                // excluded
                (exclude && name && matches(exclude, name))
              ) {
                return vnode;
              }

              var ref$1 = this;
              var cache = ref$1.cache;
              var keys = ref$1.keys;
              var key =
                vnode.key == null
                  ? // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                    (componentOptions.tag ? "::" + componentOptions.tag : "")
                  : vnode.key;
              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove(keys, key);
                keys.push(key);
              } else {
                cache[key] = vnode;
                keys.push(key);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
              }

              vnode.data.keepAlive = true;
            }
            return vnode || (slot && slot[0]);
          },
        };

        var builtInComponents = {
          KeepAlive: KeepAlive,
        };

        /*  */

        function initGlobalAPI(Vue) {
          // config
          var configDef = {};
          configDef.get = function () {
            return config;
          };
          if (false) {
          }
          Object.defineProperty(Vue, "config", configDef);

          // exposed util methods.
          // NOTE: these are not considered part of the public API - avoid relying on
          // them unless you are aware of the risk.
          Vue.util = {
            warn: warn,
            extend: extend,
            mergeOptions: mergeOptions,
            defineReactive: defineReactive,
          };

          Vue.set = set;
          Vue.delete = del;
          Vue.nextTick = nextTick;

          Vue.options = Object.create(null);
          ASSET_TYPES.forEach(function (type) {
            Vue.options[type + "s"] = Object.create(null);
          });

          // this is used to identify the "base" constructor to extend all plain-object
          // components with in Weex's multi-instance scenarios.
          Vue.options._base = Vue;

          extend(Vue.options.components, builtInComponents);

          initUse(Vue);
          initMixin$1(Vue);
          initExtend(Vue);
          initAssetRegisters(Vue);
        }

        initGlobalAPI(Vue);

        Object.defineProperty(Vue.prototype, "$isServer", {
          get: isServerRendering,
        });

        Object.defineProperty(Vue.prototype, "$ssrContext", {
          get: function get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext;
          },
        });

        // expose FunctionalRenderContext for ssr runtime helper installation
        Object.defineProperty(Vue, "FunctionalRenderContext", {
          value: FunctionalRenderContext,
        });

        Vue.version = "2.5.16";

        /*  */

        // these are reserved for web because they are directly compiled away
        // during template compilation
        var isReservedAttr = makeMap("style,class");

        // attributes that should be using props for binding
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function (tag, type, attr) {
          return (
            (attr === "value" && acceptValue(tag) && type !== "button") ||
            (attr === "selected" && tag === "option") ||
            (attr === "checked" && tag === "input") ||
            (attr === "muted" && tag === "video")
          );
        };

        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");

        var isBooleanAttr = makeMap(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," +
            "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," +
            "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," +
            "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," +
            "required,reversed,scoped,seamless,selected,sortable,translate," +
            "truespeed,typemustmatch,visible"
        );

        var xlinkNS = "http://www.w3.org/1999/xlink";

        var isXlink = function (name) {
          return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };

        var getXlinkProp = function (name) {
          return isXlink(name) ? name.slice(6, name.length) : "";
        };

        var isFalsyAttrValue = function (val) {
          return val == null || val === false;
        };

        /*  */

        function genClassForVnode(vnode) {
          var data = vnode.data;
          var parentNode = vnode;
          var childNode = vnode;
          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
            }
          }
          while (isDef((parentNode = parentNode.parent))) {
            if (parentNode && parentNode.data) {
              data = mergeClassData(data, parentNode.data);
            }
          }
          return renderClass(data.staticClass, data.class);
        }

        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class)
              ? [child.class, parent.class]
              : parent.class,
          };
        }

        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
          }
          /* istanbul ignore next */
          return "";
        }

        function concat(a, b) {
          return a ? (b ? a + " " + b : a) : b || "";
        }

        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value);
          }
          if (isObject(value)) {
            return stringifyObject(value);
          }
          if (typeof value === "string") {
            return value;
          }
          /* istanbul ignore next */
          return "";
        }

        function stringifyArray(value) {
          var res = "";
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (
              isDef((stringified = stringifyClass(value[i]))) &&
              stringified !== ""
            ) {
              if (res) {
                res += " ";
              }
              res += stringified;
            }
          }
          return res;
        }

        function stringifyObject(value) {
          var res = "";
          for (var key in value) {
            if (value[key]) {
              if (res) {
                res += " ";
              }
              res += key;
            }
          }
          return res;
        }

        /*  */

        var namespaceMap = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        };

        var isHTMLTag = makeMap(
          "html,body,base,head,link,meta,style,title," +
            "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," +
            "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," +
            "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," +
            "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," +
            "embed,object,param,source,canvas,script,noscript,del,ins," +
            "caption,col,colgroup,table,thead,tbody,td,th,tr," +
            "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," +
            "output,progress,select,textarea," +
            "details,dialog,menu,menuitem,summary," +
            "content,element,shadow,template,blockquote,iframe,tfoot"
        );

        // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.
        var isSVG = makeMap(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," +
            "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," +
            "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          true
        );

        var isPreTag = function (tag) {
          return tag === "pre";
        };

        var isReservedTag = function (tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };

        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          // basic support for MathML
          // note it doesn't support other MathML elements being component roots
          if (tag === "math") {
            return "math";
          }
        }

        var unknownElementCache = Object.create(null);
        function isUnknownElement(tag) {
          /* istanbul ignore if */
          if (!inBrowser) {
            return true;
          }
          if (isReservedTag(tag)) {
            return false;
          }
          tag = tag.toLowerCase();
          /* istanbul ignore if */
          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
          }
          var el = document.createElement(tag);
          if (tag.indexOf("-") > -1) {
            // http://stackoverflow.com/a/28210364/1070244
            return (unknownElementCache[tag] =
              el.constructor === window.HTMLUnknownElement ||
              el.constructor === window.HTMLElement);
          } else {
            return (unknownElementCache[tag] = /HTMLUnknownElement/.test(
              el.toString()
            ));
          }
        }

        var isTextInputType = makeMap(
          "text,number,password,search,email,tel,url"
        );

        /*  */

        /**
         * Query an element selector if it's not an element already.
         */
        function query(el) {
          if (typeof el === "string") {
            var selected = document.querySelector(el);
            if (!selected) {
              "production" !== "production" &&
                warn("Cannot find element: " + el);
              return document.createElement("div");
            }
            return selected;
          } else {
            return el;
          }
        }

        /*  */

        function createElement$1(tagName, vnode) {
          var elm = document.createElement(tagName);
          if (tagName !== "select") {
            return elm;
          }
          // false or null will remove the attribute but undefined will not
          if (
            vnode.data &&
            vnode.data.attrs &&
            vnode.data.attrs.multiple !== undefined
          ) {
            elm.setAttribute("multiple", "multiple");
          }
          return elm;
        }

        function createElementNS(namespace, tagName) {
          return document.createElementNS(namespaceMap[namespace], tagName);
        }

        function createTextNode(text) {
          return document.createTextNode(text);
        }

        function createComment(text) {
          return document.createComment(text);
        }

        function insertBefore(parentNode, newNode, referenceNode) {
          parentNode.insertBefore(newNode, referenceNode);
        }

        function removeChild(node, child) {
          node.removeChild(child);
        }

        function appendChild(node, child) {
          node.appendChild(child);
        }

        function parentNode(node) {
          return node.parentNode;
        }

        function nextSibling(node) {
          return node.nextSibling;
        }

        function tagName(node) {
          return node.tagName;
        }

        function setTextContent(node, text) {
          node.textContent = text;
        }

        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, "");
        }

        var nodeOps = Object.freeze({
          createElement: createElement$1,
          createElementNS: createElementNS,
          createTextNode: createTextNode,
          createComment: createComment,
          insertBefore: insertBefore,
          removeChild: removeChild,
          appendChild: appendChild,
          parentNode: parentNode,
          nextSibling: nextSibling,
          tagName: tagName,
          setTextContent: setTextContent,
          setStyleScope: setStyleScope,
        });

        /*  */

        var ref = {
          create: function create(_, vnode) {
            registerRef(vnode);
          },
          update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
            }
          },
          destroy: function destroy(vnode) {
            registerRef(vnode, true);
          },
        };

        function registerRef(vnode, isRemoval) {
          var key = vnode.data.ref;
          if (!isDef(key)) {
            return;
          }

          var vm = vnode.context;
          var ref = vnode.componentInstance || vnode.elm;
          var refs = vm.$refs;
          if (isRemoval) {
            if (Array.isArray(refs[key])) {
              remove(refs[key], ref);
            } else if (refs[key] === ref) {
              refs[key] = undefined;
            }
          } else {
            if (vnode.data.refInFor) {
              if (!Array.isArray(refs[key])) {
                refs[key] = [ref];
              } else if (refs[key].indexOf(ref) < 0) {
                // $flow-disable-line
                refs[key].push(ref);
              }
            } else {
              refs[key] = ref;
            }
          }
        }

        /**
         * Virtual DOM patching algorithm based on Snabbdom by
         * Simon Friis Vindum (@paldepind)
         * Licensed under the MIT License
         * https://github.com/paldepind/snabbdom/blob/master/LICENSE
         *
         * modified by Evan You (@yyx990803)
         *
         * Not type-checking this because this file is perf-critical and the cost
         * of making flow understand it is not worth it.
         */

        var emptyNode = new VNode("", {}, []);

        var hooks = ["create", "activate", "update", "remove", "destroy"];

        function sameVnode(a, b) {
          return (
            a.key === b.key &&
            ((a.tag === b.tag &&
              a.isComment === b.isComment &&
              isDef(a.data) === isDef(b.data) &&
              sameInputType(a, b)) ||
              (isTrue(a.isAsyncPlaceholder) &&
                a.asyncFactory === b.asyncFactory &&
                isUndef(b.asyncFactory.error)))
          );
        }

        function sameInputType(a, b) {
          if (a.tag !== "input") {
            return true;
          }
          var i;
          var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
          var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
          return (
            typeA === typeB ||
            (isTextInputType(typeA) && isTextInputType(typeB))
          );
        }

        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key;
          var map = {};
          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key)) {
              map[key] = i;
            }
          }
          return map;
        }

        function createPatchFunction(backend) {
          var i, j;
          var cbs = {};

          var modules = backend.modules;
          var nodeOps = backend.nodeOps;

          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules.length; ++j) {
              if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]]);
              }
            }
          }

          function emptyNodeAt(elm) {
            return new VNode(
              nodeOps.tagName(elm).toLowerCase(),
              {},
              [],
              undefined,
              elm
            );
          }

          function createRmCb(childElm, listeners) {
            function remove() {
              if (--remove.listeners === 0) {
                removeNode(childElm);
              }
            }
            remove.listeners = listeners;
            return remove;
          }

          function removeNode(el) {
            var parent = nodeOps.parentNode(el);
            // element may have already been removed due to v-html / v-text
            if (isDef(parent)) {
              nodeOps.removeChild(parent, el);
            }
          }

          function isUnknownElement$$1(vnode, inVPre) {
            return (
              !inVPre &&
              !vnode.ns &&
              !(
                config.ignoredElements.length &&
                config.ignoredElements.some(function (ignore) {
                  return isRegExp(ignore)
                    ? ignore.test(vnode.tag)
                    : ignore === vnode.tag;
                })
              ) &&
              config.isUnknownElement(vnode.tag)
            );
          }

          var creatingElmInVPre = 0;

          function createElm(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm,
            nested,
            ownerArray,
            index
          ) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              // This vnode was used in a previous render!
              // now it's used as a new node, overwriting its elm would cause
              // potential patch errors down the road when it's used as an insertion
              // reference node. Instead, we clone the node on-demand before creating
              // associated DOM element for it.
              vnode = ownerArray[index] = cloneVNode(vnode);
            }

            vnode.isRootInsert = !nested; // for transition enter check
            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
            }

            var data = vnode.data;
            var children = vnode.children;
            var tag = vnode.tag;
            if (isDef(tag)) {
              if (false) {
              }

              vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode);
              setScope(vnode);

              /* istanbul ignore if */
              {
                createChildren(vnode, children, insertedVnodeQueue);
                if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
              }

              if (false) {
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }

          function createComponent(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm
          ) {
            var i = vnode.data;
            if (isDef(i)) {
              var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
              if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(vnode, false /* hydrating */, parentElm, refElm);
              }
              // after calling the init hook, if the vnode is a child component
              // it should've created a child instance and mounted it. the child
              // component also has set the placeholder vnode's elm.
              // in that case we can just return the element and be done.
              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                if (isTrue(isReactivated)) {
                  reactivateComponent(
                    vnode,
                    insertedVnodeQueue,
                    parentElm,
                    refElm
                  );
                }
                return true;
              }
            }
          }

          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(
                insertedVnodeQueue,
                vnode.data.pendingInsert
              );
              vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
            } else {
              // empty component root.
              // skip all element-related modules except for ref (#3455)
              registerRef(vnode);
              // make sure to invoke the insert hook
              insertedVnodeQueue.push(vnode);
            }
          }

          function reactivateComponent(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm
          ) {
            var i;
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
            var innerNode = vnode;
            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                  cbs.activate[i](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
              }
            }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
            insert(parentElm, vnode.elm, refElm);
          }

          function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
              if (isDef(ref$$1)) {
                if (ref$$1.parentNode === parent) {
                  nodeOps.insertBefore(parent, elm, ref$$1);
                }
              } else {
                nodeOps.appendChild(parent, elm);
              }
            }
          }

          function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
              if (false) {
              }
              for (var i = 0; i < children.length; ++i) {
                createElm(
                  children[i],
                  insertedVnodeQueue,
                  vnode.elm,
                  null,
                  true,
                  children,
                  i
                );
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps.appendChild(
                vnode.elm,
                nodeOps.createTextNode(String(vnode.text))
              );
            }
          }

          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
          }

          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
              cbs.create[i$1](emptyNode, vnode);
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
              if (isDef(i.create)) {
                i.create(emptyNode, vnode);
              }
              if (isDef(i.insert)) {
                insertedVnodeQueue.push(vnode);
              }
            }
          }

          // set scope id attribute for scoped CSS.
          // this is implemented as a special case to avoid the overhead
          // of going through the normal attribute patching process.
          function setScope(vnode) {
            var i;
            if (isDef((i = vnode.fnScopeId))) {
              nodeOps.setStyleScope(vnode.elm, i);
            } else {
              var ancestor = vnode;
              while (ancestor) {
                if (
                  isDef((i = ancestor.context)) &&
                  isDef((i = i.$options._scopeId))
                ) {
                  nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
              }
            }
            // for slot content they should also get the scopeId from the host instance.
            if (
              isDef((i = activeInstance)) &&
              i !== vnode.context &&
              i !== vnode.fnContext &&
              isDef((i = i.$options._scopeId))
            ) {
              nodeOps.setStyleScope(vnode.elm, i);
            }
          }

          function addVnodes(
            parentElm,
            refElm,
            vnodes,
            startIdx,
            endIdx,
            insertedVnodeQueue
          ) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(
                vnodes[startIdx],
                insertedVnodeQueue,
                parentElm,
                refElm,
                false,
                vnodes,
                startIdx
              );
            }
          }

          function invokeDestroyHook(vnode) {
            var i, j;
            var data = vnode.data;
            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
                i(vnode);
              }
              for (i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](vnode);
              }
            }
            if (isDef((i = vnode.children))) {
              for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j]);
              }
            }
          }

          function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch);
                  invokeDestroyHook(ch);
                } else {
                  // Text node
                  removeNode(ch.elm);
                }
              }
            }
          }

          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners;
              } else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners);
              }
              // recursively invoke hooks on child component root node
              if (
                isDef((i = vnode.componentInstance)) &&
                isDef((i = i._vnode)) &&
                isDef(i.data)
              ) {
                removeAndInvokeRemoveHook(i, rm);
              }
              for (i = 0; i < cbs.remove.length; ++i) {
                cbs.remove[i](vnode, rm);
              }
              if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                i(vnode, rm);
              } else {
                rm();
              }
            } else {
              removeNode(vnode.elm);
            }
          }

          function updateChildren(
            parentElm,
            oldCh,
            newCh,
            insertedVnodeQueue,
            removeOnly
          ) {
            var oldStartIdx = 0;
            var newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
            var canMove = !removeOnly;

            if (false) {
            }

            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                canMove &&
                  nodeOps.insertBefore(
                    parentElm,
                    oldStartVnode.elm,
                    nodeOps.nextSibling(oldEndVnode.elm)
                  );
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                canMove &&
                  nodeOps.insertBefore(
                    parentElm,
                    oldEndVnode.elm,
                    oldStartVnode.elm
                  );
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (isUndef(oldKeyToIdx)) {
                  oldKeyToIdx = createKeyToOldIdx(
                    oldCh,
                    oldStartIdx,
                    oldEndIdx
                  );
                }
                idxInOld = isDef(newStartVnode.key)
                  ? oldKeyToIdx[newStartVnode.key]
                  : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                  // New element
                  createElm(
                    newStartVnode,
                    insertedVnodeQueue,
                    parentElm,
                    oldStartVnode.elm,
                    false,
                    newCh,
                    newStartIdx
                  );
                } else {
                  vnodeToMove = oldCh[idxInOld];
                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
                    oldCh[idxInOld] = undefined;
                    canMove &&
                      nodeOps.insertBefore(
                        parentElm,
                        vnodeToMove.elm,
                        oldStartVnode.elm
                      );
                  } else {
                    // same key but different element. treat as new element
                    createElm(
                      newStartVnode,
                      insertedVnodeQueue,
                      parentElm,
                      oldStartVnode.elm,
                      false,
                      newCh,
                      newStartIdx
                    );
                  }
                }
                newStartVnode = newCh[++newStartIdx];
              }
            }
            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1])
                ? null
                : newCh[newEndIdx + 1].elm;
              addVnodes(
                parentElm,
                refElm,
                newCh,
                newStartIdx,
                newEndIdx,
                insertedVnodeQueue
              );
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
          }

          function checkDuplicateKeys(children) {
            var seenKeys = {};
            for (var i = 0; i < children.length; i++) {
              var vnode = children[i];
              var key = vnode.key;
              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn(
                    "Duplicate keys detected: '" +
                      key +
                      "'. This may cause an update error.",
                    vnode.context
                  );
                } else {
                  seenKeys[key] = true;
                }
              }
            }
          }

          function findIdxInOld(node, oldCh, start, end) {
            for (var i = start; i < end; i++) {
              var c = oldCh[i];
              if (isDef(c) && sameVnode(node, c)) {
                return i;
              }
            }
          }

          function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
            if (oldVnode === vnode) {
              return;
            }

            var elm = (vnode.elm = oldVnode.elm);

            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              } else {
                vnode.isAsyncPlaceholder = true;
              }
              return;
            }

            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
            if (
              isTrue(vnode.isStatic) &&
              isTrue(oldVnode.isStatic) &&
              vnode.key === oldVnode.key &&
              (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
            }

            var i;
            var data = vnode.data;
            if (
              isDef(data) &&
              isDef((i = data.hook)) &&
              isDef((i = i.prepatch))
            ) {
              i(oldVnode, vnode);
            }

            var oldCh = oldVnode.children;
            var ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
              for (i = 0; i < cbs.update.length; ++i) {
                cbs.update[i](oldVnode, vnode);
              }
              if (isDef((i = data.hook)) && isDef((i = i.update))) {
                i(oldVnode, vnode);
              }
            }
            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                  updateChildren(
                    elm,
                    oldCh,
                    ch,
                    insertedVnodeQueue,
                    removeOnly
                  );
                }
              } else if (isDef(ch)) {
                if (isDef(oldVnode.text)) {
                  nodeOps.setTextContent(elm, "");
                }
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
              } else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, "");
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
                i(oldVnode, vnode);
              }
            }
          }

          function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue;
            } else {
              for (var i = 0; i < queue.length; ++i) {
                queue[i].data.hook.insert(queue[i]);
              }
            }
          }

          var hydrationBailed = false;
          // list of modules that can skip create hook during hydration because they
          // are already rendered on the client or has no need for initialization
          // Note: style is excluded because it relies on initial clone for future
          // deep updates (#7063).
          var isRenderedModule = makeMap(
            "attrs,class,staticClass,staticStyle,key"
          );

          // Note: this is a browser-only function so we can assume elms are DOM nodes.
          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i;
            var tag = vnode.tag;
            var data = vnode.data;
            var children = vnode.children;
            inVPre = inVPre || (data && data.pre);
            vnode.elm = elm;

            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
            }
            // assert node match
            if (false) {
            }
            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.init))) {
                i(vnode, true /* hydrating */);
              }
              if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
              }
            }
            if (isDef(tag)) {
              if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue);
                } else {
                  // v-html and domProps: innerHTML
                  if (
                    isDef((i = data)) &&
                    isDef((i = i.domProps)) &&
                    isDef((i = i.innerHTML))
                  ) {
                    if (i !== elm.innerHTML) {
                      /* istanbul ignore if */
                      if (false) {
                      }
                      return false;
                    }
                  } else {
                    // iterate and compare children lists
                    var childrenMatch = true;
                    var childNode = elm.firstChild;
                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                      if (
                        !childNode ||
                        !hydrate(
                          childNode,
                          children[i$1],
                          insertedVnodeQueue,
                          inVPre
                        )
                      ) {
                        childrenMatch = false;
                        break;
                      }
                      childNode = childNode.nextSibling;
                    }
                    // if childNode is not null, it means the actual childNodes list is
                    // longer than the virtual children list.
                    if (!childrenMatch || childNode) {
                      /* istanbul ignore if */
                      if (false) {
                      }
                      return false;
                    }
                  }
                }
              }
              if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                  }
                }
                if (!fullInvoke && data["class"]) {
                  // ensure collecting deps for deep class bindings for future updates
                  traverse(data["class"]);
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
            }
            return true;
          }

          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return (
                vnode.tag.indexOf("vue-component") === 0 ||
                (!isUnknownElement$$1(vnode, inVPre) &&
                  vnode.tag.toLowerCase() ===
                    (node.tagName && node.tagName.toLowerCase()))
              );
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
            }
          }

          return function patch(
            oldVnode,
            vnode,
            hydrating,
            removeOnly,
            parentElm,
            refElm
          ) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode)) {
                invokeDestroyHook(oldVnode);
              }
              return;
            }

            var isInitialPatch = false;
            var insertedVnodeQueue = [];

            if (isUndef(oldVnode)) {
              // empty mount (likely as component), create new root element
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue, parentElm, refElm);
            } else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
              } else {
                if (isRealElement) {
                  // mounting to a real element
                  // check if this is server-rendered content and if we can perform
                  // a successful hydration.
                  if (
                    oldVnode.nodeType === 1 &&
                    oldVnode.hasAttribute(SSR_ATTR)
                  ) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                  }
                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true);
                      return oldVnode;
                    } else if (false) {
                    }
                  }
                  // either not server-rendered, or hydration failed.
                  // create an empty node and replace it
                  oldVnode = emptyNodeAt(oldVnode);
                }

                // replacing existing element
                var oldElm = oldVnode.elm;
                var parentElm$1 = nodeOps.parentNode(oldElm);

                // create new node
                createElm(
                  vnode,
                  insertedVnodeQueue,
                  // extremely rare edge case: do not insert if old element is in a
                  // leaving transition. Only happens when combining transition +
                  // keep-alive + HOCs. (#4590)
                  oldElm._leaveCb ? null : parentElm$1,
                  nodeOps.nextSibling(oldElm)
                );

                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent;
                  var patchable = isPatchable(vnode);
                  while (ancestor) {
                    for (var i = 0; i < cbs.destroy.length; ++i) {
                      cbs.destroy[i](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, ancestor);
                      }
                      // #6513
                      // invoke insert hooks that may have been merged by create hooks.
                      // e.g. for directives that uses the "inserted" hook.
                      var insert = ancestor.data.hook.insert;
                      if (insert.merged) {
                        // start at index 1 to avoid re-invoking component mounted hook
                        for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                          insert.fns[i$2]();
                        }
                      }
                    } else {
                      registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                  }
                }

                // destroy old node
                if (isDef(parentElm$1)) {
                  removeVnodes(parentElm$1, [oldVnode], 0, 0);
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode);
                }
              }
            }

            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
          };
        }

        /*  */

        var directives = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode);
          },
        };

        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
          }
        }

        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode;
          var isDestroy = vnode === emptyNode;
          var oldDirs = normalizeDirectives$1(
            oldVnode.data.directives,
            oldVnode.context
          );
          var newDirs = normalizeDirectives$1(
            vnode.data.directives,
            vnode.context
          );

          var dirsWithInsert = [];
          var dirsWithPostpatch = [];

          var key, oldDir, dir;
          for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
              // new directive, bind
              callHook$1(dir, "bind", vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
              }
            } else {
              // existing directive, update
              dir.oldValue = oldDir.value;
              callHook$1(dir, "update", vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
              }
            }
          }

          if (dirsWithInsert.length) {
            var callInsert = function () {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
              }
            };
            if (isCreate) {
              mergeVNodeHook(vnode, "insert", callInsert);
            } else {
              callInsert();
            }
          }

          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, "postpatch", function () {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook$1(
                  dirsWithPostpatch[i],
                  "componentUpdated",
                  vnode,
                  oldVnode
                );
              }
            });
          }

          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                // no longer present, unbind
                callHook$1(
                  oldDirs[key],
                  "unbind",
                  oldVnode,
                  oldVnode,
                  isDestroy
                );
              }
            }
          }
        }

        var emptyModifiers = Object.create(null);

        function normalizeDirectives$1(dirs, vm) {
          var res = Object.create(null);
          if (!dirs) {
            // $flow-disable-line
            return res;
          }
          var i, dir;
          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
              // $flow-disable-line
              dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
          }
          // $flow-disable-line
          return res;
        }

        function getRawDirName(dir) {
          return (
            dir.rawName ||
            dir.name + "." + Object.keys(dir.modifiers || {}).join(".")
          );
        }

        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook];
          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
              handleError(
                e,
                vnode.context,
                "directive " + dir.name + " " + hook + " hook"
              );
            }
          }
        }

        var baseModules = [ref, directives];

        /*  */

        function updateAttrs(oldVnode, vnode) {
          var opts = vnode.componentOptions;
          if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
            return;
          }
          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
          }
          var key, cur, old;
          var elm = vnode.elm;
          var oldAttrs = oldVnode.data.attrs || {};
          var attrs = vnode.data.attrs || {};
          // clone observed objects, as the user probably wants to mutate it
          if (isDef(attrs.__ob__)) {
            attrs = vnode.data.attrs = extend({}, attrs);
          }

          for (key in attrs) {
            cur = attrs[key];
            old = oldAttrs[key];
            if (old !== cur) {
              setAttr(elm, key, cur);
            }
          }
          // #4391: in IE9, setting type can reset value for input[type=radio]
          // #6666: IE/Edge forces progress value down to 1 before setting a max
          /* istanbul ignore if */
          if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
            setAttr(elm, "value", attrs.value);
          }
          for (key in oldAttrs) {
            if (isUndef(attrs[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
              }
            }
          }
        }

        function setAttr(el, key, value) {
          if (el.tagName.indexOf("-") > -1) {
            baseSetAttr(el, key, value);
          } else if (isBooleanAttr(key)) {
            // set attribute for blank value
            // e.g. <option disabled>Select one</option>
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              // technically allowfullscreen is a boolean attribute for <iframe>,
              // but Flash expects a value of "true" when used on <embed> tag
              value =
                key === "allowfullscreen" && el.tagName === "EMBED"
                  ? "true"
                  : key;
              el.setAttribute(key, value);
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(
              key,
              isFalsyAttrValue(value) || value === "false" ? "false" : "true"
            );
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            baseSetAttr(el, key, value);
          }
        }

        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            // #7138: IE10 & 11 fires input event when setting placeholder on
            // <textarea>... block the first input event and remove the blocker
            // immediately.
            /* istanbul ignore if */
            if (
              isIE &&
              !isIE9 &&
              el.tagName === "TEXTAREA" &&
              key === "placeholder" &&
              !el.__ieph
            ) {
              var blocker = function (e) {
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker);
              };
              el.addEventListener("input", blocker);
              // $flow-disable-line
              el.__ieph = true; /* IE placeholder patched */
            }
            el.setAttribute(key, value);
          }
        }

        var attrs = {
          create: updateAttrs,
          update: updateAttrs,
        };

        /*  */

        function updateClass(oldVnode, vnode) {
          var el = vnode.elm;
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (
            isUndef(data.staticClass) &&
            isUndef(data.class) &&
            (isUndef(oldData) ||
              (isUndef(oldData.staticClass) && isUndef(oldData.class)))
          ) {
            return;
          }

          var cls = genClassForVnode(vnode);

          // handle transition classes
          var transitionClass = el._transitionClasses;
          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
          }

          // set the class
          if (cls !== el._prevClass) {
            el.setAttribute("class", cls);
            el._prevClass = cls;
          }
        }

        var klass = {
          create: updateClass,
          update: updateClass,
        };

        /*  */

        var validDivisionCharRE = /[\w).+\-_$\]]/;

        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;

          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 0x27 && prev !== 0x5c) {
                inSingle = false;
              }
            } else if (inDouble) {
              if (c === 0x22 && prev !== 0x5c) {
                inDouble = false;
              }
            } else if (inTemplateString) {
              if (c === 0x60 && prev !== 0x5c) {
                inTemplateString = false;
              }
            } else if (inRegex) {
              if (c === 0x2f && prev !== 0x5c) {
                inRegex = false;
              }
            } else if (
              c === 0x7c && // pipe
              exp.charCodeAt(i + 1) !== 0x7c &&
              exp.charCodeAt(i - 1) !== 0x7c &&
              !curly &&
              !square &&
              !paren
            ) {
              if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 0x22:
                  inDouble = true;
                  break; // "
                case 0x27:
                  inSingle = true;
                  break; // '
                case 0x60:
                  inTemplateString = true;
                  break; // `
                case 0x28:
                  paren++;
                  break; // (
                case 0x29:
                  paren--;
                  break; // )
                case 0x5b:
                  square++;
                  break; // [
                case 0x5d:
                  square--;
                  break; // ]
                case 0x7b:
                  curly++;
                  break; // {
                case 0x7d:
                  curly--;
                  break; // }
              }
              if (c === 0x2f) {
                // /
                var j = i - 1;
                var p = void 0;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                  p = exp.charAt(j);
                  if (p !== " ") {
                    break;
                  }
                }
                if (!p || !validDivisionCharRE.test(p)) {
                  inRegex = true;
                }
              }
            }
          }

          if (expression === undefined) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }

          function pushFilter() {
            (filters || (filters = [])).push(
              exp.slice(lastFilterIndex, i).trim()
            );
            lastFilterIndex = i + 1;
          }

          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }

          return expression;
        }

        function wrapFilter(exp, filter) {
          var i = filter.indexOf("(");
          if (i < 0) {
            // _f: resolveFilter
            return '_f("' + filter + '")(' + exp + ")";
          } else {
            var name = filter.slice(0, i);
            var args = filter.slice(i + 1);
            return (
              '_f("' + name + '")(' + exp + (args !== ")" ? "," + args : args)
            );
          }
        }

        /*  */

        function baseWarn(msg) {
          console.error("[Vue compiler]: " + msg);
        }

        function pluckModuleFunction(modules, key) {
          return modules
            ? modules
                .map(function (m) {
                  return m[key];
                })
                .filter(function (_) {
                  return _;
                })
            : [];
        }

        function addProp(el, name, value) {
          (el.props || (el.props = [])).push({ name: name, value: value });
          el.plain = false;
        }

        function addAttr(el, name, value) {
          (el.attrs || (el.attrs = [])).push({ name: name, value: value });
          el.plain = false;
        }

        // add a raw attr (use this in preTransforms)
        function addRawAttr(el, name, value) {
          el.attrsMap[name] = value;
          el.attrsList.push({ name: name, value: value });
        }

        function addDirective(el, name, rawName, value, arg, modifiers) {
          (el.directives || (el.directives = [])).push({
            name: name,
            rawName: rawName,
            value: value,
            arg: arg,
            modifiers: modifiers,
          });
          el.plain = false;
        }

        function addHandler(el, name, value, modifiers, important, warn) {
          modifiers = modifiers || emptyObject;
          // warn prevent and passive modifier
          /* istanbul ignore if */
          if (false) {
          }

          // check capture modifier
          if (modifiers.capture) {
            delete modifiers.capture;
            name = "!" + name; // mark the event as captured
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = "~" + name; // mark the event as once
          }
          /* istanbul ignore if */
          if (modifiers.passive) {
            delete modifiers.passive;
            name = "&" + name; // mark the event as passive
          }

          // normalize click.right and click.middle since they don't actually fire
          // this is technically browser-specific, but at least for now browsers are
          // the only target envs that have right/middle clicks.
          if (name === "click") {
            if (modifiers.right) {
              name = "contextmenu";
              delete modifiers.right;
            } else if (modifiers.middle) {
              name = "mouseup";
            }
          }

          var events;
          if (modifiers.native) {
            delete modifiers.native;
            events = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events = el.events || (el.events = {});
          }

          var newHandler = {
            value: value.trim(),
          };
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }

          var handlers = events[name];
          /* istanbul ignore if */
          if (Array.isArray(handlers)) {
            important
              ? handlers.unshift(newHandler)
              : handlers.push(newHandler);
          } else if (handlers) {
            events[name] = important
              ? [newHandler, handlers]
              : [handlers, newHandler];
          } else {
            events[name] = newHandler;
          }

          el.plain = false;
        }

        function getBindingAttr(el, name, getStatic) {
          var dynamicValue =
            getAndRemoveAttr(el, ":" + name) ||
            getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }

        // note: this only removes the attr from the Array (attrsList) so that it
        // doesn't get processed by processAttrs.
        // By default it does NOT remove it from the map (attrsMap) because the map is
        // needed during codegen.
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }

        /*  */

        /**
         * Cross-platform code generation for component v-model
         */
        function genComponentModel(el, value, modifiers) {
          var ref = modifiers || {};
          var number = ref.number;
          var trim = ref.trim;

          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim) {
            valueExpression =
              "(typeof " +
              baseValueExpression +
              " === 'string'" +
              "? " +
              baseValueExpression +
              ".trim()" +
              ": " +
              baseValueExpression +
              ")";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var assignment = genAssignmentCode(value, valueExpression);

          el.model = {
            value: "(" + value + ")",
            expression: '"' + value + '"',
            callback:
              "function (" + baseValueExpression + ") {" + assignment + "}",
          };
        }

        /**
         * Cross-platform codegen helper for generating v-model value assignment code.
         */
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return value + "=" + assignment;
          } else {
            return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
          }
        }

        /**
         * Parse a v-model expression into a base path and a final key segment.
         * Handles both dot-path and possible square brackets.
         *
         * Possible cases:
         *
         * - test
         * - test[key]
         * - test[test1[key]]
         * - test["a"][key]
         * - xxx.test[a[a].test1[key]]
         * - test.xxx.a["asa"][test1[key]]
         *
         */

        var len;
        var str;
        var chr;
        var index$1;
        var expressionPos;
        var expressionEndPos;

        function parseModel(val) {
          // Fix https://github.com/vuejs/vue/pull/7730
          // allow v-model="obj.val " (trailing whitespace)
          val = val.trim();
          len = val.length;

          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index$1 = val.lastIndexOf(".");
            if (index$1 > -1) {
              return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"',
              };
            } else {
              return {
                exp: val,
                key: null,
              };
            }
          }

          str = val;
          index$1 = expressionPos = expressionEndPos = 0;

          while (!eof()) {
            chr = next();
            /* istanbul ignore if */
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 0x5b) {
              parseBracket(chr);
            }
          }

          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos),
          };
        }

        function next() {
          return str.charCodeAt(++index$1);
        }

        function eof() {
          return index$1 >= len;
        }

        function isStringStart(chr) {
          return chr === 0x22 || chr === 0x27;
        }

        function parseBracket(chr) {
          var inBracket = 1;
          expressionPos = index$1;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
              continue;
            }
            if (chr === 0x5b) {
              inBracket++;
            }
            if (chr === 0x5d) {
              inBracket--;
            }
            if (inBracket === 0) {
              expressionEndPos = index$1;
              break;
            }
          }
        }

        function parseString(chr) {
          var stringQuote = chr;
          while (!eof()) {
            chr = next();
            if (chr === stringQuote) {
              break;
            }
          }
        }

        /*  */

        var warn$1;

        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";

        function model(el, dir, _warn) {
          warn$1 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;

          if (false) {
          }

          if (el.component) {
            genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            // component v-model doesn't need extra runtime
            return false;
          } else if (false) {
          }

          // ensure runtime directive metadata
          return true;
        }

        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(
            el,
            "checked",
            "Array.isArray(" +
              value +
              ")" +
              "?_i(" +
              value +
              "," +
              valueBinding +
              ")>-1" +
              (trueValueBinding === "true"
                ? ":(" + value + ")"
                : ":_q(" + value + "," + trueValueBinding + ")")
          );
          addHandler(
            el,
            "change",
            "var $$a=" +
              value +
              "," +
              "$$el=$event.target," +
              "$$c=$$el.checked?(" +
              trueValueBinding +
              "):(" +
              falseValueBinding +
              ");" +
              "if(Array.isArray($$a)){" +
              "var $$v=" +
              (number ? "_n(" + valueBinding + ")" : valueBinding) +
              "," +
              "$$i=_i($$a,$$v);" +
              "if($$el.checked){$$i<0&&(" +
              genAssignmentCode(value, "$$a.concat([$$v])") +
              ")}" +
              "else{$$i>-1&&(" +
              genAssignmentCode(
                value,
                "$$a.slice(0,$$i).concat($$a.slice($$i+1))"
              ) +
              ")}" +
              "}else{" +
              genAssignmentCode(value, "$$c") +
              "}",
            null,
            true
          );
        }

        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
          addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
          addHandler(
            el,
            "change",
            genAssignmentCode(value, valueBinding),
            null,
            true
          );
        }

        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal =
            "Array.prototype.filter" +
            ".call($event.target.options,function(o){return o.selected})" +
            '.map(function(o){var val = "_value" in o ? o._value : o.value;' +
            "return " +
            (number ? "_n(val)" : "val") +
            "})";

          var assignment =
            "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = " + selectedVal + ";";
          code = code + " " + genAssignmentCode(value, assignment);
          addHandler(el, "change", code, null, true);
        }

        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;

          // warn if v-bind:value conflicts with v-model
          // except for inputs with v-bind:type
          if (false) {
            var binding, typeBinding, value$1;
          }

          var ref = modifiers || {};
          var lazy = ref.lazy;
          var number = ref.number;
          var trim = ref.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy
            ? "change"
            : type === "range"
            ? RANGE_TOKEN
            : "input";

          var valueExpression = "$event.target.value";
          if (trim) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }

          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;" + code;
          }

          addProp(el, "value", "(" + value + ")");
          addHandler(el, event, code, null, true);
          if (trim || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }

        /*  */

        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.
        function normalizeEvents(on) {
          /* istanbul ignore if */
          if (isDef(on[RANGE_TOKEN])) {
            // IE input[type=range] only supports `change` event
            var event = isIE ? "change" : "input";
            on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
            delete on[RANGE_TOKEN];
          }
          // This was originally intended to fix #4521 but no longer necessary
          // after 2.5. Keeping it for backwards compat with generated code from < 2.4
          /* istanbul ignore if */
          if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
            on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
            delete on[CHECKBOX_RADIO_TOKEN];
          }
        }

        var target$1;

        function createOnceHandler(handler, event, capture) {
          var _target = target$1; // save current target element in closure
          return function onceHandler() {
            var res = handler.apply(null, arguments);
            if (res !== null) {
              remove$2(event, onceHandler, capture, _target);
            }
          };
        }

        function add$1(event, handler, once$$1, capture, passive) {
          handler = withMacroTask(handler);
          if (once$$1) {
            handler = createOnceHandler(handler, event, capture);
          }
          target$1.addEventListener(
            event,
            handler,
            supportsPassive ? { capture: capture, passive: passive } : capture
          );
        }

        function remove$2(event, handler, capture, _target) {
          (_target || target$1).removeEventListener(
            event,
            handler._withTask || handler,
            capture
          );
        }

        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
          }
          var on = vnode.data.on || {};
          var oldOn = oldVnode.data.on || {};
          target$1 = vnode.elm;
          normalizeEvents(on);
          updateListeners(on, oldOn, add$1, remove$2, vnode.context);
          target$1 = undefined;
        }

        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners,
        };

        /*  */

        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
          }
          var key, cur;
          var elm = vnode.elm;
          var oldProps = oldVnode.data.domProps || {};
          var props = vnode.data.domProps || {};
          // clone observed objects, as the user probably wants to mutate it
          if (isDef(props.__ob__)) {
            props = vnode.data.domProps = extend({}, props);
          }

          for (key in oldProps) {
            if (isUndef(props[key])) {
              elm[key] = "";
            }
          }
          for (key in props) {
            cur = props[key];
            // ignore children if the node has textContent or innerHTML,
            // as these will throw away existing DOM nodes and cause removal errors
            // on subsequent patches (#3360)
            if (key === "textContent" || key === "innerHTML") {
              if (vnode.children) {
                vnode.children.length = 0;
              }
              if (cur === oldProps[key]) {
                continue;
              }
              // #6601 work around Chrome version <= 55 bug where single textNode
              // replaced by innerHTML/textContent retains its parentNode property
              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
              }
            }

            if (key === "value") {
              // store value as _value as well since
              // non-string values will be stringified
              elm._value = cur;
              // avoid resetting cursor position when value is the same
              var strCur = isUndef(cur) ? "" : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
              }
            } else {
              elm[key] = cur;
            }
          }
        }

        // check platforms/web/util/attrs.js acceptValue

        function shouldUpdateValue(elm, checkVal) {
          return (
            !elm.composing &&
            (elm.tagName === "OPTION" ||
              isNotInFocusAndDirty(elm, checkVal) ||
              isDirtyWithModifiers(elm, checkVal))
          );
        }

        function isNotInFocusAndDirty(elm, checkVal) {
          // return true when textbox (.number and .trim) loses focus and its value is
          // not equal to the updated value
          var notInFocus = true;
          // #6157
          // work around IE bug when accessing document.activeElement in an iframe
          try {
            notInFocus = document.activeElement !== elm;
          } catch (e) {}
          return notInFocus && elm.value !== checkVal;
        }

        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value;
          var modifiers = elm._vModifiers; // injected by v-model runtime
          if (isDef(modifiers)) {
            if (modifiers.lazy) {
              // inputs with lazy should only be updated when not in focus
              return false;
            }
            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
              return value.trim() !== newVal.trim();
            }
          }
          return value !== newVal;
        }

        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps,
        };

        /*  */

        var parseStyleText = cached(function (cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function (item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });

        // merge static and dynamic style data on the same vnode
        function normalizeStyleData(data) {
          var style = normalizeStyleBinding(data.style);
          // static style is pre-processed into an object during compilation
          // and is always a fresh object, so it's safe to merge into it
          return data.staticStyle ? extend(data.staticStyle, style) : style;
        }

        // normalize possible array / string values into Object
        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
          }
          if (typeof bindingStyle === "string") {
            return parseStyleText(bindingStyle);
          }
          return bindingStyle;
        }

        /**
         * parent component style should be after child's
         * so that parent component's style could override it
         */
        function getStyle(vnode, checkChild) {
          var res = {};
          var styleData;

          if (checkChild) {
            var childNode = vnode;
            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (
                childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))
              ) {
                extend(res, styleData);
              }
            }
          }

          if ((styleData = normalizeStyleData(vnode.data))) {
            extend(res, styleData);
          }

          var parentNode = vnode;
          while ((parentNode = parentNode.parent)) {
            if (
              parentNode.data &&
              (styleData = normalizeStyleData(parentNode.data))
            ) {
              extend(res, styleData);
            }
          }
          return res;
        }

        /*  */

        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function (el, name, val) {
          /* istanbul ignore if */
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
          } else if (importantRE.test(val)) {
            el.style.setProperty(
              name,
              val.replace(importantRE, ""),
              "important"
            );
          } else {
            var normalizedName = normalize(name);
            if (Array.isArray(val)) {
              // Support values array created by autoprefixer, e.g.
              // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
              // Set them one by one, and the browser will only set those it can recognize
              for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i];
              }
            } else {
              el.style[normalizedName] = val;
            }
          }
        };

        var vendorNames = ["Webkit", "Moz", "ms"];

        var emptyStyle;
        var normalize = cached(function (prop) {
          emptyStyle = emptyStyle || document.createElement("div").style;
          prop = camelize(prop);
          if (prop !== "filter" && prop in emptyStyle) {
            return prop;
          }
          var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
          for (var i = 0; i < vendorNames.length; i++) {
            var name = vendorNames[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        });

        function updateStyle(oldVnode, vnode) {
          var data = vnode.data;
          var oldData = oldVnode.data;

          if (
            isUndef(data.staticStyle) &&
            isUndef(data.style) &&
            isUndef(oldData.staticStyle) &&
            isUndef(oldData.style)
          ) {
            return;
          }

          var cur, name;
          var el = vnode.elm;
          var oldStaticStyle = oldData.staticStyle;
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

          // if static style exists, stylebinding already merged into it when doing normalizeStyleData
          var oldStyle = oldStaticStyle || oldStyleBinding;

          var style = normalizeStyleBinding(vnode.data.style) || {};

          // store normalized style under a different key for next diff
          // make sure to clone it if it's reactive, since the user likely wants
          // to mutate it.
          vnode.data.normalizedStyle = isDef(style.__ob__)
            ? extend({}, style)
            : style;

          var newStyle = getStyle(vnode, true);

          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, "");
            }
          }
          for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
              // ie9 setting to null has no effect, must use empty string
              setProp(el, name, cur == null ? "" : cur);
            }
          }
        }

        var style = {
          create: updateStyle,
          update: updateStyle,
        };

        /*  */

        /**
         * Add class with compatibility for SVG since classList is not supported on
         * SVG elements in IE
         */
        function addClass(el, cls) {
          /* istanbul ignore if */
          if (!cls || !(cls = cls.trim())) {
            return;
          }

          /* istanbul ignore else */
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(/\s+/).forEach(function (c) {
                return el.classList.add(c);
              });
            } else {
              el.classList.add(cls);
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        }

        /**
         * Remove class with compatibility for SVG since classList is not supported on
         * SVG elements in IE
         */
        function removeClass(el, cls) {
          /* istanbul ignore if */
          if (!cls || !(cls = cls.trim())) {
            return;
          }

          /* istanbul ignore else */
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(/\s+/).forEach(function (c) {
                return el.classList.remove(c);
              });
            } else {
              el.classList.remove(cls);
            }
            if (!el.classList.length) {
              el.removeAttribute("class");
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            cur = cur.trim();
            if (cur) {
              el.setAttribute("class", cur);
            } else {
              el.removeAttribute("class");
            }
          }
        }

        /*  */

        function resolveTransition(def) {
          if (!def) {
            return;
          }
          /* istanbul ignore else */
          if (typeof def === "object") {
            var res = {};
            if (def.css !== false) {
              extend(res, autoCssTransition(def.name || "v"));
            }
            extend(res, def);
            return res;
          } else if (typeof def === "string") {
            return autoCssTransition(def);
          }
        }

        var autoCssTransition = cached(function (name) {
          return {
            enterClass: name + "-enter",
            enterToClass: name + "-enter-to",
            enterActiveClass: name + "-enter-active",
            leaveClass: name + "-leave",
            leaveToClass: name + "-leave-to",
            leaveActiveClass: name + "-leave-active",
          };
        });

        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";

        // Transition property/event sniffing
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
          /* istanbul ignore if */
          if (
            window.ontransitionend === undefined &&
            window.onwebkittransitionend !== undefined
          ) {
            transitionProp = "WebkitTransition";
            transitionEndEvent = "webkitTransitionEnd";
          }
          if (
            window.onanimationend === undefined &&
            window.onwebkitanimationend !== undefined
          ) {
            animationProp = "WebkitAnimation";
            animationEndEvent = "webkitAnimationEnd";
          }
        }

        // binding to window is necessary to make hot reload work in IE in strict mode
        var raf = inBrowser
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : /* istanbul ignore next */ function (fn) {
              return fn();
            };

        function nextFrame(fn) {
          raf(function () {
            raf(fn);
          });
        }

        function addTransitionClass(el, cls) {
          var transitionClasses =
            el._transitionClasses || (el._transitionClasses = []);
          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
          }
        }

        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove(el._transitionClasses, cls);
          }
          removeClass(el, cls);
        }

        function whenTransitionEnds(el, expectedType, cb) {
          var ref = getTransitionInfo(el, expectedType);
          var type = ref.type;
          var timeout = ref.timeout;
          var propCount = ref.propCount;
          if (!type) {
            return cb();
          }
          var event =
            type === TRANSITION ? transitionEndEvent : animationEndEvent;
          var ended = 0;
          var end = function () {
            el.removeEventListener(event, onEnd);
            cb();
          };
          var onEnd = function (e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end();
              }
            }
          };
          setTimeout(function () {
            if (ended < propCount) {
              end();
            }
          }, timeout + 1);
          el.addEventListener(event, onEnd);
        }

        var transformRE = /\b(transform|all)(,|$)/;

        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el);
          var transitionDelays = styles[transitionProp + "Delay"].split(", ");
          var transitionDurations = styles[transitionProp + "Duration"].split(
            ", "
          );
          var transitionTimeout = getTimeout(
            transitionDelays,
            transitionDurations
          );
          var animationDelays = styles[animationProp + "Delay"].split(", ");
          var animationDurations = styles[animationProp + "Duration"].split(
            ", "
          );
          var animationTimeout = getTimeout(
            animationDelays,
            animationDurations
          );

          var type;
          var timeout = 0;
          var propCount = 0;
          /* istanbul ignore if */
          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type =
              timeout > 0
                ? transitionTimeout > animationTimeout
                  ? TRANSITION
                  : ANIMATION
                : null;
            propCount = type
              ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
              : 0;
          }
          var hasTransform =
            type === TRANSITION &&
            transformRE.test(styles[transitionProp + "Property"]);
          return {
            type: type,
            timeout: timeout,
            propCount: propCount,
            hasTransform: hasTransform,
          };
        }

        function getTimeout(delays, durations) {
          /* istanbul ignore next */
          while (delays.length < durations.length) {
            delays = delays.concat(delays);
          }

          return Math.max.apply(
            null,
            durations.map(function (d, i) {
              return toMs(d) + toMs(delays[i]);
            })
          );
        }

        function toMs(s) {
          return Number(s.slice(0, -1)) * 1000;
        }

        /*  */

        function enter(vnode, toggleDisplay) {
          var el = vnode.elm;

          // call leave callback now
          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
          }

          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data)) {
            return;
          }

          /* istanbul ignore if */
          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
          }

          var css = data.css;
          var type = data.type;
          var enterClass = data.enterClass;
          var enterToClass = data.enterToClass;
          var enterActiveClass = data.enterActiveClass;
          var appearClass = data.appearClass;
          var appearToClass = data.appearToClass;
          var appearActiveClass = data.appearActiveClass;
          var beforeEnter = data.beforeEnter;
          var enter = data.enter;
          var afterEnter = data.afterEnter;
          var enterCancelled = data.enterCancelled;
          var beforeAppear = data.beforeAppear;
          var appear = data.appear;
          var afterAppear = data.afterAppear;
          var appearCancelled = data.appearCancelled;
          var duration = data.duration;

          // activeInstance will always be the <transition> component managing this
          // transition. One edge case to check is when the <transition> is placed
          // as the root node of a child component. In that case we need to check
          // <transition>'s parent for appear check.
          var context = activeInstance;
          var transitionNode = activeInstance.$vnode;
          while (transitionNode && transitionNode.parent) {
            transitionNode = transitionNode.parent;
            context = transitionNode.context;
          }

          var isAppear = !context._isMounted || !vnode.isRootInsert;

          if (isAppear && !appear && appear !== "") {
            return;
          }

          var startClass = isAppear && appearClass ? appearClass : enterClass;
          var activeClass =
            isAppear && appearActiveClass
              ? appearActiveClass
              : enterActiveClass;
          var toClass =
            isAppear && appearToClass ? appearToClass : enterToClass;

          var beforeEnterHook = isAppear
            ? beforeAppear || beforeEnter
            : beforeEnter;
          var enterHook = isAppear
            ? typeof appear === "function"
              ? appear
              : enter
            : enter;
          var afterEnterHook = isAppear
            ? afterAppear || afterEnter
            : afterEnter;
          var enterCancelledHook = isAppear
            ? appearCancelled || enterCancelled
            : enterCancelled;

          var explicitEnterDuration = toNumber(
            isObject(duration) ? duration.enter : duration
          );

          if (false) {
          }

          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(enterHook);

          var cb = (el._enterCb = once(function () {
            if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
            } else {
              afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
          }));

          if (!vnode.data.show) {
            // remove pending leave element on enter by injecting an insert hook
            mergeVNodeHook(vnode, "insert", function () {
              var parent = el.parentNode;
              var pendingNode =
                parent && parent._pending && parent._pending[vnode.key];
              if (
                pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb
              ) {
                pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
            });
          }

          // start enter transition
          beforeEnterHook && beforeEnterHook(el);
          if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(function () {
              removeTransitionClass(el, startClass);
              if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }

          if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
          }

          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }

        function leave(vnode, rm) {
          var el = vnode.elm;

          // call enter callback now
          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
          }

          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data) || el.nodeType !== 1) {
            return rm();
          }

          /* istanbul ignore if */
          if (isDef(el._leaveCb)) {
            return;
          }

          var css = data.css;
          var type = data.type;
          var leaveClass = data.leaveClass;
          var leaveToClass = data.leaveToClass;
          var leaveActiveClass = data.leaveActiveClass;
          var beforeLeave = data.beforeLeave;
          var leave = data.leave;
          var afterLeave = data.afterLeave;
          var leaveCancelled = data.leaveCancelled;
          var delayLeave = data.delayLeave;
          var duration = data.duration;

          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(leave);

          var explicitLeaveDuration = toNumber(
            isObject(duration) ? duration.leave : duration
          );

          if (false) {
          }

          var cb = (el._leaveCb = once(function () {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
            } else {
              rm();
              afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
          }));

          if (delayLeave) {
            delayLeave(performLeave);
          } else {
            performLeave();
          }

          function performLeave() {
            // the delayed leave may have already been cancelled
            if (cb.cancelled) {
              return;
            }
            // record leaving element
            if (!vnode.data.show) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[
                vnode.key
              ] = vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function () {
                removeTransitionClass(el, leaveClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            leave && leave(el, cb);
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
        }

        // only used in dev mode
        function checkDuration(val, name, vnode) {
          if (typeof val !== "number") {
            warn(
              "<transition> explicit " +
                name +
                " duration is not a valid number - " +
                "got " +
                JSON.stringify(val) +
                ".",
              vnode.context
            );
          } else if (isNaN(val)) {
            warn(
              "<transition> explicit " +
                name +
                " duration is NaN - " +
                "the duration expression might be incorrect.",
              vnode.context
            );
          }
        }

        function isValidDuration(val) {
          return typeof val === "number" && !isNaN(val);
        }

        /**
         * Normalize a transition hook's argument length. The hook may be:
         * - a merged hook (invoker) with the original in .fns
         * - a wrapped component method (check ._length)
         * - a plain function (.length)
         */
        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false;
          }
          var invokerFns = fn.fns;
          if (isDef(invokerFns)) {
            // invoker
            return getHookArgumentsLength(
              Array.isArray(invokerFns) ? invokerFns[0] : invokerFns
            );
          } else {
            return (fn._length || fn.length) > 1;
          }
        }

        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode);
          }
        }

        var transition = inBrowser
          ? {
              create: _enter,
              activate: _enter,
              remove: function remove$$1(vnode, rm) {
                /* istanbul ignore else */
                if (vnode.data.show !== true) {
                  leave(vnode, rm);
                } else {
                  rm();
                }
              },
            }
          : {};

        var platformModules = [
          attrs,
          klass,
          events,
          domProps,
          style,
          transition,
        ];

        /*  */

        // the directive module should be applied last, after all
        // built-in modules have been applied.
        var modules = platformModules.concat(baseModules);

        var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

        /**
         * Not type checking this file because flow doesn't like attaching
         * properties to Elements.
         */

        /* istanbul ignore if */
        if (isIE9) {
          // http://www.matts411.com/post/internet-explorer-9-oninput/
          document.addEventListener("selectionchange", function () {
            var el = document.activeElement;
            if (el && el.vmodel) {
              trigger(el, "input");
            }
          });
        }

        var directive = {
          inserted: function inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === "select") {
              // #6903
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, "postpatch", function () {
                  directive.componentUpdated(el, binding, vnode);
                });
              } else {
                setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
            } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener("change", onCompositionEnd);
                /* istanbul ignore if */
                if (isIE9) {
                  el.vmodel = true;
                }
              }
            }
          },

          componentUpdated: function componentUpdated(el, binding, vnode) {
            if (vnode.tag === "select") {
              setSelected(el, binding, vnode.context);
              // in case the options rendered by v-for have changed,
              // it's possible that the value is out-of-sync with the rendered options.
              // detect such cases and filter out values that no longer has a matching
              // option in the DOM.
              var prevOptions = el._vOptions;
              var curOptions = (el._vOptions = [].map.call(
                el.options,
                getValue
              ));
              if (
                curOptions.some(function (o, i) {
                  return !looseEqual(o, prevOptions[i]);
                })
              ) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                  ? binding.value.some(function (v) {
                      return hasNoMatchingOption(v, curOptions);
                    })
                  : binding.value !== binding.oldValue &&
                    hasNoMatchingOption(binding.value, curOptions);
                if (needReset) {
                  trigger(el, "change");
                }
              }
            }
          },
        };

        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm);
          /* istanbul ignore if */
          if (isIE || isEdge) {
            setTimeout(function () {
              actuallySetSelected(el, binding, vm);
            }, 0);
          }
        }

        function actuallySetSelected(el, binding, vm) {
          var value = binding.value;
          var isMultiple = el.multiple;
          if (isMultiple && !Array.isArray(value)) {
            "production" !== "production" &&
              warn(
                '<select multiple v-model="' +
                  binding.expression +
                  '"> ' +
                  "expects an Array value for its binding, but got " +
                  Object.prototype.toString.call(value).slice(8, -1),
                vm
              );
            return;
          }
          var selected, option;
          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                option.selected = selected;
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i;
                }
                return;
              }
            }
          }
          if (!isMultiple) {
            el.selectedIndex = -1;
          }
        }

        function hasNoMatchingOption(value, options) {
          return options.every(function (o) {
            return !looseEqual(o, value);
          });
        }

        function getValue(option) {
          return "_value" in option ? option._value : option.value;
        }

        function onCompositionStart(e) {
          e.target.composing = true;
        }

        function onCompositionEnd(e) {
          // prevent triggering an input event for no reason
          if (!e.target.composing) {
            return;
          }
          e.target.composing = false;
          trigger(e.target, "input");
        }

        function trigger(el, type) {
          var e = document.createEvent("HTMLEvents");
          e.initEvent(type, true, true);
          el.dispatchEvent(e);
        }

        /*  */

        // recursively search for possible transition defined inside the component root
        function locateNode(vnode) {
          return vnode.componentInstance &&
            (!vnode.data || !vnode.data.transition)
            ? locateNode(vnode.componentInstance._vnode)
            : vnode;
        }

        var show = {
          bind: function bind(el, ref, vnode) {
            var value = ref.value;

            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            var originalDisplay = (el.__vOriginalDisplay =
              el.style.display === "none" ? "" : el.style.display);
            if (value && transition$$1) {
              vnode.data.show = true;
              enter(vnode, function () {
                el.style.display = originalDisplay;
              });
            } else {
              el.style.display = value ? originalDisplay : "none";
            }
          },

          update: function update(el, ref, vnode) {
            var value = ref.value;
            var oldValue = ref.oldValue;

            /* istanbul ignore if */
            if (!value === !oldValue) {
              return;
            }
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            if (transition$$1) {
              vnode.data.show = true;
              if (value) {
                enter(vnode, function () {
                  el.style.display = el.__vOriginalDisplay;
                });
              } else {
                leave(vnode, function () {
                  el.style.display = "none";
                });
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : "none";
            }
          },

          unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
            }
          },
        };

        var platformDirectives = {
          model: directive,
          show: show,
        };

        /*  */

        // Provides transition support for a single element/component.
        // supports transition mode (out-in / in-out)

        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        };

        // in case the child is also an abstract component, e.g. <keep-alive>
        // we want to recursively retrieve the real component to be rendered
        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions;
          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
          } else {
            return vnode;
          }
        }

        function extractTransitionData(comp) {
          var data = {};
          var options = comp.$options;
          // props
          for (var key in options.propsData) {
            data[key] = comp[key];
          }
          // events.
          // extract listeners and pass them directly to the transition methods
          var listeners = options._parentListeners;
          for (var key$1 in listeners) {
            data[camelize(key$1)] = listeners[key$1];
          }
          return data;
        }

        function placeholder(h, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h("keep-alive", {
              props: rawChild.componentOptions.propsData,
            });
          }
        }

        function hasParentTransition(vnode) {
          while ((vnode = vnode.parent)) {
            if (vnode.data.transition) {
              return true;
            }
          }
        }

        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag;
        }

        var Transition = {
          name: "transition",
          props: transitionProps,
          abstract: true,

          render: function render(h) {
            var this$1 = this;

            var children = this.$slots.default;
            if (!children) {
              return;
            }

            // filter out text nodes (possible whitespaces)
            children = children.filter(function (c) {
              return c.tag || isAsyncPlaceholder(c);
            });
            /* istanbul ignore if */
            if (!children.length) {
              return;
            }

            // warn multiple elements
            if (false) {
            }

            var mode = this.mode;

            // warn invalid mode
            if (false) {
            }

            var rawChild = children[0];

            // if this is a component root node and the component's
            // parent container node also has transition, skip.
            if (hasParentTransition(this.$vnode)) {
              return rawChild;
            }

            // apply transition data to child
            // use getRealChild() to ignore abstract components e.g. keep-alive
            var child = getRealChild(rawChild);
            /* istanbul ignore if */
            if (!child) {
              return rawChild;
            }

            if (this._leaving) {
              return placeholder(h, rawChild);
            }

            // ensure a key that is unique to the vnode type and to this transition
            // component instance. This key will be used to remove pending leaving nodes
            // during entering.
            var id = "__transition-" + this._uid + "-";
            child.key =
              child.key == null
                ? child.isComment
                  ? id + "comment"
                  : id + child.tag
                : isPrimitive(child.key)
                ? String(child.key).indexOf(id) === 0
                  ? child.key
                  : id + child.key
                : child.key;

            var data = ((
              child.data || (child.data = {})
            ).transition = extractTransitionData(this));
            var oldRawChild = this._vnode;
            var oldChild = getRealChild(oldRawChild);

            // mark v-show
            // so that the transition module can hand over the control to the directive
            if (
              child.data.directives &&
              child.data.directives.some(function (d) {
                return d.name === "show";
              })
            ) {
              child.data.show = true;
            }

            if (
              oldChild &&
              oldChild.data &&
              !isSameChild(child, oldChild) &&
              !isAsyncPlaceholder(oldChild) &&
              // #6687 component root is a comment node
              !(
                oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment
              )
            ) {
              // replace old child transition data with fresh one
              // important for dynamic transitions!
              var oldData = (oldChild.data.transition = extend({}, data));
              // handle transition mode
              if (mode === "out-in") {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", function () {
                  this$1._leaving = false;
                  this$1.$forceUpdate();
                });
                return placeholder(h, rawChild);
              } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild;
                }
                var delayedLeave;
                var performLeave = function () {
                  delayedLeave();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", function (leave) {
                  delayedLeave = leave;
                });
              }
            }

            return rawChild;
          },
        };

        /*  */

        // Provides transition support for list items.
        // supports move transitions using the FLIP technique.

        // Because the vdom's children update algorithm is "unstable" - i.e.
        // it doesn't guarantee the relative positioning of removed elements,
        // we force transition-group to update its children into two passes:
        // in the first pass, we remove all nodes that need to be removed,
        // triggering their leaving transition; in the second pass, we insert/move
        // into the final desired state. This way in the second pass removed
        // nodes will remain where they should be.

        var props = extend(
          {
            tag: String,
            moveClass: String,
          },
          transitionProps
        );

        delete props.mode;

        var TransitionGroup = {
          props: props,

          render: function render(h) {
            var tag = this.tag || this.$vnode.data.tag || "span";
            var map = Object.create(null);
            var prevChildren = (this.prevChildren = this.children);
            var rawChildren = this.$slots.default || [];
            var children = (this.children = []);
            var transitionData = extractTransitionData(this);

            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                  children.push(c);
                  map[c.key] = c;
                  (c.data || (c.data = {})).transition = transitionData;
                } else if (false) {
                  var name, opts;
                }
              }
            }

            if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                var c$1 = prevChildren[i$1];
                c$1.data.transition = transitionData;
                c$1.data.pos = c$1.elm.getBoundingClientRect();
                if (map[c$1.key]) {
                  kept.push(c$1);
                } else {
                  removed.push(c$1);
                }
              }
              this.kept = h(tag, null, kept);
              this.removed = removed;
            }

            return h(tag, null, children);
          },

          beforeUpdate: function beforeUpdate() {
            // force removing pass
            this.__patch__(
              this._vnode,
              this.kept,
              false, // hydrating
              true // removeOnly (!important, avoids unnecessary moves)
            );
            this._vnode = this.kept;
          },

          updated: function updated() {
            var children = this.prevChildren;
            var moveClass = this.moveClass || (this.name || "v") + "-move";
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
            }

            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);

            // force reflow to put everything in position
            // assign to this to avoid being removed in tree-shaking
            // $flow-disable-line
            this._reflow = document.body.offsetHeight;

            children.forEach(function (c) {
              if (c.data.moved) {
                var el = c.elm;
                var s = el.style;
                addTransitionClass(el, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el.addEventListener(
                  transitionEndEvent,
                  (el._moveCb = function cb(e) {
                    if (!e || /transform$/.test(e.propertyName)) {
                      el.removeEventListener(transitionEndEvent, cb);
                      el._moveCb = null;
                      removeTransitionClass(el, moveClass);
                    }
                  })
                );
              }
            });
          },

          methods: {
            hasMove: function hasMove(el, moveClass) {
              /* istanbul ignore if */
              if (!hasTransition) {
                return false;
              }
              /* istanbul ignore if */
              if (this._hasMove) {
                return this._hasMove;
              }
              // Detect whether an element with the move class applied has
              // CSS transitions. Since the element may be inside an entering
              // transition at this very moment, we make a clone of it and remove
              // all other transition classes applied to ensure only the move class
              // is applied.
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                el._transitionClasses.forEach(function (cls) {
                  removeClass(clone, cls);
                });
              }
              addClass(clone, moveClass);
              clone.style.display = "none";
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return (this._hasMove = info.hasTransform);
            },
          },
        };

        function callPendingCbs(c) {
          /* istanbul ignore if */
          if (c.elm._moveCb) {
            c.elm._moveCb();
          }
          /* istanbul ignore if */
          if (c.elm._enterCb) {
            c.elm._enterCb();
          }
        }

        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect();
        }

        function applyTranslation(c) {
          var oldPos = c.data.pos;
          var newPos = c.data.newPos;
          var dx = oldPos.left - newPos.left;
          var dy = oldPos.top - newPos.top;
          if (dx || dy) {
            c.data.moved = true;
            var s = c.elm.style;
            s.transform = s.WebkitTransform =
              "translate(" + dx + "px," + dy + "px)";
            s.transitionDuration = "0s";
          }
        }

        var platformComponents = {
          Transition: Transition,
          TransitionGroup: TransitionGroup,
        };

        /*  */

        // install platform specific utils
        Vue.config.mustUseProp = mustUseProp;
        Vue.config.isReservedTag = isReservedTag;
        Vue.config.isReservedAttr = isReservedAttr;
        Vue.config.getTagNamespace = getTagNamespace;
        Vue.config.isUnknownElement = isUnknownElement;

        // install platform runtime directives & components
        extend(Vue.options.directives, platformDirectives);
        extend(Vue.options.components, platformComponents);

        // install platform patch function
        Vue.prototype.__patch__ = inBrowser ? patch : noop;

        // public mount method
        Vue.prototype.$mount = function (el, hydrating) {
          el = el && inBrowser ? query(el) : undefined;
          return mountComponent(this, el, hydrating);
        };

        // devtools global hook
        /* istanbul ignore next */
        if (inBrowser) {
          setTimeout(function () {
            if (config.devtools) {
              if (devtools) {
                devtools.emit("init", Vue);
              } else if (false) {
              }
            }
            if (false) {
            }
          }, 0);
        }

        /*  */

        var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

        var buildRegex = cached(function (delimiters) {
          var open = delimiters[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });

        function parseText(text, delimiters) {
          var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
          if (!tagRE.test(text)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = (tagRE.lastIndex = 0);
          var match, index, tokenValue;
          while ((match = tagRE.exec(text))) {
            index = match.index;
            // push text token
            if (index > lastIndex) {
              rawTokens.push((tokenValue = text.slice(lastIndex, index)));
              tokens.push(JSON.stringify(tokenValue));
            }
            // tag token
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(" + exp + ")");
            rawTokens.push({ "@binding": exp });
            lastIndex = index + match[0].length;
          }
          if (lastIndex < text.length) {
            rawTokens.push((tokenValue = text.slice(lastIndex)));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens,
          };
        }

        /*  */

        function transformNode(el, options) {
          var warn = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (false) {
            var res;
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass);
          }
          var classBinding = getBindingAttr(el, "class", false /* getStatic */);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }

        function genData(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:" + el.staticClass + ",";
          }
          if (el.classBinding) {
            data += "class:" + el.classBinding + ",";
          }
          return data;
        }

        var klass$1 = {
          staticKeys: ["staticClass"],
          transformNode: transformNode,
          genData: genData,
        };

        /*  */

        function transformNode$1(el, options) {
          var warn = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            /* istanbul ignore if */
            if (false) {
              var res;
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }

          var styleBinding = getBindingAttr(el, "style", false /* getStatic */);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }

        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:" + el.staticStyle + ",";
          }
          if (el.styleBinding) {
            data += "style:(" + el.styleBinding + "),";
          }
          return data;
        }

        var style$1 = {
          staticKeys: ["staticStyle"],
          transformNode: transformNode$1,
          genData: genData$1,
        };

        /*  */

        var decoder;

        var he = {
          decode: function decode(html) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html;
            return decoder.textContent;
          },
        };

        /*  */

        var isUnaryTag = makeMap(
          "area,base,br,col,embed,frame,hr,img,input,isindex,keygen," +
            "link,meta,param,source,track,wbr"
        );

        // Elements that you can, intentionally, leave open
        // (and which close themselves)
        var canBeLeftOpenTag = makeMap(
          "colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"
        );

        // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
        // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
        var isNonPhrasingTag = makeMap(
          "address,article,aside,base,blockquote,body,caption,col,colgroup,dd," +
            "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," +
            "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," +
            "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," +
            "title,tr,track"
        );

        /**
         * Not type-checking this file because it's mostly vendor code.
         */

        /*!
         * HTML Parser By John Resig (ejohn.org)
         * Modified by Juriy "kangax" Zaytsev
         * Original code by Erik Arvidsson, Mozilla Public License
         * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
         */

        // Regular Expressions for parsing tags and attributes
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
        // but for Vue templates we can enforce a simple charset
        var ncname = "[a-zA-Z_][\\w\\-\\.]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        // #7298: escape - to avoid being pased as HTML comment when inlined in page
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;

        var IS_REGEX_CAPTURING_BROKEN = false;
        "x".replace(/x(.)?/g, function (m, g) {
          IS_REGEX_CAPTURING_BROKEN = g === "";
        });

        // Special Elements (can contain anything)
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};

        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "\t",
        };
        var encodedAttr = /&(?:lt|gt|quot|amp);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

        // #5992
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function (tag, html) {
          return tag && isIgnoreNewlineTag(tag) && html[0] === "\n";
        };

        function decodeAttr(value, shouldDecodeNewlines) {
          var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function (match) {
            return decodingMap[match];
          });
        }

        function parseHTML(html, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag$$1 = options.isUnaryTag || no;
          var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
          var index = 0;
          var last, lastTag;
          while (html) {
            last = html;
            // Make sure we're not in a plaintext content element like script/style
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html.indexOf("<");
              if (textEnd === 0) {
                // Comment:
                if (comment.test(html)) {
                  var commentEnd = html.indexOf("-->");

                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment) {
                      options.comment(html.substring(4, commentEnd));
                    }
                    advance(commentEnd + 3);
                    continue;
                  }
                }

                // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                if (conditionalComment.test(html)) {
                  var conditionalEnd = html.indexOf("]>");

                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    continue;
                  }
                }

                // Doctype:
                var doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  continue;
                }

                // End tag:
                var endTagMatch = html.match(endTag);
                if (endTagMatch) {
                  var curIndex = index;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index);
                  continue;
                }

                // Start tag:
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(lastTag, html)) {
                    advance(1);
                  }
                  continue;
                }
              }

              var text = void 0,
                rest = void 0,
                next = void 0;
              if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (
                  !endTag.test(rest) &&
                  !startTagOpen.test(rest) &&
                  !comment.test(rest) &&
                  !conditionalComment.test(rest)
                ) {
                  // < in plain text, be forgiving and treat it as text
                  next = rest.indexOf("<", 1);
                  if (next < 0) {
                    break;
                  }
                  textEnd += next;
                  rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
                advance(textEnd);
              }

              if (textEnd < 0) {
                text = html;
                html = "";
              }

              if (options.chars && text) {
                options.chars(text);
              }
            } else {
              var endTagLength = 0;
              var stackedTag = lastTag.toLowerCase();
              var reStackedTag =
                reCache[stackedTag] ||
                (reCache[stackedTag] = new RegExp(
                  "([\\s\\S]*?)(</" + stackedTag + "[^>]*>)",
                  "i"
                ));
              var rest$1 = html.replace(reStackedTag, function (
                all,
                text,
                endTag
              ) {
                endTagLength = endTag.length;
                if (
                  !isPlainTextElement(stackedTag) &&
                  stackedTag !== "noscript"
                ) {
                  text = text
                    .replace(/<!\--([\s\S]*?)-->/g, "$1") // #7298
                    .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag, text)) {
                  text = text.slice(1);
                }
                if (options.chars) {
                  options.chars(text);
                }
                return "";
              });
              index += html.length - rest$1.length;
              html = rest$1;
              parseEndTag(stackedTag, index - endTagLength, index);
            }

            if (html === last) {
              options.chars && options.chars(html);
              if (false) {
              }
              break;
            }
          }

          // Clean up any remaining tags
          parseEndTag();

          function advance(n) {
            index += n;
            html = html.substring(n);
          }

          function parseStartTag() {
            var start = html.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index,
              };
              advance(start[0].length);
              var end, attr;
              while (
                !(end = html.match(startTagClose)) &&
                (attr = html.match(attribute))
              ) {
                advance(attr[0].length);
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
              }
            }
          }

          function handleStartTag(match) {
            var tagName = match.tagName;
            var unarySlash = match.unarySlash;

            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
                parseEndTag(tagName);
              }
            }

            var unary = isUnaryTag$$1(tagName) || !!unarySlash;

            var l = match.attrs.length;
            var attrs = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
              if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
                if (args[3] === "") {
                  delete args[3];
                }
                if (args[4] === "") {
                  delete args[4];
                }
                if (args[5] === "") {
                  delete args[5];
                }
              }
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines =
                tagName === "a" && args[1] === "href"
                  ? options.shouldDecodeNewlinesForHref
                  : options.shouldDecodeNewlines;
              attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines),
              };
            }

            if (!unary) {
              stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
              });
              lastTag = tagName;
            }

            if (options.start) {
              options.start(tagName, attrs, unary, match.start, match.end);
            }
          }

          function parseEndTag(tagName, start, end) {
            var pos, lowerCasedTagName;
            if (start == null) {
              start = index;
            }
            if (end == null) {
              end = index;
            }

            if (tagName) {
              lowerCasedTagName = tagName.toLowerCase();
            }

            // Find the closest opened tag of the same type
            if (tagName) {
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              // If no tag name is provided, clean shop
              pos = 0;
            }

            if (pos >= 0) {
              // Close all the open elements, up the stack
              for (var i = stack.length - 1; i >= pos; i--) {
                if (false) {
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }

              // Remove the open elements from the stack
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName, start, end);
              }
            }
          }
        }

        /*  */

        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:/;
        var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;

        var argRE = /:(.*)$/;
        var bindRE = /^:|^v-bind:/;
        var modifierRE = /\.[^.]+/g;

        var decodeHTMLCached = cached(he.decode);

        // configurable state
        var warn$2;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;

        function createASTElement(tag, attrs, parent) {
          return {
            type: 1,
            tag: tag,
            attrsList: attrs,
            attrsMap: makeAttrsMap(attrs),
            parent: parent,
            children: [],
          };
        }

        /**
         * Convert HTML string to AST.
         */
        function parse(template, options) {
          warn$2 = options.warn || baseWarn;

          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;

          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(
            options.modules,
            "preTransformNode"
          );
          postTransforms = pluckModuleFunction(
            options.modules,
            "postTransformNode"
          );

          delimiters = options.delimiters;

          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;

          function warnOnce(msg) {
            if (!warned) {
              warned = true;
              warn$2(msg);
            }
          }

          function closeElement(element) {
            // check pre state
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            // apply post-transforms
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }

          parseHTML(template, {
            warn: warn$2,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            start: function start(tag, attrs, unary) {
              // check namespace.
              // inherit parent ns if there is one
              var ns =
                (currentParent && currentParent.ns) ||
                platformGetTagNamespace(tag);

              // handle IE svg bug
              /* istanbul ignore if */
              if (isIE && ns === "svg") {
                attrs = guardIESVGBug(attrs);
              }

              var element = createASTElement(tag, attrs, currentParent);
              if (ns) {
                element.ns = ns;
              }

              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                "production" !== "production" &&
                  warn$2(
                    "Templates should only be responsible for mapping the state to the " +
                      "UI. Avoid placing tags with side-effects in your templates, such as " +
                      "<" +
                      tag +
                      ">" +
                      ", as they will not be parsed."
                  );
              }

              // apply pre-transforms
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }

              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                // structural directives
                processFor(element);
                processIf(element);
                processOnce(element);
                // element-scope stuff
                processElement(element, options);
              }

              function checkRootConstraints(el) {
                if (false) {
                }
              }

              // tree management
              if (!root) {
                root = element;
                checkRootConstraints(root);
              } else if (!stack.length) {
                // allow root elements with v-if, v-else-if and v-else
                if (root.if && (element.elseif || element.else)) {
                  checkRootConstraints(element);
                  addIfCondition(root, {
                    exp: element.elseif,
                    block: element,
                  });
                } else if (false) {
                }
              }
              if (currentParent && !element.forbidden) {
                if (element.elseif || element.else) {
                  processIfConditions(element, currentParent);
                } else if (element.slotScope) {
                  // scoped slot
                  currentParent.plain = false;
                  var name = element.slotTarget || '"default"';
                  (currentParent.scopedSlots ||
                    (currentParent.scopedSlots = {}))[name] = element;
                } else {
                  currentParent.children.push(element);
                  element.parent = currentParent;
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },

            end: function end() {
              // remove trailing whitespace
              var element = stack[stack.length - 1];
              var lastNode = element.children[element.children.length - 1];
              if (
                lastNode &&
                lastNode.type === 3 &&
                lastNode.text === " " &&
                !inPre
              ) {
                element.children.pop();
              }
              // pop stack
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              closeElement(element);
            },

            chars: function chars(text) {
              if (!currentParent) {
                if (false) {
                }
                return;
              }
              // IE textarea placeholder bug
              /* istanbul ignore if */
              if (
                isIE &&
                currentParent.tag === "textarea" &&
                currentParent.attrsMap.placeholder === text
              ) {
                return;
              }
              var children = currentParent.children;
              text =
                inPre || text.trim()
                  ? isTextTag(currentParent)
                    ? text
                    : decodeHTMLCached(text)
                  : // only preserve whitespace if its not right after a starting tag
                  preserveWhitespace && children.length
                  ? " "
                  : "";
              if (text) {
                var res;
                if (
                  !inVPre &&
                  text !== " " &&
                  (res = parseText(text, delimiters))
                ) {
                  children.push({
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text,
                  });
                } else if (
                  text !== " " ||
                  !children.length ||
                  children[children.length - 1].text !== " "
                ) {
                  children.push({
                    type: 3,
                    text: text,
                  });
                }
              }
            },
            comment: function comment(text) {
              currentParent.children.push({
                type: 3,
                text: text,
                isComment: true,
              });
            },
          });
          return root;
        }

        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }

        function processRawAttrs(el) {
          var l = el.attrsList.length;
          if (l) {
            var attrs = (el.attrs = new Array(l));
            for (var i = 0; i < l; i++) {
              attrs[i] = {
                name: el.attrsList[i].name,
                value: JSON.stringify(el.attrsList[i].value),
              };
            }
          } else if (!el.pre) {
            // non root node in pre blocks with no attributes
            el.plain = true;
          }
        }

        function processElement(element, options) {
          processKey(element);

          // determine whether this is a plain element after
          // removing structural attributes
          element.plain = !element.key && !element.attrsList.length;

          processRef(element);
          processSlot(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
        }

        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            if (false) {
            }
            el.key = exp;
          }
        }

        function processRef(el) {
          var ref = getBindingAttr(el, "ref");
          if (ref) {
            el.ref = ref;
            el.refInFor = checkInFor(el);
          }
        }

        function processFor(el) {
          var exp;
          if ((exp = getAndRemoveAttr(el, "v-for"))) {
            var res = parseFor(exp);
            if (res) {
              extend(el, res);
            } else if (false) {
            }
          }
        }

        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            return;
          }
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "");
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }

        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp: exp,
              block: el,
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }

        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el,
            });
          } else if (false) {
          }
        }

        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (false) {
              }
              children.pop();
            }
          }
        }

        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }

        function processOnce(el) {
          var once$$1 = getAndRemoveAttr(el, "v-once");
          if (once$$1 != null) {
            el.once = true;
          }
        }

        function processSlot(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (false) {
            }
          } else {
            var slotScope;
            if (el.tag === "template") {
              slotScope = getAndRemoveAttr(el, "scope");
              /* istanbul ignore if */
              if (false) {
              }
              el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
            } else if ((slotScope = getAndRemoveAttr(el, "slot-scope"))) {
              /* istanbul ignore if */
              if (false) {
              }
              el.slotScope = slotScope;
            }
            var slotTarget = getBindingAttr(el, "slot");
            if (slotTarget) {
              el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
              // preserve slot as an attribute for native shadow DOM compat
              // only for non-scoped slots.
              if (el.tag !== "template" && !el.slotScope) {
                addAttr(el, "slot", slotTarget);
              }
            }
          }
        }

        function processComponent(el) {
          var binding;
          if ((binding = getBindingAttr(el, "is"))) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }

        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, isProp;
          for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              // mark element as dynamic
              el.hasBindings = true;
              // modifiers
              modifiers = parseModifiers(name);
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                // v-bind
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isProp = false;
                if (modifiers) {
                  if (modifiers.prop) {
                    isProp = true;
                    name = camelize(name);
                    if (name === "innerHtml") {
                      name = "innerHTML";
                    }
                  }
                  if (modifiers.camel) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    addHandler(
                      el,
                      "update:" + camelize(name),
                      genAssignmentCode(value, "$event")
                    );
                  }
                }
                if (
                  isProp ||
                  (!el.component &&
                    platformMustUseProp(el.tag, el.attrsMap.type, name))
                ) {
                  addProp(el, name, value);
                } else {
                  addAttr(el, name, value);
                }
              } else if (onRE.test(name)) {
                // v-on
                name = name.replace(onRE, "");
                addHandler(el, name, value, modifiers, false, warn$2);
              } else {
                // normal directives
                name = name.replace(dirRE, "");
                // parse arg
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                }
                addDirective(el, name, rawName, value, arg, modifiers);
                if (false) {
                }
              }
            } else {
              // literal attribute
              if (false) {
                var res;
              }
              addAttr(el, name, JSON.stringify(value));
              // #6887 firefox doesn't update muted state if set via attribute
              // even immediately after element creation
              if (
                !el.component &&
                name === "muted" &&
                platformMustUseProp(el.tag, el.attrsMap.type, name)
              ) {
                addProp(el, name, "true");
              }
            }
          }
        }

        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== undefined) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }

        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret = {};
            match.forEach(function (m) {
              ret[m.slice(1)] = true;
            });
            return ret;
          }
        }

        function makeAttrsMap(attrs) {
          var map = {};
          for (var i = 0, l = attrs.length; i < l; i++) {
            if (false) {
            }
            map[attrs[i].name] = attrs[i].value;
          }
          return map;
        }

        // for script (e.g. type="x/template") or style, do not decode content
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }

        function isForbiddenTag(el) {
          return (
            el.tag === "style" ||
            (el.tag === "script" &&
              (!el.attrsMap.type || el.attrsMap.type === "text/javascript"))
          );
        }

        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;

        /* istanbul ignore next */
        function guardIESVGBug(attrs) {
          var res = [];
          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }

        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn$2(
                "<" +
                  el.tag +
                  ' v-model="' +
                  value +
                  '">: ' +
                  "You are binding v-model directly to a v-for iteration alias. " +
                  "This will not be able to modify the v-for source array because " +
                  "writing to the alias is like modifying a function local variable. " +
                  "Consider using an array of objects and use v-model on an object property instead."
              );
            }
            _el = _el.parent;
          }
        }

        /*  */

        /**
         * Expand input[v-model] with dyanmic type bindings into v-if-else chains
         * Turn this:
         *   <input v-model="data[type]" :type="type">
         * into this:
         *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
         *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
         *   <input v-else :type="type" v-model="data[type]">
         */

        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }

            var typeBinding;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(" + map["v-bind"] + ").type";
            }

            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition
                ? "&&(" + ifCondition + ")"
                : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              // 1. checkbox
              var branch0 = cloneASTElement(el);
              // process for on the main node
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true; // prevent it from double-processed
              branch0.if =
                "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0,
              });
              // 2. add radio else-if condition
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                block: branch1,
              });
              // 3. other
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2,
              });

              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }

              return branch0;
            }
          }
        }

        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }

        var model$2 = {
          preTransformNode: preTransformNode,
        };

        var modules$1 = [klass$1, style$1, model$2];

        /*  */

        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(" + dir.value + ")");
          }
        }

        /*  */

        function html(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(" + dir.value + ")");
          }
        }

        var directives$1 = {
          model: model,
          text: text,
          html: html,
        };

        /*  */

        var baseOptions = {
          expectHTML: true,
          modules: modules$1,
          directives: directives$1,
          isPreTag: isPreTag,
          isUnaryTag: isUnaryTag,
          mustUseProp: mustUseProp,
          canBeLeftOpenTag: canBeLeftOpenTag,
          isReservedTag: isReservedTag,
          getTagNamespace: getTagNamespace,
          staticKeys: genStaticKeys(modules$1),
        };

        /*  */

        var isStaticKey;
        var isPlatformReservedTag;

        var genStaticKeysCached = cached(genStaticKeys$1);

        /**
         * Goal of the optimizer: walk the generated template AST tree
         * and detect sub-trees that are purely static, i.e. parts of
         * the DOM that never needs to change.
         *
         * Once we detect these sub-trees, we can:
         *
         * 1. Hoist them into constants, so that we no longer need to
         *    create fresh nodes for them on each re-render;
         * 2. Completely skip them in the patching process.
         */
        function optimize(root, options) {
          if (!root) {
            return;
          }
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          // first pass: mark all non-static nodes.
          markStatic$1(root);
          // second pass: mark static roots.
          markStaticRoots(root, false);
        }

        function genStaticKeys$1(keys) {
          return makeMap(
            "type,tag,attrsList,attrsMap,plain,parent,children,attrs" +
              (keys ? "," + keys : "")
          );
        }

        function markStatic$1(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            // do not make component slot content static. this avoids
            // 1. components not able to mutate slot nodes
            // 2. static slot content fails for hot-reloading
            if (
              !isPlatformReservedTag(node.tag) &&
              node.tag !== "slot" &&
              node.attrsMap["inline-template"] == null
            ) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic$1(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (
                var i$1 = 1, l$1 = node.ifConditions.length;
                i$1 < l$1;
                i$1++
              ) {
                var block = node.ifConditions[i$1].block;
                markStatic$1(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }

        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            // For a node to qualify as a static root, it should have children that
            // are not just static text. Otherwise the cost of hoisting out will
            // outweigh the benefits and it's better off to just always render it fresh.
            if (
              node.static &&
              node.children.length &&
              !(node.children.length === 1 && node.children[0].type === 3)
            ) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (
                var i$1 = 1, l$1 = node.ifConditions.length;
                i$1 < l$1;
                i$1++
              ) {
                markStaticRoots(node.ifConditions[i$1].block, isInFor);
              }
            }
          }
        }

        function isStatic(node) {
          if (node.type === 2) {
            // expression
            return false;
          }
          if (node.type === 3) {
            // text
            return true;
          }
          return !!(
            node.pre ||
            (!node.hasBindings && // no dynamic bindings
              !node.if &&
              !node.for && // not v-if or v-for or v-else
              !isBuiltInTag(node.tag) && // not a built-in
              isPlatformReservedTag(node.tag) && // not a component
              !isDirectChildOfTemplateFor(node) &&
              Object.keys(node).every(isStaticKey))
          );
        }

        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }

        /*  */

        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

        // KeyboardEvent.keyCode aliases
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        };

        // KeyboardEvent.key aliases
        var keyNames = {
          esc: "Escape",
          tab: "Tab",
          enter: "Enter",
          space: " ",
          // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete"],
        };

        // #4868: modifiers that prevent the execution of the listener
        // need to explicitly return null so that we can determine whether to remove
        // the listener for .once
        var genGuard = function (condition) {
          return "if(" + condition + ")return null;";
        };

        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2"),
        };

        function genHandlers(events, isNative, warn) {
          var res = isNative ? "nativeOn:{" : "on:{";
          for (var name in events) {
            res += '"' + name + '":' + genHandler(name, events[name]) + ",";
          }
          return res.slice(0, -1) + "}";
        }

        function genHandler(name, handler) {
          if (!handler) {
            return "function(){}";
          }

          if (Array.isArray(handler)) {
            return (
              "[" +
              handler
                .map(function (handler) {
                  return genHandler(name, handler);
                })
                .join(",") +
              "]"
            );
          }

          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);

          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            /* istanbul ignore if */
            return "function($event){" + handler.value + "}"; // inline statement
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            for (var key in handler.modifiers) {
              if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                // left/right
                if (keyCodes[key]) {
                  keys.push(key);
                }
              } else if (key === "exact") {
                var modifiers = handler.modifiers;
                genModifierCode += genGuard(
                  ["ctrl", "shift", "alt", "meta"]
                    .filter(function (keyModifier) {
                      return !modifiers[keyModifier];
                    })
                    .map(function (keyModifier) {
                      return "$event." + keyModifier + "Key";
                    })
                    .join("||")
                );
              } else {
                keys.push(key);
              }
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            // Make sure modifiers like prevent and stop get executed after key filtering
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath
              ? "return " + handler.value + "($event)"
              : isFunctionExpression
              ? "return (" + handler.value + ")($event)"
              : handler.value;
            /* istanbul ignore if */
            return "function($event){" + code + handlerCode + "}";
          }
        }

        function genKeyFilter(keys) {
          return (
            "if(!('button' in $event)&&" +
            keys.map(genFilterCode).join("&&") +
            ")return null;"
          );
        }

        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==" + keyVal;
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return (
            "_k($event.keyCode," +
            JSON.stringify(key) +
            "," +
            JSON.stringify(keyCode) +
            "," +
            "$event.key," +
            "" +
            JSON.stringify(keyName) +
            ")"
          );
        }

        /*  */

        function on(el, dir) {
          if (false) {
          }
          el.wrapListeners = function (code) {
            return "_g(" + code + "," + dir.value + ")";
          };
        }

        /*  */

        function bind$1(el, dir) {
          el.wrapData = function (code) {
            return (
              "_b(" +
              code +
              ",'" +
              el.tag +
              "'," +
              dir.value +
              "," +
              (dir.modifiers && dir.modifiers.prop ? "true" : "false") +
              (dir.modifiers && dir.modifiers.sync ? ",true" : "") +
              ")"
            );
          };
        }

        /*  */

        var baseDirectives = {
          on: on,
          bind: bind$1,
          cloak: noop,
        };

        /*  */

        var CodegenState = function CodegenState(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(
            options.modules,
            "transformCode"
          );
          this.dataGenFns = pluckModuleFunction(options.modules, "genData");
          this.directives = extend(
            extend({}, baseDirectives),
            options.directives
          );
          var isReservedTag = options.isReservedTag || no;
          this.maybeComponent = function (el) {
            return !isReservedTag(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
        };

        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? genElement(ast, state) : '_c("div")';
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns,
          };
        }

        function genElement(el, state) {
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            // component or element
            var code;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data = el.plain ? undefined : genData$2(el, state);

              var children = el.inlineTemplate
                ? null
                : genChildren(el, state, true);
              code =
                "_c('" +
                el.tag +
                "'" +
                (data ? "," + data : "") +
                (children ? "," + children : "") +
                ")";
            }
            // module transforms
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }

        // hoist static sub-trees out
        function genStatic(el, state) {
          el.staticProcessed = true;
          state.staticRenderFns.push(
            "with(this){return " + genElement(el, state) + "}"
          );
          return (
            "_m(" +
            (state.staticRenderFns.length - 1) +
            (el.staticInFor ? ",true" : "") +
            ")"
          );
        }

        // v-once
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent = el.parent;
            while (parent) {
              if (parent.for) {
                key = parent.key;
                break;
              }
              parent = parent.parent;
            }
            if (!key) {
              "production" !== "production" &&
                state.warn(
                  "v-once can only be used inside v-for that is keyed. "
                );
              return genElement(el, state);
            }
            return (
              "_o(" +
              genElement(el, state) +
              "," +
              state.onceId++ +
              "," +
              key +
              ")"
            );
          } else {
            return genStatic(el, state);
          }
        }

        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true; // avoid recursion
          return genIfConditions(
            el.ifConditions.slice(),
            state,
            altGen,
            altEmpty
          );
        }

        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }

          var condition = conditions.shift();
          if (condition.exp) {
            return (
              "(" +
              condition.exp +
              ")?" +
              genTernaryExp(condition.block) +
              ":" +
              genIfConditions(conditions, state, altGen, altEmpty)
            );
          } else {
            return "" + genTernaryExp(condition.block);
          }

          // v-if with v-once should generate code like (a)?_m(0):_m(1)
          function genTernaryExp(el) {
            return altGen
              ? altGen(el, state)
              : el.once
              ? genOnce(el, state)
              : genElement(el, state);
          }
        }

        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";

          if (false) {
          }

          el.forProcessed = true; // avoid recursion
          return (
            (altHelper || "_l") +
            "((" +
            exp +
            ")," +
            "function(" +
            alias +
            iterator1 +
            iterator2 +
            "){" +
            "return " +
            (altGen || genElement)(el, state) +
            "})"
          );
        }

        function genData$2(el, state) {
          var data = "{";

          // directives first.
          // directives may mutate the el's other properties before they are generated.
          var dirs = genDirectives(el, state);
          if (dirs) {
            data += dirs + ",";
          }

          // key
          if (el.key) {
            data += "key:" + el.key + ",";
          }
          // ref
          if (el.ref) {
            data += "ref:" + el.ref + ",";
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          // pre
          if (el.pre) {
            data += "pre:true,";
          }
          // record original tag name for components using "is" attribute
          if (el.component) {
            data += 'tag:"' + el.tag + '",';
          }
          // module data generation functions
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          // attributes
          if (el.attrs) {
            data += "attrs:{" + genProps(el.attrs) + "},";
          }
          // DOM props
          if (el.props) {
            data += "domProps:{" + genProps(el.props) + "},";
          }
          // event handlers
          if (el.events) {
            data += genHandlers(el.events, false, state.warn) + ",";
          }
          if (el.nativeEvents) {
            data += genHandlers(el.nativeEvents, true, state.warn) + ",";
          }
          // slot target
          // only for non-scoped slots
          if (el.slotTarget && !el.slotScope) {
            data += "slot:" + el.slotTarget + ",";
          }
          // scoped slots
          if (el.scopedSlots) {
            data += genScopedSlots(el.scopedSlots, state) + ",";
          }
          // component v-model
          if (el.model) {
            data +=
              "model:{value:" +
              el.model.value +
              ",callback:" +
              el.model.callback +
              ",expression:" +
              el.model.expression +
              "},";
          }
          // inline-template
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += inlineTemplate + ",";
            }
          }
          data = data.replace(/,$/, "") + "}";
          // v-bind data wrap
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          // v-on data wrap
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }

        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs) {
            return;
          }
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              // compile-time directive that manipulates AST.
              // returns true if it also needs a runtime counterpart.
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res +=
                '{name:"' +
                dir.name +
                '",rawName:"' +
                dir.rawName +
                '"' +
                (dir.value
                  ? ",value:(" +
                    dir.value +
                    "),expression:" +
                    JSON.stringify(dir.value)
                  : "") +
                (dir.arg ? ',arg:"' + dir.arg + '"' : "") +
                (dir.modifiers
                  ? ",modifiers:" + JSON.stringify(dir.modifiers)
                  : "") +
                "},";
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }

        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (false) {
          }
          if (ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return (
              "inlineTemplate:{render:function(){" +
              inlineRenderFns.render +
              "},staticRenderFns:[" +
              inlineRenderFns.staticRenderFns
                .map(function (code) {
                  return "function(){" + code + "}";
                })
                .join(",") +
              "]}"
            );
          }
        }

        function genScopedSlots(slots, state) {
          return (
            "scopedSlots:_u([" +
            Object.keys(slots)
              .map(function (key) {
                return genScopedSlot(key, slots[key], state);
              })
              .join(",") +
            "])"
          );
        }

        function genScopedSlot(key, el, state) {
          if (el.for && !el.forProcessed) {
            return genForScopedSlot(key, el, state);
          }
          var fn =
            "function(" +
            String(el.slotScope) +
            "){" +
            "return " +
            (el.tag === "template"
              ? el.if
                ? el.if +
                  "?" +
                  (genChildren(el, state) || "undefined") +
                  ":undefined"
                : genChildren(el, state) || "undefined"
              : genElement(el, state)) +
            "}";
          return "{key:" + key + ",fn:" + fn + "}";
        }

        function genForScopedSlot(key, el, state) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
          el.forProcessed = true; // avoid recursion
          return (
            "_l((" +
            exp +
            ")," +
            "function(" +
            alias +
            iterator1 +
            iterator2 +
            "){" +
            "return " +
            genScopedSlot(key, el, state) +
            "})"
          );
        }

        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el$1 = children[0];
            // optimize single v-for
            if (
              children.length === 1 &&
              el$1.for &&
              el$1.tag !== "template" &&
              el$1.tag !== "slot"
            ) {
              return (altGenElement || genElement)(el$1, state);
            }
            var normalizationType = checkSkip
              ? getNormalizationType(children, state.maybeComponent)
              : 0;
            var gen = altGenNode || genNode;
            return (
              "[" +
              children
                .map(function (c) {
                  return gen(c, state);
                })
                .join(",") +
              "]" +
              (normalizationType ? "," + normalizationType : "")
            );
          }
        }

        // determine the normalization needed for the children array.
        // 0: no normalization needed
        // 1: simple normalization needed (possible 1-level deep nested array)
        // 2: full normalization needed
        function getNormalizationType(children, maybeComponent) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (
              needsNormalization(el) ||
              (el.ifConditions &&
                el.ifConditions.some(function (c) {
                  return needsNormalization(c.block);
                }))
            ) {
              res = 2;
              break;
            }
            if (
              maybeComponent(el) ||
              (el.ifConditions &&
                el.ifConditions.some(function (c) {
                  return maybeComponent(c.block);
                }))
            ) {
              res = 1;
            }
          }
          return res;
        }

        function needsNormalization(el) {
          return (
            el.for !== undefined || el.tag === "template" || el.tag === "slot"
          );
        }

        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          }
          if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }

        function genText(text) {
          return (
            "_v(" +
            (text.type === 2
              ? text.expression // no need for () because already wrapped in _s()
              : transformSpecialNewlines(JSON.stringify(text.text))) +
            ")"
          );
        }

        function genComment(comment) {
          return "_e(" + JSON.stringify(comment.text) + ")";
        }

        function genSlot(el, state) {
          var slotName = el.slotName || '"default"';
          var children = genChildren(el, state);
          var res = "_t(" + slotName + (children ? "," + children : "");
          var attrs =
            el.attrs &&
            "{" +
              el.attrs
                .map(function (a) {
                  return camelize(a.name) + ":" + a.value;
                })
                .join(",") +
              "}";
          var bind$$1 = el.attrsMap["v-bind"];
          if ((attrs || bind$$1) && !children) {
            res += ",null";
          }
          if (attrs) {
            res += "," + attrs;
          }
          if (bind$$1) {
            res += (attrs ? "" : ",null") + "," + bind$$1;
          }
          return res + ")";
        }

        // componentName is el.component, take it as argument to shun flow's pessimistic refinement
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate
            ? null
            : genChildren(el, state, true);
          return (
            "_c(" +
            componentName +
            "," +
            genData$2(el, state) +
            (children ? "," + children : "") +
            ")"
          );
        }

        function genProps(props) {
          var res = "";
          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            /* istanbul ignore if */
            {
              res +=
                '"' +
                prop.name +
                '":' +
                transformSpecialNewlines(prop.value) +
                ",";
            }
          }
          return res.slice(0, -1);
        }

        // #3895, #4268
        function transformSpecialNewlines(text) {
          return text
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029");
        }

        /*  */

        // these keywords should not appear inside expressions, but operators like
        // typeof, instanceof and in are allowed
        var prohibitedKeywordRE = new RegExp(
          "\\b" +
            (
              "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," +
              "super,throw,while,yield,delete,export,import,return,switch,default," +
              "extends,finally,continue,debugger,function,arguments"
            )
              .split(",")
              .join("\\b|\\b") +
            "\\b"
        );

        // these unary operators should not be used as property/method names
        var unaryOperatorsRE = new RegExp(
          "\\b" +
            "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
            "\\s*\\([^\\)]*\\)"
        );

        // strip strings in expressions
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

        // detect problematic expressions in a template
        function detectErrors(ast) {
          var errors = [];
          if (ast) {
            checkNode(ast, errors);
          }
          return errors;
        }

        function checkNode(node, errors) {
          if (node.type === 1) {
            for (var name in node.attrsMap) {
              if (dirRE.test(name)) {
                var value = node.attrsMap[name];
                if (value) {
                  if (name === "v-for") {
                    checkFor(node, 'v-for="' + value + '"', errors);
                  } else if (onRE.test(name)) {
                    checkEvent(value, name + '="' + value + '"', errors);
                  } else {
                    checkExpression(value, name + '="' + value + '"', errors);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], errors);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, errors);
          }
        }

        function checkEvent(exp, text, errors) {
          var stipped = exp.replace(stripStringRE, "");
          var keywordMatch = stipped.match(unaryOperatorsRE);
          if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== "$") {
            errors.push(
              "avoid using JavaScript unary operator as property name: " +
                '"' +
                keywordMatch[0] +
                '" in expression ' +
                text.trim()
            );
          }
          checkExpression(exp, text, errors);
        }

        function checkFor(node, text, errors) {
          checkExpression(node.for || "", text, errors);
          checkIdentifier(node.alias, "v-for alias", text, errors);
          checkIdentifier(node.iterator1, "v-for iterator", text, errors);
          checkIdentifier(node.iterator2, "v-for iterator", text, errors);
        }

        function checkIdentifier(ident, type, text, errors) {
          if (typeof ident === "string") {
            try {
              new Function("var " + ident + "=_");
            } catch (e) {
              errors.push(
                "invalid " +
                  type +
                  ' "' +
                  ident +
                  '" in expression: ' +
                  text.trim()
              );
            }
          }
        }

        function checkExpression(exp, text, errors) {
          try {
            new Function("return " + exp);
          } catch (e) {
            var keywordMatch = exp
              .replace(stripStringRE, "")
              .match(prohibitedKeywordRE);
            if (keywordMatch) {
              errors.push(
                "avoid using JavaScript keyword as property name: " +
                  '"' +
                  keywordMatch[0] +
                  '"\n  Raw expression: ' +
                  text.trim()
              );
            } else {
              errors.push(
                "invalid expression: " +
                  e.message +
                  " in\n\n" +
                  "    " +
                  exp +
                  "\n\n" +
                  "  Raw expression: " +
                  text.trim() +
                  "\n"
              );
            }
          }
        }

        /*  */

        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({ err: err, code: code });
            return noop;
          }
        }

        function createCompileToFunctionFn(compile) {
          var cache = Object.create(null);

          return function compileToFunctions(template, options, vm) {
            options = extend({}, options);
            var warn$$1 = options.warn || warn;
            delete options.warn;

            /* istanbul ignore if */
            if (false) {
            }

            // check cache
            var key = options.delimiters
              ? String(options.delimiters) + template
              : template;
            if (cache[key]) {
              return cache[key];
            }

            // compile
            var compiled = compile(template, options);

            // check compilation errors/tips
            if (false) {
            }

            // turn code into functions
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
              return createFunction(code, fnGenErrors);
            });

            // check function generation errors.
            // this should only happen if there is a bug in the compiler itself.
            // mostly for codegen development use
            /* istanbul ignore if */
            if (false) {
            }

            return (cache[key] = res);
          };
        }

        /*  */

        function createCompilerCreator(baseCompile) {
          return function createCompiler(baseOptions) {
            function compile(template, options) {
              var finalOptions = Object.create(baseOptions);
              var errors = [];
              var tips = [];
              finalOptions.warn = function (msg, tip) {
                (tip ? tips : errors).push(msg);
              };

              if (options) {
                // merge custom modules
                if (options.modules) {
                  finalOptions.modules = (baseOptions.modules || []).concat(
                    options.modules
                  );
                }
                // merge custom directives
                if (options.directives) {
                  finalOptions.directives = extend(
                    Object.create(baseOptions.directives || null),
                    options.directives
                  );
                }
                // copy other options
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }

              var compiled = baseCompile(template, finalOptions);
              if (false) {
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }

            return {
              compile: compile,
              compileToFunctions: createCompileToFunctionFn(compile),
            };
          };
        }

        /*  */

        // `createCompilerCreator` allows creating compilers that use alternative
        // parser/optimizer/codegen, e.g the SSR optimizing compiler.
        // Here we just export a default compiler using the default parts.
        var createCompiler = createCompilerCreator(function baseCompile(
          template,
          options
        ) {
          var ast = parse(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast: ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns,
          };
        });

        /*  */

        var ref$1 = createCompiler(baseOptions);
        var compileToFunctions = ref$1.compileToFunctions;

        /*  */

        // check whether current browser encodes a char inside attribute values
        var div;
        function getShouldDecode(href) {
          div = div || document.createElement("div");
          div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
          return div.innerHTML.indexOf("&#10;") > 0;
        }

        // #3663: IE encodes newlines inside attribute values while other browsers don't
        var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
        // #6828: chrome encodes content in a[href]
        var shouldDecodeNewlinesForHref = inBrowser
          ? getShouldDecode(true)
          : false;

        /*  */

        var idToTemplate = cached(function (id) {
          var el = query(id);
          return el && el.innerHTML;
        });

        var mount = Vue.prototype.$mount;
        Vue.prototype.$mount = function (el, hydrating) {
          el = el && query(el);

          /* istanbul ignore if */
          if (el === document.body || el === document.documentElement) {
            "production" !== "production" &&
              warn(
                "Do not mount Vue to <html> or <body> - mount to normal elements instead."
              );
            return this;
          }

          var options = this.$options;
          // resolve template/el and convert to render function
          if (!options.render) {
            var template = options.template;
            if (template) {
              if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                  template = idToTemplate(template);
                  /* istanbul ignore if */
                  if (false) {
                  }
                }
              } else if (template.nodeType) {
                template = template.innerHTML;
              } else {
                if (false) {
                }
                return this;
              }
            } else if (el) {
              template = getOuterHTML(el);
            }
            if (template) {
              /* istanbul ignore if */
              if (false) {
              }

              var ref = compileToFunctions(
                template,
                {
                  shouldDecodeNewlines: shouldDecodeNewlines,
                  shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                  delimiters: options.delimiters,
                  comments: options.comments,
                },
                this
              );
              var render = ref.render;
              var staticRenderFns = ref.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;

              /* istanbul ignore if */
              if (false) {
              }
            }
          }
          return mount.call(this, el, hydrating);
        };

        /**
         * Get outerHTML of elements, taking care
         * of SVG elements in IE as well.
         */
        function getOuterHTML(el) {
          if (el.outerHTML) {
            return el.outerHTML;
          } else {
            var container = document.createElement("div");
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
          }
        }

        Vue.compile = compileToFunctions;

        /* harmony default export */ __webpack_exports__["default"] = Vue;

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(16),
        __webpack_require__(60).setImmediate
      ));

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    /* 31 */ /* 32 */ /* 33 */ /* 34 */ /* 35 */ /* 36 */ /* 37 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "Store",
        function () {
          return Store;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "install",
        function () {
          return install;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "mapState",
        function () {
          return mapState;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "mapMutations",
        function () {
          return mapMutations;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "mapGetters",
        function () {
          return mapGetters;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "mapActions",
        function () {
          return mapActions;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "createNamespacedHelpers",
        function () {
          return createNamespacedHelpers;
        }
      );
      /**
       * vuex v3.0.1
       * (c) 2017 Evan You
       * @license MIT
       */
      var applyMixin = function (Vue) {
        var version = Number(Vue.version.split(".")[0]);

        if (version >= 2) {
          Vue.mixin({ beforeCreate: vuexInit });
        } else {
          // override init and inject vuex init procedure
          // for 1.x backwards compatibility.
          var _init = Vue.prototype._init;
          Vue.prototype._init = function (options) {
            if (options === void 0) options = {};

            options.init = options.init
              ? [vuexInit].concat(options.init)
              : vuexInit;
            _init.call(this, options);
          };
        }

        /**
         * Vuex init hook, injected into each instances init hooks list.
         */

        function vuexInit() {
          var options = this.$options;
          // store injection
          if (options.store) {
            this.$store =
              typeof options.store === "function"
                ? options.store()
                : options.store;
          } else if (options.parent && options.parent.$store) {
            this.$store = options.parent.$store;
          }
        }
      };

      var devtoolHook =
        typeof window !== "undefined" && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

      function devtoolPlugin(store) {
        if (!devtoolHook) {
          return;
        }

        store._devtoolHook = devtoolHook;

        devtoolHook.emit("vuex:init", store);

        devtoolHook.on("vuex:travel-to-state", function (targetState) {
          store.replaceState(targetState);
        });

        store.subscribe(function (mutation, state) {
          devtoolHook.emit("vuex:mutation", mutation, state);
        });
      }

      /**
       * Get the first item that pass the test
       * by second argument function
       *
       * @param {Array} list
       * @param {Function} f
       * @return {*}
       */
      /**
       * Deep copy the given object considering circular structure.
       * This function caches all nested objects and its copies.
       * If it detects circular structure, use cached copy to avoid infinite loop.
       *
       * @param {*} obj
       * @param {Array<Object>} cache
       * @return {*}
       */

      /**
       * forEach for object
       */
      function forEachValue(obj, fn) {
        Object.keys(obj).forEach(function (key) {
          return fn(obj[key], key);
        });
      }

      function isObject(obj) {
        return obj !== null && typeof obj === "object";
      }

      function isPromise(val) {
        return val && typeof val.then === "function";
      }

      function assert(condition, msg) {
        if (!condition) {
          throw new Error("[vuex] " + msg);
        }
      }

      var Module = function Module(rawModule, runtime) {
        this.runtime = runtime;
        this._children = Object.create(null);
        this._rawModule = rawModule;
        var rawState = rawModule.state;
        this.state =
          (typeof rawState === "function" ? rawState() : rawState) || {};
      };

      var prototypeAccessors$1 = { namespaced: { configurable: true } };

      prototypeAccessors$1.namespaced.get = function () {
        return !!this._rawModule.namespaced;
      };

      Module.prototype.addChild = function addChild(key, module) {
        this._children[key] = module;
      };

      Module.prototype.removeChild = function removeChild(key) {
        delete this._children[key];
      };

      Module.prototype.getChild = function getChild(key) {
        return this._children[key];
      };

      Module.prototype.update = function update(rawModule) {
        this._rawModule.namespaced = rawModule.namespaced;
        if (rawModule.actions) {
          this._rawModule.actions = rawModule.actions;
        }
        if (rawModule.mutations) {
          this._rawModule.mutations = rawModule.mutations;
        }
        if (rawModule.getters) {
          this._rawModule.getters = rawModule.getters;
        }
      };

      Module.prototype.forEachChild = function forEachChild(fn) {
        forEachValue(this._children, fn);
      };

      Module.prototype.forEachGetter = function forEachGetter(fn) {
        if (this._rawModule.getters) {
          forEachValue(this._rawModule.getters, fn);
        }
      };

      Module.prototype.forEachAction = function forEachAction(fn) {
        if (this._rawModule.actions) {
          forEachValue(this._rawModule.actions, fn);
        }
      };

      Module.prototype.forEachMutation = function forEachMutation(fn) {
        if (this._rawModule.mutations) {
          forEachValue(this._rawModule.mutations, fn);
        }
      };

      Object.defineProperties(Module.prototype, prototypeAccessors$1);

      var ModuleCollection = function ModuleCollection(rawRootModule) {
        // register root module (Vuex.Store options)
        this.register([], rawRootModule, false);
      };

      ModuleCollection.prototype.get = function get(path) {
        return path.reduce(function (module, key) {
          return module.getChild(key);
        }, this.root);
      };

      ModuleCollection.prototype.getNamespace = function getNamespace(path) {
        var module = this.root;
        return path.reduce(function (namespace, key) {
          module = module.getChild(key);
          return namespace + (module.namespaced ? key + "/" : "");
        }, "");
      };

      ModuleCollection.prototype.update = function update$1(rawRootModule) {
        update([], this.root, rawRootModule);
      };

      ModuleCollection.prototype.register = function register(
        path,
        rawModule,
        runtime
      ) {
        var this$1 = this;
        if (runtime === void 0) runtime = true;

        if (false) {
        }

        var newModule = new Module(rawModule, runtime);
        if (path.length === 0) {
          this.root = newModule;
        } else {
          var parent = this.get(path.slice(0, -1));
          parent.addChild(path[path.length - 1], newModule);
        }

        // register nested modules
        if (rawModule.modules) {
          forEachValue(rawModule.modules, function (rawChildModule, key) {
            this$1.register(path.concat(key), rawChildModule, runtime);
          });
        }
      };

      ModuleCollection.prototype.unregister = function unregister(path) {
        var parent = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        if (!parent.getChild(key).runtime) {
          return;
        }

        parent.removeChild(key);
      };

      function update(path, targetModule, newModule) {
        if (false) {
        }

        // update target module
        targetModule.update(newModule);

        // update nested modules
        if (newModule.modules) {
          for (var key in newModule.modules) {
            if (!targetModule.getChild(key)) {
              if (false) {
              }
              return;
            }
            update(
              path.concat(key),
              targetModule.getChild(key),
              newModule.modules[key]
            );
          }
        }
      }

      var functionAssert = {
        assert: function (value) {
          return typeof value === "function";
        },
        expected: "function",
      };

      var objectAssert = {
        assert: function (value) {
          return (
            typeof value === "function" ||
            (typeof value === "object" && typeof value.handler === "function")
          );
        },
        expected: 'function or object with "handler" function',
      };

      var assertTypes = {
        getters: functionAssert,
        mutations: functionAssert,
        actions: objectAssert,
      };

      function assertRawModule(path, rawModule) {
        Object.keys(assertTypes).forEach(function (key) {
          if (!rawModule[key]) {
            return;
          }

          var assertOptions = assertTypes[key];

          forEachValue(rawModule[key], function (value, type) {
            assert(
              assertOptions.assert(value),
              makeAssertionMessage(
                path,
                key,
                type,
                value,
                assertOptions.expected
              )
            );
          });
        });
      }

      function makeAssertionMessage(path, key, type, value, expected) {
        var buf =
          key + " should be " + expected + ' but "' + key + "." + type + '"';
        if (path.length > 0) {
          buf += ' in module "' + path.join(".") + '"';
        }
        buf += " is " + JSON.stringify(value) + ".";
        return buf;
      }

      var Vue; // bind on install

      var Store = function Store(options) {
        var this$1 = this;
        if (options === void 0) options = {};

        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #731
        if (!Vue && typeof window !== "undefined" && window.Vue) {
          install(window.Vue);
        }

        if (false) {
        }

        var plugins = options.plugins;
        if (plugins === void 0) plugins = [];
        var strict = options.strict;
        if (strict === void 0) strict = false;

        var state = options.state;
        if (state === void 0) state = {};
        if (typeof state === "function") {
          state = state() || {};
        }

        // store internal state
        this._committing = false;
        this._actions = Object.create(null);
        this._actionSubscribers = [];
        this._mutations = Object.create(null);
        this._wrappedGetters = Object.create(null);
        this._modules = new ModuleCollection(options);
        this._modulesNamespaceMap = Object.create(null);
        this._subscribers = [];
        this._watcherVM = new Vue();

        // bind commit and dispatch to self
        var store = this;
        var ref = this;
        var dispatch = ref.dispatch;
        var commit = ref.commit;
        this.dispatch = function boundDispatch(type, payload) {
          return dispatch.call(store, type, payload);
        };
        this.commit = function boundCommit(type, payload, options) {
          return commit.call(store, type, payload, options);
        };

        // strict mode
        this.strict = strict;

        // init root module.
        // this also recursively registers all sub-modules
        // and collects all module getters inside this._wrappedGetters
        installModule(this, state, [], this._modules.root);

        // initialize the store vm, which is responsible for the reactivity
        // (also registers _wrappedGetters as computed properties)
        resetStoreVM(this, state);

        // apply plugins
        plugins.forEach(function (plugin) {
          return plugin(this$1);
        });

        if (Vue.config.devtools) {
          devtoolPlugin(this);
        }
      };

      var prototypeAccessors = { state: { configurable: true } };

      prototypeAccessors.state.get = function () {
        return this._vm._data.$$state;
      };

      prototypeAccessors.state.set = function (v) {
        if (false) {
        }
      };

      Store.prototype.commit = function commit(_type, _payload, _options) {
        var this$1 = this;

        // check object-style commit
        var ref = unifyObjectStyle(_type, _payload, _options);
        var type = ref.type;
        var payload = ref.payload;
        var options = ref.options;

        var mutation = { type: type, payload: payload };
        var entry = this._mutations[type];
        if (!entry) {
          if (false) {
          }
          return;
        }
        this._withCommit(function () {
          entry.forEach(function commitIterator(handler) {
            handler(payload);
          });
        });
        this._subscribers.forEach(function (sub) {
          return sub(mutation, this$1.state);
        });

        if (false) {
        }
      };

      Store.prototype.dispatch = function dispatch(_type, _payload) {
        var this$1 = this;

        // check object-style dispatch
        var ref = unifyObjectStyle(_type, _payload);
        var type = ref.type;
        var payload = ref.payload;

        var action = { type: type, payload: payload };
        var entry = this._actions[type];
        if (!entry) {
          if (false) {
          }
          return;
        }

        this._actionSubscribers.forEach(function (sub) {
          return sub(action, this$1.state);
        });

        return entry.length > 1
          ? Promise.all(
              entry.map(function (handler) {
                return handler(payload);
              })
            )
          : entry[0](payload);
      };

      Store.prototype.subscribe = function subscribe(fn) {
        return genericSubscribe(fn, this._subscribers);
      };

      Store.prototype.subscribeAction = function subscribeAction(fn) {
        return genericSubscribe(fn, this._actionSubscribers);
      };

      Store.prototype.watch = function watch(getter, cb, options) {
        var this$1 = this;

        if (false) {
        }
        return this._watcherVM.$watch(
          function () {
            return getter(this$1.state, this$1.getters);
          },
          cb,
          options
        );
      };

      Store.prototype.replaceState = function replaceState(state) {
        var this$1 = this;

        this._withCommit(function () {
          this$1._vm._data.$$state = state;
        });
      };

      Store.prototype.registerModule = function registerModule(
        path,
        rawModule,
        options
      ) {
        if (options === void 0) options = {};

        if (typeof path === "string") {
          path = [path];
        }

        if (false) {
        }

        this._modules.register(path, rawModule);
        installModule(
          this,
          this.state,
          path,
          this._modules.get(path),
          options.preserveState
        );
        // reset store to update getters...
        resetStoreVM(this, this.state);
      };

      Store.prototype.unregisterModule = function unregisterModule(path) {
        var this$1 = this;

        if (typeof path === "string") {
          path = [path];
        }

        if (false) {
        }

        this._modules.unregister(path);
        this._withCommit(function () {
          var parentState = getNestedState(this$1.state, path.slice(0, -1));
          Vue.delete(parentState, path[path.length - 1]);
        });
        resetStore(this);
      };

      Store.prototype.hotUpdate = function hotUpdate(newOptions) {
        this._modules.update(newOptions);
        resetStore(this, true);
      };

      Store.prototype._withCommit = function _withCommit(fn) {
        var committing = this._committing;
        this._committing = true;
        fn();
        this._committing = committing;
      };

      Object.defineProperties(Store.prototype, prototypeAccessors);

      function genericSubscribe(fn, subs) {
        if (subs.indexOf(fn) < 0) {
          subs.push(fn);
        }
        return function () {
          var i = subs.indexOf(fn);
          if (i > -1) {
            subs.splice(i, 1);
          }
        };
      }

      function resetStore(store, hot) {
        store._actions = Object.create(null);
        store._mutations = Object.create(null);
        store._wrappedGetters = Object.create(null);
        store._modulesNamespaceMap = Object.create(null);
        var state = store.state;
        // init all modules
        installModule(store, state, [], store._modules.root, true);
        // reset vm
        resetStoreVM(store, state, hot);
      }

      function resetStoreVM(store, state, hot) {
        var oldVm = store._vm;

        // bind store public getters
        store.getters = {};
        var wrappedGetters = store._wrappedGetters;
        var computed = {};
        forEachValue(wrappedGetters, function (fn, key) {
          // use computed to leverage its lazy-caching mechanism
          computed[key] = function () {
            return fn(store);
          };
          Object.defineProperty(store.getters, key, {
            get: function () {
              return store._vm[key];
            },
            enumerable: true, // for local getters
          });
        });

        // use a Vue instance to store the state tree
        // suppress warnings just in case the user has added
        // some funky global mixins
        var silent = Vue.config.silent;
        Vue.config.silent = true;
        store._vm = new Vue({
          data: {
            $$state: state,
          },
          computed: computed,
        });
        Vue.config.silent = silent;

        // enable strict mode for new vm
        if (store.strict) {
          enableStrictMode(store);
        }

        if (oldVm) {
          if (hot) {
            // dispatch changes in all subscribed watchers
            // to force getter re-evaluation for hot reloading.
            store._withCommit(function () {
              oldVm._data.$$state = null;
            });
          }
          Vue.nextTick(function () {
            return oldVm.$destroy();
          });
        }
      }

      function installModule(store, rootState, path, module, hot) {
        var isRoot = !path.length;
        var namespace = store._modules.getNamespace(path);

        // register in namespace map
        if (module.namespaced) {
          store._modulesNamespaceMap[namespace] = module;
        }

        // set state
        if (!isRoot && !hot) {
          var parentState = getNestedState(rootState, path.slice(0, -1));
          var moduleName = path[path.length - 1];
          store._withCommit(function () {
            Vue.set(parentState, moduleName, module.state);
          });
        }

        var local = (module.context = makeLocalContext(store, namespace, path));

        module.forEachMutation(function (mutation, key) {
          var namespacedType = namespace + key;
          registerMutation(store, namespacedType, mutation, local);
        });

        module.forEachAction(function (action, key) {
          var type = action.root ? key : namespace + key;
          var handler = action.handler || action;
          registerAction(store, type, handler, local);
        });

        module.forEachGetter(function (getter, key) {
          var namespacedType = namespace + key;
          registerGetter(store, namespacedType, getter, local);
        });

        module.forEachChild(function (child, key) {
          installModule(store, rootState, path.concat(key), child, hot);
        });
      }

      /**
       * make localized dispatch, commit, getters and state
       * if there is no namespace, just use root ones
       */
      function makeLocalContext(store, namespace, path) {
        var noNamespace = namespace === "";

        var local = {
          dispatch: noNamespace
            ? store.dispatch
            : function (_type, _payload, _options) {
                var args = unifyObjectStyle(_type, _payload, _options);
                var payload = args.payload;
                var options = args.options;
                var type = args.type;

                if (!options || !options.root) {
                  type = namespace + type;
                  if (false) {
                  }
                }

                return store.dispatch(type, payload);
              },

          commit: noNamespace
            ? store.commit
            : function (_type, _payload, _options) {
                var args = unifyObjectStyle(_type, _payload, _options);
                var payload = args.payload;
                var options = args.options;
                var type = args.type;

                if (!options || !options.root) {
                  type = namespace + type;
                  if (false) {
                  }
                }

                store.commit(type, payload, options);
              },
        };

        // getters and state object must be gotten lazily
        // because they will be changed by vm update
        Object.defineProperties(local, {
          getters: {
            get: noNamespace
              ? function () {
                  return store.getters;
                }
              : function () {
                  return makeLocalGetters(store, namespace);
                },
          },
          state: {
            get: function () {
              return getNestedState(store.state, path);
            },
          },
        });

        return local;
      }

      function makeLocalGetters(store, namespace) {
        var gettersProxy = {};

        var splitPos = namespace.length;
        Object.keys(store.getters).forEach(function (type) {
          // skip if the target getter is not match this namespace
          if (type.slice(0, splitPos) !== namespace) {
            return;
          }

          // extract local getter type
          var localType = type.slice(splitPos);

          // Add a port to the getters proxy.
          // Define as getter property because
          // we do not want to evaluate the getters in this time.
          Object.defineProperty(gettersProxy, localType, {
            get: function () {
              return store.getters[type];
            },
            enumerable: true,
          });
        });

        return gettersProxy;
      }

      function registerMutation(store, type, handler, local) {
        var entry = store._mutations[type] || (store._mutations[type] = []);
        entry.push(function wrappedMutationHandler(payload) {
          handler.call(store, local.state, payload);
        });
      }

      function registerAction(store, type, handler, local) {
        var entry = store._actions[type] || (store._actions[type] = []);
        entry.push(function wrappedActionHandler(payload, cb) {
          var res = handler.call(
            store,
            {
              dispatch: local.dispatch,
              commit: local.commit,
              getters: local.getters,
              state: local.state,
              rootGetters: store.getters,
              rootState: store.state,
            },
            payload,
            cb
          );
          if (!isPromise(res)) {
            res = Promise.resolve(res);
          }
          if (store._devtoolHook) {
            return res.catch(function (err) {
              store._devtoolHook.emit("vuex:error", err);
              throw err;
            });
          } else {
            return res;
          }
        });
      }

      function registerGetter(store, type, rawGetter, local) {
        if (store._wrappedGetters[type]) {
          if (false) {
          }
          return;
        }
        store._wrappedGetters[type] = function wrappedGetter(store) {
          return rawGetter(
            local.state, // local state
            local.getters, // local getters
            store.state, // root state
            store.getters // root getters
          );
        };
      }

      function enableStrictMode(store) {
        store._vm.$watch(
          function () {
            return this._data.$$state;
          },
          function () {
            if (false) {
            }
          },
          { deep: true, sync: true }
        );
      }

      function getNestedState(state, path) {
        return path.length
          ? path.reduce(function (state, key) {
              return state[key];
            }, state)
          : state;
      }

      function unifyObjectStyle(type, payload, options) {
        if (isObject(type) && type.type) {
          options = payload;
          payload = type;
          type = type.type;
        }

        if (false) {
        }

        return { type: type, payload: payload, options: options };
      }

      function install(_Vue) {
        if (Vue && _Vue === Vue) {
          if (false) {
          }
          return;
        }
        Vue = _Vue;
        applyMixin(Vue);
      }

      var mapState = normalizeNamespace(function (namespace, states) {
        var res = {};
        normalizeMap(states).forEach(function (ref) {
          var key = ref.key;
          var val = ref.val;

          res[key] = function mappedState() {
            var state = this.$store.state;
            var getters = this.$store.getters;
            if (namespace) {
              var module = getModuleByNamespace(
                this.$store,
                "mapState",
                namespace
              );
              if (!module) {
                return;
              }
              state = module.context.state;
              getters = module.context.getters;
            }
            return typeof val === "function"
              ? val.call(this, state, getters)
              : state[val];
          };
          // mark vuex getter for devtools
          res[key].vuex = true;
        });
        return res;
      });

      var mapMutations = normalizeNamespace(function (namespace, mutations) {
        var res = {};
        normalizeMap(mutations).forEach(function (ref) {
          var key = ref.key;
          var val = ref.val;

          res[key] = function mappedMutation() {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];

            var commit = this.$store.commit;
            if (namespace) {
              var module = getModuleByNamespace(
                this.$store,
                "mapMutations",
                namespace
              );
              if (!module) {
                return;
              }
              commit = module.context.commit;
            }
            return typeof val === "function"
              ? val.apply(this, [commit].concat(args))
              : commit.apply(this.$store, [val].concat(args));
          };
        });
        return res;
      });

      var mapGetters = normalizeNamespace(function (namespace, getters) {
        var res = {};
        normalizeMap(getters).forEach(function (ref) {
          var key = ref.key;
          var val = ref.val;

          val = namespace + val;
          res[key] = function mappedGetter() {
            if (
              namespace &&
              !getModuleByNamespace(this.$store, "mapGetters", namespace)
            ) {
              return;
            }
            if (false) {
            }
            return this.$store.getters[val];
          };
          // mark vuex getter for devtools
          res[key].vuex = true;
        });
        return res;
      });

      var mapActions = normalizeNamespace(function (namespace, actions) {
        var res = {};
        normalizeMap(actions).forEach(function (ref) {
          var key = ref.key;
          var val = ref.val;

          res[key] = function mappedAction() {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];

            var dispatch = this.$store.dispatch;
            if (namespace) {
              var module = getModuleByNamespace(
                this.$store,
                "mapActions",
                namespace
              );
              if (!module) {
                return;
              }
              dispatch = module.context.dispatch;
            }
            return typeof val === "function"
              ? val.apply(this, [dispatch].concat(args))
              : dispatch.apply(this.$store, [val].concat(args));
          };
        });
        return res;
      });

      var createNamespacedHelpers = function (namespace) {
        return {
          mapState: mapState.bind(null, namespace),
          mapGetters: mapGetters.bind(null, namespace),
          mapMutations: mapMutations.bind(null, namespace),
          mapActions: mapActions.bind(null, namespace),
        };
      };

      function normalizeMap(map) {
        return Array.isArray(map)
          ? map.map(function (key) {
              return { key: key, val: key };
            })
          : Object.keys(map).map(function (key) {
              return { key: key, val: map[key] };
            });
      }

      function normalizeNamespace(fn) {
        return function (namespace, map) {
          if (typeof namespace !== "string") {
            map = namespace;
            namespace = "";
          } else if (namespace.charAt(namespace.length - 1) !== "/") {
            namespace += "/";
          }
          return fn(namespace, map);
        };
      }

      function getModuleByNamespace(store, helper, namespace) {
        var module = store._modulesNamespaceMap[namespace];
        if (false) {
        }
        return module;
      }

      var index_esm = {
        Store: Store,
        install: install,
        version: "3.0.1",
        mapState: mapState,
        mapMutations: mapMutations,
        mapGetters: mapGetters,
        mapActions: mapActions,
        createNamespacedHelpers: createNamespacedHelpers,
      };

      /* harmony default export */ __webpack_exports__["default"] = index_esm;

      /***/
    },
    /* 38 */
    /***/ function (module, exports, __webpack_require__) {
      const Vue = __webpack_require__(30).default,
        Vuex = __webpack_require__(37);
      Vue.use(Vuex);
      const store = new Vuex.Store({
        state: {
          display: {
            default: [
              { type: "plain-text", content: { text: "Result Goes Here" } },
            ],
            base: [
              {
                type: "plain-text",
                content: { text: "Please Enter Number And Base parameters" },
              },
            ],
            prime: [
              {
                type: "plain-text",
                content: { text: "Please Enter A Function" },
              },
            ],
            quadratic: [
              {
                type: "plain-text",
                content: { text: "Please Enter A Function" },
              },
            ],
            binomial: [
              {
                type: "plain-text",
                content: { text: "Please Enter A Function" },
              },
            ],
            vector: [
              {
                type: "error-message",
                content: { error: new Error("Function not yet implemented!") },
              },
            ],
          },
        },
        mutations: {
          display(state, displayState) {
            Object.assign(state.display, displayState);
          },
        },
      });
      module.exports = store;

      /***/
    },
    /* 39 */
    /***/ function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(3)(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.exponential-container[data-v-102814ca]  {\r\n    display:inline-block;\r\n    vertical-align: 0.9em;\n}\n.base[data-v-102814ca] {\r\n    vertical-align:-0.86em;\n}\n.power[data-v-102814ca] {\r\n    line-height:0;\r\n    font-size:0.45em;\r\n    vertical-align:-0.8em;\n}\r\n",
        "",
      ]);

      // exports

      /***/
    },
    /* 40 */
    /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(39);
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var add = __webpack_require__(2).default;
      var update = add("a875ffde", content, false, {});
      // Hot Module Replacement
      if (false) {
      }

      /***/
    },
    /* 41 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        6
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_349a1b6e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        17
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_349a1b6e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_349a1b6e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathPolynomial_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\mathPolynomial.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 42 */
    /***/ function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(3)(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.message[data-v-778e1d51] {\r\n    color: red;\n}\r\n",
        "",
      ]);

      // exports

      /***/
    },
    /* 43 */
    /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(42);
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var add = __webpack_require__(2).default;
      var update = add("1eb247c6", content, false, {});
      // Hot Module Replacement
      if (false) {
      }

      /***/
    },
    /* 44 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        7
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_778e1d51_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        20
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      function injectStyle(context) {
        if (disposed) return;
        __webpack_require__(43);
      }
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = injectStyle;
      /* scopeId */
      var __vue_scopeId__ = "data-v-778e1d51";
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_778e1d51_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_778e1d51_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_errorMessage_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\errorMessage.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 45 */
    /***/ function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(3)(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.fraction-container[data-v-0502b81c] {    \r\n    display:inline-block;\r\n    line-height:0.86em;\r\n    vertical-align:-0.72em\n}\n.is-whole-number[data-v-0502b81c] {\r\n    text-decoration: none !important;\n}\n.top[data-v-0502b81c] {\r\n    text-decoration: underline;\n}\r\n",
        "",
      ]);

      // exports

      /***/
    },
    /* 46 */
    /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(45);
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var add = __webpack_require__(2).default;
      var update = add("9ab1c8ac", content, false, {});
      // Hot Module Replacement
      if (false) {
      }

      /***/
    },
    /* 47 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        8
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0502b81c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        21
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      function injectStyle(context) {
        if (disposed) return;
        __webpack_require__(46);
      }
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = injectStyle;
      /* scopeId */
      var __vue_scopeId__ = "data-v-0502b81c";
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0502b81c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0502b81c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_mathFraction_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\mathFraction.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 48 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        9
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fd6f615_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        22
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fd6f615_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0fd6f615_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_plainText_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\plainText.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 49 */
    /***/ function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(3)(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n@keyframes blink {\n0% {\r\n        opacity: .2;\n}\n20% {\r\n        opacity: 1;\n}\n100% {\r\n        opacity: .2;\n}\n}\n.first, .second, .third {\r\n    font-size: 1.5em;\r\n    animation-name: blink;\r\n    animation-duration: 1.4s;\r\n    animation-iteration-count: infinite;\r\n    animation-fill-mode: both;\n}\n.second {\r\n    animation-delay: .2s;\n}\n.third {\r\n    animation-delay: .4s;\n}\r\n",
        "",
      ]);

      // exports

      /***/
    },
    /* 50 */
    /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(49);
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var add = __webpack_require__(2).default;
      var update = add("f463f9ca", content, false, {});
      // Hot Module Replacement
      if (false) {
      }

      /***/
    },
    /* 51 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        10
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_35536a14_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        23
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      function injectStyle(context) {
        if (disposed) return;
        __webpack_require__(50);
      }
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = injectStyle;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_35536a14_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_35536a14_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_delayMessage_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\outputs\\delayMessage.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 52 */
    /***/ function (module, exports, __webpack_require__) {
      const delayMessage = __webpack_require__(51).default,
        plainText = __webpack_require__(48).default,
        mathFraction = __webpack_require__(47).default,
        errorMessage = __webpack_require__(44).default,
        mathPolynomial = __webpack_require__(41).default,
        mathTerm = __webpack_require__(29).default,
        mathExponential = __webpack_require__(28).default;
      module.exports = {
        "delay-message": delayMessage,
        "plain-text": plainText,
        "math-fraction": mathFraction,
        "error-message": errorMessage,
        "math-polynomial": mathPolynomial,
        "math-term": mathTerm,
        "math-exponeenntial": mathExponential,
      };

      /***/
    },
    /* 53 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        11
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_11646b4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        24
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_11646b4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_11646b4d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_quadratic_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\inputs\\quadratic.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 54 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        12
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_39df85b4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        25
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_39df85b4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_39df85b4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_prime_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\inputs\\prime.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 55 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        13
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_546c2cea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        26
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_546c2cea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_546c2cea_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_binomial_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\inputs\\binomial.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 56 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        14
      );
      /* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function (key) {
            __webpack_require__.d(__webpack_exports__, key, function () {
              return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7570792c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_base_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        27
      );
      /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        0
      );
      var disposed = false;
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;

      var Component = Object(
        _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[
          /* default */ "a"
        ]
      )(
        _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_base_vue__WEBPACK_IMPORTED_MODULE_0___default.a,
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7570792c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_base_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* render */ "a"
        ],
        _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7570792c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_optionsId_0_node_modules_vue_loader_lib_selector_type_template_index_0_base_vue__WEBPACK_IMPORTED_MODULE_1__[
          /* staticRenderFns */ "b"
        ],
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__
      );
      Component.options.__file = "components\\inputs\\base.vue";

      /* hot reload */
      if (false) {
      }

      /* harmony default export */ __webpack_exports__["default"] =
        Component.exports;

      /***/
    },
    /* 57 */
    /***/ function (module, exports, __webpack_require__) {
      const baseInput = __webpack_require__(56).default,
        binomialInput = __webpack_require__(55).default,
        primeInput = __webpack_require__(54).default,
        quadraticInput = __webpack_require__(53).default;
      module.exports = {
        "base-input": baseInput,
        "binomial-input": binomialInput,
        "prime-input": primeInput,
        "quadratic-input": quadraticInput,
      };

      /***/
    },
    /* 58 */
    /***/ function (module, exports) {
      // shim for using process in browser
      var process = (module.exports = {});

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if (
          (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
          setTimeout
        ) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if (
          (cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
          clearTimeout
        ) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ""; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error("process.binding is not supported");
      };

      process.cwd = function () {
        return "/";
      };
      process.chdir = function (dir) {
        throw new Error("process.chdir is not supported");
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 59 */
    /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function (global, process) {
        (function (global, undefined) {
          "use strict";

          if (global.setImmediate) {
            return;
          }

          var nextHandle = 1; // Spec says greater than zero
          var tasksByHandle = {};
          var currentlyRunningATask = false;
          var doc = global.document;
          var registerImmediate;

          function setImmediate(callback) {
            // Callback can either be a function or a string
            if (typeof callback !== "function") {
              callback = new Function("" + callback);
            }
            // Copy function arguments
            var args = new Array(arguments.length - 1);
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
            }
            // Store and register the task
            var task = { callback: callback, args: args };
            tasksByHandle[nextHandle] = task;
            registerImmediate(nextHandle);
            return nextHandle++;
          }

          function clearImmediate(handle) {
            delete tasksByHandle[handle];
          }

          function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
              case 0:
                callback();
                break;
              case 1:
                callback(args[0]);
                break;
              case 2:
                callback(args[0], args[1]);
                break;
              case 3:
                callback(args[0], args[1], args[2]);
                break;
              default:
                callback.apply(undefined, args);
                break;
            }
          }

          function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
              // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
              // "too much recursion" error.
              setTimeout(runIfPresent, 0, handle);
            } else {
              var task = tasksByHandle[handle];
              if (task) {
                currentlyRunningATask = true;
                try {
                  run(task);
                } finally {
                  clearImmediate(handle);
                  currentlyRunningATask = false;
                }
              }
            }
          }

          function installNextTickImplementation() {
            registerImmediate = function (handle) {
              process.nextTick(function () {
                runIfPresent(handle);
              });
            };
          }

          function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
              var postMessageIsAsynchronous = true;
              var oldOnMessage = global.onmessage;
              global.onmessage = function () {
                postMessageIsAsynchronous = false;
              };
              global.postMessage("", "*");
              global.onmessage = oldOnMessage;
              return postMessageIsAsynchronous;
            }
          }

          function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function (event) {
              if (
                event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0
              ) {
                runIfPresent(+event.data.slice(messagePrefix.length));
              }
            };

            if (global.addEventListener) {
              global.addEventListener("message", onGlobalMessage, false);
            } else {
              global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function (handle) {
              global.postMessage(messagePrefix + handle, "*");
            };
          }

          function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function (event) {
              var handle = event.data;
              runIfPresent(handle);
            };

            registerImmediate = function (handle) {
              channel.port2.postMessage(handle);
            };
          }

          function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function (handle) {
              // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
              // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
              var script = doc.createElement("script");
              script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
              };
              html.appendChild(script);
            };
          }

          function installSetTimeoutImplementation() {
            registerImmediate = function (handle) {
              setTimeout(runIfPresent, 0, handle);
            };
          }

          // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
          var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
          attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

          // Don't get fooled by e.g. browserify environments.
          if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();
          } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();
          } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();
          } else if (
            doc &&
            "onreadystatechange" in doc.createElement("script")
          ) {
            // For IE 6–8
            installReadyStateChangeImplementation();
          } else {
            // For older browsers
            installSetTimeoutImplementation();
          }

          attachTo.setImmediate = setImmediate;
          attachTo.clearImmediate = clearImmediate;
        })(
          typeof self === "undefined"
            ? typeof global === "undefined"
              ? this
              : global
            : self
        );

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(16), __webpack_require__(58)));

      /***/
    },
    /* 60 */
    /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function (global) {
        var scope =
          (typeof global !== "undefined" && global) ||
          (typeof self !== "undefined" && self) ||
          window;
        var apply = Function.prototype.apply;

        // DOM APIs, for completeness

        exports.setTimeout = function () {
          return new Timeout(
            apply.call(setTimeout, scope, arguments),
            clearTimeout
          );
        };
        exports.setInterval = function () {
          return new Timeout(
            apply.call(setInterval, scope, arguments),
            clearInterval
          );
        };
        exports.clearTimeout = exports.clearInterval = function (timeout) {
          if (timeout) {
            timeout.close();
          }
        };

        function Timeout(id, clearFn) {
          this._id = id;
          this._clearFn = clearFn;
        }
        Timeout.prototype.unref = Timeout.prototype.ref = function () {};
        Timeout.prototype.close = function () {
          this._clearFn.call(scope, this._id);
        };

        // Does not start the time, just sets up the members needed.
        exports.enroll = function (item, msecs) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = msecs;
        };

        exports.unenroll = function (item) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = -1;
        };

        exports._unrefActive = exports.active = function (item) {
          clearTimeout(item._idleTimeoutId);

          var msecs = item._idleTimeout;
          if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
              if (item._onTimeout) item._onTimeout();
            }, msecs);
          }
        };

        // setimmediate attaches itself to the global object
        __webpack_require__(59);
        // On some exotic environments, it's not clear which object `setimmediate` was
        // able to install onto.  Search each possibility in the same order as the
        // `setimmediate` library.
        exports.setImmediate =
          (typeof self !== "undefined" && self.setImmediate) ||
          (typeof global !== "undefined" && global.setImmediate) ||
          (this && this.setImmediate);
        exports.clearImmediate =
          (typeof self !== "undefined" && self.clearImmediate) ||
          (typeof global !== "undefined" && global.clearImmediate) ||
          (this && this.clearImmediate);

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__(16)));

      /***/
    },
    /* 61 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      const utils = __webpack_require__(1),
        Vue = __webpack_require__(30).default,
        inputComponents = __webpack_require__(57),
        outputComponents = __webpack_require__(52),
        store = __webpack_require__(38);

      window.outputComponents = outputComponents;
      window.Vue = Vue;
      console.log(outputComponents);
      __webpack_require__(15)();
      window.utils = utils;
      //(function(){

      const app = new Vue({
        el: "#app",
        store,
        data: {
          options: {
            base: {
              name: "base",
              description: "Perform base conversions",
              inputComponent: "base-input",
            },
            binomial: {
              name: "binomial",
              description: "Expand a binomial function",
              inputComponent: "binomial-input",
            },
            prime: {
              name: "prime",
              description: "Calculate the nth prime number",
              inputComponent: "prime-input",
            },
            quadratic: {
              name: "quadratic",
              description: "Evaluate roots of quadratic function",
              inputComponent: "quadratic-input",
            },
            vector: {
              name: "vector",
              description: "Perform vector arithmetics",
            },
          },
          activeOption: {
            name: "default",
          },
          worker: null,
        },
        computed: {
          display: {
            get() {
              return this.$store.state.display[this.activeOption.name];
            },
          },
        },
        methods: {
          activateOption(option) {
            this.activeOption = option;
          },
          format,
          solve,
          runAsync,
        },
        provide() {
          return {
            runAsync: this.runAsync,
            outputComponents,
          };
        },
        watchers: {
          activeOption(previousOption, currentOption) {
            if (previousOption) this.stopDelay();
          },
        },
        components: Object.assign({}, inputComponents, outputComponents),
      });
      utils.showTime();
      addEventListener("error", utils.printError);
      for (let element of options.children) {
        //for all options
        element.addEventListener("click", utils.navToggler); //hide navigation after click
      }
      document
        .getElementsByClassName("navicon")[0]
        .addEventListener("click", utils.navToggler);

      //SETUP FUNCTIONS
      //OPTIONS INITIALIZATION FUNCTIONS
      /*
       * Function names correspond to the data-action properties of their options element.
       * Forms are selected by their ids.
       */
      function showMore() {}

      function runAsync(args, funcName, callback) {
        let id = crypto.getRandomValues(new Uint32Array(new ArrayBuffer(4)))[0]; //runs a function asynchronously
        if (!this.worker) {
          utils.createWorker("mainworker", "scripts/workers").then(
            (worker) => {
              worker.onmessage = function (message) {
                if (message.data._subworker) return; //Do not process messages that are being relayed
                let ext,
                  messageId = message.data.id,
                  callback = worker.callbacks[messageId];
                if (message.data.type == "error") {
                  let error =
                    message.data.error ||
                    Object.assign(new Error(), message.data.errorClone);
                  callback(error);
                } else if (message.data.type == "answer") {
                  let answer = message.data.answer;
                  utils.deepAction(
                    answer,
                    function (object) {
                      if ((ext = object.extension))
                        object.__proto__ = utils.extensions[ext].prototype; //Restore prototype chains
                    },
                    {
                      typeof: `object`,
                    }
                  );
                  callback(null, answer);
                }
              };
              worker.onerror = (error) => {
                let self = error.target;
                if (!error.message) {
                  error = new Error("Network Error");
                }
                if (
                  error.message.replace(/^.*Error:/, "").trim() ===
                  "Network Error"
                ) {
                  self.dispatchEvent(
                    new MessageEvent("message", {
                      data: { type: "error", error, id },
                    })
                  );
                  worker.terminate();
                  this.worker = null; //Destroy bad worker. It will never work.
                } else {
                  utils.printError(error);
                  self.dispatchEvent(
                    new MessageEvent("message", {
                      data: { type: "error", error, id },
                    })
                  );
                }
              };
              worker.callbacks = Object.create(null);
              this.worker = worker;
              this.solve(...arguments, id);
            },
            (error) => {
              if (error.name === "SecurityError") {
                utils.printError(
                  new Error("Browser Does Not Support Offline Mode.")
                );
              } else {
                utils.printError(error);
              }
            }
          );
        } else {
          this.solve(...arguments, id);
        }
      }

      function solve(args, funcName, callback, id) {
        let worker = this.worker;
        worker.callbacks[id] = callback;
        worker.postMessage({ args, funcName, id });
        console.log(args);
      }

      function format() {
        let html = "";
        for (let i in arguments) {
          var j = arguments[i];
          if (HTMLElement.prototype.isPrototypeOf(j)) {
            html += j.outerHTML;
          } else if (Array.prototype.isPrototypeOf(j)) {
            html += format(...j);
          } else if (Error.prototype.isPrototypeOf(j)) {
            html += format(
              `Error: ${j.message.replace(/^.*Error:/, "").fontcolor("red")}`
            );
          } else html += utils.makeSpan(j).outerHTML;
        }
        return html;
      }

      function makeSpan(content, attributes) {
        //returns a span element of content
        let container = document.createElement("span");
        for (i in attributes) {
          container.setAttribute(i, attributes[i]);
        }
        container.innerHTML = content;
        return container;
      }

      function printDelay(message = "Processing Please Wait") {
        if (!printDelay.dotCount) printDelay.dotCount = 0;
        printDelay.stopCode = setInterval(function () {
          //return the code to disable the animation
          var dCount = printDelay.dotCount % 4;
          utils.print(`${message} <br>${". ".repeat(dCount)}`);
          printDelay.dotCount++;
        }, 400);
      }

      function printDelay(message = "Processing Please Wait") {
        let dotCount = 0;
        stopCode = setInterval(function () {
          //return the code to disable the animation
          if (waiting) return clearInterval();
          var dCount = dotCount % 4;
          store.commit("display", `${message} <br>${". ".repeat(dCount)}`);
          dotCount++;
        }, 400);
      }

      function stopDelay() {
        clearInterval(printDelay.stopCode);
      }

      /* harmony default export */ __webpack_exports__["default"] = app;

      /***/
    },
    /******/
  ]
)["default"];
