function showMore(city) {
  var moreInfo = document.getElementById('more-' + city);
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
      moreInfo.style.display = 'block';
  } else {
      moreInfo.style.display = 'none';
  }
}
