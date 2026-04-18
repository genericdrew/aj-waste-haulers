(() => {
  'use strict';

  // Mobile nav drawer
  const toggle = document.querySelector('[data-nav-toggle]');
  const close = document.querySelector('[data-nav-close]');
  const drawer = document.getElementById('mobile-drawer');

  const setDrawer = (open) => {
    if (!drawer || !toggle) return;
    drawer.dataset.open = open ? 'true' : 'false';
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle && toggle.addEventListener('click', () => setDrawer(drawer.dataset.open !== 'true'));
  close && close.addEventListener('click', () => setDrawer(false));
  drawer && drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setDrawer(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.dataset.open === 'true') setDrawer(false);
  });

  // Pumping frequency estimator
  const estimatorForm = document.querySelector('[data-estimator]');
  if (estimatorForm) {
    const household = estimatorForm.querySelector('[data-estimator-household]');
    const tank = estimatorForm.querySelector('[data-estimator-tank]');
    const output = estimatorForm.querySelector('[data-estimator-output]');
    const result = estimatorForm.querySelector('[data-estimator-result]');

    // TCEQ-published pumping frequency table (years), by household x tank size.
    // Values from TCEQ "Advice for OSSF Owners" (approximate, for guidance).
    const table = {
      '500':  { '1': 5.8, '2': 2.6, '3': 1.5, '4': 1.0, '5': 0.7, '6': 0.4, '7': 0.3 },
      '750':  { '1': 9.1, '2': 4.2, '3': 2.6, '4': 1.8, '5': 1.3, '6': 1.0, '7': 0.7 },
      '1000': { '1': 12.4, '2': 5.9, '3': 3.7, '4': 2.6, '5': 2.0, '6': 1.5, '7': 1.2 },
      '1250': { '1': 15.6, '2': 7.5, '3': 4.8, '4': 3.4, '5': 2.6, '6': 2.0, '7': 1.7 },
      '1500': { '1': 18.9, '2': 9.1, '3': 5.9, '4': 4.2, '5': 3.3, '6': 2.6, '7': 2.1 },
    };

    const update = () => {
      const hh = household.value;
      const tk = tank.value;
      if (tk === 'not_sure') {
        result.textContent = 'Pick the closest tank size above, or call (512) 956-0047 — we can help identify your tank size by property age and square footage.';
        output.removeAttribute('data-overdue');
        return;
      }
      const years = table[tk] && table[tk][hh];
      if (!years) {
        result.textContent = 'Select both a household size and tank size to see your estimated pumping interval.';
        output.removeAttribute('data-overdue');
        return;
      }
      const overdue = years < 1;
      const rounded = years.toFixed(1);
      const prefixText = estimatorForm.dataset.prefix || 'Based on TCEQ guidance, your tank should be pumped every';
      const suffixText = estimatorForm.dataset.suffix || 'years on average.';
      if (overdue) {
        const msg = estimatorForm.dataset.overdue || 'Your tank is likely overdue. Call us today.';
        result.innerHTML = `<strong>${msg}</strong> At this household size and tank volume, TCEQ guidance recommends pumping less than once a year.`;
        output.setAttribute('data-overdue', 'true');
      } else {
        result.innerHTML = `${prefixText} <span class="estimator__result-value">every ${rounded}</span> ${suffixText}`;
        output.removeAttribute('data-overdue');
      }
    };

    household.addEventListener('change', update);
    tank.addEventListener('change', update);
  }

  // ZIP widget
  const zipForm = document.querySelector('[data-zip-widget]');
  if (zipForm) {
    const input = zipForm.querySelector('input');
    const btn = zipForm.querySelector('button');
    const out = zipForm.querySelector('[data-zip-result]');
    const servedZips = [
      // Hays County (Dripping Springs, Driftwood, Kyle, Buda, Wimberley, San Marcos)
      '78620','78619','78640','78666','78676','78610','78611',
      // Travis County (west/south Austin corridor)
      '78703','78704','78735','78736','78737','78738','78739','78748','78749',
      // Comal County (New Braunfels + Canyon Lake)
      '78130','78132','78133','78623','78070','78606','78163',
      // Spicewood, Johnson City
      '78669','78636'
    ];
    const check = () => {
      const zip = (input.value || '').trim();
      if (!/^\d{5}$/.test(zip)) {
        out.textContent = 'Enter a 5-digit ZIP code to check.';
        return;
      }
      if (servedZips.includes(zip)) {
        out.innerHTML = '<strong>We serve ' + zip + '.</strong> Let\'s talk — call or request a quote.';
      } else {
        out.innerHTML = '<strong>' + zip + '</strong> is outside our main service area. Call (512) 956-0047 — we may still be able to help.';
      }
    };
    btn.addEventListener('click', (e) => { e.preventDefault(); check(); });
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); check(); } });
  }
})();
