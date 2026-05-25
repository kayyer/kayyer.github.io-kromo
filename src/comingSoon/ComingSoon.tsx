import { useState } from "react";
import "./ComingSoon.css";

const EMAILOCTOPUS_FORM_ACTION =
  "https://emailoctopus.com/lists/70a18bf2-5883-11f1-8308-67e795d45124/members/embedded/1.3/add";

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
      const formData = new FormData();
      formData.append("field[0]", email.trim());
      formData.append("confirm_redirect", "");

      const res = await fetch(EMAILOCTOPUS_FORM_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      void res;
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Valami hiba történt. Kérjük, próbáld újra.");
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                aria-label="E-mail cím"
              />
              <button
                className="ks-btn"
                onClick={handleSubscribe}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <div className="spinner" />
                ) : (
                  "Feliratkozás"
                )}
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
