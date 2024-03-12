import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { UserBookModule } from './user-book/user-book.module';
import { BooksController } from './books/books.controller';
import { UsersController } from './users/users.controller';
import { CommentsController } from './comments/comments.controller';
import { UserBookController } from './user-book/user-book.controller';
import { BooksService } from './books/books.service';
import { UsersService } from './users/users.service';
import { UserBookService } from './user-book/user-book.service';
import { CommentsService } from './comments/comments.service';
import { ValidateMiddleware } from './validate.middleware';

@Module({
  imports: [BooksModule, UsersModule, CommentsModule, UserBookModule],
  controllers: [AppController, BooksController, UsersController, CommentsController, UserBookController],
  providers: [AppService, BooksService, UsersService, CommentsService, UserBookService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateMiddleware)  // Apply the ValidateMiddleware to 'books' route. But it doesn't work.
      .forRoutes('books');
  }
}
