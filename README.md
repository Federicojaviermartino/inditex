- Stock Distribution System
Description
This project provides a robust system to manage stock distribution from a warehouse to physical stores and eCommerce platforms. It implements a hexagonal architecture to ensure scalability, modularity, and maintainability.

- Key Features
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


2) Implementation in a Low-Code System
1- How to Implement the Solution in a Low-Code System
To display the distribution results in a low-code platform, the solution involves using the platform's built-in tools and frameworks to integrate with the backend API and visualize the data. Most low-code platforms support API integration and provide components for displaying tables and charts. Here's how the solution would be implemented:

Backend Integration:

Expose the distribution logic as a REST API endpoint, e.g., POST /api/distribution.
The API will accept input parameters (e.g., groupLocalizationDesc, esEcommerce) and return the formatted table as a JSON response.
Low-Code Configuration:

Use the low-code platform's API connector to integrate the distribution API.
Configure a data table or list component to display the API's response.
Allow filtering and sorting of the table based on fields such as idTienda, Key, or tipoStockDesc.
User Interaction:

Add input fields or filters in the UI for users to customize queries.
Provide real-time feedback when filters are applied by re-fetching data from the API.
2- Performance Considerations
a. Data Size:
Large datasets (e.g., thousands of rows) may slow down low-code platforms.
Implement server-side pagination to return smaller, manageable chunks of data.
Optimize the database query for quick responses by indexing fields such as Key and grupoLocalizacionDesc.

b. Response Time:
Ensure that the API processes requests within acceptable time limits (<1 second) by:
Caching frequently accessed results.
Using asynchronous processing for large calculations.

c. Scalability:
The API should support concurrent requests, particularly in environments with multiple users querying simultaneously.
Use horizontal scaling (e.g., Kubernetes) to handle increased load.

d. Error Handling:
Return informative error messages if queries are invalid (e.g., unsupported grupoLocalizacionDesc).
Use fallback mechanisms for unavailable services.

3- API Requirements
a. Endpoints:
POST /api/distribution:
Input: JSON payload with parameters such as groupLocalizationDesc, esEcommerce.
Output: JSON array of distribution results.

b. Security:
Authenticate requests using API keys or OAuth tokens.
Authorize users to access data relevant to their permissions.

c. Pagination and Filtering:
Include query parameters for pagination (page, limit).
Allow filtering on fields such as idTienda, tipoStockDesc.

d. Error Handling:
Return appropriate HTTP status codes:
200 OK for successful responses.
400 Bad Request for invalid inputs.
500 Internal Server Error for unexpected issues.

3) Handling a 20GB JSON File for Prereparto
If the Prereparto JSON file were to occupy 20GB, the approach to solving the problem would differ significantly due to the constraints of loading and processing such a large dataset in memory. Here is the adjusted solution:

Challenges with a 20GB JSON File
Memory Usage:

Loading a 20GB file into memory in its entirety is infeasible for most systems due to memory constraints.
Processing Time:

Parsing and filtering a large dataset in memory can result in unacceptable delays.
Scalability:

Single-threaded or synchronous processing would struggle with such large datasets.

Alternative Approach

1- Stream-Based Processing:
Use streaming to process the JSON file in chunks. Libraries like JSONStream or stream-json allow reading and parsing large JSON files incrementally.
This ensures only a small portion of the file is in memory at any given time.

2- Database Storage:
Store the JSON data in a database (e.g., PostgreSQL, MongoDB).
Use indexed queries to filter and retrieve relevant data efficiently.

3- Distributed Processing:
Use distributed systems like Apache Spark or AWS Athena for parallel processing of large datasets.
These tools handle big data efficiently by distributing the workload across multiple nodes.

4- Batch Processing:
Break the JSON file into smaller batches for sequential processing. Each batch can be processed independently, reducing the load on memory.

5- Caching and Incremental Updates:
Cache frequently used results to avoid reprocessing.
If new data arrives incrementally, update the cache instead of reprocessing the entire file.

4) Visualization Proposal

1- Interactive Warehouse Map:
Description:
Use an interactive map or layout of the warehouse showing different storage zones (e.g., ZAR, MSR, SILO).
Each storage zone should highlight the stock movement details for the selected order.
Implementation:
Use low-code UI elements like drag-and-drop components, charts, and heatmaps.

2-Order Fulfillment Flow:
Description:
Represent the order flow using a step-by-step process diagram.
Each step indicates the stock zone, quantity, and state (1 or 5) used to fulfill the order.
Implementation:
Leverage progress bars or sequence diagrams available in the low-code tool.

3-Data Table with Filters:
Description:
Include a dynamic data table that displays the following fields for the selected order:
Key: Article key
idTienda: Store ID
Propuesta: Units distributed
TipoStockDesc: Zone from which the stock was taken
EstadoStock: Stock state (1 or 5)
PosicionCompleta: Full storage position
Add sorting and filtering options for ease of navigation.
Implementation:
Use table widgets with interactive filters.

4-Color-Coded Indicators:
Description:
Use color codes for stock zones and stock states:
Green for available stock (EstadoStock: 5).
Yellow for partially allocated stock.
Red for unavailable zones.
Implementation:
Integrate conditional formatting features.


Feel free to let me know if you’d like further refinements or additional sections for the README! 🚀