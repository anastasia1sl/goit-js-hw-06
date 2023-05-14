const categoriesEl = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(category => {
  let categoryName = category.querySelector('h2').textContent;
  let categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName} Elements: ${categoryItemsCount}`);
});
