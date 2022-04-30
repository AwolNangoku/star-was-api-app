export default async function requestGET({ url }: {url: string}) {
    try {
      const response = await fetch(url, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        return new TypeError("Get request failed");
      }
      return response.json();
    } catch (e) {
      new TypeError("Get request failed");
    }
  }
  