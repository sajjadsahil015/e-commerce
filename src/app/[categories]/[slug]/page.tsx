import SlugPage from "./slugPage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slugs = await params;
  return (
    <div className="mt-8 mb-16">
      <section className="text-gray-600 body-font overflow-hidden">
        <SlugPage params={slugs} />
      </section>
    </div>
  );
};

export default Page;
