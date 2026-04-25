export default function(editor, categories) {
    editor.BlockManager.add('header-efap', {
        label: 'EFAP Header',
        category: categories.EFAP,
        content: `
            <header class="header-efap">
                <div class="header-container">
                    <img src="assets/efap-logo.png" alt="EFAP Logo" class="efap-logo-img">
                    <button class="btn-en-minimal">EN</button>
                </div>
            </header>
            <style>
                .header-efap {
                    background-color: #1a1a1a;
                    padding: 12px 0;
                    font-family: 'Inter', sans-serif;
                }
                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                }
                .efap-logo-img {
                    height: 22px;
                }
                .btn-en-minimal {
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    opacity: 0.8;
                }
                .btn-en-minimal:hover {
                    opacity: 1;
                }
            </style>
        `,
        attributes: { class: 'gjs-fonts gjs-f-b1' }
    });
}
