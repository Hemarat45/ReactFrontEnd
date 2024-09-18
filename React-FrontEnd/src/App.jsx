
import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Hemarat', Message: 'Hi There'},
    { name: 'BIG KUMA', Message: 'Hello..'}
  ];
  
  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} Message={data.Message} />
      ))}

      <Contact email="Hemarat@gugumail.com" phone ="191" />
    </div>
  );
}


export default App;
