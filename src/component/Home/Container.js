import { connect } from 'react-redux';

// Actions
import * as NewsActions from '@redux/news/actions';

// The component we're mapping to
import FormRender from './View';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  newsData: state.news.newsData,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getNews: NewsActions.getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
