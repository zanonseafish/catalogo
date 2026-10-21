const products = [
  {id:1, code:'AFF01', category:'Affumicati', name:'Salmone preaffettato Norvegia 600 g', description:'Lavorato da fresco, senza coloranti e additivi. Confezione da 600 g.', price:20.50, unit:'conf.'},
  {id:2, code:'AFF02', category:'Affumicati', name:'Salmone preaffettato Norvegia 1 kg', description:'Lavorato da fresco, senza coloranti e additivi. Confezione da 1 kg.', price:32.50, unit:'conf.'},
  {id:3, code:'AFF03', category:'Affumicati', name:'Salmone preaffettato Scozia 600 g', description:'Senza pelle, baffa da 600 g.', price:23.80, unit:'conf.'},
  {id:4, code:'AFF04', category:'Affumicati', name:"Filetto di salmone Scozia ‘Coda Nera’ 1 kg", description:"Salmone preaffettato scozzese qualità ‘Coda Nera’. Confezione da 1 kg.", price:39.50, unit:'conf.'},
  {id:5, code:'AFF05', category:'Affumicati', name:"Filettino di salmone ‘Ti Amo’ Norvegia", description:"Filettino ‘cuore’ Norvegia ‘Ti Amo’ da 120 g.", price:7.00, unit:'conf.'},
  {id:6, code:'AFF06', category:'Affumicati', name:'Pesce spada a fettine 80 g', description:'Busta da 80 g in astuccio.', price:5.50, unit:'conf.'},
  {id:7, code:'AFF07', category:'Affumicati', name:'Tonno a fettine 80 g', description:'Busta da 80 g in astuccio.', price:4.80, unit:'conf.'},
  {id:8, code:'AFF08', category:'Affumicati', name:'Salmone preaffettato 200 g', description:'Busta da 200 g.', price:6.50, unit:'conf.'},
  {id:9, code:'AFF09', category:'Affumicati', name:'Filetto di sgombro al pepe 200 g', description:'Sgombro affumicato al pepe. Confezione da 200 g.', price:6.00, unit:'conf.'},
  {id:10, code:'BAC01', category:'Baccalà', name:'Baccalà mantecato 200 g', description:'Vaschetta da 200 g.', price:4.80, unit:'conf.'},
  {id:11, code:'BAC02', category:'Baccalà', name:'Baccalà mantecato 1 kg', description:'Vaschetta da 1 kg.', price:20.50, unit:'conf.'},
  {id:12, code:'BAC03', category:'Baccalà', name:'Baccalà alla vicentina 200 g', description:'Vaschetta da 200 g.', price:7.50, unit:'conf.'},
  {id:13, code:'BAC04', category:'Baccalà', name:'Baccalà alla vicentina 1 kg', description:'Vaschetta da 1 kg.', price:30.00, unit:'conf.'},
  {id:14, code:'BAC05', category:'Baccalà', name:'Baccalà condito 200 g', description:'Vaschetta da 200 g.', price:7.50, unit:'conf.'},
  {id:15, code:'BAC06', category:'Baccalà', name:'Baccalà condito 1 kg', description:'Vaschetta da 1 kg.', price:32.00, unit:'conf.'},
  {id:16, code:'BAC07', category:'Baccalà', name:'Baccalà in umido 150 g', description:'Vaschetta da 150 g.', price:5.50, unit:'conf.'},
  {id:17, code:'BAC08', category:'Baccalà', name:'Baccalà in umido 1 kg', description:'Vaschetta da 1 kg.', price:31.00, unit:'conf.'},
  {id:18, code:'SAO01', category:'Mantecati & Saor', name:'Dentice mantecato 200 g', description:'Vaschetta da 200 g.', price:9.00, unit:'conf.'},
  {id:19, code:'SAO02', category:'Mantecati & Saor', name:'Dentice mantecato 500 g', description:'Vaschetta da 500 g.', price:18.50, unit:'conf.'},
  {id:20, code:'SAO03', category:'Mantecati & Saor', name:'Gamberi in saor 200 g', description:'Vaschetta da 200 g.', price:6.00, unit:'conf.'},
  {id:21, code:'SAO04', category:'Mantecati & Saor', name:'Gamberi in saor 1 kg', description:'Vaschetta da 1 kg.', price:27.00, unit:'conf.'},
  {id:22, code:'SAO05', category:'Mantecati & Saor', name:'Sarde in saor 800 g', description:'Con uvetta e pinoli, vaschetta da 800 g.', price:13.50, unit:'conf.'},
  {id:23, code:'SPE01', category:'Specialità', name:'Polpa di riccio 70 g', description:'Marca Smeralda, vaso da 70 g.', price:12.50, unit:'conf.'},
  {id:24, code:'SPE02', category:'Specialità', name:'Polpa di granchio 170 g', description:'Marca Smeralda, confezione da 170 g.', price:10.00, unit:'conf.'},
  {id:25, code:'SPE03', category:'Specialità', name:'Acciughe del Mar Cantabrico 50 g', description:'Regina Isabella, in olio di oliva, confezione da 50 g.', price:3.00, unit:'conf.'},
  {id:26, code:'SPE04', category:'Specialità', name:'Alici marinate 200 g', description:'Vaschetta da 200 g.', price:3.50, unit:'conf.'},
  {id:27, code:'SPE05', category:'Specialità', name:'Bocconcini alici e olive 200 g', description:'In olio di girasole, confezione da 200 g.', price:4.00, unit:'conf.'},
  {id:28, code:'SPE06', category:'Specialità', name:'Alici Sicilia EVO 720 g', description:'Filetti in vaso di vetro da 720 g.', price:14.50, unit:'conf.'},
  {id:29, code:'SPE07', category:'Specialità', name:'Filetti di tonno in olio 180 g', description:'Vaso di vetro da 180 g.', price:4.50, unit:'conf.'},
  {id:30, code:'SPE08', category:'Specialità', name:'Filetti di tonno in olio 850 g', description:'Latta richiudibile da 850 g.', price:20.00, unit:'conf.'},
  {id:31, code:'SPE09', category:'Specialità', name:'Stoccafisso secco sottovuoto', description:'Stoccafisso secco confezionato sottovuoto, vendita a peso.', price:56.00, unit:'kg'}
];

