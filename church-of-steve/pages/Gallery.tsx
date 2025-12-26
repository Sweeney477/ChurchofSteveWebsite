import React, { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = sanity ? imageUrlBuilder(sanity) : null;
function urlFor(source: any) {
  return builder ? builder.image(source) : null;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (!sanity) {
          console.warn('Sanity not configured; skipping gallery fetch.');
          return;
        }
        const data = await sanity.fetch(`*[_type == "galleryImage"] | order(order asc)`);
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-black">
      <header className="py-24 text-center">
        <h1 className="font-display text-white text-6xl md:text-9xl uppercase tracking-tighter mb-4">Vibe <span className="text-primary">Vault.</span></h1>
        <p className="text-gray-500 tracking-[0.2em] uppercase text-xs">A Visual History of Doing Absolutely Nothing</p>
      </header>

      <section className="px-4 pb-24 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 font-display uppercase tracking-widest text-gray-400">Loading Vibes...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={img._id} className={`relative overflow-hidden group rounded-lg ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2 h-[600px]' : 'h-[300px]'}`}>
                <img
                  src={img.image && urlFor(img.image) ? urlFor(img.image)!.url() : "https://via.placeholder.com/600x400"}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-primary font-display uppercase tracking-widest text-sm mb-2">Phase {i + 1}</p>
                    <h3 className="text-white font-display text-3xl uppercase">{img.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="py-20 text-center border-t border-white/10">
        <button className="text-white/30 hover:text-white font-display uppercase tracking-widest text-xs transition-all">Load More Vibes (Maybe)</button>
      </footer>
    </div>
  );
};

export default Gallery;
