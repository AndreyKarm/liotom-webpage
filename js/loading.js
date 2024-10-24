document.addEventListener('DOMContentLoaded', function() {
  const progressElement = document.querySelector('.progress');
  const temp = document.querySelector('.temp');
  const speed = 100;
  const totalBlocks = 30;
  
  let progressPercentage = 0;

  function computeProgressContent(percentage) {
    const filledBlocks = Math.round((percentage / 100) * totalBlocks);
    return '█ '.repeat(filledBlocks);
  }

  text = computeProgressContent(100);
  temp.textContent = text;
  progressElement.textContent = text;
  
  function getSpeed(percentage) {
    if (percentage < 20) {
      return (speed / 2) * 0.6;
    } else if (percentage < 50) {
      return (speed / 2) * 0.4;
    } else if (percentage < 80) {
      return (speed / 2) * 0.8;
    } else {
      return (speed / 2) * 0.2;
    }
  }

  function updateProgress() {
    progressPercentage += 1;
    progressElement.textContent = computeProgressContent(progressPercentage);

    if (progressPercentage < 100) {
      setTimeout(updateProgress, getSpeed(progressPercentage));
    } else {
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 800);
}
  }

  updateProgress();
});