import Book from '../../../schema/bookSchema';

const BookCtrl = {
  async create(ctx) {
    // request body에서 값들을 추출
    const {
      title,
      authors,
      publishedDate,
      price,
      tags
    } = ctx.request.body;
  
    // Book 인스턴스 생성
    const book = new Book({
      title,
      authors,
      publishedDate,
      price,
      tags
    })
  
    /**
     * p.s. 만들어진 Book 인스턴스를 이렇게 수정할 수 있음
     * book.title = title
     * 
     * save() 메소드를 실행하여 db에 데이터를 작성
     * Promise 반환
     */
    try {
      await book.save();
    } catch (e) {
      /**
       * HTTP 상태 500 / Internal Error 라는 메세지를 반환,
       * 에러를 기록합니다.
       */
      return ctx.throw(500, e);
    }
  
    ctx.body = book; // 저장한 결과를 반환
  },

  async list(ctx) {
    let books;
    try {
      /**
       * 데이터 조회
       * exec() 메소드를 find() 메소드 뒤에 붙어야 데이터 베이스 요청 가능
       * 반환값은 Promise이므로 await를 사용할 수 있음
       */
      books = await Book.find().exec();
    } catch(e) {
      return ctx.throw(500, e)
    }

    ctx.body = books;
  },

  async rev(ctx) {
    let books;
    try {
      books = await Book;
      books.find();
      books.sort({_id: -1}); // _id를 기준으로 역순 정렬
      books.limit(3); // 3개반만 보여지도록 정렬
      books.exec(); // 데이터를 서버에 요청
    } catch (e) {
      return ctx.throw(500, e);
    }

    ctx.body = books;
  },

  async get(ctx) {
    // URL 파라미터에서 id 값을 읽어옴
    // https://localhost:4000/api/books/:id
    // :id 파라미터가 ctx.params 부분
    const { id } = ctx.params;
    
    let book;
    try {
      book = await Book.findById(id).exec();
    } catch(e) {
      if (e.name === 'CastError') {
        ctx.status = 400;
        return;        
      }
      return ctx.throw(500, e)
    }

    if(!book) {
      ctx.status = 404;
      ctx.body = { message: 'book not found '};
      return;
    }

    ctx.body = book;
  },

  async remove(ctx) {
    const { id } = ctx.parmas;

    try {
      await Book.findByIdAndRemove(id).exec();
    } catch (e) {
      if (e.name === 'CastError') {
        ctx.status = 400;
        return;
      }
    }

    ctx.status = 204; // No Content
  },

  async put(ctx) {
    const { id } = ctx.params;
    let books;

    try {
      /**
       * id로 찾아서 내용을 업데이트함
       * 파라미터는 (아이디, 변경할 값, 설정) 순서입니다.
       */
      books = await Book;
      books.findByIdAndUpdate(id, ctx.request.body, {
        upsert: true, // 해당 옵션은 '데이터가 존재하지 않으면 새로 생성'
        new: true // 해당 옵션은 '업데이트된 값을 반환함'
                  // 해당 옵션이 없으면 ctx.body = books 를 했을때 업데이트 전의 데이터를 보여줌.
      })
    } catch (e) {
      return ctx.throw(500, e);
    }

    ctx.body = books;
  }
}

export default BookCtrl;