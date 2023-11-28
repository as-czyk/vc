import db from '@/utils/db';

const getData = async () => {
  return await db.ventureCapitalist.findMany({});
};

const VentureCapitalPage = async () => {
  const data = await getData();
  return (
    <div style={{ gridArea: '2 / 2 / 3 / 5' }}>
      {data.map((item) => {
        return (
          <div
            style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}
            key={item.id}
          >
            <span>{item.name}</span>
            <span>{item.url}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VentureCapitalPage;
