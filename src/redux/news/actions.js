

/*
  * fetching new from newsapi
  */
export function getNews() {
  return dispatch => { fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-05&sortBy=publishedAt&apiKey=bbd9e904c0334f7ea6efce93d63beed7`, {
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


