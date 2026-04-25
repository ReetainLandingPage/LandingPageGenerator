export default function(editor, categories) {
    editor.BlockManager.add('footer-efap', {
        label: 'EFAP Footer',
        category: categories.EFAP,
        content: `
            <footer class="footer-efap">
                <div class="footer-container">
                    <div class="footer-left">
                        <div class="footer-brand">
                            <img src="assets/efap-logo.png" alt="EFAP Logo" class="footer-logo">
                            <div class="footer-tagline">L'école des nouveaux métiers<br>de la communication</div>
                        </div>
                        <div class="footer-social">
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="legal-text">
                            L'EFAP collecte vos données afin de vous adresser de la documentation. Si vous le souhaitez, nous collectons également vos données afin de vous adresser des emails commerciaux. Pour en savoir plus sur le traitement de vos données et pour exercer vos droits, nous vous invitons à consulter la <a href="#">Politique de confidentialité</a>.
                        </p>
                    </div>
                </div>
            </footer>
            <style>
                .footer-efap {
                    background-color: #1a1a1a;
                    color: #fff;
                    padding: 30px 0;
                    font-family: 'Inter', sans-serif;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding: 0 20px;
                    gap: 30px;
                }
                .footer-brand {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .footer-logo {
                    height: 25px;
                }
                .footer-tagline {
                    font-size: 10px;
                    line-height: 1.2;
                    border-left: 1px solid #444;
                    padding-left: 15px;
                    margin: 0;
                    color: #fff;
                    font-weight: 500;
                }
                .footer-social {
                    display: flex;
                    gap: 8px;
                }
                .social-icon {
                    width: 24px;
                    height: 24px;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    text-decoration: none;
                    font-size: 11px;
                    transition: all 0.2s;
                }
                .social-icon:hover {
                    background: #fff;
                    color: #000;
                }
                .footer-right {
                    max-width: 550px;
                }
                .legal-text {
                    font-size: 9px;
                    line-height: 1.5;
                    color: #ccc;
                    margin: 0;
                    text-align: right;
                }
                .legal-text a {
                    color: #fff;
                    text-decoration: underline;
                }
                @media (max-width: 768px) {
                    .footer-container {
                        flex-direction: column;
                        align-items: flex-start;
                        text-align: left;
                    }
                    .footer-brand {
                        flex-direction: row;
                    }
                    .footer-right {
                        max-width: 100%;
                    }
                    .legal-text {
                        text-align: left;
                    }
                }
            </style>
        `,
        attributes: { class: 'gjs-fonts gjs-f-b3' }
    });
}
