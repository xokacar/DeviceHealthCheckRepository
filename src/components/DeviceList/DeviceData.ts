export default interface devData {
  id: string;
  title: string;
  ip: string;
  port: string;
  isWorking: string;
}

export const DeviceDATA:devData[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Device',
      ip: '123.3213.3123',
      port:'8080',
      isWorking: 'online',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Device',
      ip: '13.9999.3123',
      port:'8090',
      isWorking: 'offline',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Device',
      ip: '12.8888.3123',
      port: '3030',
      isWorking: 'unknown',
    },
    {
      id: '58694a0f-124234234234-145571e29d72',
      title: 'Fourth Device',
      ip: '353.8888.3123',
      port: '3030',
      isWorking: 'online',
    },
    {
      id: '58694a0f-3423423553435-1e29d72',
      title: 'Fifth Device',
      ip: '45.8888.3123',
      port: '3030',
      isWorking: 'offline',
    },
  ];
