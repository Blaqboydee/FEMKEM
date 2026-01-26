import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/ui/Section';
import CTA from '@/components/shared/CTA';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Projects - FEMKEM Hydroponics',
  description: 'View our portfolio of successful hydroponic installations including commercial farms, urban gardens, and educational facilities.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Showcasing successful hydroponic installations across various scales and applications"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: { id: string; image: string; caption: string }) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for project images */}
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Project Image</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#555555] text-center">
                  {project.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section backgroundColor="surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Project Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">50+</div>
              <p className="text-[#555555]">Completed Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">100%</div>
              <p className="text-[#555555]">Client Satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">5+</div>
              <p className="text-[#555555]">Years Experience</p>
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to Start Your Project?"
        description="Let's discuss your hydroponic farming goals and create a customized solution for your needs."
      />
    </>
  );
}

