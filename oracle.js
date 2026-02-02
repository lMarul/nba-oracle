fetch('predictions.json')
  .then(res => res.json())
  .then(data => {
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed; top:0; left:0; width:100%; background:#1d428a; color:white; padding:10px; text-align:center; z-index:9999;';
    banner.innerHTML = '<h2>🔮 ORACLE PREDICTIONS 🔮</h2>';
    data.forEach(t => {
      banner.innerHTML += `<span style="margin:0 15px; font-size:1.2em;">${t.team}: ${t.prob}</span>`;
    });
    document.body.style.marginTop = "80px"; // Make room for banner
    document.body.prepend(banner);
  });