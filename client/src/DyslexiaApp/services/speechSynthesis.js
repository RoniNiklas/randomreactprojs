const getVoices = async () => {
    const voices = await speechSynthesis.getVoices()
    console.log(voices)
    return voices
}

export default { getVoices }
