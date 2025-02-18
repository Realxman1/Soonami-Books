
document.addEventListener("DOMContentLoaded", function () {
    fetch('ebooks.json')
        .then(response => response.json())
        .then(ebooks => {
            const container = document.getElementById("ebooks-container");
            ebooks.forEach(ebook => {
                const ebookDiv = document.createElement("div");
                ebookDiv.innerHTML = `<h3>${ebook.title}</h3><a href="${ebook.paypal_link}">Buy Now</a>`;
                container.appendChild(ebookDiv);
            });
        });
});
