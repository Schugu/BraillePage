import { Link, useLocation } from "react-router-dom";
type LinkSectionProps = {
  LinkTo: string;
  Icon: string;
  Label: string;
  tabIndex?: number;
}

export default function LinkSection({ LinkTo, Icon, Label, tabIndex }: LinkSectionProps) {
  const location = useLocation();
  return (
    <Link to={LinkTo} tabIndex={tabIndex}
    className={` ${location.pathname === LinkTo ? 'text-blue-100 hover:text-blue-300' : 'text-blue-100 text-opacity-60 hover:text-blue-100' }
    flex gap-2 items-center`}>
      <span className={`${Icon}`} />
      <p>{Label}</p>
    </Link>
  )
}
