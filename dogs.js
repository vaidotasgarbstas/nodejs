// fetch()
const randomImageUrl = "https://dog.ceo/api/breeds/image/random";
const rezultatas = document.querySelector("#rezultatas");

const getImage = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            if (response.status === 'success')
                rezultatas.innerHTML = `<img src="${response.message}" alt="">`
            else
                rezultatas.textContent = 'Nepavyko rasti nuotraukos pagal tokia veisle';
        })
}
getImage(randomImageUrl);

document.querySelector(".findBreed").addEventListener("click", () => {
    let breed = document.querySelector('input[name="dog-breed"]').value
    if (breed === '') {
        rezultatas.textContent = 'Neivesta jokia veisle'
        return false
    }
    let parsedBred = breed.toLowerCase()
    let breedUrl = `https://dog.ceo/api/breed/${parsedBred}/images/random`
    getImage(breedUrl)
})