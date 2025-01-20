"use client";

const ImageFallback = (props: any) => {
  const { src, fallback, ...rest } = props;

  return (
    <img
      {...rest}
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = fallback;
      }}
    />
  );
};

export default ImageFallback;
