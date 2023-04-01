import './PostForm.css';

// types
// import { BookObj } from '../../assets/types';

// component
import Card from '../UI/Card';

// props 구조 분해 할당 다시 해 보기.
export default function PostForm(props: any) {
  return (
    <Card>
      <div className="form-warp">
        <form id="postForm" onSubmit={props.clickPostBtnHandler}>
          <div>
            <input
              type="text"
              placeholder="책 제목"
              name="title"
              value={props.title}
              onChange={props.titleChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="작가 이름"
              name="author"
              value={props.author}
              onChange={props.authorChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="책 이미지 URL"
              name="imgUrl"
              value={props.imgUrl}
              onChange={props.imgUrlChangeHandler}
            />
          </div>

          <div>
            <textarea
              cols={50}
              rows={3}
              placeholder="책 내용 중 마음에 들었던 문구를 입력해 주세요."
              name="quote"
              value={props.quote}
              onChange={props.quoteChangeHandler}></textarea>
          </div>
          <div>
            <input
              type="file"
              name="bookImage"
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
            {props.bookImage && (
              <img
                className="thumbnail"
                src={`http://localhost:3001/` + props.bookImage}
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
