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



// Implementación de la solución en un sistema low-code //
Si el resultado final debe mostrarse en un sistema low-code como Power BI, AppGyver o cualquier otra herramienta similar, se pueden tomar las siguientes acciones:

Transformación y Exportación de Datos:

Generar el resultado en un formato amigable como JSON o CSV para facilitar la integración con herramientas low-code.
Ejemplo: Guardar el archivo de salida (output.json) con los datos requeridos.
Consideraciones de Rendimiento:

Asegurar que los datos se exporten en lotes pequeños si el volumen es alto, ya que muchas herramientas low-code tienen limitaciones de rendimiento con archivos masivos.
Optimizar el backend para que el sistema low-code realice peticiones a través de APIs en lugar de manejar grandes volúmenes de datos directamente.
Requisitos del API:

El sistema low-code puede consumir datos desde una API REST con las siguientes características:
Endpoint para consultar el resultado en tiempo real.
Paginación para manejar grandes cantidades de datos.
Respuestas en formato JSON estándar.

Parámetros necesarios:
cycle: Filtrar los resultados por ciclos de localización.
limit y offset: Para la paginación.

Manejo de un archivo JSON de 20GB
Si el archivo Prereparto_bruto.json ocupara 20GB, la solución debe modificarse para manejar los datos en streaming:

Lectura en Streaming:

Usar librerías como JSONStream para procesar el archivo línea a línea en lugar de cargar todo en memoria.
Beneficios:
Reducción del consumo de memoria.
Procesamiento más eficiente para grandes volúmenes de datos.
Procesamiento Incremental:

Los datos del archivo se procesan en partes y se almacenan temporalmente en un almacén como Redis o una base de datos temporal para consultas rápidas.
Consideraciones de Escalabilidad:

Dividir el archivo en partes más pequeñas.
Procesar cada segmento en paralelo si el entorno lo permite.

Propuesta de Visualización en una Herramienta Low-Code
Para presentar de manera visual cómo se rellenan los pedidos desde las zonas del almacén:

Interfaz Visual:

Un gráfico de barras apilado o un gráfico circular para mostrar:
Cantidad de unidades distribuidas desde cada zona (ZAR, MSR, SILO).
Diferenciación por estado de stock (Em05, Em01).
Detalles de Almacén:

Un mapa del almacén interactivo donde:
Cada zona (ZAR, MSR, SILO) esté marcada.
Los artículos y cantidades distribuidas se muestren como etiquetas flotantes al hacer clic.
Compatibilidad con Sistemas Low-Code:

Generar un archivo JSON que pueda ser directamente consumido por herramientas de visualización como Power BI o Tableau.
Crear una API que proporcione los datos para alimentar widgets o gráficos personalizados.


For any questions or issues, feel free to create an issue in the repository.