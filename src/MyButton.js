import { Link } from "react-router-dom";
import Weather from "./Weather";
  
const MyButton = ({ to }) => {
  
    return (
        <Link to={`/${to}`}>
            <button className="my-button">
                Take me to {to === '' ? < Weather /> : to}
            </button>
        </Link>
    )
}
  
export default MyButton;