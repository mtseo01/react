import './App.css';
import BookItem from './components/Book/BookItem';

export interface Books {
  id: number;
  title: string;
  author: string;
  quote: string;
  imgUrl: string;
  likes: number;
}

const App = () => {
  const books: Books[] = [
    {
      id: 1,
      title: '데미안',
      author: '헤르만 헤세',
      quote:
        '새는 알에서 나오기 위해 투쟁한다. 알은 세계이다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다. 새는 신에게로 날아간다. 그 신의 이름은 아프락사스다.',
      imgUrl:
        'https://comicthumb-phinf.pstatic.net/20220818_186/pocket_1660800013258fR49F_JPEG/9788937493447_%B5%A5%B9%CC%BE%C8_v2.jpg?type=m260',
      likes: 3,
    },

    {
      id: 2,
      title: '인간실격',
      author: '다자이 오사무',
      quote:
        '부끄럼 많은 생애를 보냈습니다. 저는 인간의 삶이라는 것을 도저히 이해할 수 없습니다.',
      imgUrl:
        'https://comicthumb-phinf.pstatic.net/20220822_213/pocket_1661155681944WfF11_JPEG/9788937494031_%C0%CE%B0%A3%BD%C7%B0%DD_v2.jpg?type=m260',
      likes: 0,
    },
    {
      id: 3,
      title: '연금술사',
      author: '파울로 코엘료',
      quote:
        '자네가 무언가를 간절히 원할 때 온 우주는 자네의 소망이 실현되도록 도와준다네',
      imgUrl:
        'https://comicthumb-phinf.pstatic.net/20211007_56/pocket_1633561223093EnyWu_JPEG/kpc_etc83336329404338523399788954631112.jpg?type=m260',
      likes: 0,
    },
    {
      id: 4,
      title: '설국',
      author: '가와바타 야스나리',
      quote: '국경의 긴 터널을 빠져나오자, 설국이었다',
      imgUrl:
        'https://comicthumb-phinf.pstatic.net/20220822_96/pocket_1661152762212izl9a_JPEG/9788937493614_%BC%B3%B1%B9_v2.jpg?type=m260',
      likes: 0,
    },
  ];
  const alertTitle = (title: string): void => {
    alert(title);
  };

  return (
    <div className="App">
      <h1>Here With Contents!</h1>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} data={book} alertTitle={alertTitle} />
        ))}
      </div>
    </div>
  );
};

export default App;