const productImages = [
  'images/salmone-tiamo-norvegia-600.jpg',
  'images/Re-Salmone-1000.png',
  'images/salmone-scozia-600.jpg',
  'images/salmone-affumicato-codanera.jpg',
  'images/Filettino-Re-Salmone-120.jpg',
  'images/pesce-spada-affumicato.webp',
  'images/bresaola-tonno-affumicato.webp',
  'images/salmone-norvegia-affumicato-200.jpg',
  'images/aringa-affumicata.jpg',
  'images/baccala-mantecato-35-200.jpg',
  'images/baccala-mantecato-35-front.jpg',
  'images/baccala-vicentina-200.jpg',
  'images/baccala-vicentina-1.jpg',
  'images/baccala-condito-200.jpg',
  'images/baccala-condito-200.jpg',
  'images/baccala-umido-150.jpg',
  'images/baccala-umido-1.jpg',
  'images/dentice-crema-200.jpg',
  'images/dentice-crema-500.jpg',
  'images/saor-gamberi.png',
  'images/saor-gamberi.png',
  'images/saor-sarde.png',
  'images/polpa-riccio.jpg',
  'images/polpa-granchio.jpg',
  'images/alici-intere-cantabrico-olio.jpg',
  'images/alici-marinate-200.jpg',
  'images/alici-bocconcini.jpg',
  'images/alici-filetti.jpg',
  'images/tonno-filetto-albatros.jpg',
  'images/tonno-filetti-acantilado.jpg',
  'images/stoccafisso-secco-sottovuoto.png'
];
products.forEach(product => { product.image = productImages[product.id - 1]; });

