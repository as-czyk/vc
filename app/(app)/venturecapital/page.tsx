import db from '@/utils/db';

const getData = async () => {
  return await db.ventureCapitalist.findMany({});
};

const VentureCapitalPage = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            {item.description}
            {item.url}
          </div>
        );
      })}
    </div>
  );
};

export default VentureCapitalPage;
