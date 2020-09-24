import PropertyList from '../property-list/property-list';

export default function Properties (props) {
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