const state = {
  query: '',
  category: 'Tutti',
  cart: sanitizeCart(readStorage('zanon-cart', {})),
  customer: sanitizeCustomer(readStorage('zanon-customer', {}))
};

const euro = new Intl.NumberFormat('it-IT', {style:'currency', currency:'EUR'});
const grid = document.querySelector('#productGrid');
const filters = document.querySelector('#categoryFilters');
const search = document.querySelector('#searchInput');
const clearSearch = document.querySelector('#clearSearch');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
const drawer = document.querySelector('#cartDrawer');
const dialog = document.querySelector('#productDialog');
let toastTimer;
let productObserver;
let returnFocus;
let orderPrepared = false;
let productDialogScrollY = 0;
let productDialogLocked = false;

function sanitizeCart(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([id, qty]) =>
    productById(id) && Number.isFinite(Number(qty)) && Number(qty) > 0
  ).map(([id, qty]) => [id, Math.min(9999, Math.ceil(Number(qty)))]));
}

function sanitizeCustomer(value) {
  const result = {name:'', phone:'', notes:''};
  if (value && typeof value === 'object') {
    Object.keys(result).forEach(key => { if (typeof value[key] === 'string') result[key] = value[key]; });
  }
  return result;
}

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function productById(id) { return products.find(product => product.id === Number(id)); }

