
# audio-mixer.js

Simple audio mixer using AudioContext api.

## Install


### Browser

Import minimified or full script:

    <script src="https://unpkg.com/audio-mixer.js@latest/umd/mixer.min.js"></script>
    
### NPM
    
Install module:

    npm i audio-mixer.js

Import it:

    const AudioMixer = require('audio-mixer.js')
## Usage
    const  audioMixer = new AudioMixer()
Add track:

    const source = await audioMixer.addAudio(stream)

Remove track:

    await audioMixer.deleteAudio(source)

Get mixed stream:

    const mixedStream = await audioMixer.getStream()
Stop mix:

	audioMixer.stop()
