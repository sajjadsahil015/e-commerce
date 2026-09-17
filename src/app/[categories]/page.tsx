import CategoryContent from "@/components/category-content";
const Page = async ({ params }: { params: Promise<{ categories: string }> }) => {
  const { categories } = await params;

  return (
    <div>
       <CategoryContent props={categories} />
    </div>
  );
};

export default Page;