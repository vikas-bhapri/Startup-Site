import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import SearchBar from "../../components/SearchBar";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({ searchParams }: {searchParams : Promise<{query?: string}>}) {

  const query = (await searchParams).query
  const params = { search: query || null };
  const session = await auth();
  

  const {data: posts} = await sanityFetch({ query: STARTUP_QUERY, params })

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Post your blogs <br /> Connect with the world! 
        </h1>
        <p className="sub-heading max-w-3xl">
          Share your thoughts with everyone...
        </p>
        <SearchBar query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Posts`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
