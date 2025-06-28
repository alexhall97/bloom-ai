'use client';

import { useState } from "react";

export default function Home() {
  const [moment, setMoment] = useState("");
  const [frustration, setFrustration] = useState("");
  const [envFactor, setEnvFactor] = useState("");
  const [win, setWin] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moment, frustration, envFactor, win })
    });
    const data = await res.json();
    setOutput(data.result);
    setLoading(false);
  };

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h1>🌱 Bloom Insight Generator</h1>
      <textarea placeholder="Proud moment" value={moment} onChange={(e) => setMoment(e.target.value)} />
      <textarea placeholder="Frustration" value={frustration} onChange={(e) => setFrustration(e.target.value)} />
      <textarea placeholder="Environment Factor" value={envFactor} onChange={(e) => setEnvFactor(e.target.value)} />
      <textarea placeholder="Small Win" value={win} onChange={(e) => setWin(e.target.value)} />
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Insight"}
      </button>
      {output && <pre style={{ marginTop: "1rem" }}>{output}</pre>}
    </main>
  );
}
