import * as THREE from 'three';

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function createStopSignTexture(opts: {
  code: string;
  title: string;
  subtitle: string;
  accent: string;
  isDanger?: boolean;
}): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 300;
  const ctx = canvas.getContext('2d')!;

  // Background panel
  ctx.fillStyle = '#0B1220';
  drawRoundedRect(ctx, 6, 6, 628, 288, 22);
  ctx.fill();

  // Accent border
  ctx.strokeStyle = opts.accent;
  ctx.lineWidth = 8;
  drawRoundedRect(ctx, 10, 10, 620, 280, 20);
  ctx.stroke();

  // Top header band
  ctx.fillStyle = opts.accent;
  drawRoundedRect(ctx, 22, 22, 596, 68, 12);
  ctx.fill();

  // Hazard diagonal stripes for Parada 3
  if (opts.isDanger) {
    ctx.save();
    drawRoundedRect(ctx, 22, 22, 596, 68, 12);
    ctx.clip();
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    for (let x = -40; x < 640; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 22);
      ctx.lineTo(x + 18, 22);
      ctx.lineTo(x - 10, 90);
      ctx.lineTo(x - 28, 90);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  // Header badge text
  ctx.fillStyle = opts.isDanger ? '#FFFFFF' : '#04120D';
  ctx.font = '800 34px Inter, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(opts.code, 320, 57);

  // Main Stop Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 38px Inter, system-ui, sans-serif';
  ctx.fillText(opts.title, 320, 152);

  // Subtitle pill
  ctx.fillStyle = opts.isDanger ? 'rgba(239,68,68,0.22)' : 'rgba(255,255,255,0.08)';
  drawRoundedRect(ctx, 48, 198, 544, 62, 14);
  ctx.fill();

  ctx.fillStyle = opts.accent;
  ctx.font = '700 26px Inter, system-ui, sans-serif';
  ctx.fillText(opts.subtitle, 320, 230);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

export function createBusDestinationTexture(text = 'RUTA PULSO · U-04'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 96;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#060A11';
  ctx.fillRect(0, 0, 512, 96);

  // Subtle LED grid dots
  ctx.fillStyle = 'rgba(16, 185, 129, 0.14)';
  for (let x = 8; x < 512; x += 12) {
    for (let y = 8; y < 96; y += 12) {
      ctx.fillRect(x, y, 4, 4);
    }
  }

  ctx.shadowColor = '#10B981';
  ctx.shadowBlur = 14;
  ctx.fillStyle = '#34D399';
  ctx.font = '800 42px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 49);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function createBusSideGraphicTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 192;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#131C2E';
  ctx.fillRect(0, 0, 1024, 192);

  // Sleek emerald pulse stripe
  ctx.strokeStyle = '#10B981';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(20, 126);
  ctx.lineTo(250, 126);
  ctx.lineTo(285, 126);
  ctx.lineTo(310, 62);
  ctx.lineTo(342, 162);
  ctx.lineTo(372, 92);
  ctx.lineTo(396, 126);
  ctx.lineTo(1004, 126);
  ctx.stroke();

  // Brand title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 46px Inter, system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('RUTA PULSO', 420, 66);

  // NFC pill
  ctx.fillStyle = '#10B981';
  drawRoundedRect(ctx, 735, 38, 120, 52, 10);
  ctx.fill();
  ctx.fillStyle = '#04120D';
  ctx.font = '800 32px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.fillText('NFC', 795, 65);

  // Unit badge
  ctx.fillStyle = '#94A3B8';
  ctx.font = '700 28px JetBrains Mono, monospace';
  ctx.textAlign = 'left';
  ctx.fillText('UNIDAD 04 · TRANSPORTE SEGURO', 420, 158);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

export function createNfcPadTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#09111F';
  ctx.fillRect(0, 0, 256, 256);

  // Outer frame
  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 8;
  drawRoundedRect(ctx, 14, 14, 228, 228, 30);
  ctx.stroke();

  // Contactless NFC arcs
  ctx.strokeStyle = '#E0F2FE';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  const cx = 104;
  const cy = 112;
  [26, 48, 70].forEach((radius) => {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, -Math.PI * 0.34, Math.PI * 0.34);
    ctx.stroke();
  });

  // Card icon
  ctx.fillStyle = '#38BDF8';
  drawRoundedRect(ctx, 52, 82, 46, 60, 8);
  ctx.fill();

  // Label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 38px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('NFC', 128, 206);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function createCharacterBadgeTexture(
  name: string,
  subtitle: string,
  accent: string
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 110;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, 360, 110);

  ctx.fillStyle = 'rgba(11, 15, 23, 0.88)';
  drawRoundedRect(ctx, 8, 8, 344, 94, 22);
  ctx.fill();

  ctx.strokeStyle = accent;
  ctx.lineWidth = 5;
  drawRoundedRect(ctx, 8, 8, 344, 94, 22);
  ctx.stroke();

  // Dot indicator
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(38, 42, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '700 28px Inter, system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, 62, 42);

  ctx.fillStyle = accent;
  ctx.font = '600 20px Inter, system-ui, sans-serif';
  ctx.fillText(subtitle, 62, 76);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function createBuildingWindowTexture(
  cols: number,
  rows: number,
  warmTone = false
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0E1525';
  ctx.fillRect(0, 0, 256, 512);

  const padX = 16;
  const padY = 18;
  const cellW = (256 - padX * 2) / cols;
  const cellH = (512 - padY * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Deterministic pseudo-random lit pattern
      const hash = Math.sin(r * 19.13 + c * 73.7 + (warmTone ? 5 : 1)) * 10000;
      const frac = hash - Math.floor(hash);
      const isLit = frac > 0.35;
      if (isLit) {
        ctx.fillStyle = warmTone
          ? frac > 0.72
            ? '#FDE68A'
            : '#F59E0B'
          : frac > 0.7
            ? '#BAE6FD'
            : '#38BDF8';
      } else {
        ctx.fillStyle = '#141E30';
      }
      ctx.fillRect(
        padX + c * cellW + 5,
        padY + r * cellH + 6,
        Math.max(8, cellW - 10),
        Math.max(10, cellH - 12)
      );
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}
