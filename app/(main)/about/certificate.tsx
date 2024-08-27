import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface CertificateProps {
  imageSrc: string;
  title: string;
  link: string;
}

const Certificate = ({ 
  imageSrc,
  title, 
  link 
}: CertificateProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-dotted border-green-950">
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
          variant="custom"
          className="w-full"
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Verify
          </a>
        </Button>
      </div>
    </div>
  );
};

const CertificateGallery = () => {
  const images = [
    {
      src: 'https://cartoon09.s3.eu-north-1.amazonaws.com/17-short-specializations-certificate-brian-kamau.png',
      title: 'Software Engineering',
      link: 'https://intranet.alxswe.com/certificates/xFSNeYGLTz',
    },
    {
      src: 'https://cartoon09.s3.eu-north-1.amazonaws.com/jr.png',
      title: 'Junior Penetration Tester',
      link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-IBWROO548I.png',
    },
    {
      src: 'https://cartoon09.s3.eu-north-1.amazonaws.com/web.png',
      title: 'Responsive Web Design',
      link: 'https://freecodecamp.org/certification/Briangugi/responsive-web-design',
    },
    {
    src: 'https://cartoon09.s3.eu-north-1.amazonaws.com/ibm.png',
    title: 'Compliance Framework & System Administration',
    link: 'https://www.coursera.org/account/accomplishments/certificate/YDM6WHNFTHMW',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <Certificate key={index} imageSrc={image.src} title={image.title} link={image.link} />
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;