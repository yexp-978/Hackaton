import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appTsx = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const engineTs = fs.readFileSync(path.join(root, 'src/scene/DigitalTwinEngine.ts'), 'utf8');
const dashboardTsx = fs.readFileSync(path.join(root, 'src/components/ControlDashboard.tsx'), 'utf8');

// Extract real stop labels from STOP_POSITIONS in DigitalTwinEngine.ts
const stopMatches = [...engineTs.matchAll(/label:\s*'([^']+)'/g)].map((m) => m[1]);

// Extract real scenario cards from ControlDashboard.tsx
const scenarioBlocks = [
  ...dashboardTsx.matchAll(/id:\s*(\d),\s*\r?\n\s*title:\s*'([^']+)',\s*\r?\n\s*subtitle:\s*'([^']+)'/g),
].map((m) => ({
  id: Number(m[1]),
  title: m[2],
  subtitle: m[3],
}));

// Extract real passenger tags from App.tsx
const passengerBlocks = [
  ...appTsx.matchAll(/name:\s*'([^']+)',\s*\r?\n\s*role:\s*'([^']+)',\s*\r?\n\s*tagId:\s*'([^']+)'/g),
].map((m) => ({
  name: m[1],
  role: m[2],
  tagId: m[3],
}));

// Extract unit id & route name from App.tsx
const unitIdMatch = appTsx.match(/unitId:\s*'([^']+)'/);
const routeNameMatch = appTsx.match(/routeName:\s*'([^']+)'/);

const data = {
  projectName: 'RUTA PULSO NFC',
  tagline: 'Transporte Escolar y Laboral Nocturno Inteligente',
  socialFocus: 'Enfoque Social y Perspectiva de Género',
  unitId: unitIdMatch?.[1] ?? 'U-04',
  routeName: routeNameMatch?.[1] ?? 'Corredor Norte Seguro',
  stops: stopMatches.length >= 3
    ? stopMatches.slice(0, 3)
    : [
        'Parada 1 · Escuela / Residencial',
        'Parada 2 · Parque Industrial / Destino',
        'Parada 3 · Zona Aislada (No Autorizada)',
      ],
  scenarios: scenarioBlocks.length >= 4
    ? scenarioBlocks
    : [
        { id: 1, title: 'Abordaje Seguro NFC', subtitle: 'Parada 1 · Sofía M. + notificación' },
        { id: 2, title: 'Descenso + Tutor Verificado', subtitle: 'Parada 2 · Doble NFC escolar' },
        { id: 3, title: 'Parada No Autorizada', subtitle: 'Parada 3 · Alerta crítica geocerca' },
        { id: 4, title: 'Alerta Silenciosa (Género)', subtitle: 'Protocolo Violeta · Doble toque NFC' },
      ],
  passengers: passengerBlocks,
  sourceStats: {
    filesAnalyzed: [
      'src/App.tsx',
      'src/scene/DigitalTwinEngine.ts',
      'src/components/ControlDashboard.tsx',
      'src/components/PhoneMockup.tsx',
    ],
    totalLinesOfCode:
      appTsx.split(/\r?\n/).length +
      engineTs.split(/\r?\n/).length +
      dashboardTsx.split(/\r?\n/).length,
  },
};

const outDir = path.join(root, 'remotion/src');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'generatedAppData.ts');
fs.writeFileSync(
  outFile,
  `// Archivo generado automáticamente leyendo el código fuente de RUTA PULSO NFC\nexport const APP_DATA = ${JSON.stringify(data, null, 2)} as const;\n`,
  'utf8'
);

console.log(`Metadatos extraídos correctamente -> ${outFile}`);
console.log(`Paradas leídas (${data.stops.length}):`, data.stops);
console.log(`Escenarios leídos (${data.scenarios.length}):`, data.scenarios.map((s) => s.title));