function renderFilters() {
  const categories = ['Tutti', ...new Set(products.map(product => product.category))];
  filters.innerHTML = categories.map(category => `
    <button class="filter-chip ${state.category === category ? 'active' : ''}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join('');
}

function getFilteredProducts() {
  const q = normalize(state.query.trim());
  return products.filter(product => {
    const inCategory = state.category === 'Tutti' || product.category === state.category;
    const haystack = normalize(`${product.name} ${product.description} ${product.category} ${product.code}`);
    return inCategory && (!q || haystack.includes(q));
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  grid.innerHTML = filtered.map(product => `
    <article class="product-card" data-product="${product.id}">
      <button class="product-image" type="button" data-detail="${product.id}" aria-label="Apri i dettagli di ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="720" height="720">
        <span class="product-code">${product.code}</span>
        <span class="detail-hint" aria-hidden="true">↗</span>
      </button>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <div class="price"><strong>${euro.format(product.price)}</strong><small>€/${product.unit} · IVA inclusa</small></div>
          <button class="add-button" type="button" data-add="${product.id}" aria-label="Aggiungi ${product.name} all'ordine"><span aria-hidden="true">＋</span>Aggiungi</button>
        </div>
        <span class="product-cart-status" data-cart-status="${product.id}"></span>
      </div>
    </article>
  `).join('');
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'prodotto' : 'prodotti'}`;
  emptyState.hidden = filtered.length > 0;
  syncProductCounts();
  observeProductCards();
}

function addToCart(id) {
  const product = productById(id);
  if (!product) return;
  state.cart[id] = Math.min(9999, (Number(state.cart[id]) || 0) + 1);
  persistCart();
  const button = document.querySelector(`[data-add="${id}"]`);
  if (button) { button.classList.remove('added'); void button.offsetWidth; button.classList.add('added'); }
  showToast(`${product.name} aggiunto`);
}

function changeQuantity(id, delta) {
  if (!productById(id)) return;
  const next = (Number(state.cart[id]) || 0) + delta;
  if (next <= 0) delete state.cart[id]; else state.cart[id] = Math.min(9999, next);
  persistCart();
}

function persistCart() {
  orderPrepared = false;
  writeStorage('zanon-cart', state.cart);
  renderCart();
  const bar = document.querySelector('.order-bar');
  bar.classList.remove('updated'); void bar.offsetWidth; bar.classList.add('updated');
}

function syncProductCounts() {
  document.querySelectorAll('[data-cart-status]').forEach(status => {
    const id = status.dataset.cartStatus;
    const product = productById(id);
    const qty = Number(state.cart[id]) || 0;
    status.textContent = qty ? `✓ Nel carrello: ${qty} ${product.unit}` : '';
    const card = status.closest('.product-card');
    if (card) card.classList.toggle('selected', qty > 0);
  });
}

function updateProgress() {
  const hasItems = cartLines().length > 0;
  document.querySelector('#progressSelection').classList.toggle('active', !hasItems);
  document.querySelector('#progressSelection').classList.toggle('done', hasItems);
  document.querySelector('#progressReview').classList.toggle('active', hasItems && !orderPrepared);
  document.querySelector('#progressReview').classList.toggle('done', orderPrepared);
  document.querySelector('#progressPrepare').classList.toggle('active', orderPrepared);
}

function cartLines() {
  return Object.entries(state.cart).map(([id, qty]) => ({product: productById(id), qty:Number(qty)})).filter(line => line.product && line.qty > 0);
}

function renderCart() {
  const lines = cartLines();
  const units = lines.reduce((sum, line) => sum + line.qty, 0);
  const total = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);
  const count = document.querySelector('#cartCount');
  count.textContent = units;
  count.classList.remove('bump'); void count.offsetWidth; if (units) count.classList.add('bump');
  document.querySelector('#cartEmpty').hidden = lines.length > 0;
  document.querySelector('#cartContent').hidden = lines.length === 0;
  document.querySelector('#cartFooter').hidden = lines.length === 0;
  document.querySelector('#cartUnits').textContent = `${lines.length} ${lines.length === 1 ? 'prodotto' : 'prodotti'} · ${units} unità`;
  document.querySelector('#cartTotal').textContent = euro.format(total);
  document.querySelector('#orderBarCount').textContent = `${units} ${units === 1 ? 'articolo' : 'articoli'}`;
  document.querySelector('#orderBarTotal').textContent = euro.format(total);
  document.querySelector('#openCartBottom').innerHTML = `${units ? 'Vedi ordine' : 'Apri carrello'} <span aria-hidden="true">→</span>`;
  document.querySelectorAll('[aria-controls="cartDrawer"]').forEach(button => button.setAttribute('aria-label', `Apri il carrello: ${units} articoli, ${euro.format(total)}`));
  document.querySelector('#cartItems').innerHTML = lines.map(({product, qty}) => `
    <div class="cart-item">
      <img src="${product.image}" alt="" width="76" height="76">
      <div>
        <h4>${product.name}</h4>
        <span class="cart-item-price">${euro.format(product.price)} / ${product.unit}</span>
        <strong class="cart-line-total">${euro.format(product.price * qty)}</strong>
        <button class="remove-item" type="button" data-remove="${product.id}">Rimuovi</button>
      </div>
      <div class="qty-control" aria-label="Quantità ${product.name}">
        <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="Diminuisci">−</button>
        <span>${qty}</span>
        <button type="button" data-qty="${product.id}" data-delta="1" aria-label="Aumenta">＋</button>
      </div>
    </div>
  `).join('');
  syncProductCounts();
  updateProgress();
}

function openCart() {
  returnFocus = document.activeElement;
  renderCart();
  drawer.inert = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  document.querySelectorAll('[aria-controls="cartDrawer"]').forEach(button => button.setAttribute('aria-expanded', 'true'));
  setTimeout(() => document.querySelector('#closeCart').focus(), 150);
}

function closeCart() {
  if (returnFocus && typeof returnFocus.focus === 'function') returnFocus.focus();
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  drawer.inert = true;
  document.querySelectorAll('[aria-controls="cartDrawer"]').forEach(button => button.setAttribute('aria-expanded', 'false'));
}

function openProduct(id) {
  const product = productById(id);
  if (!product) return;
  productDialogScrollY = window.scrollY;
  document.querySelector('#dialogContent').innerHTML = `
    <div class="dialog-layout">
      <img src="${product.image}" alt="${product.name}">
      <div class="dialog-copy">
        <span class="product-category">${product.category} · ${product.code}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="dialog-price">${euro.format(product.price)}<small>€/${product.unit} · IVA inclusa · prezzo 2025</small></div>
        <button class="button button-dark" type="button" data-dialog-add="${product.id}">Aggiungi all'ordine <span>＋</span></button>
      </div>
    </div>`;
  document.body.style.top = `-${productDialogScrollY}px`;
  document.body.classList.add('product-dialog-open');
  productDialogLocked = true;
  dialog.showModal();
}

