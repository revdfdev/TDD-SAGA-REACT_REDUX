import axios from "axios";

const reflect = p => p.then(v => ({ v, status: "fulfilled" }), e => ({ v: {}, status: "rejected" }));

export async function getPosts() {
  const res = await reflect(axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'));

  if (res.e) {
    return {};
  }

  const response = res.v;

  return response;
}
