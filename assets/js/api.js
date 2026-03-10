/* ================================================================
   OS REHAB — api.js
   Central API gateway + UI utilities (Toast, Offline, Validation)
   ================================================================ */

/* ================================================================
   SECURITY — API_URL and DRIVE_FOLDER_ID are XOR-obfuscated.
   Neither value exists as a readable string in this file.

   HOW TO UPDATE (e.g. after redeploying your GAS script):
   ─────────────────────────────────────────────────────────
   1. Open Chrome / Edge / Firefox on ANY webpage.
   2. Press F12 → click the Console tab.
   3. Paste the line below (with your new value) and press Enter:

      For a new GAS URL:
        Array.from("PASTE_YOUR_NEW_GAS_URL_HERE").map((c,i)=>c.charCodeAt(0)^[79,83,82,69,72,65,66,50,48,50,53][i%11])

      For a new Drive Folder ID:
        Array.from("PASTE_YOUR_NEW_FOLDER_ID_HERE").map((c,i)=>c.charCodeAt(0)^[79,83,82,69,72,65,66,50,48,50,53][i%11])

   4. Copy the printed array and replace _EU or _EF below.
   ================================================================ */
const _k = [79,83,82,69,72,65,66,50,48,50,53];
const _d = b => b.map((v,i) => String.fromCharCode(v ^ _k[i % _k.length])).join("");

// Encoded GAS endpoint
const [39,39,38,53,59,123,109,29,68,91,91,54,38,32,41,102,34,45,95,31,0,7,46,54,42,48,50,120] = [39,39,38,53,59,123,109,29,67,81,71,38,35,38,107,47,46,45,85,92,87,27,44,60,63,106,37,32,33,64,95,65,26,60,124,19,14,46,56,33,80,72,115,98,57,49,61,112,5,121,22,126,88,10,87,35,18,98,20,124,114,55,120,0,96,77,54,21,29,118,56,48,4,119,74,89,122,39,60,100,31,122,6,13,31,6,11,68,44,37,48,34,26,10,1,101,122,66,0,127,50,30,61,11,113,19,84,74,69,26,42,43,55,38];

// Encoded Drive Folder ID
const [126,97,27,49,122,5,12,98,97,100,66,29,26,102,31,12,39,26,85,86,68,68,2,63,17,34,41,0,49,88,91,6,24] = [126,62,27,112,101,113,45,11,3,106,112,122,58,99,26,63,121,4,94,64,84,76,38,42,58,36,10,49,9,70,81,116,81];

const API_URL         = _d([39,39,38,53,59,123,109,29,68,91,91,54,38,32,41,102,34,45,95,31,0,7,46,54,42,48,50,120]);
const DRIVE_FOLDER_ID = _d([126,97,27,49,122,5,12,98,97,100,66,29,26,102,31,12,39,26,85,86,68,68,2,63,17,34,41,0,49,88,91,6,24]);

/* ── Session ──────────────────────────────────────────────── */
const Session = {
  get()   { try { const d = JSON.parse(localStorage.getItem('rehab_session')); return d && Date.now() < d.expires ? d : null; } catch { return null; } },
  set(d)  { localStorage.setItem('rehab_session', JSON.stringify({ ...d, expires: Date.now() + 10800000 })); },
  clear() { localStorage.removeItem('rehab_session'); }
};

/* ── API post ─────────────────────────────────────────────── */
async function apiPost(accion, datos = {}, auth = null) {
  const body = { accion, datos };
  if (auth)           body.auth = auth;
  else if (Session.get()) body.auth = Session.get();
  const resp = await fetch(API_URL, { method: 'POST', body: JSON.stringify(body) });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const json = await resp.json();
  if (json.error) throw new Error(json.error);
  return json;
}

/* ── Toast ────────────────────────────────────────────────── */
(function() {
  if (!document.getElementById('toast-container')) {
    const c = document.createElement('div'); c.id = 'toast-container';
    document.body.appendChild(c);
  }
})();

const TOAST_ICONS = { success:'fa-check-circle', error:'fa-times-circle', info:'fa-info-circle', warning:'fa-exclamation-triangle' };

function showToast(msg, type = 'info', duration = 4500) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="toast-icon fas ${TOAST_ICONS[type]||TOAST_ICONS.info}"></i><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 350); }, duration);
}

/* ── Offline ──────────────────────────────────────────────── */
(function() {
  if (!document.getElementById('offline-banner')) {
    const b = document.createElement('div'); b.id = 'offline-banner';
    b.innerHTML = '<i class="fas fa-wifi-slash" style="margin-right:8px"></i>Sin conexión — Los cambios no se enviarán hasta reconectarte.';
    document.body.prepend(b);
  }
  const upd = () => { document.getElementById('offline-banner').style.display = navigator.onLine ? 'none' : 'block'; };
  window.addEventListener('online',  () => { upd(); showToast('Conexión restaurada ✓', 'success'); });
  window.addEventListener('offline', () => { upd(); showToast('Sin conexión a internet', 'error', 6000); });
  upd();
})();

/* ── Form validation ──────────────────────────────────────── */
function validateField(input, rules = {}) {
  const val = input.value.trim();
  let err = '';
  if (rules.required && !val)                      err = 'Campo obligatorio.';
  else if (rules.email && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err = 'Correo no válido.';
  else if (rules.minLen && val.length < rules.minLen) err = `Mínimo ${rules.minLen} caracteres.`;

  // Remove existing error
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

/* ── Skeleton ─────────────────────────────────────────────── */
function skeletonCard() {
  return `<div class="appt-card" style="pointer-events:none">
    <div class="skeleton" style="height:14px;width:40%;margin-bottom:12px"></div>
    <div class="skeleton" style="height:20px;width:65%;margin-bottom:8px"></div>
    <div class="skeleton" style="height:12px;width:45%;margin-bottom:20px"></div>
    <div class="skeleton" style="height:52px;width:100%;margin-bottom:16px;border-radius:12px"></div>
    <div style="display:flex;gap:8px">
      <div class="skeleton" style="height:38px;flex:1"></div>
      <div class="skeleton" style="height:38px;flex:1"></div>
      <div class="skeleton" style="height:38px;width:38px;flex-shrink:0"></div>
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
  catch { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => btn.innerHTML = orig, 2000);
  }
}

/* ── File to Base64 ───────────────────────────────────────── */
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload  = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(new Error('Error al leer archivo'));
    r.readAsDataURL(file);
  });
}

/* ── Escape HTML attr ─────────────────────────────────────── */
function esc(s) { return String(s ?? '').replace(/'/g, "\\'").replace(/"/g, '&quot;'); }
