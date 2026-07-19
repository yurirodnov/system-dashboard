import { dashboardData, type DashboardData } from "@/data/systemData";

export const fakeAsync = (delay: number): Promise<DashboardData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(dashboardData);
      } else {
        reject(new Error("Rejected!"));
      }
    }, delay);
  });
};
