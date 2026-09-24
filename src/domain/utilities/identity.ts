const IP_KEY = "visca_ip";

const randomId = (): string =>
  `v-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
const getVisitorId = async (): Promise<string> => {
  const cached = localStorage.getItem(IP_KEY);
  if (cached) return cached;

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    if (res.ok) {
      const data: { ip?: string } = await res.json();
      if (data && data.ip) {
        localStorage.setItem(IP_KEY, data.ip);
        return data.ip;
      }
    }
  } catch (error) {
    console.log(error);
  }

  const id = randomId();
  localStorage.setItem(IP_KEY, id);
  return id;
};

export { getVisitorId };
