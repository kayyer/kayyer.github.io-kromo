import { useState } from "react";
import "./ComingSoon.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubscribe = async () => {
    setErrorMsg("");

    if (!email.trim()) {
      setErrorMsg("Kérjük, add meg az e-mail címed.");
      return;
    }
    if (!validate(email)) {
      setErrorMsg("Ez nem tűnik érvényes e-mail címnek.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://test.szarvady-ambrus.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || "Hiba történt.");
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Valami hiba történt. Kérjük, próbáld újra.");
    }
  };

  return (
    <div className="ks-wrap">
      {/* spacer pushes content below the kromogear title in the background image */}
      <div className="ks-spacer" />

      <div className="ks-content">
        <div style={{ flexDirection: "column" }} className="flex items-center justify-center gap-5 p-2  w-1/2 md:w-1/2 w-5/6">
          <p className="ks-tagline">
            Iratkozz fel, hogy elsőként<br />értesülhess az indulásról!
          </p>

          {status === "success" ? (
            <div className="ks-success">
              <p className="ks-success-title">Sikeresen feliratkoztál!</p>
              <p className="ks-success-sub">
                Értesítjük a következő címen: <strong>{email}</strong>
              </p>
            </div>
          ) : (
            <>
              <div className="ks-input-row">
                <input
                  className="ks-input"
                  type="email"
                  placeholder="Írd be az e-mail címed"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => { setEmail(e.target.value); if (errorMsg) setErrorMsg(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  aria-label="E-mail cím"
                />
                <button
                  className="ks-btn"
                  onClick={handleSubscribe}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? <div className="spinner" /> : "Feliratkozás*"}
                </button>
              </div>
              {errorMsg && <p className="ks-error">{errorMsg}</p>}
            </>
          )}

          <p className="ks-coming-soon">Hamarosan elérhető</p>

          <p className="ks-legal">
            *Feliratkozással elfogadod az{" "}
            <a href="#/adatkezeles" className="ks-legal-link">Adatkezelési tájékoztatónkat</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