function unlockProductDialogScroll() {
  if (!productDialogLocked) return;
  productDialogLocked = false;
  document.body.classList.remove('product-dialog-open');
  document.body.style.top = '';
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, productDialogScrollY);
  requestAnimationFrame(() => {
    window.scrollTo(0, productDialogScrollY);
    root.style.scrollBehavior = previousBehavior;
  });
}

function closeProduct() {
  if (!dialog.open) return;
  dialog.close();
  unlockProductDialogScroll();
}

function buildOrderText() {
  const lines = cartLines();
  const total = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);
  const name = document.querySelector('#customerName').value.trim();
  const phone = document.querySelector('#customerPhone').value.trim();
  const notes = document.querySelector('#customerNotes').value.trim();
  return [
    'RICHIESTA ORDINE NATALE 2026',
    'ZANON SEAFISH INGROS SRL',
    '',
    `Cliente: ${name || '—'}`,
    `Telefono: ${phone || '—'}`,
    '',
    'PRODOTTI:',
    ...lines.map(({product, qty}) => `${qty} × ${product.code} | ${product.name} | ${euro.format(product.price)} / ${product.unit} | ${euro.format(product.price * qty)}`),
    '',
    `TOTALE INDICATIVO: ${euro.format(total)}`,
    'Prezzi 2025 IVA inclusa, da confermare per il Natale 2026.',
    '',
    `Note: ${notes || '—'}`
  ].join('\n');
}

function persistCustomer() {
  state.customer = {
    name: document.querySelector('#customerName').value,
    phone: document.querySelector('#customerPhone').value,
    notes: document.querySelector('#customerNotes').value
  };
  writeStorage('zanon-customer', state.customer);
  if (orderPrepared) { orderPrepared = false; updateProgress(); }
}

function prepareEmail() {
  if (!cartLines().length) return;
  persistCustomer();
  orderPrepared = true;
  updateProgress();
  const subject = `Richiesta ordine Natale 2026${state.customer.name ? ` - ${state.customer.name}` : ''}`;
  showToast('Email preparata: conferma l’invio nella tua app email');
  window.location.href = `mailto:amministrazione@zanonseafish.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildOrderText())}`;
}

async function copyOrder() {
  persistCustomer();
  try {
    await navigator.clipboard.writeText(buildOrderText());
    showToast('Riepilogo copiato');
  } catch {
    showToast('Copia non disponibile su questo dispositivo');
  }
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function observeProductCards() {
  if (productObserver) productObserver.disconnect();
  if (typeof IntersectionObserver !== 'function' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.product-card').forEach(card => card.classList.add('visible'));
    return;
  }
  productObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 45);
        productObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('.product-card').forEach(card => productObserver.observe(card));
}

