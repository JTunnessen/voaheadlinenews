'use strict';

let en = {
    card : {
        title: 'Voice of America Headline News',
        subtitle: 'International news headlines as reported by the VOA',
        cardContent: "Get the latest news at https://www.voanews.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/voalogos/voa_logo_512x512.png',
            smallImageUrl: 'https://s3.amazonaws.com/voalogos/voa_logo_108x108.png'
        }
    },
    url: 'https://www.voanews.com/mp3/voa/english/nnow/NNOW_HEADLINES.mp3',
    //startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'    
};

let de = { // TODO add german translation
    card : {
        title: 'Voice of America Headline News',
        subtitle: 'International news headlines as reported by the VOA',
        cardContent: "Get the latest news at https://www.voanews.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/voalogos/voa_logo_512x512.png',
            smallImageUrl: 'https://s3.amazonaws.com/voalogos/voa_logo_108x108.png'
        }
    },
    url: 'https://www.voanews.com/mp3/voa/english/nnow/NNOW_HEADLINES.mp3',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'        
} 

let globalAudioData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': en,
    'en-AU': en,
    'de-DE': de
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
