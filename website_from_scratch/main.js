lucide.createIcons();

const proportionsToggle = document.getElementById('proportions');
proportionsToggle.checked = false
const ingredientAmounts = document.querySelectorAll('.ingredients .amount');

proportionsToggle.addEventListener('change', function() {
  ingredientAmounts.forEach((ingredientAmount) => {
    let amount = parseFloat(ingredientAmount.textContent);
    if (this.checked) {
      amount = amount * 2;
    } else {
      amount = amount / 2;
    }

    ingredientAmount.textContent = amount;
  });
});

