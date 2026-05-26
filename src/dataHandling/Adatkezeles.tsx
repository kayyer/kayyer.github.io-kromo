import "./Adatkezeles.css";

export default function Adatkezeles() {
  return (
    <div className="ak-wrap">
      <div className="ak-overlay" />
      <div className="ak-container">
        <a href="/kayyer.github.io-kromo/" className="ak-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Vissza
        </a>

        <header className="ak-header">
          <p className="ak-eyebrow">Jogi információk</p>
          <h1 className="ak-title">Adatkezelési<br />Tájékoztató</h1>
          <p className="ak-date">Utolsó frissítés: 2026. május</p>
        </header>

        <div className="ak-sections">

          <section className="ak-section">
            <h2 className="ak-section-title">1. Az adatkezelő adatai</h2>
            <div className="ak-section-body">
              <p><span className="ak-label">Név:</span> Magyar Sára</p>
              <p><span className="ak-label">E-mail:</span> info@kromogear.com</p>
              <p><span className="ak-label">Weboldal:</span> kromogear.com</p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">2. Milyen adatokat gyűjtünk?</h2>
            <div className="ak-section-body">
              <p>A hírlevél-feliratkozás során kizárólag az alábbi személyes adatot gyűjtjük:</p>
              <ul className="ak-list">
                <li>E-mail cím</li>
              </ul>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">3. Miért gyűjtjük ezeket az adatokat?</h2>
            <div className="ak-section-body">
              <p>Az e-mail cím gyűjtésének célja:</p>
              <ul className="ak-list">
                <li>Hírlevél küldése az áruház indulásáról és aktuális ajánlatokról</li>
                <li>Tájékoztatás fontos eseményekről, újdonságokról</li>
              </ul>
              <p className="ak-note"><span className="ak-label">Jogalap:</span> Az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).</p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">4. Ki fér hozzá az adatokhoz?</h2>
            <div className="ak-section-body">
              <p>Az e-mail cím tárolása és kezelése az <span className="ak-highlight">EmailOctopus</span> platformon keresztül történik.</p>
              <ul className="ak-list">
                <li>GDPR-kompatibilis szolgáltató</li>
                <li>Adataikat az EU-n belül tárolják</li>
              </ul>
              <p>Az adatokat harmadik félnek nem adjuk el, nem adjuk át, és nem használjuk fel más célra.</p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">5. Mennyi ideig tároljuk az adatokat?</h2>
            <div className="ak-section-body">
              <p>Az e-mail címet addig tároljuk, amíg:</p>
              <ul className="ak-list">
                <li>Le nem iratkozol a hírlevelünkről, vagy</li>
                <li>Nem kéred az adataid törlését</li>
              </ul>
              <p>Leiratkozás után az adataid haladéktalanul törlésre kerülnek.</p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">6. Milyen jogok illetnek meg?</h2>
            <div className="ak-section-body">
              <ul className="ak-list">
                <li><span className="ak-label">Hozzáférés joga</span> – Bármikor kérheted, hogy tájékoztassunk a kezelt adataidról</li>
                <li><span className="ak-label">Helyesbítés joga</span> – Kérheted a pontatlan adatok módosítását</li>
                <li><span className="ak-label">Törlés joga</span> – Kérheted adataid törlését („elfeledtetéshez való jog")</li>
                <li><span className="ak-label">Hozzájárulás visszavonásának joga</span> – A hozzájárulásodat bármikor visszavonhatod</li>
                <li><span className="ak-label">Tiltakozás joga</span> – Tiltakozhatsz az adataid kezelése ellen</li>
                <li><span className="ak-label">Panasztétel joga</span> – Panaszt tehetsz a felügyeleti hatóságnál</li>
              </ul>
              <div className="ak-authority">
                <p className="ak-label">Felügyeleti hatóság:</p>
                <p>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</p>
                <p>1055 Budapest, Falk Miksa utca 9-11.</p>
                <p><a href="https://naih.hu" target="_blank" rel="noreferrer" className="ak-link">naih.hu</a></p>
                <p><a href="mailto:ugyfelszolgalat@naih.hu" className="ak-link">ugyfelszolgalat@naih.hu</a></p>
              </div>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">7. Leiratkozás</h2>
            <div className="ak-section-body">
              <p>Minden hírlevelünk alján található egy <span className="ak-highlight">„Leiratkozás"</span> link. Erre kattintva azonnal és automatikusan törlődik az e-mail címed a listánkról.</p>
              <p>Emellett leiratkozást kérhetsz közvetlenül e-mailben is: <a href="mailto:info@kromogear.com" className="ak-link">info@kromogear.com</a></p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">8. Adatbiztonság</h2>
            <div className="ak-section-body">
              <p>Az adatok védelme érdekében az iparági standardoknak megfelelő biztonsági intézkedéseket alkalmazunk. Az adatfeldolgozó (EmailOctopus) szintén GDPR-kompatibilis biztonsági protokollokat követ.</p>
            </div>
          </section>

          <section className="ak-section">
            <h2 className="ak-section-title">9. Változások</h2>
            <div className="ak-section-body">
              <p>Fenntartjuk a jogot, hogy ezt a tájékoztatót szükség esetén frissítsük. A módosításokról a weboldalunkon tájékoztatunk.</p>
            </div>
          </section>

        </div>

        <footer className="ak-footer">
          <p>Kérdésed van? Írj nekünk: <a href="mailto:info@kromogear.com" className="ak-link">info@kromogear.com</a></p>
          <p className="ak-copyright">© {new Date().getFullYear()} Kromo Gear</p>
        </footer>
      </div>
    </div>
  );
}
