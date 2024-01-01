import Reveal from 'reveal.js';
import ZoomPlugin from 'reveal.js/plugin/zoom/zoom';

export class RevealService {
    public start(): void {
        const deck = new Reveal();

        deck.initialize({
            controlsLayout: 'edges',
            slideNumber: (slide): [string] => {
                const horizontalOffset = slide && slide.dataset.visibility === 'uncounted' ? 0 : 1;

                const currentSlideNumber = deck.getSlidePastCount(slide) + horizontalOffset;
                const totalSlidesCount = deck.getTotalSlides();

                const tokens = ['Page', currentSlideNumber, 'of', totalSlidesCount];
                return [tokens.join(' ')];
            },
            hashOneBasedIndex: true,
            hash: true,
            display: 'grid',
            hideCursorTime: 1000,
            plugins: [ZoomPlugin],
            margin: 0.1,
        });
    }
}
