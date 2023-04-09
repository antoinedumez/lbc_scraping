const extractData = () => {
    const results = [];
    const items = document.querySelectorAll("div.src__Box-sc-10d053g-0.cnsuKn > div.styles_adCard__HQRFN");

    items.forEach((item) => {
        const name = item.querySelector('p[data-qa-id="aditem_title"]').innerText;
        const prix = item.querySelector('p[data-test-id="price"] > span[data-qa-id="aditem_price"]').innerText;
        const annee = item.querySelector('div[data-test-id="ad-params-labels"] > div:nth-child(1) > p:nth-child(2)').innerText;
        const kilometrage = item.querySelector('div[data-test-id="ad-params-labels"] > div:nth-child(2) > p:nth-child(2)').innerText;
        // const professionnel = item.querySelector('span.Dqdzf._35DXM.cJtdT') ? true : false;
        const professionnel = item.querySelector('span.Dqdzf._35DXM.cJtdT') && item.querySelector('span.Dqdzf._35DXM.cJtdT').textContent.trim() === 'Pro' ? true : false;
        const lieu = item.querySelector('p[aria-label*="Située à"]').innerText;
        const url = 'https://www.leboncoin.fr' + item.querySelector('a[data-qa-id="aditem_container"]').getAttribute('href');
        results.push({
            name: name,
            prix: prix,
            kilometrage: kilometrage,
            annee: annee,
            professionnel: professionnel,
            lieu: lieu,
            url: url,
        });
    });

    return results;
};

console.log(JSON.stringify(extractData(), null, 2));