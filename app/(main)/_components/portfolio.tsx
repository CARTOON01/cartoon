import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const ImageCard = ({ imageSrc, title, link }: ImageCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          Visit Website
        </a>
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
    <div className="flex justify-center gap-8">
      {images.map((image, index) => (
        <ImageCard key={index} imageSrc={image.src} title={image.title} link={image.link} />
      ))}
    </div>
  );
};

export default ImageGallery;
