/* ============================================================
   DATOS
   ============================================================ */

const MODELOS = {
  Honda:    ['CB125','CB150','CB190','CG125','Fan 125','Titan 150','XR150','Wave 110','PCX 150'],
  Yamaha:   ['FZ15','FZ16','FZ25','R15','MT-03','YBR125','XTZ125','XTZ250','NMAX 155'],
  Suzuki:   ['GN125','EN125','DR125','GSX-R150','GSX-S150','Gixxer 150','Address 110'],
  KTM:      ['Duke 200','Duke 390','RC 200','RC 390','Adventure 390'],
  Kawasaki: ['Z400','Ninja 400','Z650','Ninja 650','Versys 300','Z125'],
  Bajaj:    ['Pulsar 135','Pulsar 150','Pulsar 200 NS','Pulsar RS 200','Discover 125','Rouser 135'],
};

/* ── Imágenes por categoría (Wikimedia Commons / URLs estables) ── */
const IMG = {
  frenos:       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Brake_disc_and_pad.jpg/640px-Brake_disc_and_pad.jpg',
  cadena:       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Motorcycle_chain_closeup.jpg/640px-Motorcycle_chain_closeup.jpg',
  bujia:        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Spark_plug_NGK.jpg/640px-Spark_plug_NGK.jpg',
  filtroAire:   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Motor_air_filter_element.jpg/640px-Motor_air_filter_element.jpg',
  embrague:     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Clutch_disc.jpg/640px-Clutch_disc.jpg',
  amortiguador: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Motorcycle_rear_suspension.jpg/640px-Motorcycle_rear_suspension.jpg',
  faro:         'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Motorcycle_headlight.jpg/640px-Motorcycle_headlight.jpg',
  llanta:       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorcycle_tyre.jpg/640px-Motorcycle_tyre.jpg',
  piston:       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Four_stroke_engine_diagram.jpg/640px-Four_stroke_engine_diagram.jpg',
  cable:        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bowden_cable.jpg/640px-Bowden_cable.jpg',
  bateria:      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Motorcycle_battery_YTX.jpg/640px-Motorcycle_battery_YTX.jpg',
  filtroAceite: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Oil_filter_cutaway.jpg/640px-Oil_filter_cutaway.jpg',
  carburacion:  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Carburetor.jpg/640px-Carburetor.jpg',
  discoFreno:   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Brake_rotor.jpg/640px-Brake_rotor.jpg',
  escape:       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Motorcycle_exhaust_pipe.jpg/640px-Motorcycle_exhaust_pipe.jpg',
  guardabarro:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Motorcycle_fender.jpg/640px-Motorcycle_fender.jpg',
  motor:        'https://tse3.mm.bing.net/th/id/OIP.96j-MVnCKOwXtFKelY8aMAHaDz?pid=Api&P=0&h=180',
};

/* Fallback SVG inline por categoría — se usa si la URL de Wikimedia falla */
function imgFallback(el, cat) {
  const colors = {
    'Frenos':'#c0392b','Transmisión':'#2c3e50','Motor':'#e67e22',
    'Filtros':'#27ae60','Suspensión':'#8e44ad','Eléctrico':'#f39c12',
    'Carrocería':'#2980b9','Escape':'#7f8c8d'
  };
  const bg = colors[cat] || '#555';
  el.style.display='none';
  const p = el.closest('.prod-img') || el.closest('.cat-card');
  if (p && !p.querySelector('.img-svg-fallback')) {
    p.insertAdjacentHTML('afterbegin',
      `<div class="img-svg-fallback" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${bg};position:absolute;top:0;left:0;border-radius:6px 6px 0 0;">
        <span style="color:#fff;font-size:13px;font-weight:600;text-align:center;padding:8px;">${cat}</span>
      </div>`);
    p.style.position='relative';
  }
}

