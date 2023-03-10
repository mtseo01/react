import { useNavigate } from 'react-router-dom';
import './AddButton.css';

function AddButton() {
  const navigate = useNavigate();
  const clickAddBtnHandler = () => {
    navigate('/books/post');
  };
  return (
    <div className="add-btn-wrap">
      <button className="add-btn" onClick={clickAddBtnHandler}>
        +
      </button>
    </div>
  );
}

export default AddButton;
