import state from "./state.js"
import { musicButtons } from "./elements.js"

const musics = {
    forestMusic: new Audio('./music/Floresta.wav'),
    rainMusic: new Audio('./music/Chuva.wav'),
    coffeeShopMusic: new Audio('./music/Cafeteria.wav'),
    fireplaceMusic: new Audio('./music/Lareira.wav')
}

function toggleSound(music, button) {
    button.classList.toggle('music-on')

    if (state.isMute) {
        music.play()
    } else {
        music.pause()
    }

    state.isMute = !state.isMute
    music.loop = true
}

export function forestSound() {
    toggleSound(musics.forestMusic, musicButtons.forestButton)
}

export function rainSound() {
    toggleSound(musics.rainMusic, musicButtons.rainButton)
}

export function fireplaceSound() {
    toggleSound(musics.fireplaceMusic, musicButtons.fireplaceButton)
}

export function coffeeShopSound() {
    toggleSound(musics.coffeeShopMusic, musicButtons.coffeeButton)
}
