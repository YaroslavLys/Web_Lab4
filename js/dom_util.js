export const EDIT_BUTTON_PREFIX = 'edit-button-';
const nameInput = document.getElementById("name_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");
const volumeInput = document.getElementById("volume_input");

const cardsContainer = document.getElementById("cards_container");

const cardTemplate = ({ id, name, description, price, volume }) => `
<li id="${id}" class="card">
  <img
    src="https://cb2.scene7.com/is/image/CB2/TrioVasesWhiteSHF16/$web_pdp_main_carousel_xs$/190905021603/3-piece-trio-vase-set.jpg"
    class="card__image" alt="card">
  <div>
    <h5>${name}</h5>
    <p>${description}</p>
    <p>Price: ${price} $.</p>
    <p>Volume: ${volume} liters.</p>
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">
      Edit
    </button>
  </div>
</li>`;

export const addCardToPage = ({ _id: id, name, description, price, volume }, onEditItem) => {
    cardsContainer.insertAdjacentHTML(
      "afterbegin",
      cardTemplate({ id, name, description, price, volume })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
  };

  export const renderCardsList = (cards) => {
    cardsContainer.innerHTML = "";
    for (const card of cards) {
      addCardToPage(card);
    }
  }; 

  export const getInputValues = () => {
    return {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value,
        volume: volumeInput.value
    };
  };
  export const clearInputs = () => {
    nameInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
    volumeInput.value = "";
  };