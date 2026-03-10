/* ================================================================
   OS REHAB — Design System
   Aesthetic: Luxury Medical Minimalism · Warm Organic · Refined
   ================================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600;700;900&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --cream:        #F5EFE6;
  --cream-deep:   #EDE3D5;
  --cream-card:   #FDFAF6;
  --teal:         #3D6B74;
  --teal-dark:    #274950;
  --teal-light:   #5A8A94;
  --teal-mist:    #EAF2F4;
  --sage:         #5C6E52;
  --sage-dark:    #3A4834;
  --sand:         #C4A882;
  --sand-light:   #E8D9C4;
  --obsidian:     #1A2124;
  --slate:        #4A5568;
  --slate-light:  #8896A5;
  --border:       #DDD5C8;
  --border-soft:  #EDE5D9;

  --r-sm:   12px;
  --r-md:   18px;
  --r-lg:   24px;
  --r-xl:   32px;
  --r-2xl:  40px;

  --shadow-sm:   0 2px 8px rgba(61,107,116,.08);
  --shadow-md:   0 6px 24px rgba(61,107,116,.12);
  --shadow-lg:   0 16px 48px rgba(61,107,116,.16);
  --shadow-card: 0 1px 3px rgba(26,33,36,.05), 0 8px 32px rgba(61,107,116,.08);

  --transition: all .28s cubic-bezier(.4,0,.2,1);
}

/* ── Reset ──────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Outfit', system-ui, sans-serif;
  background: var(--cream);
  color: var(--obsidian);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Scrollbar ──────────────────────────────────────────────── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--sand-light); border-radius: 99px; }

/* ── Textura de fondo ───────────────────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(ellipse 80% 50% at 20% 10%, rgba(61,107,116,.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 90%, rgba(196,168,130,.08) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* ── Navbar ─────────────────────────────────────────────────── */
.navbar {
  background: rgba(253,250,246,.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-soft);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand { display: flex; align-items: center; gap: 12px; }
.navbar-brand img { height: 36px; width: auto; }
.navbar-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: .9rem;
  color: var(--teal);
  opacity: .8;
  padding-left: 12px;
  border-left: 1px solid var(--border);
}
.navbar-nav { display: flex; align-items: center; gap: 4px; }
.nav-link {
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--slate);
  padding: 6px 14px;
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: var(--transition);
}
.nav-link:hover { background: var(--teal-mist); color: var(--teal); }
.nav-link.active { background: var(--teal); color: #fff; }
.nav-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  background: var(--teal-mist);
  border-radius: var(--r-lg);
}
.nav-user-name {
  font-size: .75rem;
  font-weight: 700;
  color: var(--teal-dark);
  text-transform: uppercase;
  letter-spacing: .05em;
}
.nav-user-role {
  font-size: .65rem;
  color: var(--teal-light);
  font-weight: 500;
}
.btn-logout {
  width: 36px; height: 36px;
  border-radius: var(--r-sm);
  border: 1px solid #fecaca;
  background: #fef2f2;
  color: #dc2626;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
  font-size: .8rem;
}
.btn-logout:hover { background: #dc2626; color: #fff; border-color: #dc2626; }

/* ── Cards ──────────────────────────────────────────────────── */
.card {
  background: var(--cream-card);
  border: 1px solid var(--border-soft);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}
.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--sand-light);
}
.card-glass {
  background: rgba(253,250,246,.7);
  backdrop-filter: blur(12px);
}

