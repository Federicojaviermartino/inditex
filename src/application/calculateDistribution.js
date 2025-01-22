const Stock = require('../domain/stock');
const Proposal = require('../domain/proposal');

function calculateDistribution(proposals, stockData, cycles) {
    const result = [];

    proposals.forEach((proposal) => {
        if (proposal.matchesCriteria(cycles, 1)) {
            let unitsNeeded = proposal.propuesta;

            stockData
                .filter((stock) => stock.key === proposal.key)
                .sort((a, b) => {
                    const priority = ['ZAR', 'MSR', 'SILO'];
                    return priority.indexOf(a.tipoStockDesc) - priority.indexOf(b.tipoStockDesc);
                })
                .forEach((stockEntry) => {
                    if (unitsNeeded > 0) {
                        const stock = new Stock(
                            stockEntry.key,
                            stockEntry.tipoStockDesc,
                            stockEntry.stockEm05,
                            stockEntry.stockEm01,
                            stockEntry.posicioncompleta
                        );
                        const allocation = stock.allocateStock(unitsNeeded, proposal.esEcommerce);

                        allocation.allocationDetails.forEach((detail) => {
                            result.push({
                                key: proposal.key,
                                idTienda: proposal.tiendaId,
                                propuesta: proposal.propuesta,
                                tipoStockDesc: detail.tipoStockDesc,
                                estadoStock: detail.estadoStock,
                                posicioncompleta: detail.posicioncompleta,
                            });
                        });

                        unitsNeeded = allocation.remainingUnits;
                    }
                });
        }
    });

    return result;
}

module.exports = calculateDistribution;