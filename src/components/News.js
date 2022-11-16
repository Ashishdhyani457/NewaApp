import React, { Component } from 'react'
import NewsItem from './NewsItem'
import ClipLoader from 'react-spinners/ClipLoader';

export default class News extends Component {
static defaultProps={
  country:"in",
  category:"general"

}
// static PropTypes={
//   country:PropTypes.string,
//   category:PropTypes.string
// }
  
constructor(){
  super();
  this.state={
    articles:[],
    loding:true,
    page:1,
    totalResults:0
  }
}
async componentDidMount(){
 this.setState({loding:true})
    console.log('cdm')
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2687787697d541c3ab1d1cdabfa77db7&page=${this.state.page}&pageSize=20`
   await fetch(url).then(res=>
    res.json()
    ).then(data=>{
      console.log(data)
        this.setState({
          articles:data.articles,
          totalResults:data.totalResults,
          loding:false
        })
    })
}
handlePrev=()=>{
  this.setState({loding:true})
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2687787697d541c3ab1d1cdabfa77db7&page=${this.state.page-1}&pageSize=20`
    fetch(url).then(res=>
    res.json()
    ).then(data=>{
      console.log(data)
        this.setState({
          articles:data.articles,
          page:this.state.page-1,
          loding:false
          
        })
    })
}
handleNext=()=>{
  this.setState({loding:true})
  if(this.state.page+1>Math.ceil(this.state.totalResults/20)){
console.log("e nd")
  }else{

  
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2687787697d541c3ab1d1cdabfa77db7&page=${this.state.page+1}&pageSize=20`
   fetch(url).then(res=>
   res.json()
   ).then(data=>{
     console.log(data)
       this.setState({
         articles:data.articles,
         page:this.state.page+1,
         loding:false
       })
   })
  }
}

  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center my-2">News Monkey Top Headlines</h2>
     
        {this.state.loding && <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
      <ClipLoader color="#52bfd9" size={100}/>
    </div>
  }

        <div className="row">
            {
            console.log(this.state.articles)
            }
        { !this.state.loding && this.state.articles?.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}></NewsItem>
          </div>
        })}
      </div>
      <div className='container d-flex justify-content-between'>
      <button  disabled={this.state.page<2} type="button" class="btn btn-primary" onClick={this.handlePrev}>Prev</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-primary" onClick={this.handleNext}>Next</button>
      </div>
      </div>
    )
  }
}