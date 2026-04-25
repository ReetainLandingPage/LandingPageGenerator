export default function(editor, categories) {
    editor.BlockManager.add('footer-brassart', {
        label: 'BRASSART Footer',
        category: categories.BRASSART,
        content: `
            <footer class="footer-brassart">
                <div class="footer-container">
                    <div class="footer-top-row">
                        <div class="footer-brand">
                            <img src="assets/brassart-logo.png" alt="BRASSART Logo" class="footer-logo">
                            <div class="footer-tagline">L'école des métiers<br>de la création</div>
                        </div>
                        <div class="footer-social">
                            <a href="#" class="social-icon pink"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon pink"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon pink"><i class="fab fa-x-twitter"></i></a>
                            <a href="#" class="social-icon pink"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="social-icon pink"><i class="fab fa-youtube"></i></a>
                            <a href="#" class="social-icon pink"><i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div class="footer-bottom-row">
                        <p class="legal-text">
                            BRASSART collecte vos données afin de vous adresser de la documentation. Si vous le souhaitez, nous collectons également vos données afin de vous adresser des emails commerciaux. Pour en savoir plus sur le traitement de vos données et pour exercer vos droits, nous vous invitons à consulter la <a href="#">Politique de confidentialité</a>.
                        </p>
                    </div>
                </div>
            </footer>
            <style>
                .footer-brassart {
                    background-color: #fff;
                    color: #333;
                    padding: 40px 0;
                    font-family: 'Inter', sans-serif;
                    border-top: 1px solid #eee;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .footer-top-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .footer-brand {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .footer-logo {
                    height: 30px;
                }
                .footer-tagline {
                    font-size: 10px;
                    line-height: 1.2;
                    color: #C61063;
                    font-weight: 600;
                    border-left: 1px solid #eee;
                    padding-left: 15px;
                }
                .footer-social {
                    display: flex;
                    gap: 10px;
                }
                .social-icon.pink {
                    width: 32px;
                    height: 32px;
                    background: #fdf2f7;
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #C61063;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.2s;
                }
                .social-icon.pink:hover {
                    background: #C61063;
                    color: #fff;
                }
                .footer-bottom-row {
                    border-top: 1px solid #f5f5f5;
                    padding-top: 20px;
                }
                .legal-text {
                    font-size: 9px;
                    line-height: 1.6;
                    color: #888;
                    margin: 0;
                }
                .legal-text a {
                    color: #C61063;
                    text-decoration: underline;
                }
                @media (max-width: 768px) {
                    .footer-top-row {
                        flex-direction: column;
                        gap: 20px;
                        align-items: center;
                        text-align: center;
                    }
                    .footer-brand {
                        flex-direction: column;
                    }
                    .footer-tagline {
                        border-left: none;
                        padding-left: 0;
                    }
                }
            </style>
        `,
        attributes: { class: 'gjs-fonts gjs-f-b3' }
    });
}
