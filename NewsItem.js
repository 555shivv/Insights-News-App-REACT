import React from "react";
 const  NewsItem =(props)=> {
    
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
         
      <div>
        <div className="card" style={{border:'2px solid black'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'10%'}}
>{source}</span>          <img src={imageUrl} className="card-img-top" style={{objectFit:'cover',height:'300px',width:'405px'}} alt="https://i.pinimg.com/originals/41/dd/d2/41ddd2d4cc0dabdf6ebbee30a941cc36.png" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <div className="container">
            <button type="button" class="btn btn-outline-primary bg-info">
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-btn primary" style={{color:'black',textDecoration:'none'}}>
              Read More
            </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default NewsItem;
