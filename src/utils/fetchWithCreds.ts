type FetchProps = {
  url: string | undefined;
  reqMethod?: string;
};

function fetchWithCreds({ url, reqMethod }: FetchProps) {
  const methodMap = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];

  if (url === undefined) {
    throw new Error();
  }

  let reqToSend;

  if (reqMethod === undefined) {
    reqToSend = 'GET';
  } else {
    reqToSend = reqMethod;
  }

  if (!methodMap.includes(reqToSend)) {
    throw new Error('Incorrect request method.');
  }

  return fetch(url, { method: reqToSend, credentials: 'same-origin' });
}

export default fetchWithCreds;
