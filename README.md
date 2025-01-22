Stock Distribution System
Description
This project provides a robust system to manage stock distribution from a warehouse to physical stores and eCommerce platforms. It implements a hexagonal architecture to ensure scalability, modularity, and maintainability.

Key Features
Priority-Based Distribution: Distributes stock based on priority zones (ZAR, MSR, SILO).
eCommerce and Physical Store Compatibility: Differentiates between stock allocation for online and offline stores.
Scalable for Large Data Sets: Supports efficient processing of large JSON files using streams.
Hexagonal Architecture: Clean separation of concerns into application, domain, and infrastructure layers.

Project Structure

inditex/
├── src/
│   ├── application/
│   │   └── calculateDistribution.js  # Main business logic
│   ├── domain/
│   │   ├── proposal.js              # Proposal model
│   │   └── stock.js                 # Stock model
│   ├── infrastructure/
│       ├── fileReader.js            # File reading utilities
│       ├── logger.js                # Logging utilities
├── tests/
│   ├── domainTests.js               # Domain layer tests
│   ├── applicationTests.js          # Application logic tests
├── data/
│   ├── Prereparto_bruto.json        # Proposal data
│   └── Stock_unificado.json         # Stock data
├── package.json                     # Project dependencies
└── README.md                        # Documentation

Getting Started
Prerequisites
Ensure the following are installed:

Node.js v16+
npm (Node Package Manager)

Installation
Clone the repository:
git clone https://github.com/Federicojaviermartino/inditex.git

Navigate to the project directory:
cd inditex

Install dependencies:
npm install


Usage
Run the Application
To run the main logic with sample proposals and stock data:
node src/application/calculateDistribution.js


Run Tests
To validate the domain and application logic:
node tests/domainTests.js

Input Files
Prereparto_bruto.json: Contains the proposals for distribution.
Stock_unificado.json: Contains the stock information from the warehouse.
Place these files in the data directory.

Implementation Details
1. Hexagonal Architecture
The system follows a hexagonal architecture:

Application Layer: Core business logic (e.g., stock allocation).
Domain Layer: Models (Stock, Proposal) define domain rules and behaviors.
Infrastructure Layer: Handles file reading, logging, and external interactions.
2. Handling Large Files
For scalability, the application uses fs and JSONStream to process large JSON files as streams. This avoids loading the entire file into memory, making it suitable for files up to 20 GB.

3. Testing
Tests are divided into:

Domain Layer Tests: Validates individual models like Stock and Proposal.
Application Layer Tests: Ensures the core logic (e.g., calculateDistribution) works correctly.

Scalability Considerations
Large JSON Files:

Process files using JSONStream to handle up to 20 GB of data.
Avoid loading the entire file into memory.
Performance Optimizations:

Sort stock data by priority zones (ZAR > MSR > SILO) before allocation.
Minimize file I/O operations.

Future Enhancements
Visualization:

Integrate with a low-code tool like Power BI or Tableau to visualize stock distribution.
Create charts to display zones contributing to each store's stock.
Database Integration:

Migrate stock and proposals to a database for better querying and updates.
Feel free to let me know if you’d like further refinements or additional sections for the README! 🚀