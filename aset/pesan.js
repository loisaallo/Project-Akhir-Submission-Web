const getPesanan = () => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        renderAllFoods(JSON.parse(xhr.responseText).data.foods);
    };

    xhr.open('GET', 'http://localhost:5000/foods',true);
    xhr.send();
};

const insertFood = (food) => {
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        alert(JSON.parse(xhr.responseText).message);
        getPesanan();
    }

    xhr.open('POST', 'http://localhost:5000/foods',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(food));
  };

  const removeFood = (foodId) => {
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        alert(JSON.parse(xhr.responseText).message);
        getPesanan();
    }
    xhr.open('DELETE', `http://localhost:5000/foods/${foodId}`,true);
    xhr.send();
  };

const renderAllFoods = (foods) => {
    const listFoodElement = document.getElementById('listFood');
    listFoodElement.innerHTML = '';
    for(let food of foods){
        listFoodElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card" style="background-color: rgb(210 105 30)">
            <div class="card-body">
              <h5>${food.makanan}</h5>
              <h5>${food.minuman}</h5>
              <p>${food.harga}</p>
              <button type="button" class="btn button-delete" id="${food.id}" style="width: 150px;
              height: 40px;
              background-color: red;
              margin: 0 auto;
              border: none;
              box-shadow: 2px 2px 4px lightgray;
              cursor: pointer;">Hapus
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const buttons = document.querySelectorAll('.button-delete');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        const foodId = event.target.id;
        removeFood(foodId);
      });
    });
  };

document.addEventListener('DOMContentLoaded', () => {
    const inputFoodTitle = document.querySelector('#inputFoodTitle');
    const inputDrinkTitle = document.querySelector('#inputDrinkTitle');
    const inputPriceTitle = document.querySelector('#inputPriceTitle');
    const buttonSave = document.querySelector('#buttonSave');

    buttonSave.addEventListener('click', function () {
      const food = {
        makanan: inputFoodTitle.value,
        minuman: inputDrinkTitle.value,
        harga: Number(inputPriceTitle.value)
      };
      insertFood(food);
    });
    getPesanan();
});
