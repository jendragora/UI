// Функция для расчета противоположного цвета
function calculateComplementaryColor() {
    const colorInput = document.getElementById("colorInput").value;
    const errorMessage = document.getElementById("errorMessage");
    
    // Регулярное выражение для проверки формата 16-ричного цвета
    const colorRegExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (colorRegExp.test(colorInput)) {
        errorMessage.textContent = '';
        
        // Преобразуем 16-ричное значение цвета в RGB
        const r = parseInt(colorInput.slice(1, 3), 16);
        const g = parseInt(colorInput.slice(3, 5), 16);
        const b = parseInt(colorInput.slice(5, 7), 16);
        
        // Рассчитываем противоположный цвет
        const rComp = 255 - r;
        const gComp = 255 - g;
        const bComp = 255 - b;

        // Формируем результат в виде строки 16-ричного значения
        const complementaryColor = `#${rComp.toString(16).padStart(2, '0')}${gComp.toString(16).padStart(2, '0')}${bComp.toString(16).padStart(2, '0')}`;

        // Отображаем цвета в соответствующих блоках
        const originalColorBox = document.getElementById("originalColorBox");
        originalColorBox.style.backgroundColor = colorInput;

        const complementaryColorBox = document.getElementById("complementaryColorBox");
        complementaryColorBox.style.backgroundColor = complementaryColor;

        // Выводим результат на страницу
        const originalColor = document.getElementById("originalColor");
        originalColor.textContent = colorInput;

        const complementaryColorElement = document.getElementById("complementaryColor");
        complementaryColorElement.textContent = complementaryColor;
    } else {
        errorMessage.textContent = 'Введите корректное значение цвета в формате "#RRGGBB".';
    }
}
