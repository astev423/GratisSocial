type SpinningIconProps = {
  size?: number | string;
};

export default function SpinningIcon({ size = 40 }: SpinningIconProps) {
  return (
    <div
      className="rounded-full border-2 border-gray-300 border-t-transparent animate-spin"
      style={{ width: size, height: size }}
    />
  );
}
