import {MediaType} from '../index';
import {Book} from '../../../../../common/media/Book';

export default {
    getRatingCardData: (book: Book) => ({
        title: book.title,
        subtitle: book.author,
        icon: 'book'
    }),
} as MediaType;
