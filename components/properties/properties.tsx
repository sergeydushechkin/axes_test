import PropertyList from '../property-list/property-list';
import {Properties as PropertiesType} from '../../types';

interface Props {
  properties: PropertiesType[];
}

export default function Properties (props: Props) {
  const {properties} = props;

  return (
    <section className="main__property property">
      {
        properties.map((property) => {
          return (
            <PropertyList key={property.title} title={property.title} items={property.items} />
          )
        })
      }
    </section>
  )
};
