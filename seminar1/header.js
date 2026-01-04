document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const style = document.createElement('style');
    style.textContent = `
.site-header {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
}

.navigation ul {
    display: flex;
    gap: 50px;
    list-style: none;
    margin-left: 250px;
    padding: 0;
}

.navigation a {
    text-decoration: none;
    color: var(--main-text);
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.navigation a:hover {
    color: var(--accent-color);
}

.theme-btn-header {
    margin-right: 40px;
    background: var(--accent-color);
    color: var(--main-bg);
    border: 1px solid var(--accent-color);
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 8px 15px;
    box-shadow: 0 0 15px var(--accent-color);
}
    `;
    document.head.appendChild(style);

    // --- HEADER HTML ---
    const header = document.createElement('header');
    header.className = 'site-header';

    const nav = document.createElement('nav');
    nav.className = 'navigation';

    const ul = document.createElement('ul');

    ['Work 1', 'Work 2', 'Work 3', 'Work 4'].forEach((name, i) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `work${i + 1}.html`;
        a.textContent = name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    // --- THEME BUTTON ---
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-btn-header';
    themeBtn.textContent = '🌙 Dark';

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeBtn.textContent = body.classList.contains('dark-theme')
            ? '🌕 Light'
            : '🌙 Dark';
    });

    header.appendChild(nav);
    header.appendChild(themeBtn);

    body.prepend(header);
    body.style.paddingTop = '120px';
});
