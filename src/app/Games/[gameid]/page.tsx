const G = async ({ params }: { params: { gameid: string } }) => {
  const { gameid } = await params;
  

  return <h1>my fav game is {gameid}</h1>;
};

// // Example usage of the G function
//G({ params: { gameid: "example-game-id" } });

export default G;