const PRODUCTOS = [
  // ── HONDA ─────────────────────────────────────────────────
  { id:1,  nombre:'Pastillas de freno delanteras',  marca:'Honda',    precio:850,   cat:'Frenos',      compat:'CB125, CB150, CB190',      img:'https://tse2.mm.bing.net/th/id/OIP.V971t8YwEnrqBqZCckqzJwHaHa?pid=Api&P=0&h=180' },
  { id:2,  nombre:'Cadena de transmisión 428H',     marca:'Honda',    precio:1200,  cat:'Transmisión', compat:'CG125, Fan 125, Titan 150', img:'https://tse3.mm.bing.net/th/id/OIP.X4k7A5cADVgFAgcgwQIuvAHaHa?pid=Api&P=0&h=180' },
  { id:3,  nombre:'Bujía NGK CR7HSA',               marca:'Honda',    precio:290,   cat:'Motor',       compat:'Universal 125cc–150cc',    img:'https://sp.yimg.com/ib/th?id=OPEC.I0GM4vVu2OjvNA474C474&o=5&pid=21.1&w=160&h=105' },
  { id:4,  nombre:'Filtro de aire CB125',           marca:'Honda',    precio:380,   cat:'Filtros',     compat:'CB125, CB150',             img:'https://tse3.mm.bing.net/th/id/OIP.y4khZESRYbrxOGInmI0MtgHaHa?pid=Api&P=0&h=180' },
  { id:5,  nombre:'Kit de embrague completo',       marca:'Honda',    precio:2100,  cat:'Transmisión', compat:'CG150, Titan 150',         img:'https://tse4.mm.bing.net/th/id/OIP.iCtKaXW8Whe5BcpeEmGCBAHaHa?pid=Api&P=0&h=180' },
  { id:6,  nombre:'Amortiguador trasero XR150',     marca:'Honda',    precio:2600,  cat:'Suspensión',  compat:'XR150, CB190',             img:'https://tse3.mm.bing.net/th/id/OIP.ovmzA346EcrshczdHREhdgAAAA?pid=Api&P=0&h=180' },
  { id:7,  nombre:'Faro delantero LED CB',          marca:'Honda',    precio:1850,  cat:'Eléctrico',   compat:'CB125, CB150, CG125',      img:'https://tse3.mm.bing.net/th/id/OIP.HG1hn94hiOGo2JTROAPIyAHaGr?pid=Api&P=0&h=180' },
  { id:8,  nombre:'Llanta trasera 3.00-17',         marca:'Honda',    precio:2200,  cat:'Carrocería',  compat:'CG125, Fan 125, Titan',    img:'https://tse2.mm.bing.net/th/id/OIP.HGA2A2w6hHwWnDcbMf_WPwHaHa?pid=Api&P=0&h=180' },
  { id:9,  nombre:'Kit de pistón 52.4mm CG125',     marca:'Honda',    precio:1750,  cat:'Motor',       compat:'CG125, Dream 125',         img:'https://tse1.mm.bing.net/th/id/OIP.TEZa2Ge-mePm3FYA8RH15wHaHa?pid=Api&P=0&h=180' },
  { id:10, nombre:'Cable de embrague CB150',        marca:'Honda',    precio:320,   cat:'Transmisión', compat:'CB150, CB190',             img:'https://tse1.mm.bing.net/th/id/OIP.wiYjVFzd9ZLIrtEv_CRzYAHaHa?pid=Api&P=0&h=180' },
  { id:11, nombre:'Batería YTX5L-BS',               marca:'Honda',    precio:1450,  cat:'Eléctrico',   compat:'CB125, Wave 110, PCX',     img:'https://sp.yimg.com/ib/th?id=OPEC.vvlXxctgEXIYAA474C474&o=5&pid=21.1&w=160&h=105' },
  { id:12, nombre:'Filtro de aceite HF111',         marca:'Honda',    precio:280,   cat:'Filtros',     compat:'CB125, CBR150',            img:'https://tse4.mm.bing.net/th/id/OIP.squislqlPzM1IQEhtJk7_QHaHa?pid=Api&P=0&h=180' },

  // ── YAMAHA ────────────────────────────────────────────────
  { id:13, nombre:'Filtro de aceite YZF-R15',       marca:'Yamaha',   precio:480,   cat:'Filtros',     compat:'R15, FZ15, FZ25',          img:'https://tse4.mm.bing.net/th/id/OIP.tcRtQbcE4f87S38MgVnP1gHaHa?pid=Api&P=0&h=180' },
  { id:14, nombre:'Kit de carburación YBR125',      marca:'Yamaha',   precio:3500,  cat:'Motor',       compat:'YBR125, XTZ125',           img:'https://tse3.mm.bing.net/th/id/OIP.rrUSzlZzb76KTmGasFzynwHaHa?pid=Api&P=0&h=180' },
  { id:15, nombre:'Pastillas de freno traseras FZ', marca:'Yamaha',   precio:720,   cat:'Frenos',      compat:'FZ25, FZ16, MT-03',        img:'https://tse3.mm.bing.net/th/id/OIP.B86H7q9F7O-V5Ry_YdYxDQHaHa?pid=Api&P=0&h=180' },
  { id:16, nombre:'Kit de suspensión XTZ125',       marca:'Yamaha',   precio:4200,  cat:'Suspensión',  compat:'XTZ125, XTZ250',           img:'https://tse4.mm.bing.net/th/id/OIP.8gqbK-4pxyRpiIH_kz-IaQHaHa?pid=Api&P=0&h=180' },
  { id:17, nombre:'Cable de acelerador FZ15',       marca:'Yamaha',   precio:420,   cat:'Motor',       compat:'FZ15, FZ16',               img:'https://tse3.mm.bing.net/th/id/OIP.ioqYmZOVZuVtTU_FkUgp1wHaHa?pid=Api&P=0&h=180' },
  { id:18, nombre:'Batería YTX7A-BS',               marca:'Yamaha',   precio:1600,  cat:'Eléctrico',   compat:'R15, MT-03, FZ25',         img:'https://sp.yimg.com/ib/th?id=OPEC.ZWMbrnbkLzfGJQ474C474&o=5&pid=21.1&w=160&h=105' },
  { id:19, nombre:'Disco de freno delantero FZ',    marca:'Yamaha',   precio:2200,  cat:'Frenos',      compat:'FZ25, R15 v3',             img:'https://tse3.mm.bing.net/th/id/OIP.d41e1RX3aGe7pFUI39G2bgHaHa?pid=Api&P=0&h=180' },
  { id:20, nombre:'Cadena DID 428VX',               marca:'Yamaha',   precio:1400,  cat:'Transmisión', compat:'YBR125, XTZ125, FZ15',     img:'https://tse2.mm.bing.net/th/id/OIP.z6eumMoMLG3WtKPn3vZu8QHaHa?pid=Api&P=0&h=180' },

  // ── SUZUKI ────────────────────────────────────────────────
  { id:21, nombre:'Amortiguador trasero GN125',     marca:'Suzuki',   precio:2800,  cat:'Suspensión',  compat:'GN125, EN125',             img:'https://tse3.mm.bing.net/th/id/OIP.Ac4TegRan-LzITTuy3PPsAHaHK?pid=Api&P=0&h=180' },
  { id:22, nombre:'Faro LED GSX-R150',              marca:'Suzuki',   precio:1650,  cat:'Eléctrico',   compat:'GSX-R150, GSX-S150',       img:'https://tse4.mm.bing.net/th/id/OIP.IpGQbiSDp8Il1oa2RBHuZgHaHa?pid=Api&P=0&h=180' },
  { id:23, nombre:'Kit de pistón 57mm GN125',       marca:'Suzuki',   precio:3200,  cat:'Motor',       compat:'GN125, DR125',             img:'https://tse4.mm.bing.net/th/id/OIP.7Xu5PwfrshMbWl3NamL1cQHaHa?pid=Api&P=0&h=180' },
  { id:24, nombre:'Disco de freno delantero GSX',   marca:'Suzuki',   precio:1900,  cat:'Frenos',      compat:'GSX-R150, GSX-S150',       img:'https://tse2.mm.bing.net/th/id/OIP.rb07MtMoiNYtFs5Jqy_lmAHaHa?pid=Api&P=0&h=180' },
  { id:25, nombre:'Silencioso escape deportivo',    marca:'Suzuki',   precio:4500,  cat:'Escape',      compat:'GSX-R150',                 img:'https://tse3.mm.bing.net/th/id/OIP.jwbL8h89yJhpptHvcTyBpwHaHa?pid=Api&P=0&h=180' },
  { id:26, nombre:'Filtro de aire GN125',           marca:'Suzuki',   precio:350,   cat:'Filtros',     compat:'GN125, EN125',             img:'https://tse1.mm.bing.net/th/id/OIP.DuEjDAV4m3sWisq5NTXsLwHaE7?pid=Api&P=0&h=180' },

  // ── KTM ───────────────────────────────────────────────────
  { id:27, nombre:'Llanta delantera 110/70-17',     marca:'KTM',      precio:2900,  cat:'Carrocería',  compat:'Duke 200, Duke 390',       img:'https://tse2.mm.bing.net/th/id/OIP.9tjkidu8wfe3CkVqWG3FUwHaHa?pid=Api&P=0&h=180' },
  { id:28, nombre:'Kit de frenos ABS Duke 390',     marca:'KTM',      precio:5800,  cat:'Frenos',      compat:'Duke 390, RC 390',         img:'https://images.openai.com/static-rsc-4/u8HEHhnuaYa1_uiNnLBILuQxCHzhR5x6WZ10PIgsAl0EO5x9r8vGLxFTxx9gciN9_7FrgGje87_JHnqkBaKCzqPdKgx7ChoYpaeeAfqtCEIv8uDzkiYSGcytp_k5C9x5Wcq2lZT8lRv1mnHagGh2F-aCsaDvGYJL3O5_3KrY1Qs?purpose=inline' },
  { id:29, nombre:'Filtro de aire Duke 200',        marca:'KTM',      precio:650,   cat:'Filtros',     compat:'Duke 200',                 img:'https://tse2.mm.bing.net/th/id/OIP.7SoJXJHiGwo1-nqJor5HvAHaHa?pid=Api&P=0&h=180' },
  { id:30, nombre:'Guardabarro delantero Duke',     marca:'KTM',      precio:2100,  cat:'Carrocería',  compat:'Duke 200, Duke 390',       img:'https://tse4.mm.bing.net/th/id/OIP.yB7-KlfsZhxgFvbmOwAjPQAAAA?pid=Api&P=0&h=180' },
  { id:31, nombre:'Escape WP Duke 390',             marca:'KTM',      precio:7200,  cat:'Escape',      compat:'Duke 390, RC 390',         img:'https://tse4.mm.bing.net/th/id/OIP.4d9jcEyLy1SVzefExK6c9QHaHa?pid=Api&P=0&h=180' },

  // ── KAWASAKI ──────────────────────────────────────────────
  { id:32, nombre:'Kit de cadena y piñones Z400',   marca:'Kawasaki', precio:2700,  cat:'Transmisión', compat:'Z400, Ninja 400',          img:'https://tse4.mm.bing.net/th/id/OIP.hrFswMt1XEMwv8RSuuX6TAHaHa?pid=Api&P=0&h=180' },
  { id:33, nombre:'Pastillas Brembo Ninja 650',     marca:'Kawasaki', precio:2100,  cat:'Frenos',      compat:'Ninja 650, Z650',          img:'https://tse3.mm.bing.net/th/id/OIP.F7fUSB5Aw99m75dmev9xKwHaFy?pid=Api&P=0&h=180' },
  { id:34, nombre:'Batería YTX9-BS Ninja 400',      marca:'Kawasaki', precio:1800,  cat:'Eléctrico',   compat:'Ninja 400, Z400',          img:'https://tse2.mm.bing.net/th/id/OIP.aUhnq5K5vXNXue7-wNZkBAHaHa?pid=Api&P=0&h=180g' },
  { id:35, nombre:'Filtro de aceite Kawasaki',      marca:'Kawasaki', precio:520,   cat:'Filtros',     compat:'Z650, Ninja 650, Versys',  img:'https://tse3.mm.bing.net/th/id/OIP.7X8cbcAXv_GdWpUWBU8xxQHaGE?pid=Api&P=0&h=180' },
  { id:36, nombre:'Amortiguador trasero Versys',    marca:'Kawasaki', precio:5400,  cat:'Suspensión',  compat:'Versys 300, Ninja 400',    img:'https://tse1.mm.bing.net/th/id/OIP.NlJzV2y4bpTXjHXNDiL0UQAAAA?pid=Api&P=0&h=180' },

  // ── BAJAJ ─────────────────────────────────────────────────
  { id:37, nombre:'Kit de pistón Pulsar 150',       marca:'Bajaj',    precio:1900,  cat:'Motor',       compat:'Pulsar 150, Discover 150', img:'https://tse1.mm.bing.net/th/id/OIP.ZYzq4tbcsbeqn3KgGJnyEgHaHZ?pid=Api&P=0&h=180' },
  { id:38, nombre:'Pastillas de freno Pulsar 200',  marca:'Bajaj',    precio:780,   cat:'Frenos',      compat:'Pulsar 200 NS, RS 200',    img:'https://tse2.mm.bing.net/th/id/OIP.cGvRlpbW5n9fnAJTGMG1cQHaHf?pid=Api&P=0&h=180' },
  { id:39, nombre:'Cadena de transmisión Rouser',   marca:'Bajaj',    precio:1100,  cat:'Transmisión', compat:'Rouser 135, Pulsar 135',   img:'https://tse4.mm.bing.net/th/id/OIP.gSFws6VhloQ3ntaM0ZQb6wAAAA?pid=Api&P=0&h=180' },
  { id:40, nombre:'Filtro de aire Pulsar NS200',    marca:'Bajaj',    precio:420,   cat:'Filtros',     compat:'Pulsar 200 NS, RS 200',    img:'https://tse3.mm.bing.net/th/id/OIP.FxuFpxRnGE4YLybDG02HCwHaGR?pid=Api&P=0&h=180' },
];

