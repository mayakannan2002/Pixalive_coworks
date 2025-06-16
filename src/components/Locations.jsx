import React, { useState } from 'react';
import image1 from './../assets/Gallery/gallery1.png';
import image2 from './../assets/Gallery/gallery2.png';
import image3 from './../assets/Gallery/gallery3.png';
import image4 from './../assets/Gallery/gallery4.png';
import image5 from './../assets/Gallery/gallery5.png';
import image6 from './../assets/Gallery/gallery6.png';

const GalleryContinuation = () => {
  const [isPaused, setIsPaused] = useState(false);

  const allImages = [
    { src: image1, title: 'Hall Area' },
    { src: image3, title: 'Nearby Metro' },
    { src: image2, title: 'Cabin Area' },
    { src: image4, title: 'Common Space' },
    { src: image5, title: 'Reception' },
    { src: image6, title: 'Office Overview' },
  ];

  const generateColumnGroups = (images) => {
    const columns = [];
    let i = 0;
    while (i < images.length) {
      const group = [
        images.slice(i, i + 2),
        images.slice(i + 2, i + 3),
        images.slice(i + 3, i + 5),
        images.slice(i + 5, i + 6),
      ];
      columns.push(...group.filter(col => col.length > 0));
      i += 6;
    }
    return columns;
  };

  const columnGroups = generateColumnGroups(allImages);
  const duplicatedGroups = [...columnGroups, ...columnGroups];

  return (
    <section className="py-16 px-0">
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-animation {
          animation: scrollX 20s linear infinite;
          display: flex;
          gap: 1rem;
          width: max-content;
        }
        .scroll-animation.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading Section */}
      <div className="max-w-[1280px] mx-auto px-3 flex flex-col md:flex-row gap-12 mb-10">
        <div className="md:w-1/2">
          <p className="text-[16px] sm:text-[18px] text-black text-center md:text-left leading-tight">Gallery</p>
        </div>
        <div className="md:w-2/2 max-w-[500px]">
          <p className="text-[24px] sm:text-[30px] md:text-[36px] leading-[140%] font-semibold text-black text-center md:text-left max-w-[600px]">
            A visual glimpse into our <br/>shared workspace — where <br/>focus, collaboration, and <br/>creativity meet in calm <br/>simplicity.
          </p>
        </div>
      </div>

      {/* Looping Gallery Section */}
      <div
        className="relative overflow-hidden max-w-[1280px] mx-auto px-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`scroll-animation ${isPaused ? 'paused' : ''}`}>
          {duplicatedGroups.map((column, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 flex-shrink-0 w-[200px] h-[420px]"
            >
              {column.map((img, subIndex) => (
                <div
                  key={subIndex}
                  className={`relative w-full overflow-hidden shadow-md group rounded-lg ${
                    column.length === 2 ? 'h-1/2' : 'h-full'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-lg font-semibold">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryContinuation;
