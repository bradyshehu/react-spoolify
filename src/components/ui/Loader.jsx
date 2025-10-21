import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <>
      <div className="primary-bg min-vh-100"></div>
      <div className="spinner">
        <FontAwesomeIcon icon={faSpinner} size="3x" spin />
      </div>
    </>
  );
}
