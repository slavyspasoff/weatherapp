export default async (url: string, headers?: RequestInit) => {
  const request = await fetch(url, headers);
  return request.json();
};
