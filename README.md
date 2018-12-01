#### Repository
https://github.com/yashwanth2804/Javascript-closures

#### What Will I Learn?
In tutorial you will learn about 
- What is a closure in Javascript
- How to initalize a closure and invoke it
- A basic example of how internal works in closures


#### Requirements
You can execute the code in your browser ,

- Javascript enabled browser
- Text editor

#### Difficulty
- Intermediate


#### Tutorial Contents
 
 When I was learning JavaScript concepts , I had hard time understanding **clo`sure`s** , sure some beginner might faced this too. 

>What is a Closure?

*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.*

*taken from [medium article](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)*
 

<img src="https://media.giphy.com/media/3lx7OMPseuokgfzCK2/giphy.gif" width="500" height="250">

So with my understanding with some energy being spent on it, I made example

*Please correct me if I am wrong* 

### About the example

In this scenario, my grandpa brought 1000 BTC 🤑 and saved to Bitcoin bank,later he spent some BTC (200) and the rest is given to my Dad ,later my dad brought house (300 BTC) and given the rest to me.I donated (499 BTC) to `DEV.to` 😇


### A Basic Example of Closures in JavaScript:
 
 ```
function sum(a) {

  return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };

}

// method 1
console.log( sum(1)(2) ); // 3

/// method 2 

var call_1 = sum(1);
var call_2 = call_1(4);

console.log( call_2 ); // 5
 
 ```

In above example consider method 2, at first we are invoking the `sum` function and setting the `a`  value (by passing as param)in that function scope.

> var call_1 = sum(1);

the return function stored in var `call_1`, if we log call_1 we will see this

```
function(b) {
  return a + b; // takes "a" from the outer lexical environment
}

```


Now just look the variable `call_1` as a typical function, now we can invoke it by calling call_1(4) which will gives the sum of two numbers, but wait we learnt that function scope variable die when scope/function ends, right. then how come the `call_1` manages to get the variable defined in immediate parent even after that parent function already returned,so it should have dead.

[ Execution context](https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c), please refer this site.


as per it EC ,`Scope chain` hold the variable object of its own, outer function's variable object , and global execution context variable.

Now this is the reason why you gets `var a` available , when invoking `call_1()`.make sure it gets the reference not the actual value of outer function variable.



### Here is the code of Closure Bank Ltd

```

 var BTCbank = function(BTC_balanace) {

    return grandpa = (moneyspent) => {
        // grandpa

        BTC_balanace -= moneyspent;

        return dad = (moneyspent) => {
            // dad
            BTC_balanace -= moneyspent;

            return me = (moneyspent) => {
                // me
                return BTC_balanace -= moneyspent;
            }

        }

    }

};

// step-1
// deposit 1000 to BTCbank

var bankBalance = BTCbank(1000);


// step-2
// now grandpa spending amount is 300

var afterGrandpaSpending = bankBalance(300);

// step-3
// now grandpa spending amount is 200

var afterDadSpending = afterGrandpaSpending(200);

// step-4
// now grandpa spending amount is 499

var aftermyDonation = afterDadSpending(499);

console.log(aftermyDonation);


/// simple way 
/// console.dir(BTCbank(1000)(400)(100)(499));

```




### Lets break down the code 

Step-1:
    When we call function `BTCbank(BTC_balance)`, we are just initializing `BTC_balance` var to `1000` and returning the function `grandpa` to var `bankBalance`.

`console.log(bankBalance)`
```
(moneyspent) => {
      // grandpa

      BTC_balanace-= moneyspent;

      return dad = (moneyspent) => {
          // dad 
          BTC_balanace-= moneyspent;
        
            return me = (moneyspent) => {
                  // me
                return BTC_balanace-= moneyspent;
           }  

      }

  }

````



`console.dir(bankBalance)`

![image btc_bal](https://thepracticaldev.s3.amazonaws.com/i/sd0m25ppcil020p9bvbj.JPG)

check that closure have variable `BTC_balance` initialized to `1000`


Step-2:

   Now we can invoke `bankBalance` by calling `bankBalance(300)`,then `BTCbank` will gets the `BTC_balanace` from previous initialization in immediate outer scope of current function (in previous call we already initialized it to 1000 ) and subtracts the passed value.So we do not have to track balance sheet, `BTCbank` will do it for you.The returned function placed in `afterGrandpaSpending` variable.
 
`console.dir(afterGrandpaSpending)`

![](https://thepracticaldev.s3.amazonaws.com/i/5xrkqy4tkmn78qfwbz2p.JPG)

`console.log(afterGrandpaSpending)`

```
(moneyspent) => {
          // dad 
          BTC_balanace-= moneyspent;
        
            return me = (moneyspent) => {
                  // me
                return BTC_balanace-= moneyspent;
           }  

      }

```

Step-3:

  Invoking `afterGrandpaSpending(200)` , will triggers `dad` function because that is what variable `afterGrandpaSpending` holds, 
 It gets `BTC_balance` from it's immediate outer function , which has `700`. The passed value will be subtracted from `BTC_balance`.The returned function will be stored in variable `afterDadSpending`.

`console.dir(afterDadSpending)`
![](https://thepracticaldev.s3.amazonaws.com/i/bw3qr4oekh6yj96su1du.JPG)

`console.log(afterDadSpending)`

```
(moneyspent) => {
                  // me
                return BTC_balanace-= moneyspent;
    } 

``` 
Step-4:
    Here invoking `afterdadSpending(499)` doesn't return a function instead a value unlike above invoked functions.The returned value stored to `aftermyDonation`


`console.dir(aftermyDonation)`
> 1

`console.log(aftermyDonation)`

> 1

 

#### Curriculum
This is the first tutorial in this series

#### Proof of Work Done
https://github.com/yashwanth2804/Javascript-closures
