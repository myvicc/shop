export class Shop {
    categoriesList = document.querySelector(".categories");
    goodsList = document.querySelector(".goods");
    detailsWrapper = document.querySelector(".details");


    constructor(config) {
        this.config = config;
    }

   init () {
        this.render();
        this.categoriesList.addEventListener("click", ({ target }) => {
            if (target.matches("li")) {
                const {id} = target.dataset;
                const categories = this.config.categories.find((item) => item.id === +id);
                const goods = this.config.goods.filter((item) => categories.goodsIds.includes(item.id));
                this.renderGoods(goods);
            }
        });

        this.goodsList.addEventListener("click", ({ target }) => {
            const listItem = target.closest("li");
            if (target.matches("li") || listItem) {
                const { id } = listItem.dataset;
                const good = this.config.goods.find((item) => item.id ===+id);
                this.renderDetails(good);
            }
        });
        this.detailsWrapper.addEventListener("click", ({ target}) => {
            if (target.matches("button")) {
                this.clearGoods();
                this.clearDetails();
                this.showMessage();
            }
        })

   }

   render () {
        this.renderCategories();

   }

   renderCategories () {
        this.config.categories.forEach(({ name, id, goods }) => {
            const categoryItem = document.createElement("li");
            categoryItem.classList.add("categories__item");
            categoryItem.innerText = name;
            this.categoriesList.append(categoryItem);

            categoryItem.dataset.id = id;

        })
   }

   clearDetails () {
       this.detailsWrapper.innerHTML = "";
   }

   clearGoods () {
       this.goodsList.innerHTML = "";
   }

   showMessage (good) {
        alert("you have bought this good");
   }


   renderGoods (goods) {
        this.clearGoods();
        goods.forEach(({ name, id, price, imgSrc}) => {
            const goodItem = document.createElement("li");
            goodItem.dataset.id = id;
            goodItem.classList.add("goods__item");
            goodItem.innerHTML = `
                <img src="${imgSrc}" alt="">
                <h4>${name}</h4>
                <p>${price} UAH</p>`;
            this.goodsList.append(goodItem);

        });
   }

   renderDetails({name, price, imgSrc, description}) {
        this.clearDetails();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `
            <img src="${imgSrc}" alt="">
            <h2>
                ${name}
            </h2>
            <p>
                ${description}
            </p>
            <h3>
                ${price} UAH
            </h3>
            <button class="btn btn-primary w-100">
                Buy
            </button>
            `;
        this.detailsWrapper.append(wrapper);
   }
}