import { useState } from "react"

const ParaGenerator = () => {

    const [wordsLength, setWordsLength] = useState(0)
    const [paragraph, setParagraph] = useState('')
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum']
    const [loading, setLoading] = useState(false)

    const generateParagraph = () => {
        setLoading(true)
        for (let i = 0; i < wordsLength; i++) {
            let randomIndex = Math.floor(Math.random() * words.length)
            setParagraph((prev) => prev + ' ' + words[randomIndex])
        }
    }

    const handleChange = (e) => {
        setParagraph('')
        setWordsLength(e.target.value)
    }


  return (
    <div className="paraGen">
        <div style={{display:'flex', flexDirection: 'row', width: '100%'}}>
        <input type="number" onChange={handleChange} />
        <button onClick={generateParagraph}>Generate Paragraph</button>
        </div>
        {loading ? <p>{paragraph}</p> : null}
    </div>
  )
}

export default ParaGenerator