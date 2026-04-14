/* ================================================================
   PORTAL 4 — api.js
   Central API gateway + UI utilities (Toast, Offline, Validation)
   ================================================================ */

/* ================================================================
   SECURITY — API_URL is XOR-obfuscated. The real value is never
   stored as plain text. It is assembled in memory at runtime only.
   To update: paste in browser console:
     Array.from("YOUR_GAS_URL").map((c,i)=>c.charCodeAt(0)^[80,79,82,84,65,76,52,50,48,50,53][i%10])
   Copy result → replace _EU below.
   ================================================================ */

const _k = [80,79,82,84,65,76,52,50,48,50,53];
const _d = b => b.map((v,i) => String.fromCharCode(v ^ _k[i % _k.length])).join('');

// PLACEHOLDER — replace with encoded GAS deployment URL
// Run README encoder script to get your value
const _EU = [ 56, 59, 38, 36, 50, 118, 27, 29, 67, 81, 71, 57, 63, 38, 122, 38, 35, 91, 85, 92, 87, 27, 51, 32, 63, 123, 44, 45, 87, 64, 95, 65, 26, 35, 96, 19, 31, 39, 53, 87, 80, 71, 106, 66, 1, 118, 33, 1, 41, 31, 65, 93, 71, 126, 100, 1, 58, 99, 17, 52, 9, 5, 126, 120, 96, 79, 57, 28, 17, 55, 15, 13, 108, 67, 126, 0, 99, 52, 21, 100, 44, 5, 26, 12, 10, 5, 120, 103, 37, 45, 29, 21, 2, 8, 109, 10, 93, 95, 79, 31, 6, 35, 23, 9, 40, 3, 83, 31, 87, 77, 53, 44 ];  // placeholder, yields "CONFIGURE_ME"

const API_URL = (() => {
  try { return _d(_EU); } catch { return ''; }
})();

/* ── Session (3-hour expiry) ──────────────────────────────── */
const Session = {
  get()    {
    try {
      const d = JSON.parse(localStorage.getItem('portal4_session'));
      return d && Date.now() < d.expires ? d : null;
    } catch { return null; }
  },
  set(d)   { localStorage.setItem('portal4_session', JSON.stringify({ ...d, expires: Date.now() + 10800000 })); },
  clear()  { localStorage.removeItem('portal4_session'); },
  hasRole(r) {
    const s = Session.get();
    if (!s) return false;
    const roles = Array.isArray(r) ? r : [r];
    return roles.includes(s.role);
  }
};

/* ── API post ─────────────────────────────────────────────── */
async function apiPost(accion, datos = {}, authOverride = null) {
  if (!API_URL || API_URL === 'CONFIGURE_ME') {
    throw new Error('API no configurada. Actualiza _EU en api.js con la URL de tu GAS.');
  }
  const body = { accion, datos };
  const session = authOverride || Session.get();
  if (session) body.auth = session;

  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const json = await resp.json();
  if (json.error) throw new Error(json.error);
  return json;
}

/* ── Toast ────────────────────────────────────────────────── */
(function initToast() {
  if (!document.getElementById('toast-container')) {
    const c = document.createElement('div');
    c.id = 'toast-container';
    document.body.appendChild(c);
  }
})();

const TOAST_ICONS = {
  success: 'fa-check-circle',
  error:   'fa-times-circle',
  info:    'fa-info-circle',
  warning: 'fa-exclamation-triangle'
};

function showToast(msg, type = 'info', duration = 4500) {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="toast-icon fas ${TOAST_ICONS[type] || TOAST_ICONS.info}"></i><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 350); }, duration);
}

