import Images from '../../images';
import sharedStyles from '../../sharedStyles';

export class SpriteSheets {
    static envelope = {
        source: Images.envelopeSheet,
        columns: 5,
        rows: 3,
        viewStyle: [sharedStyles.layer],
        imageStyle: [sharedStyles.image],
    };

    static shredder = {
        source: Images.envelopeSheet,
        columns: 5,
        rows: 3,
        viewStyle: [sharedStyles.layer],
        imageStyle: [sharedStyles.image],
    };
}
