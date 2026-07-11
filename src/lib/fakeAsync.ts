import { systemData, type SystemData } from "@/data/systemData";

export const fakeAsync = (delay: number): Promise<SystemData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(systemData);
      } else {
        reject(new Error("Rejected!"));
      }
    }, delay);
  });
};
