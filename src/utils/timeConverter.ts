export function timeConverter(totalTimeInMs: number): [string, string] {
    let totalTimeinSec = Math.floor(totalTimeInMs / 1000)
    const minutes = Math.floor(totalTimeinSec / 60)
    const seconds = totalTimeinSec % 60
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = seconds.toString().padStart(2, '0')
    
    return [formattedMinutes, formattedSeconds]
}