function initReveal() {
  if (typeof IntersectionObserver !== 'function' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('in-view'));
    return;
  }
  document.documentElement.classList.add('enhanced-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

function shuffleShowcase(items, random = Math.random) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Each full deck contains every product once. Never repeat a currently visible photo.
function createShowcaseQueue(items, random = Math.random) {
  let deck = [];
  return {
    next(visibleIds = []) {
      if (!deck.length) deck = shuffleShowcase(items, random);
      const index = deck.findIndex(product => !visibleIds.includes(product.id));
      return index < 0 ? null : deck.splice(index, 1)[0];
    }
  };
}

// Bounded compositions keep the greeting and decorations clear, also on mobile.
const showcaseLayouts = [
  [[48,45], [22,68], [78,28]],
  [[52,46], [24,70], [77,30]],
  [[46,47], [22,66], [78,31]],
  [[50,43], [23,67], [77,29]]
];

function initShowcase() {
  const visual = document.querySelector('#productShowcase');
  const control = document.querySelector('#toggleShowcase');
  if (!visual || !control) return;
  const slots = Array.from(visual.querySelectorAll('[data-showcase-slot]')).map(element => ({
    element, layers: Array.from(element.querySelectorAll('.showcase-image')), active: 0, product: null
  }));
  if (slots.length !== 3 || slots.some(slot => slot.layers.length !== 2)) return;

  const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const queue = createShowcaseQueue(products);
  const layout = showcaseLayouts[Math.floor(Math.random() * showcaseLayouts.length)];
  const phases = shuffleShowcase([0,1,2]);
  let slotOrder = shuffleShowcase([0,1,2]);
  let cursor = 0, timer, busy = false, pending = null, userPaused = false;
  let inViewport = typeof IntersectionObserver !== 'function';
  const visibleIds = () => slots.map(slot => slot.product?.id).filter(Boolean);
  const canPlay = () => !userPaused && !motion?.matches && inViewport && !document.hidden;

  ['front','back','middle'].forEach((role, index) => {
    visual.style.setProperty(`--${role}-x`, `${layout[index][0]}%`);
    visual.style.setProperty(`--${role}-y`, `${layout[index][1]}%`);
  });

  slots.forEach((slot, index) => {
    slot.product = queue.next(visibleIds());
    slot.layers[0].src = slot.product.image;
    slot.layers[0].alt = slot.product.name;
    const phase = phases[index];
    const properties = {
      '--showcase-x':`${layout[phase][0]}%`,
      '--showcase-y':`${layout[phase][1]}%`,
      '--showcase-scale':[1,.56,.64][phase],
      '--showcase-layer':[30,10,20][phase],
      '--showcase-opacity':[1,.76,.9][phase],
      '--showcase-blur':['0px','.65px','.3px'][phase],
      '--showcase-delay':`${-phase * 3.6}s`
    };
    Object.entries(properties).forEach(([name,value]) => slot.element.style.setProperty(name, String(value)));
  });
  visual.classList.add('showcase-ready');

  function schedule(delay = 2200) {
    clearTimeout(timer);
    if (canPlay() && !busy) timer = setTimeout(advance, delay);
  }

  function syncPlayback() {
    clearTimeout(timer);
    visual.classList.toggle('showcase-paused', !canPlay());
    visual.classList.toggle('showcase-static', Boolean(motion?.matches));
    control.hidden = Boolean(motion?.matches);
    control.textContent = userPaused ? 'Riprendi foto' : 'Pausa foto';
    control.setAttribute('aria-pressed', String(userPaused));
    control.setAttribute('aria-label', userPaused ? "Riprendi l'animazione delle foto" : "Metti in pausa l'animazione delle foto");
    schedule(700);
  }

  async function advance() {
    if (!canPlay() || busy) return;
    busy = true;
    try {
      if (!pending) {
        const index = slotOrder[cursor % slots.length];
        const product = queue.next(visibleIds());
        if (!product) return;
        pending = {slot: slots[index], product};
      }
      const {slot,product} = pending;
      const incoming = slot.layers[1 - slot.active];
      incoming.src = product.image;
      // Decode before the dissolve so a slow connection never creates an empty frame.
      if (typeof incoming.decode === 'function') await incoming.decode();
      else if (!incoming.complete) {
        await new Promise((resolve, reject) => {
          incoming.addEventListener('load', resolve, {once:true});
          incoming.addEventListener('error', reject, {once:true});
        });
      }
      if (!canPlay()) return;
      const outgoing = slot.layers[slot.active];
      incoming.alt = product.name;
      incoming.setAttribute('aria-hidden', 'false');
      outgoing.alt = '';
      outgoing.setAttribute('aria-hidden', 'true');
      outgoing.classList.remove('is-current');
      incoming.classList.add('is-current');
      slot.active = 1 - slot.active;
      slot.product = product;
      pending = null;
      cursor++;
      if (cursor % slots.length === 0) {
        slotOrder = shuffleShowcase([0,1,2]);
      }
    } catch {
      // Keep the last loaded image if one asset cannot be fetched.
      pending = null;
    } finally {
      busy = false;
      schedule();
    }
  }

  control.addEventListener('click', () => { userPaused = !userPaused; syncPlayback(); });
  document.addEventListener('visibilitychange', syncPlayback);
  if (motion?.addEventListener) motion.addEventListener('change', syncPlayback);
  else motion?.addListener?.(syncPlayback);
  if (typeof IntersectionObserver === 'function') {
    const observer = new IntersectionObserver(entries => {
      inViewport = entries[0]?.isIntersecting || false;
      syncPlayback();
    }, {threshold:.08});
    observer.observe(visual);
  }
  syncPlayback();
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters(); renderProducts();
});

