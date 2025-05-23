import { useEffect, useState } from "react";
import Waldo from "./components/Waldo";
interface ImageTypes {
  source: string;
  correct_x_percent_min: number;
  correct_x_percent_max: number;
  correct_y_percent_min: number;
  correct_y_percent_max: number;
  id: string;
}

function getDeviceId() {
  const deviceId = localStorage.getItem("device_id");
  if (!deviceId) {
    const device_id = crypto.randomUUID();
    localStorage.setItem("device_id", device_id);
    return device_id;
  }
  return deviceId;
}

async function getImages() {
  try {
    const query = await fetch("http://localhost:7000/images", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": getDeviceId(),
      },
      mode: "cors",
    });
    const data = await query.json();
    console.log(data);
    return data.images;
  } catch (err) {
    console.error(err);
  }
}

function App() {
  const [images, setImages] = useState<ImageTypes[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageTypes>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedImages = await getImages();
        setImages(fetchedImages || []);
      } catch (err) {
        console.error("Failed to fetch images:", err);
        setError("Failed to load images. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <section className="flex flex-col items-center gap-y-4 p-2 md:gap-y-4 md:p-6">
      <span className="text-xl font-semibold">Select an image</span>
      <ul className="flex flex-row gap-x-5">
        {images.map((image) => (
          <li
            key={image.id}
            className="cursor-pointer transition-all duration-200 hover:scale-125"
          >
            <img
              src={image.source}
              alt="Waldo image"
              className="size-10 rounded-md border border-pink-600 p-1"
              onClick={() => setSelectedImage(image)}
            />
          </li>
        ))}
      </ul>
      <span className="text-4xl font-semibold text-pink-600">
        Where is Waldo?
      </span>
      <Waldo image={selectedImage} />
    </section>
  );
}

export default App;

export type { ImageTypes };
