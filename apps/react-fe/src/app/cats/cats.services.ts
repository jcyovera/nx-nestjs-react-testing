import { mapCat } from "./cats.interface";

export const getAll = async () => {
  const apiUrl='http://localhost:3333/api/cats/';
  const response = await fetch(apiUrl);
  const json = await response.json();
  return json;
}
export const getMaperAllCats = (json:[])=>{
  const catsData=[];
  for(const item of json) {
    catsData.push(mapCat(item));
  }
  return catsData;
}
