// Generate static paths for all courses at build time
export async function generateStaticParams() {
  // Add all your course slugs here
  return [
    { slug: 'example-course-1' },
    { slug: 'example-course-2' },
    // Add more courses as needed
  ];
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-navy mb-6">
        Course: {params.slug}
      </h1>
      <p className="text-lg text-gray-700">
        Individual course details will go here.
      </p>
    </div>
  );
}
