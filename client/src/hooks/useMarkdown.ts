import showdown from 'showdown'

const useMarkdown = md => {
    const converter = new showdown.Converter()
    const converted = converter.makeHtml(md)

    return converted
}

export default useMarkdown
