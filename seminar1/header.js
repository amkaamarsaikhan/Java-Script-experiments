document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const style = document.createElement('style');
    style.textContent = `
        .site-header {
            position: fixed;
            top: 0;
            width: 100%;
            background: oklch(98.1% 0.003 247.9);
            border-bottom: 1px solid oklch(90% 0.01 250);
            padding: 16px 40px;
            display: flex;
            justify -content: center;
            align-items: center;
            z-index: 1000;
            
        }

        .navigation ul {
            width: 70%;
            display: flex;
            justify-content: space-around;
            list-style: none;
            gap: 30px;
            margin: 10px;
            padding: 0;
        }

        .navigation a { 
            text-decoration: none; 
            color: oklch(32.1% 0.043 250.7); 
            font-weight: 500; font-size: 16px; 
            transition: color 0.3s ease; 
            text-transform: uppercase; 
            letter-spacing: 1px; } 

        .navigation a:hover { 
            color: oklch(65.8% 0.147 248.8) }

        .theme-btn-header {
            border: none;
            padding: 8px 14px;
            border-radius: 10px;
            cursor: pointer;
            background: oklch(65.8% 0.147 248.8);
            color: white;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);

    const header = document.createElement('header');
    header.className = 'site-header';

    const nav = document.createElement('nav');
    nav.className = 'navigation';

    const ul = document.createElement('ul');

    ['Work 1', 'Work 2', 'Work 3', 'Work 4'].forEach((name, i) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `/work${i + 1}.html`;
        a.textContent = name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

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
});
