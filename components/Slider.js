const slides = [
    {
        id: 1,
        image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/7f5790b2-7eed-49c6-819f-61141de2ca06/7f5790b2-7eed-49c6-819f-61141de2ca06.webp?w=1920',
        link: 'https://gjirafa50.com/iphone15?pagenumber=1&orderby=10&hls=false&is=false'
    },
    {
        id: 2,
        image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/df74e894-33de-4784-9b91-a22cce76a807/df74e894-33de-4784-9b91-a22cce76a807.webp?w=1920',
        link: 'https://gjirafa50.com/apple-watch-ultra-2'
    },
    {
        id: 3,
        image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/c7619273-66eb-41e5-b65e-5c34d15de5a4/c7619273-66eb-41e5-b65e-5c34d15de5a4.webp?w=1920',
        link: 'https://gjirafa50.com/apple-watch-series-9?pagenumber=1&orderby=10&hls=false&is=false'
    },
    {
        id: 4,
        image: 'https://hhstsyoejx.gjirafa.net/gjirafa50core/images/89e9e6a5-52e9-43f5-8ab3-28dee1312993/89e9e6a5-52e9-43f5-8ab3-28dee1312993.webp?w=1920',
        link: 'https://gjirafa50.com/apple-airpods-pro-2-me-magsafe-case-usb-c?pagenumber=1&orderby=10&hls=false&is=false'
    },
]

function composeSlide(slide) {
    return `
        <a href="${slide.link}" target="_blank">
            <div class="carousel-item ${(slide.id == 1) ? 'active' : ''}">
                <img src="${slide.image}" class="d-block w-100" alt="Slide ${slide.id}">
            </div>
        </a>
    `
}

function composeSlides(slides) {
    let html = ''
    for(let slide of slides) {
        html += composeSlide(slide)
    }
    return html
}

export function initSlider(div) {
    div.innerHTML = `
    <div id="slider" class="carousel carousel-dark slide">
    <div class="carousel-inner">
        ${composeSlides(slides)}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    `
}