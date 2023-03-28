import './PostForm.css';

// types
// import { BookObj } from '../../assets/types';

// component
import Card from '../UI/Card';

// props 구조 분해 할당 다시 해 보기.
export default function PostForm(props: any) {
  const submitFormHandler = (event: any) => {
    event.preventDefault();
    props.clickPostBtnHandler();
  };
  return (
    <Card>
      <div className="form-warp">
        <form onSubmit={submitFormHandler}>
          <div>
            <input
              type="text"
              placeholder="책 제목"
              value={props.title}
              onChange={props.titleChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="작가 이름"
              value={props.author}
              onChange={props.authorChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="책 이미지 URL"
              value={props.imgUrl}
              onChange={props.imgUrlChangeHandler}
            />
          </div>

          <div>
            <textarea
              cols={50}
              rows={3}
              placeholder="책 내용 중 마음에 들었던 문구를 입력해 주세요."
              value={props.quote}
              onChange={props.quoteChangeHandler}></textarea>
          </div>
          <div>
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              onChange={props.imgFileChangeHandler}
            />
          </div>
          <div className="thumbnail-area">
            {props.imageSrc && (
              <img
                className="thumbnail"
                src={props.imageSrc}
                alt="preview-img"
              />
            )}
          </div>
          <button type="submit">{props.buttonName}</button>
        </form>
      </div>
    </Card>
  );
}
