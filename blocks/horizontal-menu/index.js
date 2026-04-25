export default function(editor, categories) {
    editor.BlockManager.add('horizontal-menu', {
        label: 'Horizontal Menu',
        category: categories.ESSENTIAL,
        content: `
            <nav class="horizontal-nav-bar">
                <div class="nav-scroll-container">
                    <ul class="nav-links-list">
                        <li><a href="#section-brassart" class="nav-item">POURQUOI BRASSART</a></li>
                        <li><a href="#section-programmes" class="nav-item">PROGRAMMES</a></li>
                        <li><a href="#section-metiers" class="nav-item">MÉTIERS</a></li>
                        <li><a href="#section-insertion" class="nav-item">INSERTION PROFESSIONNELLE</a></li>
                        <li><a href="#section-reconnaissance" class="nav-item">RECONNAISSANCE</a></li>
                        <li><a href="#section-pedagogie" class="nav-item">PÉDAGOGIE</a></li>
                        <li><a href="#section-international" class="nav-item">INTERNATIONAL</a></li>
                        <li><a href="#section-evenements" class="nav-item">ÉVÉNEMENTS</a></li>
                        <li><a href="#section-campus" class="nav-item">CAMPUS</a></li>
                        <li><a href="#section-admission" class="nav-item">ADMISSION</a></li>
                        <li><a href="#section-faq" class="nav-item">FOIRE AUX QUESTIONS</a></li>
                    </ul>
                </div>
            </nav>
            <style>
                .horizontal-nav-bar {
                    background-color: #fff;
                    border-top: 4px solid #C61063;
                    border-bottom: 4px solid #C61063;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                    font-family: 'Inter', sans-serif;
                }
                .nav-scroll-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow-x: auto;
                    white-space: nowrap;
                    -webkit-overflow-scrolling: touch;
                    padding: 10px 0;
                }
                .nav-scroll-container::-webkit-scrollbar {
                    display: none;
                }
                .nav-links-list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0 20px;
                    gap: 25px;
                }
                .nav-item {
                    color: #333;
                    text-decoration: none;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    transition: color 0.2s;
                    display: block;
                }
                .nav-item:hover {
                    color: #C61063;
                }
                @media (max-width: 768px) {
                    .nav-links-list {
                        gap: 20px;
                    }
                    .nav-item {
                        font-size: 13px;
                    }
                }
            </style>
        `,
        attributes: { class: 'gjs-fonts gjs-f-b1' }
    });
}
