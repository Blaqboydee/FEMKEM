export interface Service {
  id: string;
  title: string;
  shortDescription: string;
}

export const services: Service[] = [
  {
    id: 'hydroponic-setup',
    title: 'Hydroponic System Setup',
    shortDescription: 'Complete installation of modern hydroponic systems tailored to your space and crop requirements. From design to implementation.'
  },
  {
    id: 'system-maintenance',
    title: 'System Maintenance & Support',
    shortDescription: 'Regular maintenance, troubleshooting, and optimization services to ensure your hydroponic system runs efficiently year-round.'
  },
  {
    id: 'training-consultation',
    title: 'Training & Consultation',
    shortDescription: 'Expert guidance and hands-on training for farmers and businesses looking to transition to hydroponic agriculture.'
  },
  {
    id: 'nutrient-management',
    title: 'Nutrient Management Solutions',
    shortDescription: 'Customized nutrient formulations and pH balancing services to maximize crop yield and quality in your hydroponic system.'
  },
  {
    id: 'commercial-projects',
    title: 'Commercial Scale Projects',
    shortDescription: 'End-to-end project management for large-scale commercial hydroponic farms, from feasibility studies to full operation.'
  },
  {
    id: 'urban-farming',
    title: 'Urban Farming Solutions',
    shortDescription: 'Space-efficient hydroponic systems designed for urban environments, rooftops, and small-scale growers.'
  }
];
