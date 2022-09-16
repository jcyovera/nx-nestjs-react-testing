
export class CatModel {
  constructor(
    public name: string,
    public age: number,
    public breed: string,
    public id?:number,
  ) {}
}

export const mapCat = (rawContact: any): CatModel => {
  return new CatModel(
    rawContact.name,
    rawContact.age,
    rawContact.breed,
    rawContact.id
  );
}
