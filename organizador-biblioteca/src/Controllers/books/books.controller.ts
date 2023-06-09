import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookDTO } from 'src/DTO/book.dto';
import { Book } from 'src/Mongo/Interface/book.interface';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.booksService.getAllBooks();
  }

  @Get('/id/:bookID')
  async getBookById(@Param('bookID') bookID: string): Promise<Book> {
    return await this.booksService.getBookById(bookID);
  }

  @Get('/author/:authorName')
  async getBookByAuthorName(
    @Param('authorName') authorName: string,
  ): Promise<Book[]> {
    return await this.booksService.getBookByAuthorName(authorName);
  }

  @Get('/name/:bookName')
  async getBookByName(@Param('bookName') bookName: string): Promise<Book[]> {
    return await this.booksService.getBookByName(bookName);
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<Book> {
    return await this.booksService.saveBook(newBook);
  }

  @Patch(':bookID')
  async updateBook(
    @Param('bookID') bookID: string,
    @Body() book: BookDTO,
  ): Promise<Book> {
    return await this.booksService.updateBook(bookID, book);
  }

  @Delete(':bookID')
  async deleteBookByID(@Param('bookID') bookID: string): Promise<Book> {
    return await this.booksService.deleteBookByID(bookID);
  }
}
