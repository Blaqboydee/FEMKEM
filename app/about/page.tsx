import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/ui/Section';
import CTA from '@/components/shared/CTA';

export const metadata: Metadata = {
  title: 'About Us - FEMKEM Hydroponics',
  description: 'Learn about FEMKEM Hydroponics, our mission, values, and commitment to sustainable agriculture through innovative hydroponic solutions.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About FEMKEM Hydroponics"
        description="Pioneering sustainable agriculture through innovative hydroponic solutions"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Our Story
            </h2>
            <p className="text-[#555555] mb-6">
              FEMKEM Hydroponics was founded with a vision to revolutionize agriculture in Nigeria 
              and beyond. We believe that hydroponic farming is the future of sustainable food 
              production, offering solutions to challenges like water scarcity, land limitations, 
              and climate change.
            </p>
            <p className="text-[#555555] mb-6">
            With years of experience and a passionate team of agricultural experts, we&apos;ve 
              successfully implemented hydroponic systems across various scales - from small urban 
              gardens to large commercial farms. Our commitment to quality, innovation, and customer 
              success has made us a trusted partner for farmers and businesses looking to embrace 
              modern agriculture.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 mt-12">
              Our Mission
            </h2>
            <p className="text-[#555555] mb-6">
              To empower farmers and businesses with cutting-edge hydroponic technology and knowledge, 
              enabling sustainable, efficient, and profitable agriculture that contributes to food 
              security and environmental conservation.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 mt-12">
              Our Values
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-[#1E7F43] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#1A1A1A]">Excellence:</strong>
                  <span className="text-[#555555]"> We deliver the highest quality systems and services in every project.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E7F43] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#1A1A1A]">Innovation:</strong>
                  <span className="text-[#555555]"> We continuously adopt and implement the latest hydroponic technologies.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E7F43] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#1A1A1A]">Sustainability:</strong>
                  <span className="text-[#555555]"> We promote environmentally responsible farming practices.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E7F43] mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-[#1A1A1A]">Partnership:</strong>
                  <span className="text-[#555555]"> We build lasting relationships with our clients through reliable support.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section backgroundColor="surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Why Hydroponics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">90%</div>
              <p className="text-[#555555]">Less water usage compared to traditional farming</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">3x</div>
              <p className="text-[#555555]">Faster growth rate for most crops</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-[#1E7F43] mb-2">Year-round</div>
              <p className="text-[#555555]">Growing season regardless of weather</p>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}

