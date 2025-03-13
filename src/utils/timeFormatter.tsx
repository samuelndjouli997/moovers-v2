/**
 * @param duration - Duration in seconds
 * @returns The formatted time as mm:ss
 */
export function timeFormatter(duration: number): string {
    if (duration < 0) {
      throw new Error("Duration cannot be negative.");
    }
  
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
  
    const formattedSeconds = seconds.toString().padStart(2, "0");
  
    return `${minutes}:${formattedSeconds}`;
  }
  