const fs = require('fs');
const path = require('path');
const calculateDistribution = require('../src/application/calculateDistribution');
const Proposal = require('../src/domain/proposal');
const Stock = require('../src/domain/stock');

// Leer los archivos JSON
const proposalsFile = path.resolve(__dirname, '../Prereparto_bruto.json');
const stockFile = path.resolve(__dirname, '../Stock_unificado.json');

const proposalsData = JSON.parse(fs.readFileSync(proposalsFile, 'utf8'));
const stockData = JSON.parse(fs.readFileSync(stockFile, 'utf8'));

// Depurar estructura de proposalsData
console.log('Loaded proposals data:', proposalsData);

// Adaptar estructura de proposalsData
const proposalsArray = Array.isArray(proposalsData) ? proposalsData : proposalsData.data;

// Convertir datos JSON a objetos de dominio
const proposals = proposalsArray.map(
  (p) => new Proposal(p.key, p.propuesta, p.tiendaId, p.grupoLocalizacionDesc, p.esEcommerce)
);

// Definir los ciclos válidos
const cycles = ['CICLO 2 GRUPO A2', 'CICLO 1 GRUPO B', 'CICLO 1 GRUPO A2'];

// Calcular la distribución
const distributionTable = calculateDistribution(proposals, stocks, cycles);

// Mostrar resultados
console.log('Distribution Table:');
console.table(distributionTable);

// Guardar los resultados en un archivo JSON
fs.writeFileSync(
  path.resolve(__dirname, '../distribution_result.json'),
  JSON.stringify(distributionTable, null, 2)
);
console.log('Distribution table saved to distribution_result.json');
