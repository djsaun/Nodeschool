// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

const coins = {
  'q': 25,
  'd': 10,
  'n': 5,
  'p': 1
};

module.exports = {

  getAmount: function(coinType) {

    if (coins[coinType]) {
      return coins[coinType];
    } else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  },

  convertToChange: function(cents) {

    const change = [];

    for (let i in coins) {

      let coinValue = coins[i];

      while (cents >= coinValue) {
        change.push(i);
        cents -= coinValue;
      }
    }

    return change;
  }
};
