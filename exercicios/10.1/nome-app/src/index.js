import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('function1'));


function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
return (<div>
  <div className="flex-row d-flex justify-content-around">
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
  </div>
  <div className="flex-row d-flex justify-content-around">
      <div className="col-sm-4">
          <Card
            featureImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d293becc-581e-47ac-a42e-64d2d6b91a40/db3q2fi-2439c882-3b68-4fb7-93f2-00ddb9777e74.jpg/v1/fill/w_600,h_893,q_75,strp/ghost_in_the_shell_by_kelogsloops_db3q2fi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODkzIiwicGF0aCI6IlwvZlwvZDI5M2JlY2MtNTgxZS00N2FjLWE0MmUtNjRkMmQ2YjkxYTQwXC9kYjNxMmZpLTI0MzljODgyLTNiNjgtNGZiNy05M2YyLTAwZGRiOTc3N2U3NC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.w0dHavGSoh5QPttKIT_NzoPKXGWJn8Mjv7Em4X9qYLo"
            title="Major Motoko Kusanagi"
            description="deviation by kelogsloops"
            link="https://www.deviantart.com/kelogsloops/art/Ghost-In-The-Shell-671382990"
          />
      </div>
      <div className="col-sm-4">
        <Card 
          featureImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bff2a1e-51c8-4afb-8c19-6db3a51db709/d9r66ss-7df3159c-e487-49ee-9274-bda9c938c3a9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiZmYyYTFlLTUxYzgtNGFmYi04YzE5LTZkYjNhNTFkYjcwOVwvZDlyNjZzcy03ZGYzMTU5Yy1lNDg3LTQ5ZWUtOTI3NC1iZGE5YzkzOGMzYTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IzRrAgmn9mgL1kbnw3LRWRK17hRqijWhcC9l8MsXQb8"
          title="Snake Plissken"
          description="deviation by cyberaeon"
          link="https://www.deviantart.com/cyberaeon/art/Snake-Plissken-589833964"
        />
      </div>
  </div>
  </div>
);
}

ReactDOM.render(<CardList />, document.getElementById('function2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
