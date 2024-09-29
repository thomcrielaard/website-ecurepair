import type { Struct, Schema } from '@strapi/strapi';

export interface NieuwsberichtText extends Struct.ComponentSchema {
  collectionName: 'components_nieuwsbericht_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface NieuwsberichtAfbeelding extends Struct.ComponentSchema {
  collectionName: 'components_nieuwsbericht_afbeeldings';
  info: {
    displayName: 'afbeelding';
  };
  attributes: {
    afbeelding: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nieuwsbericht.text': NieuwsberichtText;
      'nieuwsbericht.afbeelding': NieuwsberichtAfbeelding;
    }
  }
}
