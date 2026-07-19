export interface SystemInfo {
  hostname: string;
  os: string;
  arch: string;
  uptime: number; // в секундах
}

export interface CpuData {
  model: string;
  physicalCores: number;
  logicalCores: number;
  usagePercent: number;
  clockSpeedMhz: number;
}

export interface MemoryData {
  totalBytes: number;
  usedBytes: number;
  availableBytes: number;
  usagePercent: number;
  swapTotalBytes: number;
  swapUsedBytes: number;
}

export interface DiskData {
  mountPoint: string;
  fstype: string;
  totalBytes: number;
  usedBytes: number;
  freeBytes: number;
  usagePercent: number;
  readBytesPerSec: number;
  writeBytesPerSec: number;
}

export interface NetworkData {
  interfaceName: string;
  ip: string;
  mac: string;
  totalBytesSent: number;
  totalBytesRecv: number;
  bytesSentPerSec: number;
  bytesRecvPerSec: number;
}

export interface ProcessData {
  pid: number;
  name: string;
  cpuPercent: number;
  memPercent: number;
}

export interface DashboardData {
  system: SystemInfo;
  cpu: CpuData;
  memory: MemoryData;
  disks: DiskData[];
  networks: NetworkData[];
  topProcesses: ProcessData[];
}

// Полный мок для фронтенда
export const dashboardData: DashboardData[] = [
  {
    system: {
      hostname: "YURI-PC",
      os: "Windows 11 Pro",
      arch: "x86_64",
      uptime: 32450, // ~9 часов работы
    },
    cpu: {
      model: "AMD Ryzen 7 5800X",
      physicalCores: 8,
      logicalCores: 16,
      usagePercent: 34.5,
      clockSpeedMhz: 3800,
    },
    memory: {
      totalBytes: 34359738368, // 32 GB
      usedBytes: 14495514624, // ~13.5 GB
      availableBytes: 19864223744, // ~18.5 GB
      usagePercent: 42.2,
      swapTotalBytes: 4294967296, // 4 GB
      swapUsedBytes: 1073741824, // 1 GB
    },
    disks: [
      {
        mountPoint: "C:\\",
        fstype: "NTFS",
        totalBytes: 1099511627776, // 1 TB (SSD)
        usedBytes: 439804651110, // ~400 GB
        freeBytes: 659706976666, // ~600 GB
        usagePercent: 40.0,
        readBytesPerSec: 5242880, // 5 MB/s
        writeBytesPerSec: 2097152, // 2 MB/s
      },
      {
        mountPoint: "D:\\",
        fstype: "NTFS",
        totalBytes: 2199023255552, // 2 TB (HDD)
        usedBytes: 1319413953331, // ~1.2 TB
        freeBytes: 879609302221, // ~800 GB
        usagePercent: 60.0,
        readBytesPerSec: 10485760, // 10 MB/s
        writeBytesPerSec: 52428800, // 50 MB/s
      },
    ],
    networks: [
      {
        interfaceName: "Ethernet",
        ip: "192.168.1.42",
        mac: "A1:B2:C3:D4:E5:F6",
        totalBytesSent: 15432098765,
        totalBytesRecv: 98765432109,
        bytesSentPerSec: 1048576, // 1 MB/s
        bytesRecvPerSec: 15728640, // 15 MB/s
      },
      {
        interfaceName: "Wi-Fi",
        ip: "192.168.1.43",
        mac: "F6:E5:D4:C3:B2:A1",
        totalBytesSent: 543210987,
        totalBytesRecv: 2109876543,
        bytesSentPerSec: 0,
        bytesRecvPerSec: 0,
      },
    ],
    topProcesses: [
      { pid: 14520, name: "chrome.exe", cpuPercent: 12.5, memPercent: 8.4 },
      { pid: 8932, name: "node.exe", cpuPercent: 5.2, memPercent: 4.1 },
      { pid: 4512, name: "discord.exe", cpuPercent: 3.8, memPercent: 3.2 },
      { pid: 1024, name: "System", cpuPercent: 2.1, memPercent: 1.5 },
      { pid: 18900, name: "vite.exe", cpuPercent: 1.8, memPercent: 2.0 },
    ],
  },
];
