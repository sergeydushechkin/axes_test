import {useState} from 'react';
import PropertyItem from '../property-item/property-item';
import {PropNestedItem} from '../../types';

interface Props {
  item: PropNestedItem;
}

export default function PropertyItemNested (props: Props) {
  const {item} = props;
  const {name, items} = item;
  const [isClosed, setClosed] = useState(false)

  return (
    <li onClick={() => setClosed(!isClosed)} className={`property__item property__item--description ${isClosed ? ` property__item--closed` : ``}`}>
      <span className="property__name">{name}</span>
      <ul className="property__list property__list--nested">
        {
          items.map((it) => <PropertyItem key={it.name} name={it.name} value={it.value} isNested={true}/>)
        }
      </ul>
    </li>
  )
};