search.addEventListener('input', () => {
  state.query = search.value;
  clearSearch.classList.toggle('visible', Boolean(search.value));
  renderProducts();
});

clearSearch.addEventListener('click', () => {
  search.value = ''; state.query = ''; clearSearch.classList.remove('visible'); renderProducts(); search.focus();
});

document.querySelector('#resetFilters').addEventListener('click', () => {
  state.category = 'Tutti'; state.query = ''; search.value = ''; clearSearch.classList.remove('visible'); renderFilters(); renderProducts();
});

grid.addEventListener('click', event => {
  const add = event.target.closest('[data-add]');
  const detail = event.target.closest('[data-detail]');
  if (add) addToCart(add.dataset.add);
  if (detail) openProduct(detail.dataset.detail);
});

document.querySelector('#cartItems').addEventListener('click', event => {
  const qty = event.target.closest('[data-qty]');
  const remove = event.target.closest('[data-remove]');
  if (qty) changeQuantity(qty.dataset.qty, Number(qty.dataset.delta));
  if (remove) { delete state.cart[remove.dataset.remove]; persistCart(); }
});

document.querySelector('#openCart').addEventListener('click', openCart);
document.querySelector('#openCartBottom').addEventListener('click', openCart);
document.querySelector('#closeCart').addEventListener('click', closeCart);
document.querySelector('#closeCartBackdrop').addEventListener('click', closeCart);
document.querySelector('#shopNow').addEventListener('click', () => { closeCart(); document.querySelector('#catalogo').scrollIntoView(); });
document.querySelector('#prepareOrder').addEventListener('click', prepareEmail);
document.querySelector('#copyOrder').addEventListener('click', copyOrder);
document.querySelector('#clearCart').addEventListener('click', () => {
  if (window.confirm('Vuoi rimuovere tutti i prodotti dal carrello?')) { state.cart = {}; persistCart(); showToast('Carrello svuotato'); }
});
document.querySelector('#closeDialog').addEventListener('click', closeProduct);
dialog.addEventListener('close', unlockProductDialogScroll);
dialog.addEventListener('click', event => { if (event.target === dialog) closeProduct(); });
dialog.addEventListener('click', event => {
  const button = event.target.closest('[data-dialog-add]');
  if (button) { addToCart(button.dataset.dialogAdd); closeProduct(); openCart(); }
});
document.addEventListener('keydown', event => {
  if (!drawer.classList.contains('open')) return;
  if (event.key === 'Escape') closeCart();
  if (event.key === 'Tab') {
    const candidates = Array.from(drawer.querySelectorAll('button, input, textarea, [tabindex="0"]'));
    const focusable = candidates.filter(element => !element.disabled && element.getClientRects().length > 0);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }
});

['customerName','customerPhone','customerNotes'].forEach(id => {
  const element = document.querySelector(`#${id}`);
  const key = id.replace('customer','').toLowerCase();
  element.value = state.customer[key] || '';
  element.addEventListener('input', persistCustomer);
});

renderFilters();
renderProducts();
renderCart();
initReveal();
initShowcase();
