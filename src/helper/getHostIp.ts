import os from "os";

export default function getHostIpAdress(): string | undefined {
  const hostIp = os
    .networkInterfaces()
    .eth0?.find((entry) => entry.family === "IPv4");

  return hostIp?.address;
}
