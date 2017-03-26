<template>
    <div class="morse-translator-container">
        <div>
            <input type="text" v-model="value"/>
        </div>
        <div>
            <custom-button 
                :on-click="handleTranslate"
                btn-text="Translate">
            </custom-button>
            <custom-button 
                :on-click="handlePlay"
                btn-text="Play"
                classType="success"
            >
            </custom-button>
            <custom-button
                :on-click="stop"
                btn-text="Stop"
                classType="error"
            >
            </custom-button>
        </div>
        <div class="translated-text">
            <span></span>
        </div>
    </div>
</template>

<script>
    import { MorseCode, LETTER_SPACE, BASE_TIME, MORSE_TIME, PAUSE_LETTER, PAUSE_WORD } from '@/constants/morsecode';
    export default {
        name: 'morseTranslator',
        data: function () {
            return {
                value: '',
                audioContext: null,
                oscilliator: null,
                playAudio: false
            };
        },
        created: function () {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        },
        methods: {
            // Plays a letter that consists of one or more marks.
            playLetter: function (letters, index) {
                // Return from function if we should no longer play audio.
                if (!this.playAudio) { return; }
                if (index >= letters.length) { return; }
                if (letters.charAt(index) === LETTER_SPACE) {
                    index++;
                    playLetter(letters, index);
                }
                else {
                    let letter = MorseCode.ITU[letters.charAt(index)].slice();
                    console.log('letter: ' + letters.charAt(index));
                    this.playMark(letter, () => {
                        index++;
                        this.playLetter(letters, index);
                    });
                }
            },
            playMark: function (marks, callback) {
                if (!this.playAudio) { return; }
                let duration = MORSE_TIME[marks.shift()];
                // Create sound source.
                this.oscillator = this.audioContext.createOscillator();
                // Connect sound to output.
                this.oscillator.connect(this.audioContext.destination);
                this.oscillator.start(0);

                window.setTimeout(() => {
                    this.oscillator.stop(0);
                    if (marks !== undefined && marks.length > 0) {
                        window.setTimeout(() => {
                            this.playMark(marks, callback);
                        }, PAUSE_LETTER);
                    }
                    else {
                        window.setTimeout(() => {
                            callback();
                        }, PAUSE_WORD);
                    }
                }, duration);
            },
            stop: function () {
                this.playAudio = false;
                this.oscillator.stop(0);
            },
            handlePlay: function (e) {
                e.preventDefault();
                this.playAudio = true;
                let text = this.value.toLowerCase();
                this.playLetter(text, 0);
            },
            handleTranslate: function (e) {
                e.prevenetDefault();
            }
        }
    }
</script>

<style scoped>
    input {
        width: 100%;
        height: 30px;
        margin: 0 auto 20px;
        font-size: 16px;
        border: solid 1px #cecece;
    }
    .morse-translator-container {

    }
</style>
