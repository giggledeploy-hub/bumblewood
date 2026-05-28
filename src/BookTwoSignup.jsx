import { useState } from "react";

// ============================================================
// HOW TO USE THIS IN YOUR REAL APP:
// 1. Sign up at formspree.io, create a form, copy your endpoint
// 2. Replace FORMSPREE_ENDPOINT below with your real endpoint
// 3. In BumbleWood.jsx, import and place <BookTwoSignup /> on the
//    ending screen (instructions at the bottom of this file)
//
// NOTE: This preview uses a SIMULATED submit so you can see it work.
// The real fetch code is included but commented — uncomment for production.
// ============================================================

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgzjzgp";

export default function BookTwoSignup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const fontFamily = "'Nunito', 'Comic Sans MS', cursive, sans-serif";

  function isValidEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit() {
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    // PRODUCTION CODE (uncomment for your real app) =====
     try {
       const res = await fetch(FORMSPREE_ENDPOINT, {
         method: "POST",
         headers: { "Content-Type": "application/json", Accept: "application/json" },
         body: JSON.stringify({
           email,
           childName,
           source: "Book Two waitlist",
           signedUpAt: new Date().toISOString(),
         }),
       });
       if (res.ok) setStatus("done");
       else setStatus("error");
     } catch (err) {
       setStatus("error");
     }

  }

  function reset() {
    setOpen(false);
    setEmail("");
    setChildName("");
    setStatus("idle");
  }

  // The trigger button (place this on your ending screen)
  if (!open) {
    return (
      <div style={{ fontFamily, textAlign: "center", marginTop: 16 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "linear-gradient(135deg, #ab47bc, #7e57c2)",
            border: "none",
            borderRadius: 20,
            padding: "0.85rem 1.5rem",
            fontSize: 16,
            fontWeight: 800,
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 4px 0 #4a148c",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          🔔 Get notified when Book Two drops!
        </button>
      </div>
    );
  }

  // The signup form (modal-style)
  return (
    <div style={{ fontFamily, marginTop: 16 }}>
      <div
        style={{
          background: "linear-gradient(170deg, #fff9e6 0%, #f3e5f5 100%)",
          borderRadius: 20,
          border: "3px solid #ab47bc",
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(123,31,162,0.2)",
          position: "relative",
        }}
      >
        {status !== "done" && (
          <button
            onClick={reset}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#f3e5f5",
              border: "2px solid #ab47bc",
              borderRadius: 50,
              width: 32,
              height: 32,
              fontSize: 16,
              fontWeight: 800,
              color: "#7b1fa2",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        )}

        {status === "done" ? (
          <div>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎉🦄✨</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#6a1b9a", marginBottom: 8 }}>
              Hooray! You're on the list!
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#5d4037", lineHeight: 1.6, marginBottom: 14 }}>
              We'll send you a magical message the moment Book Two: The next adventure is ready.
              Fizzy, Mimsy, and Tobble can't wait! 🐦🐭
            </div>
            <button
              onClick={reset}
              style={{
                background: "#66bb6a",
                border: "none",
                borderRadius: 16,
                padding: "0.6rem 1.4rem",
                fontSize: 14,
                fontWeight: 800,
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 3px 0 #2e7d32",
              }}
            >
              ✨ Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: 40, marginBottom: 6 }}>🔔📖</div>
            <div style={{ fontSize: 19, fontWeight: 800, color: "#6a1b9a", marginBottom: 4 }}>
              Be the first to know!
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#5d4037", lineHeight: 1.5, marginBottom: 16 }}>
              Leave your email and we'll tell you the moment{" "}
              <strong>Book Two</strong> is ready to play. 🌟
            </div>

            <input
              type="text"
              placeholder="Your child's name (optional)"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.7rem 1rem",
                fontSize: 15,
                fontFamily,
                fontWeight: 700,
                border: "2px solid #ce93d8",
                borderRadius: 14,
                marginBottom: 10,
                outline: "none",
                color: "#3e2723",
              }}
            />

            <input
              type="email"
              placeholder="Parent's email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.7rem 1rem",
                fontSize: 15,
                fontFamily,
                fontWeight: 700,
                border: `2px solid ${status === "error" ? "#e57373" : "#ce93d8"}`,
                borderRadius: 14,
                marginBottom: status === "error" ? 6 : 14,
                outline: "none",
                color: "#3e2723",
              }}
            />

            {status === "error" && (
              <div style={{ fontSize: 13, fontWeight: 700, color: "#c62828", marginBottom: 12 }}>
                Oops! Please enter a valid email address. 💌
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                width: "100%",
                background:
                  status === "sending"
                    ? "#b39ddb"
                    : "linear-gradient(135deg, #ab47bc, #7e57c2)",
                border: "none",
                borderRadius: 16,
                padding: "0.85rem",
                fontSize: 16,
                fontWeight: 800,
                color: "#fff",
                cursor: status === "sending" ? "wait" : "pointer",
                boxShadow: status === "sending" ? "none" : "0 4px 0 #4a148c",
              }}
            >
              {status === "sending" ? "✨ Sending..." : "🔔 Notify Me!"}
            </button>

            <div style={{ fontSize: 11, fontWeight: 600, color: "#9575cd", marginTop: 10, lineHeight: 1.4 }}>
              We'll only email you about Bumblewood. No spam, ever. Unsubscribe anytime. 💜
            </div>
          </div>
        )}
      </div>
    </div>
  );
}