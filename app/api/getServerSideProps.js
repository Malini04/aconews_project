export async function getServerSideProps() {
    const res = await axios.get('https://gnews.io/api/v4/top-headlines', {
      params: {
        token: process.env.GNEWS_API_KEY,
        lang: 'en'
      }
    });
    return {
      props: {
        articles: res.data.articles
      }
    };
  }
  