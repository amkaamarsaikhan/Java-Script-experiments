# Java-Script-experiments
JavaScript DOM (Document Object Model) гэдэг нь вэб хөтөч (browser) таны бичсэн HTML кодыг хүлээж аваад, түүнийг програмчлалын хэлээр өөрчилж, удирдаж болохуйц "Мод" (Tree) хэлбэрийн бүтэц рүү хөрвүүлснийг хэлнэ.

Энгийнээр хэлбэл, DOM бол HTML болон JavaScript-ийг холбогч гүүр юм.

1. DOM хэрхэн ажилладаг вэ? (Модны бүтэц)

Вэб хуудсыг ачаалах үед хөтөч нь HTML-ийг шаталсан бүтэцтэй объект болгодог. Үүнийг DOM Tree гэж нэрлэдэг. HTML-ийн таг болгон энэ модны нэг "зангилаа" (Node) буюу объект болно.

Document: Хамгийн дээд талын үндэс (Root).

Elements: <div>, <h1>, <p> зэрэг тагууд.

Attributes: class, id, src гэх мэт шинж чанарууд.

Text: Таг доторх бичвэрүүд.

2. DOM-той ажиллах үндсэн аргууд

JavaScript ашиглан DOM-оос элемент олж авах, өөрчлөх үндсэн үйлдлүүдийг доор харуулав:

А. Элементийг сонгох (Selecting)

JavaScript
const title = document.getElementById('main-title'); // ID-аар нь
const buttons = document.getElementsByClassName('btn'); // Class-аар нь
const para = document.querySelector('p'); // CSS selector-оор (эхнийхийг)
const allParas = document.querySelectorAll('p'); // Бүх параграфыг
Б. Агуулгыг өөрчлөх (Manipulating)

JavaScript
title.textContent = "Сайн байна уу!"; // Текст солих
title.style.color = "blue"; // CSS загвар өөрчлөх
title.classList.add('active'); // Class нэмэх
В. Шинэ элемент үүсгэх

JavaScript
const newDiv = document.createElement('div'); // Шинэ div үүсгэх
newDiv.innerHTML = "<span>Шинэ текст</span>"; // Дотор нь HTML хийх
document.body.appendChild(newDiv); // Body дотор нэмж байрлуулах
3. DOM Events (Үйл явдал)

Хэрэглэгч вэб хуудас дээр үйлдэл хийх үед (товч дарах, хулганаа хөдөлгөх) DOM үүнийг мэдэрдэг. Үүнийг Event Listener ашиглан удирдана.

JavaScript
const btn = document.querySelector('#myButton');

btn.addEventListener('click', () => {
    alert('Товч дарагдлаа!');
});
4. Яагаад DOM чухал вэ?

Хэрэв DOM байхгүй байсан бол:

Вэб хуудас зөвхөн "статик" (хөдөлгөөнгүй) байх байсан.

Товчлуур дарахад өнгө солигдох, мэдээлэл шинэчлэгдэх боломжгүй.

Орчин үеийн Facebook, Instagram шиг хуудсыг дахин ачаалахгүйгээр (Refresh) мэдээлэл солигддог системүүд ажиллахгүй.
