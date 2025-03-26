import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movie = movies.find((m) => m.id === Number(id));

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}
