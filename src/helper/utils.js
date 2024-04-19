import axios from "axios";

const API_TOKEN_TMDB =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTlkOGU2YzBlYjc3OWY2ZjAzYjdlYjdlNTIxMjc5NyIsInN1YiI6IjVmNGY1ZjlhMDNmMGI2MDAzMjE0NDdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPuP2q8Yup_f3aLDkDbOZ6ZDgFMMuYvwifVze00QDpE";

export async function fetcher(url, method = "GET") {
  const res = await axios
    .request({
      headers: {
        Authorization: `Bearer ${API_TOKEN_TMDB}`,
      },
      method: method,
      url: url,
    })
    .catch((err) => {
      console.log(err);
    });

  return { data: res?.data || {} };
}

export function getImageURL(url) {
  return `https://image.tmdb.org/t/p/original${url}`;
}
