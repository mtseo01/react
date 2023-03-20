import img from '../../assets/logo.svg';
import './Spinner.css';
export default function Spinner() {
  return (
    <div>
      <img src={img} alt="spinner" className="spinner" />
    </div>
  );
}