/* ============================================================
   ESTADO
   ============================================================ */
let carrito = [];
let metodoActivo = 'tarjeta';
let listaActual = [...PRODUCTOS];

/* ============================================================
   RENDER PRODUCTOS
   ============================================================ */
function renderProductos(lista) {
  const grid = document.getElementById('productos-grid');
  const noRes = document.getElementById('no-results');
  const label = document.getElementById('results-label');

  listaActual = lista;
  label.textContent = lista.length + ' producto' + (lista.length !== 1 ? 's' : '');

  if (lista.length === 0) {
    grid.innerHTML = '';
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  grid.innerHTML = lista.map(p => `
    <div class="prod-card" onclick="abrirModal(${p.id})">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy" onerror="imgFallback(this,'${p.cat}')">
        <span class="prod-cat">${p.cat}</span>
      </div>
      <div class="prod-info">
        <div class="prod-marca">${p.marca}</div>
        <div class="prod-nombre">${p.nombre}</div>
        <div class="prod-compat">Compatible: ${p.compat}</div>
        <div class="prod-footer">
          <span class="prod-precio">RD$${p.precio.toLocaleString()}</span>
          <button class="btn-agregar" onclick="event.stopPropagation(); agregarAlCarrito(${p.id})">+ Agregar</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   FILTROS
   ============================================================ */
let marcaActiva = 'todas';

function filtrarMarca(marca, btn) {
  marcaActiva = marca;
  // Actualizar botones activos
  document.querySelectorAll('.fmarca').forEach(b => b.classList.remove('activo'));
  if (btn) btn.classList.add('activo');

  aplicarFiltros();

  document.getElementById('catalogo').scrollIntoView({ behavior:'smooth' });
}

function filtrarCategoria(cat) {
  document.getElementById('sel-cat').value = cat;
  marcaActiva = 'todas';
  document.querySelectorAll('.fmarca').forEach(b => {
    b.classList.remove('activo');
    if (b.textContent === 'Todas') b.classList.add('activo');
  });
  aplicarFiltros();
  document.getElementById('catalogo').scrollIntoView({ behavior:'smooth' });
}

function aplicarFiltros() {
  let lista = [...PRODUCTOS];
  if (marcaActiva !== 'todas') lista = lista.filter(p => p.marca === marcaActiva);
  const cat = document.getElementById('sel-cat') ? document.getElementById('sel-cat').value : '';
  if (cat) lista = lista.filter(p => p.cat === cat);
  renderProductos(lista);
}

function buscarAvanzado() {
  const marca = document.getElementById('sel-marca').value;
  const cat   = document.getElementById('sel-cat').value;
  let lista = [...PRODUCTOS];
  if (marca) lista = lista.filter(p => p.marca === marca);
  if (cat)   lista = lista.filter(p => p.cat === cat);
  marcaActiva = marca || 'todas';
  document.querySelectorAll('.fmarca').forEach(b => {
    b.classList.remove('activo');
    if ((marcaActiva === 'todas' && b.textContent === 'Todas') || b.textContent === marcaActiva) b.classList.add('activo');
  });
  renderProductos(lista);
  document.getElementById('catalogo').scrollIntoView({ behavior:'smooth' });
}

function buscarTexto(val) {
  const q = val.toLowerCase().trim();
  if (!q) { renderProductos(PRODUCTOS); return; }
  const lista = PRODUCTOS.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.marca.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    p.compat.toLowerCase().includes(q)
  );
  renderProductos(lista);
  document.getElementById('catalogo').scrollIntoView({ behavior:'smooth' });
}

function sortProductos() {
  const v = document.getElementById('sort-sel').value;
  let lista = [...listaActual];
  if (v === 'asc')  lista.sort((a,b) => a.precio - b.precio);
  if (v === 'desc') lista.sort((a,b) => b.precio - a.precio);
  if (v === 'az')   lista.sort((a,b) => a.nombre.localeCompare(b.nombre));
  renderProductos(lista);
}

/* ============================================================
   MODELOS DINÁMICOS
   ============================================================ */
function actualizarModelos() {
  const marca = document.getElementById('sel-marca').value;
  const sel   = document.getElementById('sel-modelo');
  if (marca && MODELOS[marca]) {
    sel.innerHTML = '<option value="">Todos los modelos</option>' +
      MODELOS[marca].map(m => `<option>${m}</option>`).join('');
  } else {
    sel.innerHTML = '<option value="">Elige marca primero</option>';
  }
}

/* ============================================================
   MODAL DETALLE PRODUCTO
   ============================================================ */
function abrirModal(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-img"><img src="${p.img}" alt="${p.nombre}" onerror="this.src='https://cdn.pixabay.com/photo/2018/05/08/15/29/engine-3382957_640.jpg'"></div>
    <div class="modal-details">
      <div class="prod-marca">${p.marca}</div>
      <h2>${p.nombre}</h2>
      <div class="modal-cat">${p.cat}</div>
      <div class="modal-compat">Compatible con: <strong>${p.compat}</strong></div>
      <div class="modal-precio">RD$${p.precio.toLocaleString()}</div>
      <button class="cta-red full" onclick="agregarAlCarrito(${p.id}); cerrarModal()">Agregar al carrito</button>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-producto').classList.add('open');
}

function cerrarModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('modal-producto').classList.remove('open');
}

/* ============================================================
   CARRITO
   ============================================================ */
function agregarAlCarrito(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  const ya = carrito.find(x => x.id === id);
  if (ya) { ya.qty++; } else { carrito.push({ ...p, qty: 1 }); }
  actualizarCarritoVista();
  mostrarToast(p.nombre + ' agregado al carrito');
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(x => x.id !== id);
  actualizarCarritoVista();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) carrito = carrito.filter(x => x.id !== id);
  actualizarCarritoVista();
}

function actualizarCarritoVista() {
  const body  = document.getElementById('cp-body');
  const badge = document.getElementById('badge-count');
  const subtEl = document.getElementById('c-subtotal');
  const totEl  = document.getElementById('c-total');

  const totalQty = carrito.reduce((s, i) => s + i.qty, 0);
  const subtotal  = carrito.reduce((s, i) => s + i.precio * i.qty, 0);

  badge.textContent = totalQty;
  badge.classList.toggle('hidden', totalQty === 0);
  subtEl.textContent = 'RD$' + subtotal.toLocaleString();
  totEl.textContent  = 'RD$' + subtotal.toLocaleString();

  if (carrito.length === 0) {
    body.innerHTML = '<p class="cp-empty">Tu carrito está vacío.</p>';
    return;
  }

  body.innerHTML = carrito.map(i => `
    <div class="cp-item">
      <img src="${i.img}" alt="${i.nombre}" onerror="this.src='https://cdn.pixabay.com/photo/2018/05/08/15/29/engine-3382957_640.jpg'">
      <div class="cpi-info">
        <div class="cpi-nombre">${i.nombre}</div>
        <div class="cpi-marca">${i.marca}</div>
        <div class="cpi-qty">
          <button onclick="cambiarCantidad(${i.id},-1)">−</button>
          <span>${i.qty}</span>
          <button onclick="cambiarCantidad(${i.id},1)">+</button>
        </div>
      </div>
      <div class="cpi-right">
        <div class="cpi-precio">RD$${(i.precio * i.qty).toLocaleString()}</div>
        <button class="cpi-del" onclick="eliminarDelCarrito(${i.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function abrirCarrito() {
  document.getElementById('carrito-overlay').classList.add('open');
  document.getElementById('carrito-panel').classList.add('open');
}
function cerrarCarrito() {
  document.getElementById('carrito-overlay').classList.remove('open');
  document.getElementById('carrito-panel').classList.remove('open');
}

/* ============================================================
   PAGO
   ============================================================ */
function abrirPago() {
  if (carrito.length === 0) { mostrarToast('Agrega productos primero'); return; }
  cerrarCarrito();
  recalcTotal();
  renderPagoItems();
  document.getElementById('pago-overlay').classList.add('open');
  document.getElementById('pago-modal').classList.add('open');
  mostrarPaso('paso-1');
}
function cerrarPago() {
  document.getElementById('pago-overlay').classList.remove('open');
  document.getElementById('pago-modal').classList.remove('open');
}

function mostrarPaso(id) {
  document.querySelectorAll('.pago-step').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function renderPagoItems() {
  const envio = parseInt(document.getElementById('p-envio').value) || 0;
  const sub = carrito.reduce((s,i) => s + i.precio * i.qty, 0);
  document.getElementById('pago-items-list').innerHTML = carrito.map(i => `
    <div class="pr-item"><span>${i.nombre} x${i.qty}</span><span>RD$${(i.precio*i.qty).toLocaleString()}</span></div>
  `).join('');
  document.getElementById('pago-total-est').textContent = 'RD$' + (sub + envio).toLocaleString();
}

function recalcTotal() {
  const envio = parseInt(document.getElementById('p-envio').value) || 0;
  const sub = carrito.reduce((s,i) => s + i.precio * i.qty, 0);
  document.getElementById('c-envio').textContent = envio > 0 ? 'RD$' + envio.toLocaleString() : 'Gratis';
  document.getElementById('c-total').textContent = 'RD$' + (sub + envio).toLocaleString();
  if (document.getElementById('pago-total-est')) {
    document.getElementById('pago-total-est').textContent = 'RD$' + (sub + envio).toLocaleString();
  }
}

function irPaso2() {
  const nombre = document.getElementById('p-nombre').value.trim();
  const tel    = document.getElementById('p-tel').value.trim();
  const dir    = document.getElementById('p-dir').value.trim();
  const ciudad = document.getElementById('p-ciudad').value;
  if (!nombre || !tel || !dir || !ciudad) {
    mostrarToast('Por favor completa todos los campos obligatorios'); return;
  }
  mostrarPaso('paso-2');
}

function irPaso1() { mostrarPaso('paso-1'); }

function selMetodo(btn, tipo) {
  document.querySelectorAll('.mp-card').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  metodoActivo = tipo;
  document.getElementById('form-tarjeta').classList.toggle('hidden', tipo !== 'tarjeta');
  document.getElementById('form-transferencia').classList.toggle('hidden', tipo !== 'transferencia');
  document.getElementById('form-efectivo').classList.toggle('hidden', tipo !== 'efectivo');
}

function confirmarPedido() {
  if (metodoActivo === 'tarjeta') {
    const num  = document.getElementById('card-num').value.replace(/\s/g,'');
    const name = document.getElementById('card-name').value.trim();
    const exp  = document.getElementById('card-exp').value.trim();
    const cvv  = document.getElementById('card-cvv').value.trim();
    if (num.length < 16 || !name || exp.length < 5 || cvv.length < 3) {
      mostrarToast('Por favor completa los datos de la tarjeta'); return;
    }
  }

  const envio  = parseInt(document.getElementById('p-envio').value) || 0;
  const sub    = carrito.reduce((s,i) => s + i.precio * i.qty, 0);
  const total  = sub + envio;
  const nombre = document.getElementById('p-nombre').value;
  const ciudad = document.getElementById('p-ciudad').value;
  const numPed = 'MP-' + Date.now().toString().slice(-6);

  document.getElementById('conf-resumen').innerHTML = `
    <div class="conf-data">
      <div class="conf-row"><span>Numero de pedido:</span><strong>${numPed}</strong></div>
      <div class="conf-row"><span>Cliente:</span><strong>${nombre}</strong></div>
      <div class="conf-row"><span>Ciudad:</span><strong>${ciudad}</strong></div>
      <div class="conf-row"><span>Método:</span><strong>${metodoActivo.charAt(0).toUpperCase()+metodoActivo.slice(1)}</strong></div>
      <div class="conf-row total"><span>Total pagado:</span><strong>RD$${total.toLocaleString()}</strong></div>
    </div>
  `;

  mostrarPaso('paso-3');
}

function finalizarCompra() {
  carrito = [];
  actualizarCarritoVista();
  cerrarPago();
  mostrarToast('¡Gracias por tu compra!');
}

/* ============================================================
   FORMATO TARJETA
   ============================================================ */
function fmtCard(el) {
  let v = el.value.replace(/\D/g,'').slice(0,16);
  el.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
}
function fmtExp(el) {
  let v = el.value.replace(/\D/g,'').slice(0,4);
  if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2);
  el.value = v;
}

/* ============================================================
   CONTACTO
   ============================================================ */
function enviarContacto() {
  const nombre = document.getElementById('cf-nombre').value.trim();
  const tel    = document.getElementById('cf-tel').value.trim();
  const msg    = document.getElementById('cf-msg').value.trim();
  if (!nombre || !tel || !msg) { mostrarToast('Por favor completa todos los campos'); return; }
  mostrarToast('Mensaje enviado. Te contactaremos pronto.');
  document.getElementById('cf-nombre').value = '';
  document.getElementById('cf-tel').value = '';
  document.getElementById('cf-msg').value = '';
}

/* ============================================================
   NAVBAR SCROLL + HAMBURGER
   ============================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function mostrarToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ============================================================
   CATEGORÍAS CON SLIDESHOW AUTOMÁTICO
   ============================================================ */

/* Toma las imágenes de los productos reales del catálogo, agrupadas por categoría */
function getCatImages(catName) {
  return PRODUCTOS
    .filter(p => p.cat === catName)
    .map(p => ({ img: p.img, nombre: p.nombre }));
}

const CAT_DEFS = [
  { name: 'Motor',      count: '842 productos', icon: '⚙️' },
  { name: 'Frenos',     count: '534 productos', icon: '🔴' },
  { name: 'Suspensión', count: '310 productos', icon: '🔩' },
  { name: 'Eléctrico',  count: '421 productos', icon: '⚡' },
  { name: 'Transmisión',count: '187 productos', icon: '🔗' },
  { name: 'Filtros',    count: '256 productos', icon: '🌀' },
  { name: 'Carrocería', count: '320 productos', icon: '🏍️' },
  { name: 'Escape',     count: '145 productos', icon: '💨' },
];

const CAT_SLIDESHOWS = {}; // guarda los intervalos activos

function renderCategorias() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;

  grid.innerHTML = CAT_DEFS.map(cat => {
    const productos = getCatImages(cat.name);
    // Primera imagen visible al cargar
    const firstImg = productos.length > 0 ? productos[0].img : '';
    const firstNombre = productos.length > 0 ? productos[0].nombre : cat.name;
    const total = productos.length;

    return `
      <div class="cat-card" onclick="filtrarCategoria('${cat.name}')" data-cat="${cat.name}">
        <div class="cat-gallery">
          <div class="cat-slide-wrap">
            <img class="cat-slide-img" src="${firstImg}" alt="${firstNombre}"
              onerror="this.src=''; this.style.display='none'; this.parentElement.style.background='#1a1a1a'">
            <div class="cat-slide-overlay"></div>
            <div class="cat-slide-dots" id="dots-${cat.name.replace(/[^a-z]/gi,'_')}"></div>
          </div>
          <div class="cat-slide-count">${total} artículos</div>
        </div>
        <div class="cat-info">
          <div class="cat-info-left">
            <strong>${cat.name}</strong>
            <span>${cat.count}</span>
          </div>
          <div class="cat-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Iniciar slideshows para cada categoría
  CAT_DEFS.forEach(cat => {
    const productos = getCatImages(cat.name);
    if (productos.length <= 1) return;
    iniciarSlideshow(cat.name, productos);
  });
}

function iniciarSlideshow(catName, productos) {
  const card = document.querySelector(`.cat-card[data-cat="${catName}"]`);
  if (!card) return;
  const img = card.querySelector('.cat-slide-img');
  const dotsId = 'dots-' + catName.replace(/[^a-z]/gi,'_');
  const dotsEl = document.getElementById(dotsId);

  let idx = 0;

  // Crear dots
  if (dotsEl && productos.length > 1) {
    dotsEl.innerHTML = productos.map((_, i) =>
      `<span class="sdot ${i === 0 ? 'active' : ''}"></span>`
    ).join('');
  }

  function cambiarSlide() {
    idx = (idx + 1) % productos.length;
    // Fade out → cambiar src → fade in
    img.style.opacity = '0';
    img.style.transform = 'scale(1.06)';
    setTimeout(() => {
      img.src = productos[idx].img;
      img.alt = productos[idx].nombre;
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
      // Actualizar dot activo
      if (dotsEl) {
        dotsEl.querySelectorAll('.sdot').forEach((d,i) => d.classList.toggle('active', i === idx));
      }
    }, 320);
  }

  const intervalo = setInterval(cambiarSlide, 2800);
  CAT_SLIDESHOWS[catName] = intervalo;

  // Pausar en hover, reanudar al salir
  card.addEventListener('mouseenter', () => clearInterval(CAT_SLIDESHOWS[catName]));
  card.addEventListener('mouseleave', () => {
    CAT_SLIDESHOWS[catName] = setInterval(cambiarSlide, 2800);
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function setupReveal() {
  document.querySelectorAll('.prod-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = (i % 6) * 60;
    observer.observe(el);
  });
  document.querySelectorAll('.cat-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = i * 80;
    observer.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */
renderProductos(PRODUCTOS);
renderCategorias();
setupReveal();