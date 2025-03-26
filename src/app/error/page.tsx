const page = () => {
  if (2 < 10) {
    throw new Error("This is an intentional error");
  }
  return <div>you are about to see the error intentionally </div>;
};

export default page;
