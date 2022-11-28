const basePath = "https://api.vercel.com"

type InitArgs = {
  authorization: string
}

export class Vercel {

  private authorization: string;

  private getHeaders(): Headers {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${this.authorization}`);

    return headers;
  }

  private convertEntriesToURLSearchParams(o: any): URLSearchParams {
    const searchParams = new URLSearchParams()
    for (let [entry, value] of Object.entries(o)) {
      searchParams.append(entry, value.toString());
    }

    return searchParams;
  }

  constructor(init?: InitArgs) {
    if(init) {
      this.authorization = init.authorization;
    }
  }

  async projects(params: any) {
    const queryParams = this.convertEntriesToURLSearchParams(params)
    return get("/v9/projects",queryParams, this.getHeaders());
  }
}


export async function get(path: string, queryParams: URLSearchParams, headers: Headers): Promise<any> {
  const url = new URL(path, basePath);

  for (let [entry, value] of queryParams.entries()) {
    url.searchParams.append(entry, value);
  }

  console.log(url)
  console.log(headers)

  const resp = await fetch(url, { headers });
  const json = await resp.json();
  return json;
};