import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/82b994f4-cc33-425d-8d33-bc59670e459c-ig1aj7.png",
  "https://utfs.io/f/6355d45b-e695-4997-abb9-57569773aa71-iisayn.png",
  "https://utfs.io/f/f650936b-b1f9-4f5b-a523-a3d54024385b-3gqapk.png",
  "https://utfs.io/f/ab176c5e-9f9a-4896-acdc-f2a58f48f7c7-pde5t4.png",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
