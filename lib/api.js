const BASE = "https://app.skyfobs.com/api";
const TIMEOUT_MS = 7000;

async function fetchJson(
  path,
  { method = "POST", body = undefined, headers = {} } = {}
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: { "Content-Type": "application/json", ...headers },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const text = await res.text();
    let data = null;

    try {
      data = text ? JSON.parse(text) : null;
    } catch {}

    if (!res.ok) {
      const err = new Error("Please try again later.");
      err.status = res.status;
      err.data = data;
      throw err;
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Please try again later.");
    }

    throw new Error("Please try again later.");
  }
}

export async function sendContact(payload) {
  return fetchJson("/contact", { body: payload });
}

export async function subscribeNewsletter(payload) {
  return fetchJson("/subscribe", { body: payload });
}

export const ApiConfig = { BASE, TIMEOUT_MS };
export default { sendContact, subscribeNewsletter };
