import {useState} from 'react';
import PropertyItem from '../property-item/property-item';
import PropertyItemNested from '../property-item-nested/property-item-nested';
import {PropertyItem as PropItem, PropNestedItem} from '../../types';

type Items = PropItem | PropNestedItem;

type Props = {
  title: string;
  items: Items[];
}

export default function PropertyList (props: Props) {
  const {title, items} = props;
  const [isClosed, setClosed] = useState(false)

  return (
    <ul className="property__list">
      <li onClick={() => setClosed(!isClosed)} className={`property__header${isClosed ? ` property__header--closed` : ``}`}>
        <span className="property__description">{title}</span>
        <span className="property__description"></span>
      </li>
      {
        items.map((it) => {
          return !it.nested
            ? <PropertyItem key={it.name} name={it.name} value={it.value} isNested={false}/>
            : <PropertyItemNested key={it.name} item={it}/>
        })
      }
    </ul>
  )
};
