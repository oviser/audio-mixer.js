/*
 *  Simple Audio Mixer
 *       Oviser
 */

class AudioMixer {
  constructor() {
    this.audioSources = []
    this.audioContext = new AudioContext()
    this.audioDestination = this.audioContext.createMediaStreamDestination()
  }

  async addAudio(stream) {
    const tracks = stream.getAudioTracks()
    let track = null
    if(tracks[0] === undefined){
      return
    } else {
      track = tracks[0]
    }

    const audioSource = this.audioContext.createMediaStreamSource(stream)
    this.audioSources.push(audioSource)
    audioSource.connect(this.audioDestination)
    return audioSource
  }

  deleteAudio(audioSource) {
    audioSource.disconnect()
    const index = this.audioSources.indexOf(audioSource)
    this.audioSources.splice(index, 1)
  }

  getStream() {
    return this.audioDestination.stream
  }

  stop() {
    this.audioContext.stop()
  }
}