/* ── Appointment Cards ──────────────────────────────────────── */
.appt-card {
  background: var(--cream-card);
  border: 1px solid var(--border-soft);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-card);
  padding: 1.5rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.appt-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--teal);
  border-radius: 4px 0 0 4px;
  transition: var(--transition);
}
.appt-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.appt-card:hover::before { width: 6px; background: var(--sand); }
.appt-card.completada {
  opacity: .55;
  filter: grayscale(.7);
}
.appt-card.completada::before { background: #86efac; }

/* ── Buttons ────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: .8rem;
  letter-spacing: .05em;
  text-transform: uppercase;
  border: none;
  border-radius: var(--r-md);
  cursor: pointer;
  transition: var(--transition);
  padding: 0 20px;
  height: 44px;
  white-space: nowrap;
}
.btn:active { transform: scale(.97); }
.btn:disabled { opacity: .5; pointer-events: none; }

.btn-primary { background: var(--teal); color: #fff; }
.btn-primary:hover { background: var(--teal-dark); box-shadow: 0 4px 16px rgba(61,107,116,.3); }

.btn-sage { background: var(--sage); color: #fff; }
.btn-sage:hover { background: var(--sage-dark); }

.btn-success { background: #059669; color: #fff; }
.btn-success:hover { background: #047857; }

.btn-ghost { background: var(--teal-mist); color: var(--teal); border: 1px solid transparent; }
.btn-ghost:hover { border-color: var(--teal); }

.btn-danger-ghost { background: #fef2f2; color: #dc2626; }
.btn-danger-ghost:hover { background: #dc2626; color: #fff; }

.btn-outline { background: transparent; border: 1.5px solid var(--border); color: var(--slate); }
.btn-outline:hover { border-color: var(--teal); color: var(--teal); background: var(--teal-mist); }

.btn-lg { height: 54px; font-size: .85rem; padding: 0 28px; border-radius: var(--r-lg); }
.btn-sm { height: 34px; font-size: .72rem; padding: 0 14px; border-radius: var(--r-sm); }
.btn-icon { width: 38px; height: 38px; padding: 0; border-radius: var(--r-sm); }

/* ── Form inputs ────────────────────────────────────────────── */
.input-field {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: var(--cream);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  font-family: 'Outfit', sans-serif;
  font-size: .9rem;
  color: var(--obsidian);
  transition: var(--transition);
  outline: none;
}
.input-field::placeholder { color: var(--slate-light); font-weight: 400; }
.input-field:focus { border-color: var(--teal); background: #fff; box-shadow: 0 0 0 3px rgba(61,107,116,.08); }
.input-field.error { border-color: #dc2626; background: #fef2f2; }
.input-field.valid { border-color: #059669; }

textarea.input-field { height: auto; padding: 12px 16px; resize: none; line-height: 1.6; }
select.input-field { cursor: pointer; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238896A5' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

/* Date/time fix for mobile */
input[type="date"]::-webkit-datetime-edit,
input[type="time"]::-webkit-datetime-edit { color: var(--obsidian) !important; }
input[type="date"]::-webkit-calendar-picker-indicator { opacity: .5; }

.field-label {
  display: block;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--slate-light);
  margin-bottom: 6px;
  margin-left: 2px;
}
.field-error-msg {
  font-size: .72rem;
  font-weight: 600;
  color: #dc2626;
  margin-top: 4px;
  margin-left: 4px;
}

/* ── Badges ─────────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 99px;
}
.badge-teal    { background: var(--teal-mist); color: var(--teal); }
.badge-pending { background: #fff7ed; color: #c2410c; }
.badge-done    { background: #f0fdf4; color: #166534; }
.badge-sand    { background: #fdf4e7; color: #92400e; }

/* ── Stat Cards ─────────────────────────────────────────────── */
.stat-card {
  background: var(--cream-card);
  border: 1px solid var(--border-soft);
  border-radius: var(--r-lg);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.stat-card::after {
  content: '';
  position: absolute;
  bottom: -20px; right: -20px;
  width: 80px; height: 80px;
  border-radius: 50%;
  opacity: .06;
}
.stat-card.s-teal  { border-left: 3px solid var(--teal); }
.stat-card.s-teal::after  { background: var(--teal); width: 100px; height: 100px; }
.stat-card.s-orange { border-left: 3px solid #f97316; }
.stat-card.s-orange::after { background: #f97316; }
.stat-card.s-green  { border-left: 3px solid #16a34a; }
.stat-card.s-green::after  { background: #16a34a; }
.stat-card.s-sand  { border-left: 3px solid var(--sand); }
.stat-card.s-sand::after  { background: var(--sand); }

.stat-icon {
  width: 44px; height: 44px;
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.stat-value { font-size: 1.8rem; font-weight: 900; line-height: 1; color: var(--obsidian); }
.stat-label { font-size: .7rem; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: var(--slate-light); margin-top: 3px; }

/* ── Skeleton ───────────────────────────────────────────────── */
.skeleton {
  background: linear-gradient(90deg, var(--cream-deep) 25%, var(--cream) 50%, var(--cream-deep) 75%);
  background-size: 300% 100%;
  animation: shimmer 1.6s infinite;
  border-radius: var(--r-md);
}
@keyframes shimmer { from { background-position: 300% 0; } to { background-position: -300% 0; } }

/* ── Toast ──────────────────────────────────────────────────── */
#toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}
.toast {
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: var(--r-lg);
  font-size: .82rem;
  font-weight: 600;
  color: #fff;
  min-width: 280px;
  max-width: 380px;
  box-shadow: 0 8px 32px rgba(0,0,0,.2);
  animation: toastIn .4s cubic-bezier(.22,1,.36,1) both;
  border: 1px solid rgba(255,255,255,.15);
}
.toast-icon { font-size: 1rem; flex-shrink: 0; }
.toast.success { background: linear-gradient(135deg, #065f46, #059669); }
.toast.error   { background: linear-gradient(135deg, #991b1b, #dc2626); }
.toast.info    { background: linear-gradient(135deg, var(--teal-dark), var(--teal)); }
.toast.warning { background: linear-gradient(135deg, #92400e, #d97706); }
.toast.hide    { animation: toastOut .3s ease forwards; }
@keyframes toastIn  { from { opacity:0; transform:translateX(32px) scale(.95); } to { opacity:1; transform:none; } }
@keyframes toastOut { to   { opacity:0; transform:translateX(32px) scale(.95); } }

/* ── Offline banner ─────────────────────────────────────────── */
#offline-banner {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0;
  background: #7c2d12;
  color: #fff;
  text-align: center;
  padding: 8px 16px;
  font-size: .78rem;
  font-weight: 600;
  z-index: 10000;
  letter-spacing: .03em;
}

/* ── Modal ──────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(26,33,36,.5);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  z-index: 200;
  padding: 1rem;
  animation: fadeIn .2s ease;
}
.modal-overlay.hidden { display: none; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
.modal-box {
  background: var(--cream-card);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-lg);
  width: 100%; max-width: 420px;
  animation: slideUp .3s cubic-bezier(.22,1,.36,1);
}
@keyframes slideUp { from { opacity:0; transform:translateY(24px) scale(.97); } to { opacity:1; transform:none; } }

/* ── Login ──────────────────────────────────────────────────── */
.login-screen {
  position: fixed; inset: 0;
  background: var(--cream);
  display: flex; align-items: center; justify-content: center;
  z-index: 100;
  padding: 1rem;
}
.login-card {
  background: var(--cream-card);
  border-radius: var(--r-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-soft);
  width: 100%; max-width: 420px;
  padding: 2.5rem 2rem;
  animation: slideUp .5s cubic-bezier(.22,1,.36,1);
}
.login-logo { text-align: center; margin-bottom: 2rem; }
.login-logo img { height: 56px; width: auto; margin: 0 auto 12px; display: block; }
.login-logo h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: var(--teal);
  line-height: 1.3;
}
.login-logo p { font-size: .8rem; color: var(--slate-light); margin-top: 4px; }
.login-divider {
  display: flex; align-items: center; gap: 12px;
  margin: 1.5rem 0;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--slate-light);
}
.login-divider::before, .login-divider::after {
  content: ''; flex: 1; height: 1px; background: var(--border);
}

/* ── Search bar ─────────────────────────────────────────────── */
.search-bar {
  position: relative;
  width: 100%;
}
.search-bar input {
  padding-left: 48px;
  background: #fff;
  border-color: var(--border);
}
.search-bar .search-icon {
  position: absolute;
  left: 16px; top: 50%;
  transform: translateY(-50%);
  color: var(--slate-light);
  font-size: .9rem;
  pointer-events: none;
}

/* ── Success card ───────────────────────────────────────────── */
.success-panel {
  background: linear-gradient(135deg, var(--teal-dark) 0%, var(--teal) 100%);
  border-radius: var(--r-xl);
  padding: 2rem;
  text-align: center;
  color: #fff;
  animation: popIn .5s cubic-bezier(.22,1,.36,1);
  border: 1px solid rgba(255,255,255,.1);
}
@keyframes popIn { from { opacity:0; transform:scale(.9) translateY(16px); } to { opacity:1; transform:none; } }
.success-panel .id-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.25);
  border-radius: var(--r-lg);
  padding: 10px 20px;
  font-family: 'Outfit', monospace;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: .1em;
  margin: 1rem 0;
}

/* ── Page enter animation ───────────────────────────────────── */
.page-enter { animation: pageEnter .5s ease both; }
@keyframes pageEnter { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
.stagger-1 { animation-delay: .05s; }
.stagger-2 { animation-delay: .1s; }
.stagger-3 { animation-delay: .15s; }
.stagger-4 { animation-delay: .2s; }
.stagger-5 { animation-delay: .25s; }

/* ── Section title ──────────────────────────────────────────── */
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-style: italic;
  color: var(--teal-dark);
  line-height: 1.2;
}
.section-eyebrow {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--sand);
  margin-bottom: 4px;
}

/* ── Divider ────────────────────────────────────────────────── */
.divider { height: 1px; background: var(--border-soft); margin: 1rem 0; }

/* ── File input ─────────────────────────────────────────────── */
.file-drop {
  border: 2px dashed var(--border);
  border-radius: var(--r-lg);
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  background: var(--cream);
}
.file-drop:hover { border-color: var(--teal); background: var(--teal-mist); }
.file-drop input[type=file] { display: none; }

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; }
  .navbar-tagline { display: none; }
  .nav-link { padding: 6px 10px; font-size: .7rem; }
}
@media (max-width: 480px) {
  .navbar-nav .nav-link span { display: none; }
}
