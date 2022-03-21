export default minutes => {
  let durationStr = `${minutes} min`;
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    durationStr = `${hours} hr`;
    const remainingMins = minutes % 60;

    if (remainingMins > 0) {
      durationStr = `${durationStr} ${remainingMins} min`;
    }
  }

  return durationStr;
};
