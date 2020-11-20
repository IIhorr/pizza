import React, {useState}  from 'react';

const Categories = ({ items }) => {

  const [state, setstate] = useState(null);

  const onSelectedItem = (index) => {
    setstate(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={state === null ? 'active' : null}>Все</li>
        {items && items.map((item, index) => (
          <li className={state === index ? 'active' : null} onClick={() => onSelectedItem(index)} key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
