const readJSONFile = require('./fileReader');
const calculateDistribution = require('../application/calculateDistribution');
const Proposal = require('../domain/proposal');

const proposalData = readJSONFile('./Prereparto_bruto.json');
const stockData = readJSONFile('./Stock_unificado.json');

const proposals = proposalData.data.map(
    (p) =>
        new Proposal(
            p.key,
            p.propuesta,
            p.tiendaId,
            p.grupoLocalizacionDesc,
            p.esEcommerce
        )
);

const cycles = ['CICLO 2 GRUPO A2', 'CICLO 1 GRUPO B', 'CICLO 1 GRUPO A2'];

const result = calculateDistribution(proposals, stockData.data, cycles);

const fs = require('fs');

fs.writeFileSync('./output.json', JSON.stringify(result, null, 2));
log('Output saved to output.json');


console.log(result);