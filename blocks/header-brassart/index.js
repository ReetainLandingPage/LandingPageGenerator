export default function(editor, categories) {
    editor.BlockManager.add('header-brassart', {
        label: 'BRASSART Header',
        category: categories.BRASSART,
        content: `
            <header class="header-brassart">
                <div class="header-container">
                    <div class="logo-tagline">
                        <img src="assets/brassart-logo.png" alt="BRASSART Logo" class="brassart-logo-img">
                        <div class="header-tagline-text">L'école des métiers<br>de la création</div>
                    </div>
                </div>
            </header>
            <style>
                .header-brassart {
                    background-color: #fff;
                    padding: 12px 0;
                    border-bottom: 1px solid #eee;
                    font-family: 'Inter', sans-serif;
                }
                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                }
                .logo-tagline {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .brassart-logo-img {
                    height: 25px;
                }
                .header-tagline-text {
                    font-size: 10px;
                    line-height: 1.2;
                    color: #C61063;
                    font-weight: 600;
                    border-left: 1px solid #eee;
                    padding-left: 15px;
                }
            </style>
        `,
        attributes: { class: 'gjs-fonts gjs-f-b1' }
    });
}
