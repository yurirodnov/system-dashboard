// export const convertBytes = (bytes: number | undefined, decimals: number = 2): string => {
//   if (bytes === 0) return "0 bytes";

//   const unit = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];

//   if (bytes) {
//     const i = Math.floor(Math.log(bytes) / Math.log(unit));

//     return `${parseFloat((bytes / Math.pow(unit, i)).toFixed(dm))} ${sizes[i]}`;
//   }

//   return "No data to convert";
// };

export type UnitTypes = "b" | "kb" | "mb" | "gb" | "tb";

export const unitConverter = (count: number, decimals: number = 2, from: UnitTypes, to: UnitTypes): string => {
  if (!count || count < 0) return `0 ${to}`;

  const powMap = {
    b: 0,
    kb: 1,
    mb: 2,
    gb: 3,
    tb: 4,
  };

  return `${Number(count * 1024 ** (powMap[from] - powMap[to])).toFixed(decimals)} ${to}`;
};
