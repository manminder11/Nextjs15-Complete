const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("content loading...");
    }, 2000);
  });

  return <div>Loading happes here </div>;
};

export default page;
