import { v4 as uuidv4 } from 'uuid';

export class DishModel {
  id?: string;
  name: string;
  description: string;
  available: boolean;
  type: DishTypeEnum;

  constructor(name: string, description: string, type: DishTypeEnum) {
    this.name = name;
    this.description = description;
    this.type = type;

    this.id = uuidv4();
    this.available = true;
  }

}

export enum DishTypeEnum {
  Burger,
  Pasta
}
