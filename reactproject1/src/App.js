//import logo from './logo.svg';
//import './App.css';


class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang");
document.write(mycar.show());


function App() {
  return (
      <div className="App">
          <h1>Hello World!</h1>
      </div>
  );
}

export default App;
