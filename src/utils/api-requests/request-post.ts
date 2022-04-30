type PostParams = {
    url: string,
    data: Object
}

export default async function requestPOST({ url, data }: PostParams) {
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new TypeError("Failed POST request");
      }
      return response.json();
    } catch (e) {
      throw new TypeError("Failed POST request");
    }
  }
  