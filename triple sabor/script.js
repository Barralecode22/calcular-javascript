document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelectorAll(".produCt button");
    const productListContainer = document.querySelector(".addedProductsList");
    const totalPriceElement = document.querySelector(".precioTotal");

    let productQuantities = {};
    const productPrices = {
        "Helado de caramelo salado con blondies sin máquina de helado": 12030,
        "3x1 en helados que decees": 5500,
        "1 KG DE HELADO": 10150
    };

    function updateTotalPrice() {
        let totalPrice = 0;
    
        for (const title in productQuantities) {
            const quantity = productQuantities[title];
            const price = productPrices[title];
            totalPrice += quantity * price;
        }
    
        totalPriceElement.textContent = `$${totalPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    }
    
    

    addButton.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.closest(".produCt");
            const productTitle = product.querySelector("h3").textContent;

            if (productQuantities[productTitle]) {
                productQuantities[productTitle] += 1;

                const addedProductElement = productListContainer.querySelector(`.addedProduct[data-product="${productTitle}"]`);
                const productAmountElement = addedProductElement.querySelector(".amount");
                productAmountElement.textContent = `${productQuantities[productTitle]}`;
            } else {
                productQuantities[productTitle] = 1;

                const addedProductElement = document.createElement("div");
                addedProductElement.classList.add("addedProduct");
                addedProductElement.setAttribute("data-product", productTitle);

                const productNameElement = document.createElement("h3");
                productNameElement.textContent = productTitle;

                const productAmountElement = document.createElement("p");
                productAmountElement.classList.add("amount");
                productAmountElement.textContent = `${productQuantities[productTitle]}`;

                const removeIcon = document.createElement("span");
                removeIcon.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0977 13.3166 14.0977 12.6834 13.7071 12.2929L8.41424 6.99999L13.7071 1.7071C14.0977 1.31657 14.0977 0.68341 13.7071 0.292886C13.3166 -0.0976387 12.6834 -0.0976387 12.2929 0.292886L7.00003 5.58578L1.70714 0.292885C1.31661 -0.0976392 0.683448 -0.0976393 0.292924 0.292885C-0.0976009 0.683409 -0.097601 1.31657 0.292924 1.7071L5.58582 6.99999L0.292924 12.2929C-0.0976006 12.6834 -0.0976006 13.3166 0.292924 13.7071C0.683448 14.0976 1.31661 14.0976 1.70714 13.7071L7.00003 8.41421L12.2929 13.7071Z" fill="#6B4F4F"/>
                    </svg>
                `;
                removeIcon.classList.add("remove-icon");
                removeIcon.style.cursor = "pointer";
                removeIcon.style.marginLeft = "10px";
                removeIcon.addEventListener("click", () => {
                    if (productQuantities[productTitle] > 1) {
                        productQuantities[productTitle] -= 1;
                        productAmountElement.textContent = `${productQuantities[productTitle]}`;
                    } else {
                        delete productQuantities[productTitle];
                        addedProductElement.remove();
                    }
                    updateTotalPrice();
                });

                addedProductElement.appendChild(productNameElement);
                addedProductElement.appendChild(productAmountElement);
                addedProductElement.appendChild(removeIcon);
                productListContainer.appendChild(addedProductElement);
            }

            updateTotalPrice();
        });
    });
});