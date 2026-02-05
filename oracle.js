fetch('predictions.json')
  .then(res => res.json())
  .then(data => {
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed; top:0; left:0; width:100%; background:#1d428a; color:white; text-align:center; padding:15px; z-index:99999; font-family:sans-serif; box-shadow:0 2px 10px rgba(0,0,0,0.5);';

    banner.innerHTML = '<h2>🔮 GSI PLAYOFF ORACLE 🔮</h2>';
    const list = document.createElement('div');
    list.style.cssText = 'display:flex; justify-content:center; gap:20px; font-size:1.2rem; margin-top:10px;';

    data.forEach(t => {
        list.innerHTML += `<div><strong>${t.team}</strong>: <span style="color:#fdb927">${t.prob}</span></div>`;
    });

    banner.appendChild(list);
    document.body.prepend(banner);
    document.body.style.marginTop = "120px"; // Pushes NBA site down so banner doesn't cover it
  });