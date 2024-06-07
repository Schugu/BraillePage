import { Link, useLocation } from "react-router-dom";
type LinkSectionProps = {
  LinkTo: string;
  Icon: string;
  Label: string;
}

export default function LinkSection({ LinkTo, Icon, Label }: LinkSectionProps) {
  const location = useLocation();
  return (
    <Link to={LinkTo} 
    className={` ${location.pathname === LinkTo ? 'text-white' : 'text-gray-400' }
    flex gap-2 items-center`}>
      <span className={`${Icon}`} />
      <p>{Label}</p>
    </Link>
  )
}
