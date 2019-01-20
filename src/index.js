import _ from 'lodash';
import FormContainer from "./js/components/container/FormContainer.jsx";

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  // const wrapper = document.getElementById("create-article-form");
  // wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;