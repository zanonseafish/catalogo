// app.js: utilità comuni e loader di frammenti
(function(){
  async function inject(url, where='body'){
    const html = await (await fetch(url, {cache:'no-store'})).text();
    document[where==='head'?'head':'body'].insertAdjacentHTML('beforeend', html);
  }
  // Espone global per pagine
  window.Zanon = {
    inject, 
    fmtEUR: v => new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(v || 0),
    sanitizeUnit: u => { if(!u) return ""; return (u+'').replace('€','').trim()==="/kg" ? "/kg" : "€/kg"; }
  };
})();

// Inizializza catalogo dalla costante PRODUCTS (definita nella pagina)
window.initCatalog = function initCatalog(){
  const grid = document.getElementById("grid");
  if(!grid || !Array.isArray(window.PRODUCTS)) return;
  const fmtEUR = Zanon.fmtEUR;
  const sanitizeUnit = Zanon.sanitizeUnit;

  function rowTemplate(p){
    const unit = p.unit ? sanitizeUnit(p.unit) : (p.unit===""? "" : "");
    const save  = (p.oldPrice && p.oldPrice>p.price) ? (p.oldPrice - p.price) : 0;
    return `
      <article class="item" onclick='openModal(${JSON.stringify(p).replace(/"/g,"&quot;")})' id="${p.id||""}">
        <div class="thumb">
          <img loading="lazy" src="${(p.images&&p.images[0])||'images/default1.jpg'}" alt="${p.name||''}" onerror="this.onerror=null;this.src='images/default1.jpg';">
        </div>
        <div>
          <h2 class="title">${p.name||""}</h2>
          <p class="desc">${p.shortDesc||""}</p>
          <div class="priceWrap">
            ${p.oldPrice?`<div class="old">${fmtEUR(p.oldPrice)}${unit}</div>`:""}
            <div class="price">${fmtEUR(p.price||0)}${unit}</div>
            <span class="unit">IVA escl.</span>
          </div>
          ${save>0?`<div class="save">RISPARMIO ${fmtEUR(save)}</div>`:""}
        </div>
      </article>`;
  }

  grid.innerHTML = PRODUCTS.length ? PRODUCTS.map(rowTemplate).join("") :
    `<div style="grid-column:1/-1;background:#fff;border:1px dashed #bbb;border-radius:12px;padding:14px;font-size:13px;color:#555">
      Nessun articolo. Inserisci oggetti in PRODUCTS.
    </div>`;
};

// Modal base (riusa markup #modal dai file inclusi)
(function(){
  const modal=document.getElementById("modal");
  if(!modal) return;
  const mTitle=document.getElementById("mTitle");
  const mImg=document.getElementById("mImg");
  const mDesc=document.getElementById("mDesc");
  const mPrice=document.getElementById("mPrice");
  const shareBtn=document.getElementById("shareBtn");
  const closeBtn=document.getElementById("closeBtn");
  window.openModal=function(prod){
    const unit = prod.unit ? ((''+prod.unit).includes("/kg")?" /kg":" €/kg") : "";
    mTitle.textContent=prod.name||"";
    mImg.src=(prod.images&&prod.images[0])||"images/default1.jpg";
    mImg.alt=prod.name||"";
    const old = prod.oldPrice ? `<span class="old" style="text-decoration:line-through;margin-right:8px">${Zanon.fmtEUR(prod.oldPrice)}${unit}</span>` : "";
    mDesc.textContent=prod.shortDesc||"";
    mPrice.innerHTML = `${old} <strong style="font-size:22px">${Zanon.fmtEUR(prod.price||0)}${unit}</strong>`;
    modal.classList.add("open"); document.body.style.overflow="hidden";
  };
  function closeModal(){ modal.classList.remove("open"); document.body.style.overflow=""; }
  closeBtn && (closeBtn.onclick=closeModal);
  modal.addEventListener("click",e=>{ if(e.target===modal) closeModal(); });
  window.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); });
  shareBtn && (shareBtn.onclick=async ()=>{
    try{
      await navigator.share?.({title:mTitle.textContent, text:location.href, url:location.href});
    }catch(e){}
  });
})();

// Menu dropdown: eventi per #fab (da menu.html)
document.addEventListener('click',function(e){
  var fab = document.getElementById('fab');
  if(!fab) return;
  if(!fab.contains(e.target)) fab.classList.remove('open');
});