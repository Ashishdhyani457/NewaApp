import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl, newsUrl ,author,date} =this.props;
    return (
      <>
      <div className="card">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className='text-muted'>by {author?author:"unknown"} on {new Date(date).toTimeString()} </small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-primary">Read More</a>
  </div>
</div>
</>
    )
  }
}
