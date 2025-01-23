// src/domain/stock.js
class Stock {
    constructor(key, tipoStockDesc, stockEm05, stockEm01, posicioncompleta) {
      this.key = key;
      this.tipoStockDesc = tipoStockDesc;
      this.stockEm05 = stockEm05;
      this.stockEm01 = stockEm01;
      this.posicioncompleta = posicioncompleta;
    }
  
    allocateStock(unitsNeeded, isEcommerce) {
      let allocatedUnits = 0;
      const allocationDetails = [];
  
      if (isEcommerce && this.stockEm05 > 0) {
        const unitsToAllocate = Math.min(unitsNeeded, this.stockEm05);
        allocatedUnits += unitsToAllocate;
        this.stockEm05 -= unitsToAllocate;
        unitsNeeded -= unitsToAllocate;
        allocationDetails.push({
          units: unitsToAllocate,
          estadoStock: 5,
          posicioncompleta: this.posicioncompleta,
          tipoStockDesc: this.tipoStockDesc,
        });
      }
  
      if (unitsNeeded > 0 && this.stockEm01 > 0) {
        const unitsToAllocate = Math.min(unitsNeeded, this.stockEm01);
        allocatedUnits += unitsToAllocate;
        this.stockEm01 -= unitsToAllocate;
        unitsNeeded -= unitsToAllocate;
        allocationDetails.push({
          units: unitsToAllocate,
          estadoStock: 1,
          posicioncompleta: this.posicioncompleta,
          tipoStockDesc: this.tipoStockDesc,
        });
      }
  
      return { allocatedUnits, allocationDetails, remainingUnits: unitsNeeded };
    }
  }
  
  module.exports = Stock;