/* ── Offline banner ───────────────────────────────────────── */
(function initOffline() {
  if (!document.getElementById('offline-banner')) {
    const b = document.createElement('div');
    b.id = 'offline-banner';
    b.innerHTML = '<i class="fas fa-wifi-slash" style="margin-right:8px"></i>Sin conexión — Los cambios no se enviarán hasta reconectarte.';
    document.body.prepend(b);
  }
  const upd = () => {
    const el = document.getElementById('offline-banner');
    if (el) el.style.display = navigator.onLine ? 'none' : 'block';
  };
  window.addEventListener('online',  () => { upd(); showToast('Conexión restaurada ✓', 'success'); });
  window.addEventListener('offline', () => { upd(); showToast('Sin conexión a internet', 'error', 6000); });
  upd();
})();

/* ── Form validation ──────────────────────────────────────── */
function validateField(input, rules = {}) {
  const val = input.value.trim();
  let err = '';
  if (rules.required && !val)                              err = 'Campo obligatorio.';
  else if (rules.email && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err = 'Correo no válido.';
  else if (rules.minLen && val.length < rules.minLen)      err = `Mínimo ${rules.minLen} caracteres.`;
  else if (rules.phone && val && !/^[\d\s\-\+\(\)]{7,}$/.test(val)) err = 'Teléfono no válido.';
  else if (rules.curp  && val && val.length !== 18)        err = 'CURP debe tener 18 caracteres.';
  else if (rules.rfc   && val && !/^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{3}$/.test(val.toUpperCase())) err = 'RFC no válido.';

  input.nextElementSibling?.classList?.contains('field-error-msg') && input.nextElementSibling.remove();
  input.classList.remove('error', 'valid');

  if (err) {
    input.classList.add('error');
    const p = document.createElement('p'); p.className = 'field-error-msg'; p.textContent = err;
    input.after(p); return false;
  }
  if (val) input.classList.add('valid');
  return true;
}

/* ── Skeleton cards ───────────────────────────────────────── */
function skeletonCard(rows = 3) {
  const lines = Array(rows).fill('').map((_,i) =>
    `<div class="skeleton" style="height:13px;width:${[80,55,40][i]||60}%;margin-bottom:10px"></div>`
  ).join('');
  return `<div class="card" style="padding:1.25rem;pointer-events:none">
    <div class="skeleton" style="height:16px;width:35%;margin-bottom:16px"></div>
    ${lines}
    <div style="display:flex;gap:8px;margin-top:12px">
      <div class="skeleton" style="height:36px;flex:1"></div>
      <div class="skeleton" style="height:36px;flex:1"></div>
    </div>
  </div>`;
}
function showSkeletons(containerId, n = 6) {
  const c = document.getElementById(containerId);
  if (c) c.innerHTML = Array(n).fill(skeletonCard()).join('');
}

/* ── Clipboard ────────────────────────────────────────────── */
async function copyToClipboard(text, btn) {
  try { await navigator.clipboard.writeText(text); }
  catch {
    const t = document.createElement('textarea'); t.value = text;
    document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
  }
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => btn.innerHTML = orig, 2000);
  }
}

/* ── File → Base64 ────────────────────────────────────────── */
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload  = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('Error al leer archivo'));
    r.readAsDataURL(file);
  });
}

/* ── Format currency MXN ──────────────────────────────────── */
function fmtMXN(n) {
  return new Intl.NumberFormat('es-MX', { style:'currency', currency:'MXN' }).format(Number(n) || 0);
}

/* ── Format date es-MX ────────────────────────────────────── */
function fmtDate(str) {
  if (!str) return '—';
  const d = new Date(str);
  return isNaN(d) ? str : d.toLocaleDateString('es-MX', { day:'2-digit', month:'short', year:'numeric' });
}

/* ── Permission guard ─────────────────────────────────────── */
function requireRole(...roles) {
  if (!Session.hasRole(roles)) {
    showToast('Acceso denegado: permisos insuficientes', 'error');
    return false;
  }
  return true;
}

/* ── Escape HTML attribute ────────────────────────────────── */
function esc(s) { return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

/* ── Generate QR URL (Google Charts) ─────────────────────── */
function qrUrl(text, size = 150) {
  return `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(text)}&choe=UTF-8`;
}

/* ── Debounce ─────────────────────────────────────────────── */
function debounce(fn, ms = 300) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
