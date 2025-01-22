Inditex Technical Challenge Solution

Table of Contents

Description

Project Structure

Installation

Usage

Architecture

Implementation Details

Tests

Description

This project implements a solution for a technical challenge involving inventory allocation for a B2C company. The goal is to calculate the required stock and its locations in the warehouse to satisfy a delivery proposal for online stores based on specific constraints.

Project Structure

inditex/
  Ejercicio.pdf                 # Problem statement
  Prereparto_bruto.json         # Raw delivery proposal data
  Stock_unificado.json          # Warehouse stock data
  README.md                     # Documentation
  src/                          # Source code
    domain/                     # Business logic models
      stock.js                  # Stock model
      proposal.js               # Proposal model
    application/                # Use cases
      calculateDistribution.js  # Main use case implementation
    infrastructure/             # Input/Output handling
      fileReader.js             # JSON file handling
      index.js                  # Application entry point
  tests/                        # Unit tests
    domainTests.js              # Tests for domain models
    applicationTests.js         # Tests for application use cases

Installation

Clone the repository:

git clone <https://github.com/Federicojaviermartino/inditex.git>

Navigate to the project directory:

cd inditex

Install dependencies:

npm install

Usage

Run the solution with the following command:

node src/infrastructure/index.js

This will process the Prereparto_bruto.json and Stock_unificado.json files to generate the required distribution output.

Architecture

This project follows the Hexagonal Architecture, which separates the core business logic from external concerns like file handling or API integrations.

Layers

Domain: Contains the business logic models (e.g., Stock and Proposal).

Application: Implements use cases such as calculating the distribution of inventory.

Infrastructure: Manages data input/output and integrates the application with external systems.

Implementation Details

Logic

Input Data:

Prereparto_bruto.json: Contains the delivery proposals.

Stock_unificado.json: Contains the warehouse stock information.

Constraints:

Stock for online stores (e-commerce) is prioritized from state 5 (stockEm05). If insufficient, it falls back to state 1 (stockEm01).

For physical stores, only state 1 (stockEm01) stock is used.

Stock is allocated in order of priority: ZAR -> MSR -> SILO.

Output:

A table with fields: key, idTienda, propuesta, tipoStockDesc, estadoStock, posicioncompleta.

Files

stock.js: Defines the Stock class with methods to allocate inventory based on constraints.

proposal.js: Defines the Proposal class to represent delivery proposals.

calculateDistribution.js: Implements the main logic to match proposals with stock.

fileReader.js: Handles reading and parsing JSON files.

index.js: Entry point for running the application.

Tests

Unit tests are implemented for both domain models and application logic.

Run Tests

To execute tests:

npm test

Tests are located in the tests/ directory and cover:

Stock allocation logic.

Proposal filtering and processing.

End-to-end integration of all components.

For any questions or issues, feel free to create an issue in the repository.