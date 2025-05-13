fetch('banner.html')
  .then(response => response.text())
  .then(data => {
    const bannerContainer = document.getElementById('banner-container');
    if (bannerContainer) bannerContainer.innerHTML = data;
  });
