import {useState} from 'react';
import PropertyItem from '../property-item/property-item';

export default function PropertyItemNested (props) {
  const {item} = props;
  const {name, items} = item;
  const [isClosed, setClosed] = useState(false)

  return (
    <li onClick={() => setClosed(!isClosed)} className={`property__item property__item--description ${isClosed ? ` property__item--closed` : ``}`}>
      <span className="property__name">{name}</span>
      <ul className="property__list property__list--nested">
        {
          items.map((item) => <PropertyItem key={item.name} name={item.name} value={item.value} isNested={true}/>)
        }
      </ul>
    </li>
  )
};
