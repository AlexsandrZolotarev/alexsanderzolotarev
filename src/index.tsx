import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root') as HTMLElement;

if(rootElement){
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );  
}
else {
  console.error("❌ Root element not found in DOM!");
}


