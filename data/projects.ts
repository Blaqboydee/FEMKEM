export interface Project {
  id: string;
  image: string;
  caption: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    image: '/images/projects/project-1.jpg',
    caption: 'Commercial Lettuce Farm - 2,000 sq ft NFT System'
  },
  {
    id: 'project-2',
    image: '/images/projects/project-2.jpg',
    caption: 'Urban Rooftop Garden - Vertical Hydroponic Setup'
  },
  {
    id: 'project-3',
    image: '/images/projects/project-3.jpg',
    caption: 'Educational Institution - Training Hydroponic Lab'
  },
  {
    id: 'project-4',
    image: '/images/projects/project-4.jpg',
    caption: 'Greenhouse Tomato Production - DWC System'
  },
  {
    id: 'project-5',
    image: '/images/projects/project-5.jpg',
    caption: 'Herb Farm - Modular NFT Installation'
  },
  {
    id: 'project-6',
    image: '/images/projects/project-6.jpg',
    caption: 'Restaurant Partnership - Fresh Greens Supply System'
  }
];
