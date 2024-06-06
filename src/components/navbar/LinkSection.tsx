import { Link } from "react-router-dom";
type LinkSectionProps = {
  LinkTo: string;
  Icon: string;
  Label: string;
}

export default function LinkSection({ LinkTo, Icon, Label }: LinkSectionProps) {
  return (
    <Link to={LinkTo} className="flex gap-2 items-center">
      <span className={`${Icon}`} />
      <p>{Label}</p>
    </Link>
  )
}
