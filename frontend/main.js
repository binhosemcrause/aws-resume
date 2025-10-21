async function includePartials() {
    const placeholders = document.querySelectorAll('[data-include]');
    for (const el of placeholders) {
        const path = el.getAttribute('data-include');
        try {
            const res = await fetch(path, { cache: 'no-cache' });
            const html = await res.text();
            el.outerHTML = html;
        } catch (e) {
            // keep placeholder if fetch fails
        }
    }
}

function initPageFeatures() {
    const counterEl = document.querySelector('#counter');
    (async function updateCounter(){
        try {
            let response = await fetch("https://z2fhfwdp27.execute-api.ap-southeast-2.amazonaws.com/test/views");
            let data = await response.json();
            if (counterEl) counterEl.innerHTML = data;
        } catch (e) {}
    })();

    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.magnificPopup !== 'undefined') {
        jQuery('a[href^="#modal-"], a[href^="#blog-modal-"]').magnificPopup({
            type: 'inline',
            midClick: true,
            closeBtnInside: true,
            removalDelay: 200,
            mainClass: 'mfp-fade'
        });
    }

    // ensure original init runs after DOM updated
    var script = document.createElement('script');
    script.src = 'js/init.js';
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', async function () {
    await includePartials();
    initPageFeatures();
});

