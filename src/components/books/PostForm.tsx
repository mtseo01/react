import './PostForm.css';
import Card from '../UI/Card';
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
          <button type="submit">생성</button>
        </form>
      </div>
    </Card>
  );
}