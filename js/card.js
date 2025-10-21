function startCounter() {
  class Counter {
    constructor(config) {
      this.count = config.initValue;
      this.stepSize = config.stepSize;
      this.name = config.name;
      this.errorMessage = config.errorMessage;

      this.counterShower = document.querySelector('.counterShower');
      const buttonsParent = document.querySelector('.counter');
      this.errorText = document.querySelector('.errorText')
      this.updateCounter()
      buttonsParent.addEventListener('click', this.clickHandler.bind(this))
    }

    updateCounter() {
      console.log(this.count + ' ' + this.name);
      this.counterShower.textContent = this.count;
    }


    clickHandler(e) {
      const target = e.target;
      const isBtn = target.tagName === 'BUTTON';

      if (this.count > 0) {
        if (isBtn) {
          if (target.classList.contains('plus')) {
            this.count += this.stepSize;
          } else if (target.classList.contains('minus')) {
            this.count -= this.stepSize;
          }
          this.updateCounter()
        }
      }
      else {
        this.errorText.textContent = this.errorMessage;
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }

  const myCounterConfig = {
    name: "Nadia",
    initValue: 1,
    stepSize: 1,
    errorMessage: 'Количество товара - не меньше одного!'
  }

  const myCounter = new Counter(myCounterConfig);

  console.log(myCounter);
}

startCounter()

function startThumbnail() {
  document.addEventListener("DOMContentLoaded", function () {
    const bigImage = document.querySelector(".bigImg");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
        bigImage.src = this.src;
      });
    });
  });

}

startThumbnail()


document.querySelectorAll('.cardPriceBox').forEach(card => {
  const newPriceElem = card.querySelector('.cardNewPrice');
  const oldPriceElem = card.querySelector('.cardOldPrice');
  const discountElem = card.querySelector('.cardDiscount');

  if (newPriceElem && oldPriceElem && discountElem) {
    const newPrice = parseFloat(newPriceElem.textContent.replace(/\s|₽/g, ''));
    const oldPrice = parseFloat(oldPriceElem.textContent.replace(/\s|₽/g, ''));

    if (oldPrice > newPrice) {
      const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
      discountElem.textContent = `-${discount}%`;
    } else {
      discountElem.textContent = '';
    }
  }
});


function closePayedInfoInit() {
  const cardPayedInfoBtn = document.querySelector('.cardPayedInfoBtn');
  const payText = document.querySelector('.payText');

  if (!cardPayedInfoBtn || !payText) return;

  cardPayedInfoBtn.addEventListener('click', () => {
    payText.classList.toggle('hide');
  });
}

closePayedInfoInit();