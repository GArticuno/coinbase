export const statusFormatter = (status: number) => {
  switch (status) {
    case 0:
      return 'In Progress';
    case 1:
      return 'Completed';
    case 2:
      return 'Failed';
    default:
      return 'Unknown';
  }
};
