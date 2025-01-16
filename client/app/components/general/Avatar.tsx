import Image from "next/image";

interface AvatarProps {
  image?: string;
}

function Avatar({ image }: AvatarProps) {
  if (image) {
    return (
      <Image
        src={image}
        alt="Avatar"
        width={64} // Sabit genişlik
        height={64} // Sabit yükseklik
      />
    );
  }
  return (
    <Image
      src="https://res.cloudinary.com/dgoothqal/image/upload/v1730673960/avatar3_oronth.png"
      alt="default image"
      width={64}
      height={64}
    />
  );
}

export default Avatar;
