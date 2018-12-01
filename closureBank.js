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
