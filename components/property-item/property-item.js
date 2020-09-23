export default function PropertyItem (props) {
  const {name, value, isNested} = props;

  return (
    <li key={name} className={`property__item${isNested ? ` property__item--nested` : ``}`}>
      <span className="property__name">{name}</span>
      <span className="property__value">{value}</span>
    </li>
  )
};
