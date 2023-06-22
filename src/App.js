import './App.css';
import icons from './icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const ICON_LOOKUP = icons.availableIcons.reduce((acc, cur) => {
  if (!(cur.prefix in acc)) {
    acc[cur.prefix] = {}
  }

  acc[cur.prefix][cur.iconName] = cur
  return acc
}, {})

function findIcon(key) {
  if ('string' !== typeof key) return
  const parts = key.split(' ')
  if (parts.length !== 2) return
  return ICON_LOOKUP[parts[0]] && ICON_LOOKUP[parts[0]][parts[1]]
}

function App() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="App" style={{ width: '400px' }}>
      <div>
        Available Icons
        <ul className="fa-ul">
          {
            icons.availableIcons.map(i =>
              <li key={`${i.prefix}-${i.iconName}`}>
                <span className="fa-li"><FontAwesomeIcon icon={i} /></span>
                prefix: {i.prefix}, iconName: {i.iconName}
              </li>
            )
          }
        </ul>
      </div>
      <div>
        <input type="text" onChange={(e) => setSelectedIcon(findIcon(e.target.value))} />
        <span style={{ marginLeft: '1em' }}>Hint: "fad rocket"</span>
      </div>
      <div>
        {
          selectedIcon
            ? <div>Selected: <FontAwesomeIcon icon={selectedIcon} /></div>
            : <div>
              <p>Default: <FontAwesomeIcon icon={icons.defaultIcon} /></p>
              <p>To select an icon, type the prefix and iconName of an available icon.</p>
              <p>Type the prefix and iconName, separated by a space.</p>
            </div>
        }

      </div>
    </div>
  );
}

export default App;
