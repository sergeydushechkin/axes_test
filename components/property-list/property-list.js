import PropertyItem from '../property-item/property-item';
import {useState} from 'react';
import PropertyItemNested from '../property-item-nested/property-item-nested';

export default function PropertyList (props) {
  const {title, items} = props;
  const [isClosed, setClosed] = useState(false)

  return (
    <ul className="property__list">
      <li onClick={() => setClosed(!isClosed)} className={`property__header${isClosed ? ` property__header--closed` : ``}`}>
        <span className="property__description">{title}</span>
        <span className="property__description"></span>
      </li>
      {
        items.map((item) => {
          return !item.nested
            ? <PropertyItem key={item.name} name={item.name} value={item.value} isNested={false}/>
            : <PropertyItemNested key={item.name} item={item}/>
        })
      }
    </ul>
  )
};
