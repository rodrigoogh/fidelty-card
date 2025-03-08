export function updateProgress({cutsRemaining, cutsNeeded, totalCuts}) {
    document.getElementById("remaining-cuts").innerHTML = cutsRemaining

    const progressBar = document.getElementById("progress-bar")
    progressBar.max = cutsNeeded
    progressBar.value = totalCuts

    document.getElementById("current-amount").innerHTML = totalCuts
    document.getElementById("max-cuts").innerHTML = cutsNeeded
}