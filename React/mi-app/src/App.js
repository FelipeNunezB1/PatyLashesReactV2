import './App.css';


function App(props) {
  // const nombre= 'Arturo Vidal'
  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Donde jugara arturo??</h2>
        <img src='https://www.elportaldeportivo.com/u/fotografias/m/2022/5/16/f960x540-34988_109063_0.jpg' className="App-logo" alt="logo" />
        {props.valor}
        <a
          className="App-link"
          href="https://www.elportaldeportivo.com/la-roja/2022/6/15/se-acabo-el-misterio-arturo-vidal-revelo-publicamente-donde-le-gustaria-jugar-13438.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Averigualo acá!
        </a>
      </header>
    </div>
  );
}

export default App;
