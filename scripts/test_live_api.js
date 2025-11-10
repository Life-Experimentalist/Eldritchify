(async () => {
  const base = "https://eldritchify.vkrishna04.me/api";
  const sample = { text: "The stars are right", chaosLevel: 50 };

  async function post(path, body) {
    try {
      const res = await fetch(base + path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const raw = await res.text();
      console.log("\nPOST", path, "status", res.status);
      console.log("Raw response length:", raw.length);
      console.log("Raw response (first 1000 chars):\n", raw.slice(0, 1000));
      try {
        const j = JSON.parse(raw);
        console.log("Parsed JSON keys:", Object.keys(j));
        if (j.output)
          console.log(
            "Output length:",
            j.output.length,
            "sample:",
            j.output.slice(0, 200)
          );
      } catch (e) {
        console.log("Failed to parse JSON:", e.message);
      }

      return raw;
    } catch (err) {
      console.error("Request error", err);
    }
  }

  const corruptedRaw = await post("/corrupt", sample);
  // If corruptedRaw parsed, attempt to send the output to purify
  try {
    const parsed = JSON.parse(corruptedRaw || "{}");
    if (parsed.output) {
      await post("/purify", { text: parsed.output });
    } else {
      console.log("No output to send to /purify.");
    }
  } catch (e) {
    console.log("Skipping purify due to parse error.");
  }
})();
