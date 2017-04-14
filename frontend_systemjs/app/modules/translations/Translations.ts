import {OpaqueToken} from '@angular/core';

import {LANG_EN, EN_TRANSLATIONS} from './lang-en';
import {LANG_DE, DE_TRANSLATIONS} from './lang-de';


export const TRANSLATIONS = new OpaqueToken('translations');

const DICTIONARY = {
    [LANG_EN]: EN_TRANSLATIONS,
    [LANG_DE]: DE_TRANSLATIONS

};

export const TRANSLATION_PROVIDERS = [
    {provide: TRANSLATIONS, useValue: DICTIONARY},
];



