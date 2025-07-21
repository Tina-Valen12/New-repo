jest.mock('axios');
const axios = require('axios');

async function fetchTestingRequestHeadersParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
        userId: 1,
        postId: 1
    },
    headers: {
      'CustomHeader1': 'Header1',
      'CustomHeader2': 'Header2'
    }
  });
  return response;
}

test('TestingRequestHeadersParams', async () => {
  const data = await fetchTestingRequestHeadersParams();
  expect(axios.get).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/posts',
    {
    params: {
        userId: 1,
        postId: 1,
      },
      headers: {
       'CustomHeader1': 'Header1',
       'CustomHeader2': 'Header2'
      }
    })})
