const Stock = require('../domain/stock');
const Proposal = require('../domain/proposal');

/**
 * Calculates stock distribution and generates a formatted table.
 * @param {Array} proposals - Array of Proposal objects.
 * @param {Array} stockData - Array of Stock objects.
 * @param {Array} cycles - Valid distribution cycles.
 * @returns {Array} - Formatted distribution table.
 */
function calculateDistribution(proposals, stockData, cycles) {
    const distributionTable = [];

    proposals.forEach((proposal) => {
        if (proposal.matchesCriteria(cycles, 1)) {
            let unitsNeeded = proposal.propuesta;

            // Filter and sort stock by priority zones
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

                        // Allocate stock
                        const allocation = stock.allocateStock(unitsNeeded, proposal.esEcommerce);

                        // Add allocation details to the distribution table
                        allocation.allocationDetails.forEach((detail) => {
                            distributionTable.push({
                                key: proposal.key,
                                idTienda: proposal.tiendaId,
                                propuesta: proposal.propuesta,
                                tipoStockDesc: detail.tipoStockDesc,
                                EstadoStock: detail.estadoStock,
                                posicioncompleta: detail.posicioncompleta,
                            });
                        });

                        // Update remaining units needed
                        unitsNeeded = allocation.remainingUnits;
                    }
                });
        }
    });

    return distributionTable;
}

module.exports = calculateDistribution;
