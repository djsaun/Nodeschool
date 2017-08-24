module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter

    const coins = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25
    };

    if (coins[coinType]) {
      return coins[coinType];
    } else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  }
};
