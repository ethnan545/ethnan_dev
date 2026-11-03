export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service: string;
  details: string;
};

export type ContactResult = { ok: true; simulated: boolean };

/**
 * BACKEND HOOK
 * Set NEXT_PUBLIC_CONTACT_ENDPOINT in .env.local (for example "/api/contact")
 * and this function will POST the form as JSON. Until then it runs in demo
 * mode: nothing is sent anywhere.
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 900));
    console.info("[EthnanDev] Contact form (demo mode, not sent):", payload);
    return { ok: true, simulated: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return { ok: true, simulated: false };
}
