class MenuCard {

    constructor(cardBtn, cardImg, cardName, costMain, cost, parentSelector){
        this.cardBtn=cardBtn;
        this.cardImg=cardImg;
        this.cardName=cardName;
        this.costMain=costMain;
        this.cost=cost;
        this.parent= document.querySelector(parentSelector);
    };

    render(){
        const elm = document.createElement('div');
        elm.innerHTML=`
            <div class="products-box-card" data-category=${this.cardBtn}>
                <button class="products-box-card__btn">${this.cardBtn}</button>
                <img class="products-box-card__img" src=${this.cardImg} alt="img-card.png">
                <span class="products-box-card__name">${this.cardName}</span>
                <div class="products-cost">
                    <div class="costs">
                        <span class="cost cost_main">${this.costMain}</span>
                        <span class="cost">${this.cost}</span>
                    </div>
                    <div class="star">
                        <img class="img-star_active" src="static/img/star.svg" alt="star">
                        <img class="img-star_active" src="static/img/star.svg" alt="star">
                        <img class="img-star_active" src="static/img/star.svg" alt="star">
                        <img class="img-star_active" src="static/img/star.svg" alt="star">
                        <img class="img-star_active" src="static/img/star.svg" alt="star">
                    </div>
                </div>
            </div>
        `;

        this.parent.append(elm);
    }
}

async function getResource(url) {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};


getResource('http://localhost:3000/products/')
    .then(data => {
        data.forEach(({cardBtn, cardImg, cardName, costMain, cost}) =>{
            new MenuCard(cardBtn, cardImg, cardName, costMain, cost, ".products-box").render();
    });
});


// new MenuCard(
//     "Vegatable",
//     "static/img/brocolli.png",
//     "Calabrese Broccoli",
//     "$ 25.00 USD",
//     "$ 21.00 USD",
//     ".products-box"
// ).render();
