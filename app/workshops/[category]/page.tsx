import React from "react";
import ProductCard from "@/components/product/ProductCard";
import { workshopData, workshopCategorySlugs } from "@/constants/workshops";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Content, Title } from "@/components/ui";
import TestimonialsSection from "@/components/testimonial/TestimonialsSection";

interface PageProps {
  params: {
    category: string;
  };
}

/* Static params (for static generation) */
export async function generateStaticParams() {
  return workshopCategorySlugs.map((slug) => ({ category: slug }));
}

/* SEO metadata */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const category = workshopData.category;

  if (!workshopCategorySlugs.includes(params.category)) {
    return {
      title: "Category Not Found",
    };
  }

  if (params.category === category.slug) {
    return {
      title: `${category.title} - Bedia Pottery`,
      description:
        category.description || `Explore ${category.title} workshops at Bedia Pottery`,
    };
  }

  // Generic metadata for other known slugs
  const humanTitle = params.category.replace(/-/g, " ");
  return {
    title: `${humanTitle} - Bedia Pottery`,
    description: `Explore ${humanTitle} workshops at Bedia Pottery`,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = workshopData.category;

  /* Check category exists */
  if (!workshopCategorySlugs.includes(params.category)) {
    notFound();
  }

  const categoryProducts = workshopData.workshops;

  return (
    <main className="min-h-screen bg-white">
      <div className="page-wrapper pt-24">
        {/* Header Section */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div className="flex-1">
            <Title className="mb-2.5 font-normal">{category.title}</Title>

            <Title className="mb-2.5 font-normal !text-2xl">
              ({category.shortDescription})
            </Title>
          </div>

          {category.description && (
            <div className="lg:max-w-lg flex-1">
              <Content>{category.description}</Content>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((workshop) => (
              <ProductCard
                key={workshop._id}
                product={{
                  id: workshop._id,
                  price: workshop.price,
                  title: workshop.title,
                  imageUrl: workshop.bannerImage,
                  slug: workshop.slug,
                  description: workshop.shortDescription,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No workshops available in this category.
            </p>
          </div>
        )}
      </div>
      <TestimonialsSection />
    </main>
  );
}
