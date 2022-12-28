export const formatProfileStatus = (status: number) => {
  switch (status) {
    case 0:
      return 'Offline';
    case 1:
      return 'Online';
    default:
      return 'Busy';
  }
};
