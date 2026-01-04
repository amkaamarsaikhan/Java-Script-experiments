# 🌐 JavaScript DOM (Document Object Model) Тайлал

Энэхүү баримт бичиг нь JavaScript-ийн амин сүнс болох **DOM**-ийн тухай ойлголтыг өгөхөд зориулагдсан.

---

## 📌 1. DOM гэж юу вэ?

**DOM** нь вэб хөтөч HTML кодыг уншаад програмчлалын хэлээр (JavaScript) удирдаж болохуйц болгон хөрвүүлсэн **"Мод" (Tree)** хэлбэрийн бүтэц юм. Энэ нь HTML болон JavaScript-ийг холбох гүүр болдог.



### 🌳 Модны бүтэц (Node-ийн төрлүүд)
* **Document**: Хамгийн дээд талын үндэс (Root).
* **Elements**: `<div>`, `<h1>`, `<p>` зэрэг HTML тагууд.
* **Attributes**: `class`, `id`, `src` зэрэг шинж чанарууд.
* **Text**: Таг доторх бодит бичвэрүүд.

---

## 🛠 2. DOM-той ажиллах үндсэн аргууд

### А. Элементийг сонгох (Selecting)
Элементийг өөрчлөхийн тулд эхлээд түүнийг JavaScript дээр "барьж" авах хэрэгтэй.

| Арга | Тайлбар |
| :--- | :--- |
| `getElementById()` | ID-аар нь ганц элемент сонгох |
| `querySelector()` | CSS selector ашиглан хамгийн эхний элементийг сонгох |
| `querySelectorAll()` | Бүх ижил төрлийн элементийг жагсаалтаар сонгох |

```javascript
const title = document.getElementById('main-title');
const para = document.querySelector('.description');

Агуулга болон стиль өөрчлөх (Manipulating)
title.textContent = "Сайн байна уу!"; // Текст солих
title.style.color = "blue";           // Өнгө солих
title.classList.add('active');        // Класс нэмэх

Шинэ элемент үүсгэх
const newDiv = document.createElement('div');
newDiv.innerHTML = "<b>Шинэ текст</b>";
document.body.appendChild(newDiv);

Хэрэглэгчийн үйлдлийг (товч дарах, хулгана гүйлгэх) мэдэрч хариу үзүүлэх.

const btn = document.querySelector('#myButton');
btn.addEventListener('click', () => {
    alert('Товч дарагдлаа!');
});
