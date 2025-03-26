import { redirect } from "next/navigation";
const page = () => {
  redirect("/Redirect/R2");
  return <div>you will be redirected to R2 from this page</div>;
};

export default page;
