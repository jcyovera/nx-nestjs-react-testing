// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useGetCats } from "./cats.hook";

const Cats = ()=> {
  const { data, loading, error } = useGetCats();
  console.log(data);
  return data &&(
    <div>
    {data.map(({ id, name }) => (
        <div key={id}>
            {name}
        </div>
    ))}
</div>
  );
}

export default Cats;
