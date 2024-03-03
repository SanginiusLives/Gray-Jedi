import logo from './logo.svg';
import Party from './Party.js';
import partyMembers from './members-list.js';
import AssetReader from './AssetReader.js'
import GroundAssets from './GroundAssets.js';
import SpecialAssets from './SpecialAssets.js';
import OtherAssets from './OtherAssets.js';
import Collapsible from './Collapse.js';
import './App.css';

function App() {
  console.log(partyMembers)

  return (
    <div className="App">
      <h2>Lycan Squad</h2>
      <div className='flex'>
      {partyMembers.map(p =>
          <Party key={p.name} name={p.name} status={p.status} imgLink={p.imgLink}/>
        )}
    </div>

        <h2>Overlord Battalion Assets</h2>
        <Collapsible title="Fleet Assets">
        <AssetReader />
        </Collapsible>

        <Collapsible title="Ground Assets">
        <GroundAssets />
        </Collapsible>

        <Collapsible title="Special Assets">
        <SpecialAssets />
        </Collapsible>

        <Collapsible title="Other Assets">
        <OtherAssets />
        </Collapsible>
    </div>
  );
}

export default App;
