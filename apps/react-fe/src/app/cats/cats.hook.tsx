import { CatModel} from './cats.interface';
import { getAll, getMaperAllCats } from './cats.services';
import { useGetQuery } from './generic.hook';

export const useGetCats = () => {
  const { data, loading, error } = useGetQuery<CatModel>(
    getAll,
    getMaperAllCats
  );

  return { data, loading, error };
};
