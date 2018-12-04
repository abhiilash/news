import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ListView, Linking, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: ds.cloneWithRows([]),
      isLoading: false
    };
  }

  componentWillMount(){
    this.setState({isLoading: true})
    this.props.getNews()
  }

  componentWillReceiveProps(nextProps){
    if('newsData' in  nextProps && 'articles' in nextProps.newsData){
      this.setState({isLoading: false, articles: ds.cloneWithRows(nextProps.newsData.articles)})
    }
  }

  renderNews(rowData){
    return(
      <TouchableOpacity onPress={()=> Linking.openURL(rowData.url)}>
        <Card>
          <CardImage 
            source={{uri: rowData.urlToImage ? rowData.urlToImage : 'http://www.gaby-moreno.com/administrator/public_html/images/no-image.gif'}} 
          />
          <CardTitle 
            subtitleAbove={true}
            title={rowData.title}
            subtitle={rowData.author ? rowData.author : ''}
           />
           <CardContent text={rowData.content ? rowData.content : ''}/>
         </Card>
      </TouchableOpacity>
    )
  }

  render() {
    const {articles, isLoading} = this.state
    return (
      <View style={styles.container}>
        {isLoading ?
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#e91e63" />
            <Text style={styles.loaderText}>fetching news...</Text>
          </View>
        :
          <ListView
            dataSource={articles}
            renderRow={(rowData) => this.renderNews(rowData)}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  loaderText: {
    color: '#e91e63', 
    fontSize: 20
  }
});