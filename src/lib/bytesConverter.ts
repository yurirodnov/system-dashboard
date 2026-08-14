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
export type BaseTypes = 1024 | 1000;

export const convertUnits = (
  count: number | undefined,
  from: UnitTypes,
  to: UnitTypes,
  base: BaseTypes,
  decimals: number = 2,
): string => {
  if (!count || count < 0 || isNaN(count)) return `0 ${to}`;

  const powMap = {
    b: 0,
    kb: 1,
    mb: 2,
    gb: 3,
    tb: 4,
  };

  return `${(count * base ** (powMap[from] - powMap[to])).toFixed(decimals)} ${to}`;
};
