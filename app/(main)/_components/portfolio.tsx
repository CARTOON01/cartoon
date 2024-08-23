import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const ImageCard = ({ imageSrc, title, link }: ImageCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 sm:h-64">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-xl mb-4 font-bold">{title}</h3>
        <Button 
          asChild
          variant="outline"
          className="w-full"
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Visit Website
          </a>
        </Button>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    {
      src: 'https://res.cloudinary.com/dh3g60rue/image/upload/v1724319319/portfolio/church_yjhatg.png',
      title: 'DC Website',
      link: 'https://dcriruta.org',
    },
    {
      src: 'https://res.cloudinary.com/dh3g60rue/image/upload/v1724319318/portfolio/law_me3iaf.png',
      title: 'Law Firm',
      link: 'https://law.briankamau.com',
    },
    {
      src: 'https://res.cloudinary.com/dh3g60rue/image/upload/v1724319320/portfolio/School_rdzunt.png',
      title: 'School Website',
      link: 'https://school.briankamau.com',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <ImageCard key={index} imageSrc={image.src} title={image.title} link={image.link} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;