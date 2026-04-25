import headerEfap from './header-efap/index.js';
import footerEfap from './footer-efap/index.js';
import headerBrassart from './header-brassart/index.js';
import footerBrassart from './footer-brassart/index.js';
import hero from './hero/index.js';
import twoColumn from './two-column/index.js';
import richText from './rich-text/index.js';
import ctaButton from './cta-button/index.js';
import imageCaption from './image-caption/index.js';
import spacer from './spacer/index.js';
import horizontalMenu from './horizontal-menu/index.js';

export function registerBlocks(editor) {
    const bm = editor.BlockManager;

    // Brand Groups
    const categories = {
        EFAP: 'EFAP Components',
        BRASSART: 'BRASSART Components',
        ESSENTIAL: 'Essential Blocks'
    };

    // Load all blocks
    [
        headerEfap, footerEfap, 
        headerBrassart, footerBrassart,
        hero, twoColumn, richText, ctaButton, imageCaption, spacer,
        horizontalMenu
    ].forEach(blockInit => {
        blockInit(editor, categories);
    });
}
