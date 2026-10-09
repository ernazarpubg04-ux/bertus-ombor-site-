// Sayt ma'lumotlarini shu fayldan o'zgartiring.
// Do'kon yoki Instagram akkaunti qo'shish uchun ro'yxatga yangi obyekt kiriting.

const stores = [
  {
    name: "Yashnobod",
    address: "Yashnobod tumani, Maxtimquli ko'chasi, 119",
    map: "https://maps.app.goo.gl/X1S63PAKDhmJKV1G7",
    icon: "⌖"
  },
  {
    name: "Yunusobod",
    address: "Yunusobod, Katta halqa yo'li",
    map: "https://maps.app.goo.gl/2SeuTnG5rtWZm8R1A",
    icon: "⌖"
  },
  {
    name: "Erkin",
    address: "Ko'kcha",
    map: "https://maps.app.goo.gl/c3nWjroqhk96kcZC7",
    icon: "⌖"
  },
  {
    name: "Ombor",
    address: "Manzil hozircha kiritilmagan",
    map: "",
    icon: "▦"
  }
];

const instagramAccounts = [
  { name: "Bertus Ombor Yashnobod", handle: "@bertus_ombor_yashnobod", url: "https://www.instagram.com/bertus_ombor_yashnobod/" },
  { name: "Bertus Ombor Yunusobod", handle: "@bertus_ombor_yunusobod", url: "https://www.instagram.com/bertus_ombor_yunusobod/" },
  { name: "Bertus Ombor", handle: "@bertus.ombor", url: "https://www.instagram.com/bertus.ombor/" },
  { name: "Sa1dazimov", handle: "@___sa1dazimov", url: "https://www.instagram.com/___sa1dazimov/" }
];

const storeGrid = document.getElementById("storeGrid");
storeGrid.innerHTML = stores.map((store, index) => `
  <article class="store-card">
    <span class="store-number">FILIAL / 0${index + 1}</span>
    <div class="store-icon">${store.icon}</div>
    <h3>${store.name}</h3>
    <p>${store.address}</p>
    ${store.map
      ? `<a class="map-link" href="${store.map}" target="_blank" rel="noopener noreferrer">Xaritada ko'rish <span>↗</span></a>`
      : `<span class="map-link disabled">Lokatsiya tez orada <span>—</span></span>`}
  </article>
`).join("");

const instagramList = document.getElementById("instagramList");
instagramList.innerHTML = instagramAccounts.map(account => `
  <a class="instagram-item" href="${account.url}" target="_blank" rel="noopener noreferrer">
    <span class="insta-icon">◎</span>
    <span class="insta-text"><strong>${account.name}</strong><small>${account.handle}</small></span>
    <span class="insta-arrow">↗</span>
  </a>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
