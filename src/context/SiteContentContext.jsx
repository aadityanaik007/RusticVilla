import React, { createContext, useContext, useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_BOOKING_API_URL;

const SiteContentContext = createContext({
  content: {},
  images: {},
  galleryPhotos: [],
  loading: false,
  refetchGalleryPhotos: () => {},
});

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState({});
  const [images, setImages] = useState({});
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(!!API_BASE);

  const fetchGalleryPhotos = () => {
    if (!API_BASE) return;
    fetch(`${API_BASE}/api/gallery`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setGalleryPhotos(data || []))
      .catch(() => {});
  };

  useEffect(() => {
    if (!API_BASE) return;

    Promise.all([
      fetch(`${API_BASE}/api/content`).then((res) =>
        res.ok ? res.json() : {}
      ),
      fetch(`${API_BASE}/api/images`).then((res) =>
        res.ok ? res.json() : {}
      ),
      fetch(`${API_BASE}/api/gallery`).then((res) =>
        res.ok ? res.json() : []
      ),
    ])
      .then(([contentData, imagesData, galleryData]) => {
        setContent(contentData || {});
        setImages(imagesData || {});
        setGalleryPhotos(galleryData || []);
      })
      .catch(() => {
        // Backend unreachable — pages fall back to their bundled defaults.
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SiteContentContext.Provider
      value={{
        content,
        images,
        galleryPhotos,
        loading,
        refetchGalleryPhotos: fetchGalleryPhotos,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteText = (key, fallback) => {
  const { content } = useContext(SiteContentContext);
  return content[key] || fallback;
};

export const useSiteImage = (slot, fallback) => {
  const { images } = useContext(SiteContentContext);
  const override = images[slot];
  return {
    src: override?.url || fallback.src,
    alt: override?.alt || fallback.alt,
  };
};

export const useGalleryPhotos = () => {
  const { galleryPhotos, refetchGalleryPhotos } = useContext(SiteContentContext);
  return { galleryPhotos, refetchGalleryPhotos };
};

export const useHiddenStaticPhotoIds = () => {
  const raw = useSiteText("gallery.hidden_static_ids", "[]");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const useSiteContent = () => useContext(SiteContentContext);
