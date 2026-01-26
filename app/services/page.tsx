import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/shared/CTA';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services - FEMKEM Hydroponics',
  description: 'Comprehensive hydroponic services including system installation, maintenance, training, and consultation for sustainable agriculture.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive hydroponic solutions tailored to your agricultural needs"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: { id: string; title: string; shortDescription: string }) => (
            <Card key={service.id}>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                {service.title}
              </h3>
              <p className="text-[#555555]">
                {service.shortDescription}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section backgroundColor="surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 text-center">
            What&apos;s Included in Our Services
          </h2>
          <div className="space-y-6 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Initial Consultation
              </h3>
              <p className="text-[#555555]">
                Free site assessment and needs analysis to determine the best hydroponic solution for your requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Custom Design
              </h3>
              <p className="text-[#555555]">
                Tailored system design that maximizes your space and meets your crop production goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Professional Installation
              </h3>
              <p className="text-[#555555]">
                Expert installation by our trained technicians using high-quality materials and components.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Training & Support
              </h3>
              <p className="text-[#555555]">
                Comprehensive training on system operation, maintenance, and crop management, plus ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}

