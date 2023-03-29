React + TypeScript 를 공부합니다. 🤣🤣

## 목표

### 프론트엔드

- 페이지

  - [책 리스트 페이지](https://github.com/mtseo01/react/blob/main/src/pages/books/BookListPage.tsx)
    - [책 아이템 컴포넌트](https://github.com/mtseo01/react/blob/main/src/components/books/BookItem.tsx)
    - [책 추가 버튼 컴포넌트](https://github.com/mtseo01/react/blob/main/src/components/UI/AddButton.tsx)
  - [디테일 페이지](https://github.com/mtseo01/react/blob/main/src/pages/books/BookDetailPage.tsx)
    - [책 디테일 컴포넌트](https://github.com/mtseo01/react/blob/main/src/components/books/Book.tsx)
  - [작성 페이지(양방향)](https://github.com/mtseo01/react/blob/main/src/pages/books/BookPostPage.tsx)
    - [작성 폼 컴포넌트](https://github.com/mtseo01/react/blob/main/src/components/books/PostForm.tsx)
    - [이미지 업로드](https://github.com/mtseo01/react/blob/c8028989b037169ae3305c04886e9be703355037/src/pages/books/BookPostPage.tsx#L62-L68)
    - [이미지 미리보기](https://github.com/mtseo01/react/blob/c8028989b037169ae3305c04886e9be703355037/src/pages/books/BookPostPage.tsx#L37-L46)
  - [수정 페이지](https://github.com/mtseo01/react/blob/main/src/pages/books/BookUpdatePage.tsx)
    - [작성 폼 컴포넌트(재사용)](https://github.com/mtseo01/react/blob/main/src/components/books/PostForm.tsx)

- [API 호출 모듈](https://github.com/mtseo01/react/blob/main/src/api/books.tsx)
- 무한스크롤
- 라우터 (React-Router-Dom)
  - [라우터](https://github.com/mtseo01/react/blob/main/src/routes/index.tsx)
- 타입스크립트 적용

### 백엔드

- WAS (express)
- DB (mongoDB - mongoose)
  - [Model](https://github.com/mtseo01/react/blob/main/back/src/api/models/book.ts)
- 책 CRUD API

  - [생성](https://github.com/mtseo01/react/blob/56d44fd756290c27d7a6b3731178de2957d70f95/back/src/api/controllers/book.ts#L5-L29)
  - [읽기](https://github.com/mtseo01/react/blob/56d44fd756290c27d7a6b3731178de2957d70f95/back/src/api/controllers/book.ts#L31-L82)
  - [수정](https://github.com/mtseo01/react/blob/56d44fd756290c27d7a6b3731178de2957d70f95/back/src/api/controllers/book.ts#L84-L101)
  - [삭제](https://github.com/mtseo01/react/blob/56d44fd756290c27d7a6b3731178de2957d70f95/back/src/api/controllers/book.ts#L103-L120)

- 미들웨어
  - [multer 이미지 업로드](https://github.com/mtseo01/react/blob/main/back/src/api/middlewares/multer.ts)
- 타입스크립트 적용
