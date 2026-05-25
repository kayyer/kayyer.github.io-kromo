import { useState } from "react";
import "./ComingSoon.css";

const EMAILOCTOPUS_API_KEY = "eo_ab760d77bf2249a05b499d8b0d13f116f77d2a9412abda6af467a6a32573d184";
const EMAILOCTOPUS_LIST_ID = "70a18bf2-5883-11f1-8308-67e795d45124";

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
      <div className="ks-content">
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
                {status === "loading" ? <div className="spinner" /> : "Feliratkozás"}
              </button>
            </div>
            {errorMsg && <p className="ks-error">{errorMsg}</p>}
          </>
        )}

        <p className="ks-coming-soon">Hamarosan elérhető</p>
      </div>
    </div>
  );
}
