

/*
  * fetching new from newsapi
  */
export function getNews() {
  return dispatch => { fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-04&sortBy=publishedAt&apiKey=4c04198ad5c9456f96a48b03b8162c30`, {
      method: 'GET',
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
     return dispatch({
        type: 'fetchNews',
        data
      });
    })
    .catch((error) => {
        throw error
    })
  }
}


