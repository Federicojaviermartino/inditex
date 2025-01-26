# Project Name: Distribution System for Stock Management

## Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Features](#features)
- [Scripts](#scripts)
- [Implementation Details](#implementation-details)
  - [Task 1](#task-1)
  - [Task 2: Low Code Integration](#low-code-integration)
  - [Task 3: Handling Large Data Files](#handling-large-data-files)
  - [Task 4: Visualization Proposal](#visualization-proposal)

---

## Introduction
This project is designed to calculate the distribution of stock for various stores based on specific proposals and available inventory. It uses principles of Hexagonal Architecture to ensure scalability and maintainability.

## Architecture
The project is structured following the Hexagonal Architecture:

- **Domain:** Contains the core business logic (e.g., Stock and Proposal models).
- **Application:** Handles use case logic (e.g., calculateDistribution function).
- **Infrastructure:** Manages external concerns such as file reading and logging.
- **Tests:** Includes unit tests and integration tests.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Federicojaviermartino/stock_management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd stock_management
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the test:
   ```bash
   node tests/domainTests.js
   ```

5. Execute the distribution calculation script:
   ```bash
   node tests/runCalculateDistribution.js
   ```

## Features
- Calculates stock distribution for stores based on specific criteria.
- Supports filtering proposals by location groups and e-commerce flags.
- Handles stock allocation from multiple zones with priority sorting.
- Outputs results to a JSON file for further processing.

## Scripts
### `runCalculateDistribution.js`
This script reads proposal and stock data, applies the `calculateDistribution` logic, and generates a distribution table saved as `distribution_result.json`.

### `domainTests.js`
Includes unit tests for domain entities (e.g., `Stock` and `Proposal`) to validate business logic.

## Implementation Details
### Task 1
The system calculates a distribution table based on:

#### Input Criteria
- `grupoLocalizacionDesc` values:
  - "CICLO 2 GRUPO A2"
  - "CICLO 1 GRUPO B"
  - "CICLO 1 GRUPO A2"
- `esEcommerce` = 1

#### Output Fields
- **Key:** Article to distribute.
- **idTienda:** Store ID.
- **propuesta:** Units to distribute.
- **tipoStockDesc:** Warehouse zone.
- **EstadoStock:** Stock state (1 or 5).
- **posicioncompleta:** Warehouse position ID.

The `calculateDistribution` function prioritizes stock allocation using the following zones: `ZAR`, `MSR`, `SILO`.

### Task 2
### Low Code Integration
#### Performance Considerations
- Optimize API calls to load data incrementally (pagination or streaming).
- Pre-aggregate data for heavy computations to reduce runtime overhead.

#### API Requirements
- **Endpoints:**
  - `/getProposals`: Fetch proposals data.
  - `/getStock`: Fetch stock data.
  - `/submitResults`: Save distribution results.
- **Filters:** Allow querying by `grupoLocalizacionDesc` and `esEcommerce`.
- **Batch Processing:** Support batch requests to handle large datasets.

### Task 3
### Handling Large Data Files
If the `Prereparto_bruto.json` file is 20GB, modifications include:
- Use streaming libraries like `JSONStream` or `node-stream-json` to process data without loading it entirely into memory.
- Split the data file into smaller chunks and process them sequentially.
- Employ cloud-based storage and processing for distributed computation.

### Task 4
### Visualization Proposal
For low-code implementation:
1. **Dashboard Design:**
   - Use a card-based interface to display warehouse zones, available stock, and allocated units.
   - Include filters for `grupoLocalizacionDesc` and `esEcommerce`.

2. **Graphical Representation:**
   - Bar charts for stock distribution per warehouse zone.
   - Heatmaps to visualize stock movement within warehouses.

3. **Tool Recommendations:**
   - Use Power Apps or OutSystems for drag-and-drop UI design.
   - Integrate APIs to fetch and update distribution data in real time.
