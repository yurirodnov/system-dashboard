interface StaticCPU {
  manufacturer: string;
  modelName: string;
  cores: number;
  currentLoad: number;
  currentTemperature: number;
}

interface StaticMemory {
  memoryTotal: number;
  memoryFree: number;
  memoryUsedPercent: number;
  memoryUsedCount: number;
}

interface StaticGPU {
  modelName: string | undefined;
  gpuMemoryTotal: number | undefined;
  gpuMemoryFree: number | undefined;
  gpuMemoryUsed: number;
  gpuMemoryUsedPercent: number;
  gpuLoad: number;
  gpuTemperature: number;
}

interface StaticOs {
  osName: string;
  arch: string;
  uptime: number;
}

export interface Disk {
  diskNumber: number;
  diskName: string;
  diskSizeTotal: number;
}

export interface FS {
  fsNumber: number;
  spaceTotal: number;
  spaceUsed: number;
  usedPercent: number;
}

interface StaticSystem {
  uptime: number;
}

export interface StaticCommon {
  cpu: StaticCPU;
  memory: StaticMemory;
  gpu: StaticGPU;
  os: StaticOs;
  disk: Disk[];
  fs: FS[];
  system: StaticSystem;
}

// Dynamic data

interface DynamicCPU {
  cpuLoad: number;
  cpuTemperature: number;
}

export interface DynamicMemory {
  memoryUsedPercent: number;
  memoryUsedCount: number;
}

interface DynamicSystem {
  uptime: number;
}

export interface DynamicCommon {
  cpu: DynamicCPU;
  memory: DynamicMemory;
  system: DynamicSystem;
}
