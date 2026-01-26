import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'surface' | 'accent';
}

export default function Section({ 
  children, 
  className, 
  backgroundColor = 'white' 
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    surface: 'bg-[#F9FAF9]',
    accent: 'bg-[#E6F4EA]'
  };

  return (
    <section className={clsx('py-16', bgColors[backgroundColor], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
