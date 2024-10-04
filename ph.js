const dataLoad = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=> extraData(data.categories))
    .catch((error)=> console.log(error))
    
}

const extraData = (categories)=>{
    const catgoryContainer = document.getElementById('catagory-container');

    for(const item of categories) {
        const button = document.createElement('button');
        button.classList = "btn"
        button.innerText = item.category

        catgoryContainer.append(button)

        
    }
    
}
dataLoad()

const loadVideo = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => loadVideoAgain(data.videos))
    .catch((error)=> console.log(error))
}

const loadVideoAgain = (videos) =>{
    const videoContainer = document.getElementById('video-container')
    console.log(videoContainer)
    for(const video of videos){
        console.log(video)
        
        const card = document.createElement('div');
        card.classList ="card card-compact bg-base-100 ";
        card.innerHTML =`
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
    }
    videoContainer.append(card)

}
loadVideo()

