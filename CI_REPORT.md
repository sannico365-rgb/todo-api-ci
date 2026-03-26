# CI/CD Report

## Pipeline

```mermaid
graph TD
A[Push a GitHub] --> B[Instalar dependencias]
B --> C[Ejecutar tests]
C --> D[Generar coverage]