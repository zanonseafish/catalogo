/* Riepilogo PDF generato sul dispositivo, con la stessa selezione di email e WhatsApp. */
window.createZanonOrderPdf = function (snapshot) {
  if (!window.jspdf?.jsPDF) throw new Error('Generatore PDF non disponibile');
  const doc = new window.jspdf.jsPDF({unit: 'mm', format: 'a4', compress: true, putOnlyUsedFonts: true});
  const euro = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR'});
  const plain = value => String(value ?? '').replace(/[’‘]/g, "'").replace(/[–—]/g, '-').replace(/\u00a0/g, ' ');
  const money = value => plain(euro.format(value));
  const left = 14, right = 196, bottom = 274;
  let y = 18;
  let inTable = false;
  const setFont = (size, bold = false) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(23, 49, 46);
  };
  const tableHeader = () => {
    setFont(8.5, true);
    doc.text('Prodotto', left + 2, y);
    doc.text('Qtà', 110, y, {align: 'center'});
    doc.text('Prezzo unitario', 156, y, {align: 'right'});
    doc.text('Importo', right - 2, y, {align: 'right'});
    doc.setDrawColor(23, 49, 46);
    doc.setLineWidth(0.4);
    doc.line(left, y + 2, right, y + 2);
    y += 5;
  };
  const ensureSpace = height => {
    if (y + height <= bottom) return;
    doc.addPage();
    y = 18;
    if (inTable) tableHeader();
  };
  const paragraph = (text, size = 10, bold = false) => {
    setFont(size, bold);
    const lines = doc.splitTextToSize(plain(text), right - left);
    for (const line of lines) {
      ensureSpace(5);
      setFont(size, bold);
      doc.text(line, left, y);
      y += 5;
    }
    y += 2;
  };
  doc.setProperties({title: 'Ordine Natale 2026 - Zanon Seafish', author: 'Zanon Seafish Ingros SRL'});
  paragraph('ZANON SEAFISH INGROS SRL', 16, true);
  y += 2;
  paragraph('Riepilogo ordine Natale 2026', 13, true);
  paragraph('Data: ' + new Date(snapshot.createdAt).toLocaleDateString('it-IT'), 9);
  y += 5;
  paragraph('Nome e cognome: ' + (snapshot.customer.name || '-'));
  if (snapshot.customer.phone) paragraph('Telefono: ' + snapshot.customer.phone);
  if (snapshot.customer.notes) paragraph('Note: ' + snapshot.customer.notes);
  y += 7;
  ensureSpace(20);
  inTable = true;
  tableHeader();
  let total = 0;
  snapshot.lines.forEach(line => {
    setFont(9.5);
    const productName = doc.splitTextToSize(plain(line.name), 82);
    const height = Math.max(14, 9 + productName.length * 4.5);
    ensureSpace(height);
    setFont(8);
    doc.text(plain(line.code), left + 2, y + 3);
    setFont(9.5);
    doc.text(productName, left + 2, y + 7.5, {lineHeightFactor: 1.3});
    doc.text(String(line.qty), 110, y + 7.5, {align: 'center'});
    doc.text(money(line.price) + ' / ' + plain(line.unit), 156, y + 7.5, {align: 'right'});
    doc.text(money(line.price * line.qty), right - 2, y + 7.5, {align: 'right'});
    total += line.price * line.qty;
    y += height;
    doc.setDrawColor(210, 218, 213);
    doc.setLineWidth(0.2);
    doc.line(left, y, right, y);
    y += 3;
  });
  inTable = false;
  ensureSpace(35);
  y += 8;
  setFont(13, true);
  doc.text('Totale indicativo: ' + money(total), right, y, {align: 'right'});
  y += 6;
  setFont(9);
  doc.text('IVA inclusa', right, y, {align: 'right'});
  y += 14;
  paragraph("Questo riepilogo è una copia per il cliente. La stampa non invia l'ordine all'azienda e non svuota il carrello.", 8.5);
  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    doc.setPage(page);
    setFont(8);
    doc.setTextColor(90, 102, 95);
    doc.text('Zanon Seafish - Natale 2026', left, 285);
    doc.text(page + ' / ' + pages, right, 285, {align: 'right'});
  }
  return doc.output('blob');
};
