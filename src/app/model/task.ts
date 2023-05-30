import { Category } from './category';
import { Column } from './column';
export class Task {
    id: number = 0;
    title: string = '';
    description: string = '';
    dtForecast: string = '';
    order: number = 0;
    columnId: number = 0;
    categoryId: number = 0;
    column: Column = new Column();
    category: Category = new Category();
}