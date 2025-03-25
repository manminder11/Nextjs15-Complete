const Allsigns = async ({ params }: { params: { allroutes: string[] } }) => {
  const { allroutes } = await params;
  console.log("---------------", allroutes);
  return (
    <div>
      all signes are caught here
      <h1>{allroutes}</h1>
      All routes{" "}
      {allroutes.map((P) => (
        <ul key={P}>
          <li>{P}</li>
        </ul>
      ))}
    </div>
  );
};

export default Allsigns;
