// Helper func, which will convert time from ms to minutes and hour
export const msToTime = (d: number | string): string => {
  const duration = Number(d)
  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration % 3600) / 60)
  const hoursText = h > 0 ? `${h}h` : ''
  const minutesText = m > 0 ? `${m}m` : ''
  
  return `${hoursText} ${minutesText}`
}
