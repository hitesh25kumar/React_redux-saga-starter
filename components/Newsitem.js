import React from 'react';
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}


  console.log('news item...',article)
 
let NewsItem = ({article}) => (
 
article ?
<View>
<Text style={{fontWeight :'bold'}}>
{article.title}
</Text>
          <Image
          style={{width: '100%', height: 350,margin:'0%',marginTop:15}}
          source={{uri: `${article.urlToImage}`}}
        />
<Text>
{article.description}
</Text>
</View>
: <Text></Text>
)

const mapStateToProps =(state) => ({
  article: state.news
});

NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;