import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [layers, setLayers] = useState([{ id: 1, values: ['', '', '', ''] }]);
  
  const handleAddLayer = () => {
    setLayers([...layers, { id: layers.length + 1, values: ['', '', '', ''] }]);
  };

  const handleRemoveLayer = (index) => {
    const updated = layers.filter((_, i) => i !== index);
    setLayers(updated);
  };

  const handleChange = (index, subIndex, value) => {
    const updated = [...layers];
    updated[index].values[subIndex] = value;
    setLayers(updated);
  };

  return (
    <div className="container">
      <h1>Новая Расчёт</h1>
      <div className="layers-section">
        <button onClick={handleAddLayer}>+ Добавить слой</button>
        {layers.map((layer, index) => (
          <div key={layer.id} className="layer">
            {layer.values.map((val, i) => (
              <input
                key={i}
                type="text"
                value={val}
                onChange={(e) => handleChange(index, i, e.target.value)}
                placeholder={['E=λ/λ', 'Re(ε)', '|μ|', 'd'][i]}
              />
            ))}
            <button onClick={() => handleRemoveLayer(index)}>Удалить</button>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button>Сохранить</button>
        <button>Расчёты</button>
      </div>
      <div className="charts">
        <div className="chart">График 1</div>
        <div className="chart">График 2</div>
        <div className="chart">График 3</div>
      </div>
    </div>
  );
};

export default App;
