export async function fetchData() {
  const response = await fetch('data.json');
  const data = await response.json();

  const summaryList = document.querySelector('.summary__list');
  
  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList = `summary__item summary__item_${item.category.toLowerCase()}`;

    const icon = document.createElement('img');
    icon.classList = 'summary__icon';
    icon.src = item.icon;
    icon.alt = `Icon ${item.category}`;

    const subcategory = document.createElement('p');
    subcategory.classList = `summary__subcategory summary__subcategory_${item.category.toLowerCase()}`;
    subcategory.textContent = item.category;

    const score = document.createElement('span');
    score.classList = 'summary__score';
    score.innerHTML = `<span class="summary__score-point">${item.score}</span> / 100`;

    listItem.appendChild(icon);
    listItem.appendChild(subcategory);
    listItem.appendChild(score);
    summaryList.appendChild(listItem);
  });
}