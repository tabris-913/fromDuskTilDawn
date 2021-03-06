// API BASE URL
export const API_BASE_URL = process.env.REACT_APP_API_PATH;
console.log(process.env.REACT_APP_API_PATH);

export const fetchWithErrorHandling = (url: RequestInfo, options?: RequestInit | undefined) =>
  fetch(url, options)
    // 1. ネットワーク周りなどのリクエスト以前の段階でのエラーを処理する
    .catch(e => {
      throw Error(e);
    })
    // 2. サーバサイドで発行されたエラーステータスを処理する
    .then((res: any) => {
      if (res.ok) {
        return res;
      }
      throw res;
    });
// 3. 以上2つをパスした正常なレスポンスからJSONオブジェクトをパースする
// .then(res => res.json());

export const get = async <T, U>(url: string, data: T): Promise<U> => {
  // const blob: Blob = await fetchWithErrorHandling(url, { method: 'GET' }).then(res => {
  //   if (!res.ok) throw new Error(res.statusText);
  //   return res.blob();
  // });
  // const fr = new FileReader();
  // fr.readAsText(blob);
  // fr.onload = () => JSON.parse(fr.result as string);
  // return fr;
  return fetchWithErrorHandling(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${process.env.REACT_APP_GIT_API_TOKEN}`,
      Accept: 'application/vnd.github.v3.raw',
    },
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
};

export const post = async <T, U>(url: string, data: T): Promise<U> => {
  return fetchWithErrorHandling(url, { method: 'POST', body: JSON.stringify(data) })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res;
    })
    .then(res => res.json());
};

export const put = async <T, U>(url: string, data: T): Promise<U> => {
  return fetchWithErrorHandling(url, { method: 'PUT', body: JSON.stringify(data) })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res;
    })
    .then(res => res.json());
};
