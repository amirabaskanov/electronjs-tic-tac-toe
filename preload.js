window.addEventListener('DOMContentLoaded', () => {
  // Existing version display code
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
  }
  
  // Add any additional preload functionality here
});