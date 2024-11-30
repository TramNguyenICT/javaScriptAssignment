const u = document.getElementById('target');
const html =
    `<li>First item</li>
     <li>Second item</li>
     <li>Third item</li>`;
u.innerHTML = html;
u.setAttribute('class','my-item');