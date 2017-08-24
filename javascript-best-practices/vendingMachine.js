var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    var currentBalance = this.getBalance();
    productInventory.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  }

};
