// export async function GET(){
//     return new Response('Hello World')
// }
import { movies } from "./db";
export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  const movie = await req.json();

  const Newmovie = { ...movie };
  movies.push(Newmovie);
  return new Response(JSON.stringify(Newmovie));
}
