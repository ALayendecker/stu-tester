import React from "react";
import "./style.css";

function Card(props) {
  //const { title, description, thumbnailUrl, viewUrl, gitHubURL } = props;

  return (
    // <p>test</p>
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={props.thumbnailUrl} alt={props.title}></img> 
        <p>{props.title}</p>
        <div className="card-body">
          <p className="card-text">{props.description}.</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Repo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

/*  <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


<div classNameName="col">
      <div classNameName="card shadow-sm">
        <img src={thumbnailUrl} classNameName="bd-placeholder-img card-img-top" width="100%" height="300" role="img" aria-label="Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt={title} />
        <div classNameName="card-body">
          <h5 classNameName="card-title">{title}</h5>
          <p classNameName="card-text">{description}</p>
          <div classNameName="d-flex justify-content-between align-items-center">
            <div classNameName="btn-group">
              <a href={viewUrl} classNameName="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <div classNameName="btn-group">
              <a href={gitHubURL} classNameName="btn btn-sm btn-outline-secondary">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>*/
