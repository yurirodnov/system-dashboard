export const convertBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return "0 bytes";

  const unit = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB"];

  const i = Math.floor(Math.log(bytes) / Math.log(unit));

  return `${parseFloat((bytes / Math.pow(unit, i)).toFixed(dm))} ${sizes[i]}`;
};
