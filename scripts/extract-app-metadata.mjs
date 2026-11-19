import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlPath = path.join(root, 'RUTA PULSO NFC · Gemelo Digital 3D.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract stops directly from STOPS object in RUTA PULSO NFC · Gemelo Digital 3D.html
const stopMatches = [
  ...html.matchAll(/P(\d):\{id:'P\d',n:\d,name:'([^']+)'/g),
].map((m) => `Parada ${m[1]} · ${m[2]}`);

// Extract scenario titles & subtitles from HTML buttons
const scenMatches = [
  ...html.matchAll(/data-s="(\d)"><span class="sn">\d<\/span><span class="tx"><b>([^<]+)<\/b><small>([^<]+)<\/small>/g),
].map((m) => ({
  id: Number(m[1]),
  title: m[2],
  subtitle: m[3],
}));

// Extract passengers & tutor from PEOPLE object in HTML
const paxMatches = [
  ...html.matchAll(/name:'([^']+)',short:'[^']+',role:'([^']+)',nfc:'([^']+)'/g),
].map((m) => ({
  name: m[1],
  role: m[2],
  tagId: m[3],
}));

const data = {
  projectName: 'RUTA PULSO NFC',
  tagline: 'Transporte Escolar y Laboral Nocturno Inteligente',
  socialFocus: 'Enfoque Social y Perspectiva de Género',
  unitId: 'U-04',
  routeName: 'Ruta R-12 · Mixta',
  stops:
    stopMatches.length >= 3
      ? stopMatches
      : [
          'Parada 1 · Escuela / Residencial',
          'Parada 2 · Parque Industrial / Destino',
          'Parada 3 · Zona Aislada',
        ],
  scenarios:
    scenMatches.length >= 4
      ? scenMatches
      : [
          { id: 1, title: 'Abordaje Seguro con NFC', subtitle: 'Parada 1 · validación y aviso a la familia' },
          { id: 2, title: 'Descenso Seguro + Tutor', subtitle: 'Parada 2 · doble NFC: alumna + tutora' },
          { id: 3, title: 'Parada No Autorizada / Desvío', subtitle: 'Parada 3 · alerta crítica a chofer y familia' },
          { id: 4, title: 'Alerta Silenciosa · Violeta', subtitle: 'Turno nocturno · sin alerta en cabina' },
        ],
  passengers: paxMatches,
  sourceStats: {
    filesAnalyzed: ['RUTA PULSO NFC · Gemelo Digital 3D.html'],
    totalLinesOfCode: html.split(/\r?\n/).length,
  },
};

const outDir = path.join(root, 'remotion/src');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'generatedAppData.ts');
fs.writeFileSync(
  outFile,
  `// Archivo generado automáticamente leyendo "RUTA PULSO NFC · Gemelo Digital 3D.html"\nexport const APP_DATA = ${JSON.stringify(data, null, 2)} as const;\n`,
  'utf8'
);

console.log(`Metadatos extraídos correctamente de "${path.basename(htmlPath)}" -> ${outFile}`);
console.log(`Paradas (${data.stops.length}):`, data.stops);
console.log(`Escenarios (${data.scenarios.length}):`, data.scenarios.map((s) => s.title));
console.log(`Personas (${data.passengers.length}):`, data.passengers.map((p) => `${p.name} (${p.tagId})`));
