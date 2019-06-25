import {MediaType} from '../index';
import {Book} from '../../../../../common/src/media/types/book/Book';

export default {
    getRatingCardData: (book: Book) => ({
        title: book.title,
        subtitle: book.author,
        icon: 'book'
    }),
} as MediaType;
