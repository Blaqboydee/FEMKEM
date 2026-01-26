interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#E6F4EA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
