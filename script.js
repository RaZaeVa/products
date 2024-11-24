const pages = document.querySelectorAll('.page'); // Все страницы
const pageTitle = document.getElementById('page-title'); // Название страницы
const prevButton = document.getElementById('prev-button'); // Кнопка "Назад"
const nextButton = document.getElementById('next-button'); // Кнопка "Вперед"
const container = document.querySelector('.carousel-container'); // Контейнер страниц

// Названия страниц
const pageTitles = ['СЛИВКИ', 'КОКТЕЙЛЬ', 'ЭСКИМО ЛЁД', 'БРИКЕТ', 'МАСЛО, СГУЩЁННОЕ МОЛОКО, МУКА', 'ЭСКИМО', 'МОЛОКО УЛЬТРАПАСТЕРИЗОВАННОЕ', 'МОРОЖЕНОЕ', 'МОРОЖЕНОЕ', 'МОЛОЧНЫЙ КОКТЕЙЛЬ', 'СЫР', 'МОЛОКО УЛЬТРАПАСТЕРИЗОВАННОЕ', 'КОНТЕЙНЕР', 'СЫР РАССОЛЬНЫЙ', 'ВАФЕЛЬНЫЙ СТАКАН, РОЖОК', 'ВАФЕЛЬНЫЙ СТАКАН', 'СЫР']; // Добавьте свои названия
let currentPageIndex = 0; // Индекс текущей страницы

// Функция для обновления отображения страницы
function updatePage() {
  container.style.transform = `translateX(-${currentPageIndex * 100}%)`;
  pageTitle.textContent = pageTitles[currentPageIndex];

  // Убедимся, что кнопки остаются видимыми (их положение не нужно обновлять здесь)
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
  currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length; // Круговая навигация
  updatePage();
});

nextButton.addEventListener('click', () => {
  currentPageIndex = (currentPageIndex + 1) % pages.length; // Круговая навигация
  updatePage();
});

// Инициализация
updatePage();
