import axios, { Method } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const defaultHeaders = {
  'Content-Type': 'application/json'
};
interface RequestConfig {
  path: string;
  method: Method;
  headers?: Record<string, string>;
  body?: any;
}

export const apiRequest = async (requests: RequestConfig[]): Promise<any[]> => {
  try {
    const axiosRequests = requests.map(({ path, method, headers = {}, body = null }) =>
      axios({
        url: path,
        method,
        headers: { ...defaultHeaders, ...headers },
        data: body
      })
    );

    const responses = await axios.all(axiosRequests);

    return responses.map((response) => response.data.content);
  } catch (error) {
    console.error('Error when executing request:', error);
    throw error;
  }
};

export const activateAuthToken = async () => {
  const [authToken] = await apiRequest([
    {
      path: '/v1/auth',
      method: 'POST',
      headers: {
        'bypass-tunnel-reminder': 'true'
      },
      body: { initData: (window as any).Telegram.WebApp.initData }
    }
  ]);
  axios.defaults.headers.get['Authorization'] = authToken;
};
