# Calculadora de Interés Compuesto

Una aplicación web moderna para calcular y visualizar el crecimiento de inversiones a lo largo del tiempo utilizando el interés compuesto. Desarrollada con React, TypeScript y Tailwind CSS, siguiendo los principios de Atomic Design.

## 🚀 Características

- **Cálculo de Interés Compuesto**: Simula el crecimiento de inversiones considerando:
  - Inversión inicial
  - Contribuciones mensuales
  - Tasa de retorno anual
  - Período de inversión

- **Visualización de Resultados**:
  - Resumen de resultados con total invertido, total acumulado y ganancia
  - Gráfico interactivo que muestra la evolución de la inversión
  - Formato de moneda en euros
  - Diseño responsivo para todos los dispositivos

- **Interfaz de Usuario**:
  - Diseño moderno y limpio
  - Formulario intuitivo con validación
  - Actualización en tiempo real de los resultados
  - Componentes reutilizables siguiendo Atomic Design

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Chart.js (para visualización de datos)
  - Vite (como bundler)

- **Arquitectura**:
  - Atomic Design para la organización de componentes
  - Componentes funcionales con Hooks
  - Tipado estático con TypeScript

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/calculadora-interes-compuesto.git
   cd calculadora-interes-compuesto
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Input, ResultCard)
│   ├── molecules/      # Componentes compuestos (InputGroup, ResultsGrid)
│   ├── organisms/      # Componentes complejos (CalculatorForm, ResultsSection)
│   └── templates/      # Plantillas de página (CalculatorTemplate)
├── App.tsx            # Componente principal
└── main.tsx          # Punto de entrada
```

## 💻 Uso

1. Ingresa la inversión inicial
2. Especifica la contribución mensual
3. Define la tasa de retorno anual esperada
4. Selecciona el período de inversión en años
5. Los resultados se actualizarán automáticamente mostrando:
   - Total invertido
   - Total acumulado
   - Ganancia total
   - Gráfico de proyección

## 🎨 Diseño

El proyecto sigue los principios de Atomic Design:

- **Atoms**: Componentes básicos como inputs y tarjetas de resultados
- **Molecules**: Grupos de inputs y grids de resultados
- **Organisms**: Formularios y secciones de resultados
- **Templates**: Plantilla principal de la calculadora

## 🧪 Pruebas

Para ejecutar las pruebas:
```bash
npm test
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del Proyecto: [https://github.com/tu-usuario/calculadora-interes-compuesto](https://github.com/tu-usuario/calculadora-interes-compuesto)
