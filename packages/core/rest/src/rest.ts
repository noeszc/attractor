import ky from "ky";
const DEFAULT_BASE_URL = "https://acme.io/api/";

export type RestClientOptions = {
  baseUrl: string;
  token?: string;
};

export const createClient = (options: Partial<RestClientOptions>) => {
  const opts = {
    baseUrl: DEFAULT_BASE_URL,
    ...options,
  };

  const api = ky.extend({
    prefixUrl: opts.baseUrl,
    hooks: {
      beforeRequest: [
        (request) => {
          if (opts.token) {
            request.headers.set("Authorization", `Bearer ${opts.token}`);
          }
        },
      ],
    },
  });

  const request = async <T>(
    method: string,
    path: string,
    fields?: unknown,
  ): Promise<T> => {
    try {
      const json = await api(path, {
        method,
        ...(fields ? { json: fields } : {}),
      }).json();

      return json as T;
    } catch (error: any) {
      if (error.name === "HTTPError") {
        const json = await error.response?.json();

        const message =
          json?.error?.message ||
          (json && JSON.stringify(json)) ||
          error.message;

        throw new Error(`HTTP ${error.response.status}: ${message}`);
      }
      throw error;
    }
  };

  return {
    request,
  };
};

export type RestClient = ReturnType<typeof createClient>;
